<?php function im_postblock( $atts, $content = null ) {
	$atts = vc_map_get_attributes( 'im_postblock', $atts );
	extract( $atts );
	ob_start();
	$args = array(
		'post_type'=>'post', 
		'post_status' => 'publish',
		'posts_per_page' => 1,
		'ignore_sticky_posts' => 1,
	);
	if ($offset) {
		$args = wp_parse_args( 
			array(
				'offset' => $offset,
			)
		, $args );
	}
	if ($source == 'most-recent') {
		$excluded_tag_ids = explode(',',$excluded_tag_ids);
		$excluded_cat_ids = explode(',',$excluded_cat_ids);
		$args = wp_parse_args( 
			array(
				'tag__not_in' => $excluded_tag_ids,
				'category__not_in' => $excluded_cat_ids
			)
		, $args );
	} else if ($source == 'by-category') {
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
	} else if ($source == 'top-reviews') {
		$args = wp_parse_args( 
			array(
				'meta_query' => array(array('key' => 'meta_is_review','value' => array( 'on' ))),
				'meta_key' => 'meta_ratings_avg',
				'orderby' => 'meta_value_num'
			)
		, $args );	
	} else if ($source == 'latest-reviews') {
		$args = wp_parse_args( 
			array(
				'meta_query' => array(array('key' => 'meta_is_review','value' => array( 'on' ))),
				'meta_key' => 'meta_ratings_avg'
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
	$posts = new WP_Query( $args );
	if ( $posts->have_posts() ) { ?>
		<div class="clearfix im-post-block">
			<?php while ( $posts->have_posts() ) : $posts->the_post(); ?>
				<?php if($style == 'style1') { ?>
					<?php get_template_part( 'template-parts/content/content', 'block-1' ); ?>
				<?php } elseif($style == 'style2') { ?>
					<?php get_template_part( 'template-parts/content/content', 'block-2' ); ?>
				<?php } ?>
			<?php endwhile; ?>
		</div>
	<?php }
 $out = ob_get_contents();
 if (ob_get_contents()) ob_end_clean();
return $out;
}
add_shortcode('im_postblock', 'im_postblock');
