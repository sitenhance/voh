<!DOCTYPE html>
<html <?php language_attributes(); ?> ng-app="vohApp">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title>
        <?php wp_title( '&laquo', true, 'right'); ?>
        <?php bloginfo( 'name'); ?>
    </title>
    <!--<base href="/sitenhance/">-->
    <meta name="author" content="VoiceOfHair">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta property="fb:app_id" content="330044287394465" />
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/favicon.png">
    <?php wp_head(); ?>
    <!--[if lt IE 9]>
	    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
</head>

<body <?php body_class(); ?>>
    <!-- Facebook SDK -->
    <div id="fb-root"></div>
    <script>
        window.fbAsyncInit = function () {
            FB.init({
                appId: '330044287394465',
                xfbml: true,
                version: 'v2.8'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <!-- End of Facebook SDK -->

    <!-- User Account Section -->
    <div class="columns">
        <div class="column is-4 is-offset-8 account-section" ng-controller="accountCtrl">
            <div class="signInBtns is-pulled-right" ng-hide="loggedIn">
                <a ui-sref="login" class="button is-outlined action-btn">
                    <span class="icon is-small">
                        <i class="fa fa-user"></i>
                    </span>
                    <span>
                        Sign In
                    </span>
                </a>
            </div>
            <div class="userInfoDisplay is-pulled-right" ng-show="loggedIn" ng-cloak>
                <a ui-sref="profile" class="profile-icon">
                    <p>Welcome, {{name}}</p>
                </a>
                <a ng-click="logOutUser()" class="button is-outlined action-btn">Log Out</a>
            </div>
        </div>
    </div>

    <!-- Navigation Section -->
    <nav class="nav" sticky-nav>
        <div class="nav-left">
            <a ui-sref="home" class="nav-item">
                <img src="<?php echo get_template_directory_uri() ?>/images/logo.png" alt="" class="logo-img2">
            </a>
            <a ui-sref="about" class="nav-item">ABOUT</a>
            <a ui-sref="find-stylists" class="nav-item">FIND STYLISTS</a>
            <!-- For Later Use. Disabled until have content
            <a href="#" class="nav-item">PRODUCTS</a>
            <a href="experts.html" class="nav-item">EXPERTS</a>
-->
            <a ui-sref="for-stylists" class="nav-item">FOR STYLISTS</a>
            <a ui-sref="gallery" class="nav-item">HAIRSPIRATION</a>
            <a ui-sref="blog" class="nav-item">BLOG</a>
            <a ui-sref="courses" class="nav-item">COURSES</a>
        </div>
        <!-- end of nav-left -->
    </nav>