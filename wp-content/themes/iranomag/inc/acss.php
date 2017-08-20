<?php function im_acss() {
	ob_start();
	$theme_background = ot_get_option( 'theme_background', array() );
	$accent_color = esc_attr(ot_get_option( 'accent_color' ));
	$hover_color = im_colorAdjuster($accent_color, -25);
	$featured_color = im_colorAdjuster($accent_color, 25);
	$footer_background = ot_get_option("footer_background", array() );
	$copyright_background = ot_get_option("copyright_background", array() );
	$top_background = ot_get_option("topnav_background", array() );
	$header_background = ot_get_option("header_background", array() );
	$menu_background = ot_get_option("primarymenu_background", array() );
	$header_logo_height = im_measurement( ot_get_option( "header_logo_height", array() ) );
	$footer_logo_height = im_measurement( ot_get_option( "copyright_logo_height", array() ) );
	$extra_css = esc_attr(ot_get_option( "extra_css" ));
?>

<?php if(!empty($theme_background)) : ?>
/* Theme Background */
body {
    <?php im_background($theme_background); ?>
}
<?php endif; ?>

/* Accent color */
a {
    color: <?php echo $accent_color; ?>;
}
a:hover,
.im-topnav.dark a:hover, .im-topnav.dark ul > li > a:hover,
.im-topnav.light a:hover, .im-topnav.light ul > li > a:hover,
.im-navigation.dark a:hover, .im-navigation.dark ul > li > a:hover,
.im-navigation.light a:hover, .im-navigation.light ul > li > a:hover,
.im-main-header.dark a:hover, .im-main-header.dark ul > li > a:hover,
.im-main-header.light a:hover, .im-main-header.light ul > li > a:hover,
.im-main-header.dark .im-header-links .top-menu ul li a:hover,
.im-main-header.light .im-header-links .top-menu ul li a:hover,
.im-top-footer.dark a:hover, .im-footer.dark ul > li > a:hover,
.im-top-footer.light a:hover, .im-footer.light ul > li > a:hover,
.im-navigation .primary-menu > ul > li > ul.sub-menu > li > a:hover,
.iranomag-meta .im-meta-item a:hover,
.im-entry-title a:hover,
.widget_pop_btn a.active,
.im-top-footer.dark .widget_impv_display_widget .widget_pop_btn a.active,
.im-top-footer.light .widget_impv_display_widget .widget_pop_btn a.active,
.im-widget-entry-header h4.im-widget-entry-title a:hover,
.widget li .rsswidget:hover,
.widget_recent_comments .recentcomments a:hover,
.widget_tag_cloud .tagcloud a:hover,
.im-top-footer.dark .widget_tag_cloud .tagcloud a:hover,
.im-top-footer.light .widget_tag_cloud .tagcloud a:hover,
.widget_meta ul li a:hover,
.widget ul li a:hover,
.im-top-footer.dark .widget ul li a:hover,
.im-top-footer.light .widget ul li a:hover,
.im-vc-video-large.light .im-entry-title a:hover,
.mobile-menu li a:hover,
.im-post-vote-item a:hover,
.im-entry-pages .nav-before:hover, .im-entry-pages .nav-after:hover,
.im-topnav .top-menu > ul > li > ul.sub-menu > li > a:hover,
.im-404-search ul li a:hover,
.im-post-download-item-exlink a:hover
{
    color: <?php echo $hover_color ?>;
}

.bypostauthor .im-comment-box {
	background-color: rgba(<?php echo im_hex2rgb($hover_color); ?>, 0.065);
    border-color: rgba(<?php echo im_hex2rgb($hover_color); ?>, 0.25);
}
.bypostauthor .im-comment-box .im-comment-details {
    border-color: rgba(<?php echo im_hex2rgb($hover_color); ?>, 0.2);
}

.review-line,
.im-tag-title .fa,
.im-404-box{
	background-color: <?php echo $accent_color; ?>;
}

input:hover, select:hover, textarea:hover,
input:focus, select:focus, textarea:focus {
    border-color: <?php echo $hover_color; ?>;
	box-shadow: rgba(<?php echo im_hex2rgb($accent_color); ?>, 0.5) 0 0 5px;
}

input[type=submit] {
	background-color: <?php echo $accent_color; ?>;
    border-color: <?php echo im_colorAdjuster($accent_color, 15); ?>;
}

input[type=submit]:hover, input[type=submit]:focus {
	background-color: <?php echo $hover_color; ?>;
    border-color: <?php echo im_colorAdjuster($hover_color, 15); ?>;
}

.mega-menu-item-header .mega-menu-item-header-title a:hover {
    color: <?php echo $hover_color ?>!important;
}

#back-to-top {
    border-color: <?php echo $accent_color; ?>;
    color: <?php echo $accent_color; ?>;
}
#back-to-top:hover {
    border-color: <?php echo $hover_color; ?>;
    color: <?php echo $hover_color; ?>;
}
@media (max-width: 768px) {
    #back-to-top {
        background-color: <?php echo $accent_color; ?>;
    }
}

