<?php function im_aparat($atts, $content = null ) {
    $atts = vc_map_get_attributes( 'im_aparat', $atts );
    extract( $atts );
    
    if(strpos($aparat_link, 'namasha.com')) {
		$id = str_replace('http://www.namasha.com/v/', '', $aparat_link);
		$embed = "<div class='im-vc-video'><iframe class='im-vc-video-frame' src='http://www.namasha.com/embed/{$id}' frameborder='0' allowfullscreen='true'></iframe></div>";
	}
	if(strpos($aparat_link, 'aparat.com')) {
		$id = str_replace('http://www.aparat.com/v/', '', $aparat_link);
		$embed = "<div class='im-vc-video'><iframe class='im-vc-video-frame' src='http://www.aparat.com/video/video/embed/videohash/{$id}/vt/frame' frameborder='0' allowfullscreen='true'></iframe></div>";
	}
    
    return $embed;
}
add_shortcode('im_aparat', 'im_aparat');
