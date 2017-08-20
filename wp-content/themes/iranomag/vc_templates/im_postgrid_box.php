<?php function im_postgrid_box( $atts, $content = null ) {
	
	$atts = vc_map_get_attributes( 'im_postgrid_box', $atts );
	extract( $atts );
	
	$args = array(
		'nopaging' => 0, 
		'post_type'=>'post', 
		'post_status' => 'publish', 
		'ignore_sticky_posts' => 1,
		'no_found_rows' => true,
		'suppress_filters' => 0
	);
	
	switch($style) {
 		case 'style1':
			$item_count = 3;
 			$counter = range(0, 100, 3);
 			break;
 		case 'style2':
			$item_count = 6;
 			$counter = range(0, 100, 1);
 			break;
		case 'style3':
			$item_count = 5;
 			$counter = range(0, 100, 5);
 			break;
		case 'style4':
			$item_count = 5;
 			$counter = range(0, 100, 5);
 			break;
 	}
	
	if ($source == 'most-recent') {
		$excluded_tag_ids = explode(',',$excluded_tag_ids);
		$excluded_cat_ids = explode(',',$excluded_cat_ids);
		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
				'tag__not_in' => $excluded_tag_ids,
				'category__not_in' => $excluded_cat_ids
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
				'posts_per_page' => $item_count,
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
	} else if ($source == 'top-vote') {
		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
				'meta_key' => 'vote_avg',
				'orderby' => 'vote_avg'
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
	} else if ($source == 'featured-post') {
		$args = wp_parse_args( 
			array(
				'posts_per_page' => $item_count,
				'meta_query' => array(array('key' => 'meta_featured_post','value' => array( 'on' )))
			)
		, $args );	
	}
	$posts = new WP_Query( $args );
 	$length = $posts->found_posts;
 	ob_start();
 	$counts = false;
	if ( $posts->have_posts() ) { ?>
			<div class="im_post_grid_box clearfix">
				<?php $i = 0; while ( $posts->have_posts() ) : $posts->the_post(); ?>
						<?php if ('style1' == $style) { ?>
							<?php 
								if (in_array($i, $counter)) { 
									echo '<div class="clearfix grid-slider">'; 
										echo '<div class="col-md-8 col-sm-12">';
											get_template_part( 'template-parts/grid/grid', '2' );
										echo '</div><div class="col-md-4 col-sm-12"><div class="row">'; 
								} else {
										echo '<div class="col-md-12 columns">';
											get_template_part( 'template-parts/grid/grid', '1-small' );
										echo '</div>';
								} ?>
							<?php 
								if (in_array($i + 1, $counter)) { 
									echo '</div></div></div>'; 
								} 
							?>
						<?php } else if ('style2' == $style) { ?>
							<?php 
								if (in_array($i, $counter)) { 
									echo '<div class="col-md-4 col-sm-6 col-xs-12">';
										get_template_part( 'template-parts/grid/grid', '1-small' );
								}
							?>
							<?php 
								if (in_array($i + 1, $counter)) { 
									echo '</div>'; 
								} 
							?>
						<?php } else if ('style3' == $style) { ?>
							<?php 
								if (in_array($i, $counter)) { 
									echo '<div class="clearfix">'; 
								}
							?>
							<?php
								if (in_array($i, array(0))) { 
									echo '<div class="col-md-8 col-sm-12">';
										get_template_part( 'template-parts/grid/grid', '1-large' );
									echo '</div>';
								}
							?>
							<?php 
								if (in_array($i, array(1))) { 
									echo '<div class="col-md-4 col-sm-12">';
										get_template_part( 'template-parts/grid/grid', '1-small' );
									echo '</div></div>';
								}
							?>
							<?php 
								if (in_array($i, array(2))) { 
									echo '<div class="clearfix">'; 
								}
							?>
							<?php
								if (in_array($i, array(2,3,4))) { 
									echo '<div class="col-md-4 col-sm-12">';
										get_template_part( 'template-parts/grid/grid', '1-small' );
									echo '</div>';
								}
							?>
							<?php 
								if (in_array($i, array(4))) { 
									echo '</div>'; 
								} 
							?>
						<?php } else if ('style4' == $style) { ?>
							<?php 
								if (in_array($i, $counter)) { 
									echo '<div class="clearfix">'; 
								}
							?>
								
							<?php
								if (in_array($i, array(0,1))) { 
									echo '<div class="col-md-6 col-sm-12">';
										get_template_part( 'template-parts/grid/grid', '2' );
									echo '</div>';
								}
							?>
							<?php 
								if (in_array($i, array(1))) { 
									echo '</div>'; 
								}
							?>
							<?php 
								if (in_array($i, array(2))) { 
									echo '<div class="clearfix">'; 
								}
							?>
							<?php
								if (in_array($i, array(2,3,4))) { 
									echo '<div class="col-md-4 col-sm-12">';
										get_template_part( 'template-parts/grid/grid', '1-small' );
									echo '</div>';
								}
							?>
							<?php 
								if (in_array($i, array(4))) { 
									echo '</div>'; 
								} 
							?>
						<?php } ?>
				<?php $i++; endwhile; // end of the loop. ?>
			</div>
   <?php
	 }
   $out = ob_get_contents();
   if (ob_get_contents()) ob_end_clean();
   
   wp_reset_postdata();
     
  return $out;
}
add_shortcode('im_postgrid_box', 'im_postgrid_box');