/* Widget Style */
.widget_categories .widget-head-bar {
	background-color: <?php echo $accent_color; ?>;
}
.widget_tag_cloud .tagcloud a:hover,
.im-top-footer.dark .widget_tag_cloud .tagcloud a:hover {
    border-color: <?php echo $hover_color ?>;
}

/* Navigation Style */
.nav-links > a:hover {
    border-color: <?php echo $hover_color; ?>;
}
.nav-links .current {
	background-color: <?php echo $hover_color; ?>;
    border: 1px solid <?php echo $accent_color; ?>;
}

/* Content Style */
.im-2col-featured {
    background-color: <?php echo $hover_color; ?>;
}
.im-2col-featured:before {
    border-right-color: <?php echo $featured_color; ?>;
}

<?php if(!empty($footer_background)) : ?>
/* Footer Background */
.im-top-footer {
    <?php im_background($footer_background); ?>
    background-image: none!important;
}
.im-top-footer.dark .widget-title,
.im-top-footer.light .widget-title,
.im-top-footer.dark .im-widget-view-all,
.im-top-footer.light .im-widget-view-all,
.im-top-footer.dark .widget_impv_display_widget .widget_pop_btn,
.im-top-footer.light .widget_impv_display_widget .widget_pop_btn,
.im-top-footer.dark .widget_impv_display_widget .im-widget-tabs,
.im-top-footer.light .widget_impv_display_widget .im-widget-tabs,
.im-top-footer.dark .widget_tag_cloud .tagcloud a,
.im-top-footer.light .widget_tag_cloud .tagcloud a,
.im-top-footer.dark .widget_parsidate_calendar td.pad,
.im-top-footer.light .widget_parsidate_calendar td.pad,
.im-top-footer.dark .widget_calendar td.pad,
.im-top-footer.light .widget_calendar td.pad {
    background-color: <?php isset($footer_background['background-color']) ? print_r($footer_background['background-color']) : '' ?>;
}
.im-top-footer.dark .widget_parsidate_calendar td,
.im-top-footer.light .widget_parsidate_calendar td,
.im-top-footer.dark .widget_parsidate_calendar th,
.im-top-footer.light .widget_parsidate_calendar th,
.im-top-footer.dark .widget_calendar td,
.im-top-footer.light .widget_calendar td,
.im-top-footer.dark .widget_calendar th,
.im-top-footer.light .widget_calendar th {
    border-color: <?php isset($footer_background['background-color']) ? print_r($footer_background['background-color']) : '' ?>;
}
.im-top-footer.dark .widget_tag_cloud .tagcloud a,
.im-top-footer.light .widget_tag_cloud .tagcloud a {
    border-color: <?php echo im_colorAdjuster(isset($footer_background['background-color']) ? ($footer_background['background-color']) : '', -25); ?>;
}
.im-top-footer.dark .im_multiad, {
.im-top-footer.light .im_multiad, {
	background-color: <?php echo im_colorAdjuster(isset($footer_background['background-color']) ? ($footer_background['background-color']) : '', 25); ?>;
}
<?php endif; ?>

<?php if(!empty($copyright_background)) : ?>
.im-footer {
    <?php im_background($copyright_background); ?>
}
<?php endif; ?>

<?php if(!empty($top_background)) : ?>
/* Top Menu Background */
.im-topnav {
    <?php im_background($top_background); ?>
}
<?php endif; ?>

<?php if(!empty($header_background)) : ?>
/* Header Background */
.im-main-header,
.im-header-2 .im-navigation.dark,
.im-header-2 .im-navigation.light {
    <?php im_background($header_background); ?>
}
<?php endif; ?>

<?php if(!empty($menu_background)) : ?>
/* Primary Menu Background */
.im-navigation {
	<?php im_background($menu_background); ?>
}
<?php endif; ?>

/* Circle Bar Background */
.im-svg #im-bar,
#review-avg-svg #review-avg-bar{
    stroke: <?php echo $accent_color; ?>;
}

<?php if(!empty($header_logo_height)) { ?>
/* Header Logo Image Height */
.im-header-logo-image {
    max-height: <?php echo $header_logo_height; ?>;
}
<?php } ?>

<?php if(!empty($footer_logo_height)) { ?>
/* Footer Logo Image Height */
.im-footer-logo-image {
    max-height: <?php echo $footer_logo_height; ?>;
}
<?php } ?>

