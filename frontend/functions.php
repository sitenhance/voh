<?php 

    class wp_ng_theme {
        function enqueue_scripts() {

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