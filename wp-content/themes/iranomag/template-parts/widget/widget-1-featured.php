<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */

?>

<li class="widget-<?php esc_attr(the_ID()); ?> im-widget-featured clearfix">
	<div class="im-widget-thumb-featured">
		<?php if (has_post_thumbnail()) : ?>
			<a class="im-widget-thumb-featured-link" href="<?php esc_url(the_permalink());?>" title="<?php echo esc_attr(get_the_title());?>">
				<img <?php if(ot_get_option('Lazy_load') == 'on') echo 'class="lazy-img" data-'; ?>src="<?php the_post_thumbnail_url('widget-featured'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
			</a>
		<?php endif; im_post_review_circle(); ?>
		<div class="im-widget-entry-featured clearfix">
			<div class="im-entry-category">
				<?php im_meta(false, false, false, false, true, false); ?>
			</div>
			<?php the_title( '<h4 class="im-widget-entry-featured-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' ); ?>
			<?php im_meta(true, true, false, true, false, false); ?>
		</div>
	</div>
</li>
