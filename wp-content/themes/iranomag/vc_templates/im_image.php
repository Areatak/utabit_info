<?php function im_image( $atts, $content = null ) {
  $atts = vc_map_get_attributes( 'im_image', $atts );
  extract( $atts );
	
	$img_id = preg_replace('/[^\d]/', '', $image);
	
	$full = $full_width == 'true' ? 'full' : '';
	if ( ! $img_size ) {
		$img_size = 'full';
	}
	$img = wpb_getImageBySize( array( 'attach_id' => $img_id, 'thumb_size' => $img_size, 'class' => 'vc-img ' . $alignment . $full ) );
	
	if(!$img_rel) {
		$img_rel = 'bookmark';
	}

	if ( $img == NULL ) $img['thumbnail'] = '<div class="clearfix"><img src="http://placekitten.com/g/400/300" /></div>';
	
	
  $link_to = $img_link;
  
	$out =  !empty($link_to) ? '<div class="clearfix"><a class="vc-img-link" href="'.$link_to.'" rel="'.$img_rel.'">'.$img['thumbnail'].'</a></div>' : '<div class="clearfix">'.$img['thumbnail'].'</div>';

  return $out;
}
add_shortcode('im_image', 'im_image');
