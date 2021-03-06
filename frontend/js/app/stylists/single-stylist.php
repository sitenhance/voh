<!-- Stylist Header -->
<section class="section" id="top-header">
    <div class="container">
        <div class="columns">
            <div class="column is-12 has-text-centered">
                <div id="top-header">
                    <h1>{{stylistName}}</h1>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section" id="stylist-section">
    <div class="container">
        <div class="columns">
            <div class="column stylists-top-box">
                <div class="specialty-box">
                    <div class="specialty-container">
                        <div class="specialty-header">
                            <div class="specialty-icon">
                                <i class="fa fa-graduation-cap"></i>
                            </div>
                            <div class="specialty-title">
                                <h1>Specialty</h1>
                            </div>
                        </div>
                        <!-- End of Specialty Header -->
                        <div class="specialty-skills">
                            <ul>
                                <li class="specialty-skill" ng-repeat="skill in skills">- {{skill}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End of Specialty Box -->
            </div>
        </div>
        <div class="columns">
            <div class="column stylists-top-box">
                <div class="stylist-bio-box">
                    <div class="stylist-bio-container">
                        <div class="stylist-bio-header has-text-centered">
                            <h1>Bio</h1>
                        </div>
                        <!-- End Of Stylist Bio Header -->
                        <div class="stylist-bio-content content" ng-bind-html="bio">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Image Gallery -->
<section class="section" id="stylist-gallery-section">
    <div class="container">
        <div class="columns">
            <div class="column is-10 is-offset-1">
                <div class="fotorama" data-nav='thumbs' data-arrows="true" data-autoplay="false" data-width="100%" data-maxheight="500">
                    <img ng-src="{{image.gallery_images.url}}" data-caption="{{image.gallery_images.caption}}" alt="" ng-repeat="image in stylistImages">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Info -->
<section class="section" id="stylist-contact-section" ng-show="registered">
    <div class="container">
        <div class="columns">
            <div class="column is-two-thirds">
                <div class="stylist-contact-box">
                    <div class="stylist-contact-header">
                        <div class="stylist-contact-icon">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="stylist-contact-title">
                            <h1>Contact</h1>
                        </div>
                    </div>
                    <!-- End of Stylist Contact Header -->
                    <div class="stylist-phone">
                        <p class="contact-box-title">
                            Phone</p>
                        <p>{{stylist.phone}}</p>
                    </div>
                    <div class="stylist-email">
                        <p class="contact-box-title">
                            Email</p>
                        <p>{{stylist.email}}</p>
                    </div>
                    <div class="stylist-website">
                        <p class="contact-box-title">
                            Website</p>
                        <a ng-href="#">{{stylist.website}}</a>
                    </div>
                </div>
                <!-- End of Stylist Contact Box -->
            </div>
            <div class="column">
                <div class="stylist-request-info">
                    <button class="button action-btn is-large">Request Info</button>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section" id="social-salon-info-section" ng-show="registered">
    <div class="container">
        <div class="columns">
            <div class="column is-half">
                <div class="social-salon-address">
                    <div class="stylist-social-icons">
                        <a href="#" class="social-icon"><img src="images/insta-icon.png" alt=""></a>
                        <a href="#" class="social-icon"><img src="images/pinterest-icon.png" alt=""></a>
                        <a href="#" class="social-icon"><img src="images/facebook-icon.png" alt=""></a>
                        <a href="#" class="social-icon"><img src="images/twitter-icon.png" alt=""></a>
                        <a href="#" class="social-icon"><img src="images/g-plus-icon.png" alt=""></a>
                    </div>
                    <div class="stylist-salon-address">
                        <div class="salon-name">
                            <p>Beautiful Salon</p>
                        </div>
                        <div class="salon-address">
                            <p>{{city}}, {{state}} 77777</p>
                        </div>
                    </div>
                </div>
                <!-- End Of Social Salon Address -->
            </div>
            <div class="column is-half">
                <div class="google-map">
                    <p>Google Map Code Goes here</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="non-registered-user-message-section" ng-hide="registered">
    <div class="container">
        <div class="columns">
            <div class="column is-12">
                <div class="sign-up-message-box">
                    <p class="has-text-centered stylist-register-text">
                        Please Register To Have Full Access To Stylist Content
                    </p>
                    <button class="button action-btn" ui-sref="register">Register</button>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section" id="facebook-comments-section">
    <div class="container">
        <div class="columns">
            <div class="column is-12">
                facebook comment plugin goes here
            </div>
        </div>
    </div>
</section>

<section class="section" id="addition-stylists">
    <div class="container">
        <div class="columns">
            <div class="column is-12">
                <div class="additional-stylist-header has-text-centered">
                    <h1>Additional Stylists You Might Be Interested In</h1>
                </div>
                <div class="additional-stylists-display">
                    <div class="level">
                        <div class="level-item">
                            <a href="#">
                                <div class="additional-stylist-box">
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-48x48">
                                                <img src="images/sb-contributor-one.jpg" alt="">
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content additional-stylist-content">
                                                <p>Stylist One</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </a>
                        </div>
                        <!-- End Of Level Item -->
                        <div class="level-item">
                            <a href="#">
                                <div class="additional-stylist-box">
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-48x48">
                                                <img src="images/sb-contributor-two.jpg" alt="">
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content additional-stylist-content">
                                                <p>Stylist Two</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </a>
                        </div>
                        <!-- End Of Level Item -->
                        <div class="level-item">
                            <a href="#">
                                <div class="additional-stylist-box">
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-48x48">
                                                <img src="images/sb-contributor-three.jpg" alt="">
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content additional-stylist-content">
                                                <p>Stylist Three</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </a>
                        </div>
                        <!-- End Of Level Item -->
                        <div class="level-item">
                            <a href="#">
                                <div class="additional-stylist-box">
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-48x48">
                                                <img src="images/sb-contributor-one.jpg" alt="">
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content additional-stylist-content">
                                                <p>Stylist Four</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </a>
                        </div>
                        <!-- End Of Level Item -->
                    </div>
                </div>
                <!-- End Of Additional Stylists Display -->
            </div>
        </div>
    </div>
</section>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.js"></script>