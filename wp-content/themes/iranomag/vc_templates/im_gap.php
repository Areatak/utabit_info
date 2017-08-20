<?php function im_gap( $atts, $content = null ) {
    extract(shortcode_atts(array(
       	'height' 	=> ''
    ), $atts));
	
	$out = '';
  $out .= '<aside class="gap cf" style="height:'.$height.'px;"></aside>';
  return $out;
}
add_shortcode('im_gap', 'im_gap');
