<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */

 $post_count = esc_attr(ot_get_option('related_post_count'));
 
 if($post_count == 1){
	$col_style = 'col-lg-12 col-xs-12';
 } elseif($post_count == 2) {
	$col_style = 'col-md-6 col-sm-6 col-xs-12';
 } elseif($post_count % 2 == 0 && $post_count != 1 && $post_count != 2) {
	$col_style = 'col-lg-3 col-md-6 col-sm-12 col-xs-12';
 } else {
	$col_style = 'col-lg-4 col-md-4 col-sm-12 col-xs-12';
 }
 
?>

<article <?php post_class('im-article content-related content-2col ' . $col_style); ?>>
	<div class="im-entry-thumb">
		<?php if (has_post_thumbnail()) : ?>
			<a class="im-entry-thumb-link" href="<?php esc_url(the_permalink());?>" title="<?php esc_attr_e(get_the_title());?>">
			   <img <?php if(ot_get_option('Lazy_load') == 'on') echo 'class="lazy-img" data-'; ?>src="<?php the_post_thumbnail_url('2col'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
			</a>
		<?php endif; im_post_review_circle(); ?>
		<header class="im-entry-header">
			<div class="im-entry-category">
				<?php im_meta(false, false, false, false, true, false); ?>
			</div>
			<?php the_title( '<h3 class="im-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
		</header>
	</div>
	
	<div class="im-entry">
		<div class="im-entry-content">
			<?php esc_html(the_excerpt()); ?>
		</div>
	
		<footer class="im-entry-footer">
			<?php im_meta(true, true, false, true, false, false); ?>
		</footer>
	</div>
</article>
