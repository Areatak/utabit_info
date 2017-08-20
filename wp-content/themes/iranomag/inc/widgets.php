<?php
function iranomag_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'iranomag' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Post', 'iranomag' ),
		'id'            => 'post',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Archive', 'iranomag' ),
		'id'            => 'archive',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Author', 'iranomag' ),
		'id'            => 'author',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Search', 'iranomag' ),
		'id'            => 'search',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer 1', 'iranomag' ),
		'id'            => 'footer-1',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer 2', 'iranomag' ),
		'id'            => 'footer-2',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer 3', 'iranomag' ),
		'id'            => 'footer-3',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer 4', 'iranomag' ),
		'id'            => 'footer-4',
		'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<div class="widget-head"><strong class="widget-title">',
		'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
	) );
	
	// Dynamic Sidebar
	$sidebars = ot_get_option('dynamic_sidebar');
	if(!empty($sidebars)) {
		foreach($sidebars as $sidebar) {
			register_sidebar( array(
				'name'          => $sidebar['title'],
				'id'            => $sidebar['sidebar_id'],
				'description'   => esc_html__( 'Add widgets here.', 'iranomag' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<div class="widget-head"><strong class="widget-title">',
				'after_title'   => '</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>',
			) );
		}
	}
}
add_action( 'widgets_init', 'iranomag_widgets_init' );