/* Download Section */
.im-post-download {
	background-color: rgba(<?php echo im_hex2rgb($accent_color); ?>, 0.075);
    border-color: rgba(<?php echo im_hex2rgb($accent_color); ?>, 0.25);
}
.im-post-download-title {
    color: rgba(<?php echo im_hex2rgb(im_colorAdjuster($accent_color, 10)); ?>, 0.9);
}
.im-post-download-list li .fa {
	background-color: <?php echo im_colorAdjuster($accent_color, 20); ?>;
}
.im-post-download-item-title {
	color: rgba(<?php echo im_hex2rgb(im_colorAdjuster($accent_color, 20)); ?>, 0.9);
}
.im-post-download-item-desc {
	color: rgba(<?php echo im_hex2rgb(im_colorAdjuster($accent_color, 20)); ?>, 0.75);
}
.im-post-download-item-exlink a {
	color: rgba(<?php echo im_hex2rgb(im_colorAdjuster($accent_color, -10)); ?>, 0.75);
}

.im-entry-content th {
	background-color: <?php echo im_colorAdjuster($accent_color, 0); ?>;
	border-color: <?php echo im_colorAdjuster($accent_color, 10); ?>;
}
.im-entry-content tr:hover {
	background-color: rgba(<?php echo im_hex2rgb($accent_color); ?>, 0.05);
}

/* Category Colors */
<?php 
	$categories = get_terms( 'category', array( 'hide_empty' => false ) ); 
	foreach ($categories as $category) {
		$cat_id = $category->term_id;
		$color = ot_get_option('category_colors_'. $cat_id);
		$header_bg = absint( get_term_meta( $cat_id, 'im_header_id', true ) );
		if ($color) {	
		?>
            .menu-item-category-<?php echo esc_attr($cat_id); ?> > a:hover {
                color: <?php echo esc_attr($color); ?>!important;
            }
            .menu-item-category-<?php echo esc_attr($cat_id); ?> .im_mega_menu_holder {
                border-color: <?php echo esc_attr($color); ?>!important;
            }
            .im-bar-<?php echo esc_attr($cat_id); ?> {
                stroke: <?php echo esc_attr($color); ?>!important;
            }
            .im-catlink-color-<?php echo esc_attr($cat_id); ?> {
                background-color: <?php echo esc_attr($color); ?>;
            }
			.widget-head-<?php echo esc_attr($cat_id); ?> .widget-head-bar,
			.im-top-footer.dark .widget-head-<?php echo esc_attr($cat_id); ?> .widget-head-bar {
				background-color: <?php echo esc_attr($color); ?>;
			}
			.carousel-<?php echo esc_attr($cat_id); ?>:hover .im-carousel-background:after {
				background-color: rgba(<?php echo im_hex2rgb($color); ?>,0.65);
			}
			.carousel-<?php echo esc_attr($cat_id); ?>:hover .im-carousel-entry {
				background: linear-gradient(to top, rgba(<?php echo im_hex2rgb($color); ?>,0.95), transparent);
			}
			.content-block-1:hover .block-<?php echo esc_attr($cat_id); ?> {
				background: linear-gradient(to right, rgb(<?php echo im_hex2rgb(im_colorAdjuster($color, 25)); ?>), rgb(<?php echo im_hex2rgb($color); ?>), transparent);
			}
			.content-block-2:hover .block-<?php echo esc_attr($cat_id); ?> {
				background: linear-gradient(to right, transparent, rgb(<?php echo im_hex2rgb($color); ?>), rgb(<?php echo im_hex2rgb(im_colorAdjuster($color, 25)); ?>));
			}
			@media (max-width: 768px) {
				.content-block:hover .block-<?php echo esc_attr($cat_id); ?> {
					background: rgb(<?php echo im_hex2rgb($color); ?>);
				}
			}
			.im-archive-<?php echo esc_attr($cat_id); ?> {
				border-color: <?php echo esc_attr($color); ?>;
			}
		<?php
		} else {
			$cat_color_default = ot_get_option('category_colors_'. $cat_id, '#666');
		?>
			.im-catlink-color-<?php echo esc_attr($cat_id); ?>,
            .im-catlink-color-<?php echo esc_attr($cat_id); ?>:hover {
                background-color: <?php echo esc_attr($cat_color_default); ?>;
            }
		<?php
		}
		/*
		* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
		* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
		* فروش و پشتیبانی تنها در مارکت وردپرس
		*/
	}
?>

/* Extra CSS */
<?php echo $extra_css; ?>;

<?php 
	$out = ob_get_contents();
	if (ob_get_contents()) ob_end_clean();
	// Remove comments
	$out = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $out);
	// Remove space after colons
	$out = str_replace(': ', ':', $out);
	// Remove whitespace
	$out = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $out);
	return $out;
}