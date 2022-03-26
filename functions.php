<?php
/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */

// function hello_elementor_child_enqueue_scripts() {
// 	wp_enqueue_style(
// 		'hello-elementor-child-style',
// 		get_stylesheet_directory_uri() . '/style.css',
// 		[
// 			'hello-elementor-theme-style',
// 		],
// 		'1.0.0'
// 	);
// }
// add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20 );

function hello_elementor_child_enqueue_scripts() {
	wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100;200;300;400;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap', false );
	wp_enqueue_style(
		'hello-elementor-child-style', get_stylesheet_directory_uri() . '/style.css'
	);
}
function unhook_parent_style() {

    wp_dequeue_style( 'hello-elementor-theme-style' );
    wp_deregister_style( 'hello-elementor-theme-style' );
    wp_dequeue_style( 'hello-elementor' );
    wp_deregister_style( 'hello-elementor' );
    
    // hello-elementor
  }
  add_action( 'wp_enqueue_scripts', 'unhook_parent_style', 20 );

// function disable_styles() {
// 	wp_dequeue_style('elementor-frontend-lite');
// 	wp_deregister_style('elementor-frontend-lite');
// 	// wp_dequeue_style('widget-nav-menu');
// 	// wp_deregister_style('widget-nav-menu');	
// 	// wp_dequeue_style('hello-elementor-theme-style');
// 	// wp_deregister_style('hello-elementor-theme-style');

// }

// add_action('wp_enqueue_scripts', 'disable_styles', 100);

add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 101);


// function adg_dequeue_unnecessary_files() {
//     wp_dequeue_style( 'elementor-frontend' ); // remove Elementor's custom-frontend.min.css
//         wp_deregister_style( 'elementor-frontend' );

//     wp_register_style( 'elementor-frontend', get_stylesheet_directory_uri() . '/style.css' ); // Purified replacement for Elementor's custom-frontend.min.css
//         wp_enqueue_style( 'elementor-frontend' );
// }
// add_action( 'wp_enqueue_scripts', 'adg_dequeue_unnecessary_files' );

// add_action( 'elementor/frontend/after_enqueue_styles', function() { 
//     wp_deregister_style( 'elementor-frontend' );
//     wp_dequeue_style( 'elementor-frontend' );
//     wp_register_style( 'elementor-frontend', get_stylesheet_directory_uri() . '/assets/css/custom-elementor-front-end.css' );
//    wp_enqueue_style( 'elementor-frontend', get_stylesheet_directory_uri() . '/assets/css/custom-elementor-front-end.css' );
// } );

// add_action( 'after_setup_theme', 'childtheme_formats', 11 );

// function childtheme_formats(){
//      add_theme_support( 'post-formats', array( 'aside', 'gallery', 'link' ) );
// }
// function wpbf_theme_setup(){
// 	add_theme_support( 'custom-units', 'rem', 'em' );
// 	add_theme_support( 'custom-spacing' );
// }
// add_action( 'after_setup_theme', 'wpbf_theme_setup' );
// // add_action( 'init', 'create_my_post_type' );
// // function create_my_post_type() {
// //     register_post_type( 'my_custom_post_type',
// //       array(
// //         'labels' => array( 'name' => __( 'Products' ) ),
// //         'public' => true,
// //         'supports' => array('title', 'editor', 'post-formats')
// //     )
// //   );
// // }
add_filter('use_block_editor_for_post_type', 'prefix_disable_gutenberg', 10, 2);
function prefix_disable_gutenberg($current_status, $post_type)
{
    // Use your post type key instead of 'product'
    if ($post_type === 'winners') return false;
    return $current_status;
}
add_filter('use_block_editor_for_post_type', '__return_false');

// // function adg_dequeue_unnecessary_files() {
// //     wp_dequeue_style( 'elementor-frontend' ); // remove Elementor's custom-frontend.min.css
// //         wp_deregister_style( 'elementor-frontend' );

// //     wp_register_style( 'elementor-frontend', get_stylesheet_directory_uri() . '/custom-frontend.min.css' ); // Purified replacement for Elementor's custom-frontend.min.css
// //         wp_enqueue_style( 'elementor-frontend' );
// // }
// // add_action( 'wp_enqueue_scripts', 'adg_dequeue_unnecessary_files' );
// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:


add_filter( 'hello_elementor_page_title', '__return_false' );