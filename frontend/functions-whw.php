<?php 

    class wp_ng_theme {
        function enqueue_scripts() {
            wp_enqueue_style('bootstrapCSS', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', array(), '1.0', 'all');
            wp_enqueue_style('videogularCSS', get_template_directory_uri() . '/css/videogular.min.css', array(), '1.0', 'all');
            wp_enqueue_style('customCSS', get_template_directory_uri(). '/css/styles.css', array('bootstrapCSS'), '1.0', 'all');
            wp_enqueue_style('fontAwesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css', array('bootstrapCSS'));
            wp_enqueue_style('socialShareCSS', get_template_directory_uri().'/css/angular-socialshare.min.css', array('bootstrapCSS'));
            wp_enqueue_style('owlCarouselDefaultCSS', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/assets/owl.theme.default.min.css', array('bootstrapCSS'));
            wp_enqueue_style('latoFont', 'https://fonts.googleapis.com/css?family=Lato:400,300,700,900', array());
            wp_enqueue_script('gMaps', 'https://maps.googleapis.com/maps/api/js?sensor=false', array(), null, false);
            wp_enqueue_script('loDash', 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.11.1/lodash.min.js', array(), null, true);
            wp_enqueue_script('angular-core', 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js', array('loDash'), null, false);
            wp_enqueue_script('angular-resource', 'https://code.angularjs.org/1.5.0-rc.2/angular-resource.min.js', array('angular-core'), null, false);
            wp_enqueue_script('angular-ui-bs-tpls', 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.2.5/ui-bootstrap-tpls.min.js', array('angular-core'), null, false);
            wp_enqueue_script('angular-ui-bs', 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.2.5/ui-bootstrap.min.js', array('angular-core'), null, false);
            wp_enqueue_script('angular-sanitize', 'https://code.angularjs.org/1.5.2/angular-sanitize.min.js', array('angular-core'), null, false);
            wp_enqueue_script('ui-router', 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.17/angular-ui-router.min.js', array('angular-core'), null, false);
            wp_enqueue_script('simpleLogger', get_template_directory_uri().'/js/vendor/angular-simple-logger.min.js', array('angular-core'), null, true);
            wp_enqueue_script('fbEasy', 'http://pc035860.github.io/angular-easyfb/angular-easyfb.min.js', array('angular-core'), null, false);    
            wp_enqueue_script('ui-google-maps', get_template_directory_uri().'/js/vendor/angular-google-maps.min.js', array('simpleLogger'), null, false);
            wp_enqueue_script('socialShareJS', get_template_directory_uri().'/js/vendor/angular-socialshare.min.js', array('angular-core'), null, false);
            wp_enqueue_script('jwPlayer', get_template_directory_uri().'/js/vendor/jwplayer.min.js', array('angular-core'), null, false);
            wp_enqueue_script('videogular', get_template_directory_uri() . '/js/vendor/videogular.min.js', array('angular-core'), null, false);
            wp_enqueue_script('vg-controls', get_template_directory_uri() . '/js/vendor/vg-controls.min.js', array('angular-core'), null, false);
            wp_enqueue_script('vg-poster', get_template_directory_uri() . '/js/vendor/vg-poster.js', array('angular-core'), null, false);
            wp_enqueue_script('ngFileShim', get_template_directory_uri() . '/js/vendor/ng-file-upload-shim.min.js', array('angular-core'), null, false);
            wp_enqueue_script('ngFileUpload', get_template_directory_uri() . '/js/vendor/ng-file-upload.min.js', array('angular-core'), null, false);
            wp_enqueue_script('awsSDK', 'https://cdnjs.cloudflare.com/ajax/libs/aws-sdk/2.3.11/aws-sdk.min.js', array('angular-core'), null, false);
            wp_enqueue_script('ngScripts', get_template_directory_uri() . '/js/app.js', array('ui-google-maps'), false);
            wp_localize_script('ngScripts', 'appInfo', array(
                'api_url' => rest_get_url_prefix() . '/wp/v2/',
                'template_url' => get_template_directory_uri() . '/',
                'nonce' => wp_create_nonce('wp_rest'),
                'is_admin' => current_user_can('administrator')
            ));
            wp_enqueue_script('stateCtrl', get_template_directory_uri() . '/js/controller/stateCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('headerCtrl', get_template_directory_uri() . '/js/controller/headerCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('carouselCtrl', get_template_directory_uri() . '/js/controller/carouselCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('homeCtrl', get_template_directory_uri() . '/js/controller/homeCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('aboutCtrl', get_template_directory_uri() . '/js/controller/aboutCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('navCtrl', get_template_directory_uri() . '/js/controller/navCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('eventsCtrl', get_template_directory_uri() . '/js/controller/eventsCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('forHimCtrl', get_template_directory_uri() . '/js/controller/forHimCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('articleCtrl', get_template_directory_uri() . '/js/controller/articleCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('videosCtrl', get_template_directory_uri() . '/js/controller/videosCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('footerCtrl', get_template_directory_uri() . '/js/controller/footerCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('affiliateCtrl', get_template_directory_uri() . '/js/controller/affiliateCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('companyCtrl', get_template_directory_uri() . '/js/controller/companyCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('contactCtrl', get_template_directory_uri() . '/js/controller/contactCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('dcmaCtrl', get_template_directory_uri() . '/js/controller/dcmaCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('earningsCtrl', get_template_directory_uri() . '/js/controller/earningsCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('feedbackCtrl', get_template_directory_uri() . '/js/controller/feedbackCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('authorCtrl', get_template_directory_uri() . '/js/controller/authorCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('practiceCtrl', get_template_directory_uri() . '/js/controller/practiceCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('pressCtrl', get_template_directory_uri() . '/js/controller/pressCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('searchCtrl', get_template_directory_uri() . '/js/controller/searchCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('privacyCtrl', get_template_directory_uri() . '/js/controller/privacyCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('categoriesCtrl', get_template_directory_uri() . '/js/controller/categoriesCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('socialCtrl', get_template_directory_uri() . '/js/controller/socialCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('pollCtrl', get_template_directory_uri() . '/js/controller/pollCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('sponsorCtrl', get_template_directory_uri() . '/js/controller/sponsorCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('termsCtrl', get_template_directory_uri() . '/js/controller/termsCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('videoUpCtrl', get_template_directory_uri() . '/js/controller/videoUpCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('contributeCtrl', get_template_directory_uri() . '/js/controller/contributeCtrl.js', array('ngScripts'), false);
            wp_enqueue_script('pagesServices', get_template_directory_uri() . '/js/services/pages-services.js', array('ngScripts'), false);
            wp_enqueue_script('postsService', get_template_directory_uri() . '/js/services/posts-service.js', array('ngScripts'), false);
            wp_enqueue_script('stateService', get_template_directory_uri() . '/js/services/state-service.js', array('ngScripts'), false);
            wp_enqueue_script('s3UploadService', get_template_directory_uri() . '/js/services/s3upload-service.js', array('ngScripts'), false);
            wp_enqueue_script('videoCategoriesService', get_template_directory_uri() . '/js/services/video-categories-service.js', array('ngScripts'), false);
            wp_enqueue_script('categoriesService', get_template_directory_uri() . '/js/services/categories-services.js', array('ngScripts'), false);
            wp_enqueue_script('usersService', get_template_directory_uri() . '/js/services/user-services.js', array('ngScripts'), false);
            wp_enqueue_script('resultsService', get_template_directory_uri() . '/js/services/results-service.js', array('ngScripts'), false);
            wp_enqueue_script('carouselItemDirective', get_template_directory_uri() . '/js/directives/carousel-item-directive.js', array('ngScripts'), false);
            wp_enqueue_script('searchDirective', get_template_directory_uri() . '/js/directives/search-directive.js', array('ngScripts'), false);
            wp_enqueue_script('answerButtonDirective', get_template_directory_uri() . '/js/directives/answer-button-directive.js', array('ngScripts'), false);
            wp_enqueue_script('socialIconsDirective', get_template_directory_uri() . '/js/directives/social-icons-directive.js', array('ngScripts'), false);            
            wp_enqueue_script('readMoreDirective', get_template_directory_uri() . '/js/directives/read-more-directive.js', array('ngScripts'), false);
            wp_enqueue_script('socialIconsDirective', get_template_directory_uri() . '/js/directives/social-icons-directive.js', array('ngScripts'), false);
        }
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