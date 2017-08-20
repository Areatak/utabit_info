<?php
/**
 * Shortcode attributes
 * @var $atts
 * @var $el_class
 * @var $full_height
 * @var $content_placement
 * @var $parallax
 * @var $parallax_image
 * @var $css
 * @var $el_id
 * @var $video_bg
 * @var $video_bg_url
 * @var $video_bg_parallax
 * @var $content - shortcode content
 * Shortcode class
 * @var $this WPBakeryShortCode_VC_Row
 */
 
$output = $data = $parallax = $video = $height = $parallax_class = '';
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

wp_enqueue_script( 'wpb_composer_front_js' );
$el_class = $this->getExtraClass($el_class);

$css_classes = array(
	$el_class,
	vc_shortcode_custom_css_class( $css ),
);
$css_class = preg_replace( '/\s+/', ' ', apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, implode( ' ', array_filter( $css_classes ) ), $this->settings['base'], $atts ) );

$output .= '<div '.($el_id ? 'id="'. esc_attr( $el_id ) .'"' : '') .' class="clearfix '.$el_class.vc_shortcode_custom_css_class($css, ' ').'" '.'>';
$output .= wpb_js_remove_wpautop($content);
$output .= '</div>';

echo $output;