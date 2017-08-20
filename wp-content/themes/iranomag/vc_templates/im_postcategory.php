<?php function im_postcategory( $atts, $content = null ) {
  $atts = vc_map_get_attributes( 'im_postcategory', $atts );
	extract( $atts );
	switch($style) {
		case 'style1':
			$ppp = 5;
			break;
		case 'style2':
			$ppp = 5;
			break;
		case 'style3':
			$ppp = max(1, intval($item_count));
			break;
	}
	$args = array(
		'cat' => $cat,
		'posts_per_page' => $ppp,
		'ignore_sticky_posts' => 1,
		'no_found_rows' => true
	);
	if ($offset) {
		$args = wp_parse_args( 
			array(
				'offset' => $offset,
			)
		, $args );
	}
	if ($excluded_tag_ids) {
		$excluded_tag_ids = explode(',',$excluded_tag_ids);
		$args = wp_parse_args( 
			array(
				'tag__not_in' => $excluded_tag_ids
			)
		, $args );
	}
	$posts = new WP_Query( $args );
 	$rand = rand(0,1000);
 	ob_start();
 	$counts = false;
 	$postmeta = false;
	if ( $posts->have_posts() ) { ?>
		<div class="category-element-holder <?php echo esc_attr($style); ?>">
		<?php if($title == "true") { ?>
			<div class="widget-head widget-head-<?php echo esc_attr( $cat ); ?>">
				<strong class="widget-title">
					<?php echo get_cat_name( $cat ); ?>
				</strong>
				<div class="widget-head-bar"></div>
				<div class="widget-head-line"></div>
			</div>
		<?php } ?>
  		<?php $i = 0; while ( $posts->have_posts() ) : $posts->the_post(); ?>
  			<?php if ($style == 'style1') { ?>
	  			<?php 
	  				if (in_array($i, array(0))) { 
	  					echo '<div class="row">'; 
	  						get_template_part( 'template-parts/content/content' , '2col' );
	  				} 
	  			?>
	  			<?php 
	  				if (in_array($i, array(1))) { 
	  						echo '<div class="col-md-6 col-sm-12"><div class="widget"><ul>'; 
	  				} 
	  			?>
	  			<?php 
	  				if (in_array($i, array(1,2,3,4,5))) {
	  						set_query_var( 'counts', $counts);
	  						set_query_var( 'postmeta', $postmeta );
	  						get_template_part( 'template-parts/widget/widget', '1-thumb' );
	  				} 
	  			?>
	  			<?php 
	  				if (in_array($i, array(5)) || ($i > 0 && $i + 1 == $posts->post_count)) { 
	  						echo '</ul></div></div>'; 
	  				} 
	  			?>
	  			<?php 
	  				if ($i + 1 == $posts->post_count) {
	  					echo '</div>';
	  				} 
	  			?>
  			<?php } else if ($style == 'style2') { ?>
  				<?php
					if($post_content == true) {
						$content_style = '2col-content';
					} else {
						$content_style = '2col-nocontent';
					}
	  				if (in_array($i, array(0))) { 
	  					echo '<div class="row">'; 
	  						get_template_part( 'template-parts/content/content' , $content_style );
	  				} 
	  			?>
	  			<?php 
	  				if (in_array($i, array(1))) { 
	  						echo '<div class="col-md-12"><div class="widget"><ul>'; 
	  				} 
	  			?>
	  			<?php 
	  				if (in_array($i, array(1,2,3,4,5))) {
	  						set_query_var( 'counts', $counts);
	  						set_query_var( 'postmeta', $postmeta );
	  						get_template_part( 'template-parts/widget/widget', '1-thumb' );
	  				} 
	  			?>
	  			<?php 
	  				if (in_array($i, array(5)) || ($i > 0 && $i + 1 == $posts->post_count)) { 
	  						echo '</ul></div></div>'; 
	  				} 
	  			?>
	  			<?php 
	  				if ($i + 1 == $posts->post_count) {
	  					echo '</div>';
	  				} 
	  			?>
  			<?php } else if ($style == 'style3') { ?>
				<?php 
	  				if (in_array($i, array(0))) { 
	  					echo '<div class="row">'; 
	  						get_template_part( 'template-parts/content/content' , '1col-featured-nocontent' );
						echo '</div>';
	  				} 
	  			?>
				<?php 
	  				if (in_array($i, array(1))) { 
	  					echo '<div class="row content-2col-correction">';
	  				} 
	  			?>
	  			<?php 
	  				if (!in_array($i, array(0))) {
	  						set_query_var( 'counts', $counts);
	  						set_query_var( 'postmeta', $postmeta );
	  						get_template_part( 'template-parts/content/content', '2col-half' );
	  				} 
	  			?>
	  			<?php 
	  				if ($i + 1 == $posts->post_count) {
	  					echo '</div>';
	  				} 
	  			?>
			<?php } ?>
  		<?php $i++; endwhile; // end of the loop. ?>
  		</div>
	<?php }

   $out = ob_get_contents();
   if (ob_get_contents()) ob_end_clean();
   
   wp_reset_postdata();
     
  return $out;
}
add_shortcode('im_postcategory', 'im_postcategory');
