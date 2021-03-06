<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */
?>

<article <?php post_class('im-article grid-carousel grid-2 row'); ?>>
	<div class="im-entry-thumb">
		<?php if (has_post_thumbnail()) : ?>
			<a class="im-entry-thumb-link" href="<?php esc_url(the_permalink());?>" title="<?php esc_attr_e(get_the_title());?>">
				<img <?php if(ot_get_option('Lazy_load') == 'on') echo 'class="lazy-img" data-'; ?>src="<?php the_post_thumbnail_url('grid-carousel-large'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
			</a>
		<?php endif; im_post_review_circle(); ?>
		<div class="im-entry-header">
			<div class="im-entry-category">
				<?php im_meta(false, false, false, false, true, false); ?>
			</div>
			<?php the_title( '<h2 class="im-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
			<div class="im-entry-footer">
				<?php im_meta(true, true, false, true, false, false); ?>
			</div>
		</div>
	</div>
</article>
