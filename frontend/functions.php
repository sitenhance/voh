<?php 

    class wp_ng_theme {
        function enqueue_scripts() {
            wp_enqueue_style('fotoramaCSS', get_template_directory_uri(). '/css/fotorama.css', array(), '1.0', 'all');
            wp_enqueue_style('ngLightboxCSS', get_template_directory_uri(). '/css/angular-bootstrap-lightbox.css', array(), '1.0', 'all');
            wp_enqueue_style('loadersCSS', get_template_directory_uri(). '/css/loaders.min.css', array(), '1.0', 'all');
            wp_enqueue_style('bulmaCSS', get_template_directory_uri(). '/css/bulma.css', array(), '1.0', 'all');
            wp_enqueue_style('customCSS', get_template_directory_uri(). '/css/styles.css', array('bulmaCSS'), '1.0', 'all');
            wp_enqueue_style('fontAwesome', get_template_directory_uri(). '/css/font-awesome.min.css', array());
            wp_enqueue_style('latoFont', 'https://fonts.googleapis.com/css?family=Lato:400,300,700,900', array());
            wp_enqueue_script('gMaps', 'https://maps.googleapis.com/maps/api/js?sensor=false', array(), null, false);
            wp_enqueue_script('loDash', get_template_directory_uri() . '/js/vendor/lodash.min.js', array(), null, true);
            wp_enqueue_script('angular-core', get_template_directory_uri() . '/js/vendor/angular.min.js', array('loDash'), null, false);
            wp_enqueue_script('angular-sanitize', get_template_directory_uri() . '/js/vendor/angular-sanitize.min.js', array('angular-core'), null, false);
            wp_enqueue_script('ui-router', get_template_directory_uri() . '/js/vendor/angular-ui-router.min.js', array('angular-core'), null, false);
            wp_enqueue_script('ngFileUpload', get_template_directory_uri() . '/js/vendor/ng-file-upload-all.min.js', array('angular-core'), null, false);
            wp_enqueue_script('bs-tpls', get_template_directory_uri() . '/js/vendor/ui-bootstrap-tpls-2.1.4.min.js', array('angular-core'), null, false);
            wp_enqueue_script('ngLightboxJS', get_template_directory_uri() . '/js/vendor/angular-bootstrap-lightbox.js', array('angular-core'), null, false);
            wp_enqueue_script('ngResource', get_template_directory_uri() . '/js/vendor/angular-resource.min.js', array('angular-core'), null, false);
            wp_enqueue_script('stickyJS', get_template_directory_uri() . '/js/vendor/ng-sticky.js', array('angular-core'), null, false);
            wp_enqueue_script('satellizerJS', get_template_directory_uri() . '/js/vendor/satellizer.min.js', array('angular-core'), null, false);
            wp_enqueue_script('ngStorage', get_template_directory_uri() . '/js/vendor/ngStorage.min.js', array('angular-core'), null, false);
            wp_enqueue_script('loadersJS', get_template_directory_uri() . '/js/vendor/loaders.css.js', array('angular-core'), null, false);
            wp_enqueue_script('ocLazyLoad', get_template_directory_uri() . '/js/vendor/ocLazyLoad.min.js', array('angular-core'), null, false);
            wp_enqueue_script('stylistListJS', get_template_directory_uri() . '/data/stylists-data.js', array('angular-core'), null, false);
            wp_enqueue_script('ngScripts', get_template_directory_uri() . '/js/app/app.js', array(), false);
            wp_localize_script('ngScripts', 'appInfo', array(
                'api_url' => rest_get_url_prefix() . '/wp/v2/',
                'template_url' => get_template_directory_uri() . '/',
                'nonce' => wp_create_nonce('wp_rest'),
                'is_admin' => current_user_can('administrator')
            ));
            
            wp_enqueue_script('stylistCtrl', get_template_directory_uri() . '/js/app/stylists/stylist.controller.js', array('ngScripts'), false);
            wp_enqueue_script('blogCtrl', get_template_directory_uri() . '/js/app/blog/blog.controller.js', array('ngScripts'), false);
            wp_enqueue_script('registerCtrl', get_template_directory_uri() . '/js/app/register/register.controller.js', array('ngScripts'), false);
            wp_enqueue_script('thanksCtrl', get_template_directory_uri() . '/js/app/thanks/thanks.controller.js', array('ngScripts'), false);
            wp_enqueue_script('profileCtrl', get_template_directory_uri() . '/js/app/profile/profile.controller.js', array('ngScripts'), false);
            wp_enqueue_script('accountCtrl', get_template_directory_uri() . '/js/app/profile/account.controller.js', array('ngScripts'), false);
            wp_enqueue_script('loginCtrl', get_template_directory_uri() . '/js/app/login/login.controller.js', array('ngScripts'), false);
            wp_enqueue_script('galleryCtrl', get_template_directory_uri() . '/js/app/gallery/gallery.controller.js', array('ngScripts'), false);
            wp_enqueue_script('aboutCtrl', get_template_directory_uri() . '/js/app/about/about.controller.js', array('ngScripts'), false);
            wp_enqueue_script('coursesCtrl', get_template_directory_uri() . '/js/app/courses/courses.controller.js', array('ngScripts'), false);
            wp_enqueue_script('forStylistsCtrl', get_template_directory_uri() . '/js/app/for-stylists/for-stylists.controller.js', array('ngScripts'), false);
            wp_enqueue_script('contactCtrl', get_template_directory_uri() . '/js/app/contact/contact.controller.js', array('ngScripts'), false);
            wp_enqueue_script('homeCtrl', get_template_directory_uri() . '/js/app/home/home.controller.js', array('ngScripts'), false);
            
//            wp_enqueue_script('pagesServices', get_template_directory_uri() . '/js/services/pages-services.js', array('ngScripts'), false);
//            wp_enqueue_script('postsService', get_template_directory_uri() . '/js/services/posts-service.js', array('ngScripts'), false);
//            wp_enqueue_script('stateService', get_template_directory_uri() . '/js/services/state-service.js', array('ngScripts'), false);
//            wp_enqueue_script('s3UploadService', get_template_directory_uri() . '/js/services/s3upload-service.js', array('ngScripts'), false);
            wp_enqueue_script('authTokenService', get_template_directory_uri() . '/js/app/services/authtoken.js', array('ngScripts'), false);
            wp_enqueue_script('authInterceptorService', get_template_directory_uri() . '/js/app/services/authinterceptor.js', array('ngScripts'), false);
            wp_enqueue_script('usersService', get_template_directory_uri() . '/js/app/services/users.service.js', array('ngScripts'), false);
            wp_enqueue_script('authService', get_template_directory_uri() . '/js/app/services/auth.js', array('ngScripts'), false);
            wp_enqueue_script('featuredStylist', get_template_directory_uri() . '/js/app/services/wp-services/featured-stylists.services.js', array('ngScripts'), false);
            
//            wp_enqueue_script('carouselItemDirective', get_template_directory_uri() . '/js/directives/carousel-item-directive.js', array('ngScripts'), false);
//            wp_enqueue_script('searchDirective', get_template_directory_uri() . '/js/directives/search-directive.js', array('ngScripts'), false);
//            wp_enqueue_script('answerButtonDirective', get_template_directory_uri() . '/js/directives/answer-button-directive.js', array('ngScripts'), false);
//            wp_enqueue_script('socialIconsDirective', get_template_directory_uri() . '/js/directives/social-icons-directive.js', array('ngScripts'), false);            
//            wp_enqueue_script('readMoreDirective', get_template_directory_uri() . '/js/directives/read-more-directive.js', array('ngScripts'), false);
//            wp_enqueue_script('socialIconsDirective', get_template_directory_uri() . '/js/directives/social-icons-directive.js', array('ngScripts'), false);
        }
        
//<script src="/js/vendor/jquery-3.0.0.min.js"></script>
//<script src="/js/vendor/angular.min.js"></script>
//<script src="/js/vendor/angular-ui-router.min.js"></script>
//<script src="/js/vendor/lodash.min.js"></script>
//<script src="/data/stylists-data.js"></script>
//<script src="/js/vendor/satellizer.min.js"></script>
//<script src="/js/vendor/ui-bootstrap-tpls-2.1.4.min.js"></script>
//<script src="/js/vendor/angular-bootstrap-lightbox.js"></script>
//<script src="/js/vendor/ngStorage.min.js"></script>
//<script src="/js/vendor/loaders.css.js"></script>
//<script src="/js/vendor/ng-file-upload-all.min.js"></script>
//<script src="/js/vendor/angular-sanitize.min.js"></script>
//<!-- Vendor JavaScript Libraries -->
//<script src="./js/vendor/ng-sticky.js"></script>
//
//<!--Angular Application-->
//<script src="./js/app/app.js"></script>
        
        function modify_jquery_version() {
            if (!is_admin()) {
                wp_deregister_script('jquery');
                wp_register_script('jquery',
        'http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js', false, '2.1.s');
                wp_enqueue_script('jquery');
            }
        }
        function wpbeginner_remove_version() {
            return '';
        }

    }
    $ngTheme = new wp_ng_theme();
    add_action('init', array($ngTheme, 'modify_jquery_version'));
    add_action('wp_enqueue_scripts', array($ngTheme, 'enqueue_scripts'));
    function custom_excerpt_length( $length ) {
	    return 30;
    }
    add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );
    remove_action('wp_head', 'wp_generator');
    add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
?>