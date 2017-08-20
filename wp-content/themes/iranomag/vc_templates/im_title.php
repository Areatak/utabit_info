<?php function im_title( $atts, $content = null ) {
    $atts = vc_map_get_attributes( 'im_title', $atts );
    extract( $atts );
        $out = '<div class="widget-head '.esc_attr($color).'"><strong class="widget-title">'.esc_attr($title).'</strong><div class="widget-head-bar"></div><div class="widget-head-line"></div></div>';
    return $out;
}
add_shortcode('im_title', 'im_title');
