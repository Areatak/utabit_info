<?php

/*
* DO NOT MODIFY THIS FILE!
*/

function iranomag_scripts() {
	
	$font_url = add_query_arg( 'family', urlencode( 'Dosis:200' ), "//fonts.googleapis.com/css" );
	
	// Theme Styles
	wp_register_style( 'google-font', $font_url, null, null );
	wp_register_style( 'iranomag-style-bundle', IM_THEME_ROOT . '/assets/css/bundle.min.css', null, null );
	
	wp_enqueue_style( 'google-font');
	wp_enqueue_style( 'iranomag-style-bundle' );
	wp_enqueue_style( 'iranomag-style', get_stylesheet_uri(), false, null );
	
	wp_add_inline_style( 'iranomag-style', im_acss() );
	
	// Theme Java Scripts
    wp_enqueue_script( 'jquery' );
	wp_enqueue_script( "iranomag-js-bundle", IM_THEME_ROOT.'/assets/js/bundle.min.js', array('jquery'), null, true );
	
	wp_register_script( "voter-script", IM_THEME_ROOT.'/assets/js/min/voter-script.min.js', array('jquery'), null, true );
	wp_localize_script( 'voter-script', 'imAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )), null );       
	wp_enqueue_script( 'voter-script' );
	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'iranomag_scripts' );

/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/