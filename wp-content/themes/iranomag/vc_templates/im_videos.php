<?php function im_videos( $atts, $content = null ) {
  $atts = vc_map_get_attributes( 'im_videos', $atts );
  extract( $atts );

	$args = array(
		'post_type'=>'post', 
		'post_status' => 'publish', 
		'ignore_sticky_posts' => 1,
		'meta_query' => array(array('key' => 'meta_has_video','value' => array( 'on' ))),
		'posts_per_page' => 5,
	);

	if ($offset) {
		$args = wp_parse_args( 
			array(
				'offset' => $offset,
			)
		, $args );
	}
	if ($source == 'by-category') {
	 	if (!empty($cat)) {
	 		$cats = explode(',',$cat);
	 		$args = wp_parse_args( 
	 			array(
	 				'category__in' => $cats
	 			)
	 		, $args );	
	 	}
	} else if ($source == 'by-id') {
		$post_id_array = explode(',', $post_ids);
		
		$args = wp_parse_args( 
			array(
				'post__in' => $post_id_array,
				'orderby' => 'post__in'
			)
		, $args );	
	} else if ($source == 'by-tag') {
		$post_tag_array = explode(',', $tag_slugs);
		
		$args = wp_parse_args( 
			array(
				'tag_slug__in' => $post_tag_array
			)
		, $args );	
	} else if ($source == 'by-author') {
		$post_author_array = explode(',', $author_ids);
		
		$args = wp_parse_args( 
			array(
				'author__in' => $post_author_array
			)
		, $args );	
	} else if ($source == 'top-vote') {
		$args = wp_parse_args( 
			array(
				'meta_key' => 'vote_avg',
				'orderby' => 'vote_avg'
			)
		, $args );	
	} else if ($source == 'featured-post') {
		$args = wp_parse_args( 
			array(
				'meta_query' => array(array('key' => 'meta_featured_post','value' => array( 'on' )))
			)
		, $args );	
	}
	$video_posts = new WP_Query( $args );
	       
 	ob_start();
	if ( $video_posts->have_posts() ) { ?>
		<div class="video_playlist">
			<div class="row">
					<?php $i = 1; while ( $video_posts->have_posts() ) : $video_posts->the_post(); ?>
						<?php if (in_array($i, array(1))) { ?>
							<div class="im-vc-video-large <?php echo esc_attr($color); ?> clearfix">
								<div class="col-md-12">
									<?php
										$link = get_post_meta(get_the_ID() , 'meta_video_url', true);
										im_video_player($link);
										the_title( '<h3 class="im-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
										echo '<div class="im-entry-footer">';
											im_meta(true, true, true, true, false, false);
										echo '</div>';
									?>
								</div>
							</div>
							<div class="im-vc-video-small <?php echo esc_attr($color); ?> clearfix">
						<?php } ?>
						<?php if (in_array($i, array(2,3,4,5))) { ?>
							<div class="col-md-3 col-sm-6 col-xs-12">
								<?php 
									$active = $i == 1 ? 'meta_video_url' : false;
									get_template_part( 'template-parts/content/content', 'video' );
								?>
							</div>
						<?php } ?>
						<?php if (in_array($i, array(5))) { ?>
							</div>
						<?php } ?>
					<?php $i++; endwhile; // end of the loop. ?>
			</div>
		</div>
	<?php }

   $out = ob_get_contents();
   if (ob_get_contents()) ob_end_clean();
   wp_reset_query();
   wp_reset_postdata();
     
  return $out;
}
add_shortcode('im_videos', 'im_videos');
