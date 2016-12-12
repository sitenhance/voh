var nodemailer = require('nodemailer');
var _ = require('lodash');

module.exports = {
    sendMail: function (userInfo) {
        // General Information

        var attachments = [];

        _.filter(userInfo.photos, function (obj) {
            var filename = obj.filename + '.' + obj.originalname.split('.')[1];
            var filePath = obj.destination + obj.filename;
            var attachment = {
                filename: filename,
                path: filePath
            };
            attachments.push(attachment);
        });

        var genInfo = '<h1>General Info</h1><br>';

        if (typeof userInfo.generalInfo.first_name !== 'undefined') {
            genInfo += '<p>First Name: ' + userInfo.generalInfo.first_name + '</p><br>';
        }

        if (typeof userInfo.generalInfo.last_name !== 'undefined') {
            genInfo += '<p>Last Name: ' + userInfo.generalInfo.last_name + '</p><br>';
        }

        if (typeof userInfo.generalInfo.phone_number !== 'undefined') {
            genInfo += '<p>Phone Number: ' + userInfo.generalInfo.phone_number + '</p><br>';
        }

        if (typeof userInfo.generalInfo.email !== 'undefined') {
            genInfo += '<p>Email: ' + userInfo.generalInfo.email + '</p><br>';
        }

        if (typeof userInfo.generalInfo.bio !== 'undefined') {
            genInfo += '<p>Bio: ' + userInfo.generalInfo.bio + '</p><br>';
        }

        // Salon Information

        var salonInfo = '<h1>Salon Info</h1><br>';

        if (typeof userInfo.salonInfo.salon_address1 !== 'undefined') {
            salonInfo += '<p>Salon Address: ' + userInfo.salonInfo.salon_address1 + '</p><br>';
        }

        if (typeof userInfo.salonInfo.salon_address2 !== 'undefined') {
            salonInfo += '<p>Salon Address 2: ' + userInfo.salonInfo.salon_address2 + '</p><br>';
        }

        if (typeof userInfo.salonInfo.city !== 'undefined') {
            salonInfo += '<p>City: ' + userInfo.salonInfo.city + '</p><br>';
        }

        if (typeof userInfo.salonInfo.state !== 'undefined') {
            salonInfo += '<p>State: ' + userInfo.salonInfo.state + '</p><br>';
        }

        if (typeof userInfo.salonInfo.zipcode !== 'undefined') {
            salonInfo += '<p>Zip Code: ' + userInfo.salonInfo.zipcode + '</p><br>';
        }

        // Stylist Specialties

        var specialtyArray = _.keys(userInfo.specialize);

        var stylistSpecialties = 'Specialties: ';

        _.filter(specialtyArray, function (specialty) {
            stylistSpecialties += specialty + ', ';
        });

        var specialtiesHTML = '<p>' + stylistSpecialties + '</p><br>';

        // Stylists Preferred Booking Method

        var bookingMethod = '<p>Preferred Booking Method: ' + userInfo.bookingMethod + '</p><br>';

        var HTMLEmailBody = genInfo + salonInfo + specialtiesHTML + bookingMethod;

        if (typeof userInfo.socialMedia.facebook !== 'undefined') {
            var facebookUrl = userInfo.socialMedia.facebook;
            HTMLEmailBody += '<p>Facebook: ' + facebookUrl + '</p><br>';
        }

        if (typeof userInfo.socialMedia.twitter !== 'undefined') {
            var twitterUrl = userInfo.socialMedia.twitter;
            HTMLEmailBody += '<p>Twitter: ' + twitterUrl + '</p><br>';
        }

        if (typeof userInfo.socialMedia.instagram !== 'undefined') {
            var instagramUrl = userInfo.socialMedia.instagram;
            HTMLEmailBody += '<p>Instagram: ' + instagramUrl + '</p><br>'
        }

        if (typeof userInfo.socialMedia.pinterest !== 'undefined') {
            var pinterestUrl = userInfo.socialMedia.pinterest;
            HTMLEmailBody += '<p>Pinterest: ' + pinterestUrl + '</p>';
        }

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'sitenhancetest@gmail.com',
                pass: 'Sitenhance1'
            }
        });

        var mailOptions = {
            from: userInfo.generalInfo.first_name + ' ' + userInfo.generalInfo.last_name + '<' + userInfo.generalInfo.email + '>',
            to: '"Alan Pham" <sitenhancetest@gmail.com>',
            subject: "Featured Stylist Info",
            html: HTMLEmailBody,
            attachments: attachments
        };

        transporter.sendMail(mailOptions, function (error, info) {

            if (error) {
                console.log(error);
            } else {
                console.log('Message sent: ' + info.response);

            }

        });
    },
    sendUserEmail: function(userInfo, host) {
        console.log('send email to user');
        var link = 'http://' + host + '/verify?id=' + userInfo.rand;

        console.log(userInfo.email);

        var mailOptions = {
            to: userInfo.email,
            subject: 'Voice Of Hair Email Confirmation',
            html: '<p>Hello,<br> Please click on the link to verify your email.<br><a href=' + link + '>Click here to verify</a>'
        };

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'sitenhancetest@gmail.com',
                pass: 'Sitenhance1'
            }
        });

        transporter.sendMail(mailOptions, function(error, info) {
            if(error) {
                console.log(error);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });

    }
};