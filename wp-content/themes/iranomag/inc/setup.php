<?php
if ( ! function_exists( 'iranomag_setup' ) ) :
function iranomag_setup() {
	load_theme_textdomain( 'iranomag', get_template_directory() . '/assets/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	// Let WordPress manage the document title.
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'blog', 280, 175, true );
	add_image_size( 'featured', 770, 310, true );
	add_image_size( '2col', 370, 250, true );
	add_image_size( 'widget', 90, 85, true );
	add_image_size( 'widget-featured', 370, 170, true );
	//add_image_size( 'post-carousel', 190, 190, true );
	add_image_size( 'post-carousel-background', 291, 340, true );
	add_image_size( 'grid-carousel', 780, 340, true );
	add_image_size( 'grid-carousel-small', 390, 340, true );
	add_image_size( 'grid-carousel-large', 780, 680, true );
	add_image_size( 'post', 770, 480, true );
	
	if (false === get_option("medium_crop")) {
	    add_option("medium_crop", "1");
	} else {
	    update_option("medium_crop", "1");
	}
	
	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'iranomag' ),
		'top' => esc_html__( 'Top Menu', 'iranomag' ),
		'mobile' => esc_html__( 'Mobile Menu', 'iranomag' ),
		'footer' => esc_html__( 'Footer Menu', 'iranomag' )
	) );

	// Switch default core markup for search form, comment form, and comments to output valid HTML5.
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );
}
endif;
add_action( 'after_setup_theme', 'iranomag_setup' );

/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/

// manage excerpt more [...]
function im_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'im_excerpt_more' );

function im_excerpt_length( $length ) {
    return 25;
}
add_filter( 'excerpt_length', 'im_excerpt_length', 999 );

// Add style to admin page.
function admin_css()
{
	echo '<link rel="stylesheet" type="text/css" href="'. get_template_directory_uri() . '/assets/css/admin.css">';
}
add_action( 'admin_head', 'admin_css' );