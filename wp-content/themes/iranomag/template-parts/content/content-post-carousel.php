<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */

?>

<article <?php post_class('im-article content-carousel carousel-'.esc_html(category_id(get_the_ID())).' pull-right'); ?>>
	<a class="im-carousel-link" href="<?php echo esc_url( get_permalink() ); ?>" title="<?php the_title(); ?>"></a>
	<div class="im-carousel-background">
		<img src="<?php the_post_thumbnail_url('post-carousel-background'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
	</div>
	
	<?php im_post_review_circle(); ?>
	
	<div class="im-carousel-entry">
		<header class="im-carousel-entry-header">
			<div class="im-entry-category">
				<?php im_meta(false, false, false, false, true, false); ?>
			</div>
			<?php the_title( '<h3 class="im-carousel-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
		</header>
	
		<footer class="im-carousel-entry-footer">
			<?php im_meta(true, false, false, true, false, false); ?>
		</footer>
	</div>
</article>
