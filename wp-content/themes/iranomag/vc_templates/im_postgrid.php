<?php function im_postgrid( $atts, $content = null ) {
  $atts = vc_map_get_attributes( 'im_postgrid', $atts );
  extract( $atts );
    
  $featured_index = empty($featured_index) ? array() : explode(',',$featured_index);
	$args = array(
		'post_type'=>'post', 
		'post_status' => 'publish', 
		'ignore_sticky_posts' => 1
	);
	switch($columns) {
		case 2:
			$col = 'col-md-6 col-sm-12 post-grid-2';
			break;
		case 3:
			$col = 'col-md-4 col-sm-12 post-grid-3';
			break;
		case 4:
			$col = 'col-lg-3 col-md-4 col-sm-12 post-grid-4';
			break;
	}
	if ($offset) {
		$args = wp_parse_args( 
			array(
				'offset' => $offset,
			)
		, $args );
	}
	if ($source == 'most-recent') {
		$paged = is_front_page() ? get_query_var( 'page', 1 ) : get_query_var( 'paged', 1 );

		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
				'paged' => $paged
			)
		, $args );
	} else if ($source == 'by-category') {
	 	if (!empty($cat)) {
	 		$cats = explode(',',$cat);
	 		$args = wp_parse_args( 
	 			array(
	 				'posts_per_page' => $item_count,
	 				'category__in' => $cats
	 			)
	 		, $args );	
	 	}
	} else if ($source == 'by-id') {
		$post_id_array = explode(',', $post_ids);
		
		$args = wp_parse_args( 
			array(
				'post__in' => $post_id_array,
				'posts_per_page' => 99,
				'orderby' => 'post__in'
			)
		, $args );	
	} else if ($source == 'by-tag') {
		$post_tag_array = explode(',', $tag_slugs);
		
		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
				'tag_slug__in' => $post_tag_array
			)
		, $args );	
	} else if ($source == 'by-author') {
		$post_author_array = explode(',', $author_ids);
		
		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
				'author__in' => $post_author_array
			)
		, $args );	
	} else if ($source == 'top-reviews') {
		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
				'meta_query' => array(array('key' => 'meta_is_review','value' => array( 'on' ))),
				'meta_key' => 'meta_ratings_avg',
				'orderby' => 'meta_value_num'
			)
		, $args );	
	} else if ($source == 'latest-reviews') {
		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
				'meta_query' => array(array('key' => 'meta_is_review','value' => array( 'on' ))),
				'meta_key' => 'meta_ratings_avg'
			)
		, $args );	
	} else if ($source == 'top-vote') {
		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
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
	$posts = query_posts( $args );
 	$rand = rand(0,1000);
 	ob_start();
 	
	if ( have_posts() ) { ?>

			<div class="row im-blog">
				<div class="clearfix">
				<?php $i = 1; while ( have_posts() ) : the_post(); ?>
				
					<?php if ($style == 'style1') { ?>
						<div class="small-12 columns">
							<?php 
								if(get_post_meta( get_the_ID(), 'meta_featured_post', true ) == 'on' ) {
									get_template_part( 'template-parts/content/content', '1col-featured' );
								}
								else {
									get_template_part( 'template-parts/content/content', '1col' );
								}
							?>
						</div>
					<?php } else if ($style == 'style2') { ?>
						<div class="<?php echo esc_attr($col); ?>">
							<div class="row">
								<?php get_template_part( 'template-parts/content/content', '2col-content' ); ?>
							</div>
						</div>
					<?php } ?>
				<?php $i++; endwhile; // end of the loop. ?>
				</div>
				<?php
					if ($source == 'most-recent') {
						echo '<div class="clearfix">';
						the_posts_pagination(array(
							'prev_text' 			=> '<span>'.esc_html__( "&rarr;", 'iranomag' ).'</span>',
							'next_text' 			=> '<span>'.esc_html__( "&larr;", 'iranomag' ).'</span>',
							'mid_size'				=> 2
						));
						echo '</div>';
					}
				?>
			</div>
	<?php }

   $out = ob_get_contents();
   if (ob_get_contents()) ob_end_clean();
   wp_reset_query();
   wp_reset_postdata();
     
  return $out;
}
add_shortcode('im_postgrid', 'im_postgrid');
