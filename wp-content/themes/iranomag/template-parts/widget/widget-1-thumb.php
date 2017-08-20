<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */

?>

<li class="widget-<?php esc_attr(the_ID()); ?> im-widget clearfix">
	<figure class="im-widget-thumb">
		<?php if (has_post_thumbnail()) : ?>
			<a href="<?php esc_url(the_permalink());?>" title="<?php echo esc_attr(get_the_title());?>">
				<img <?php if(ot_get_option('Lazy_load') == 'on') echo 'class="lazy-img" data-'; ?>src="<?php the_post_thumbnail_url('widget'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
			</a>
		<?php endif; ?>
	</figure>
	<div class="im-widget-entry">
		<header class="im-widget-entry-header">
			<?php the_title( '<h4 class="im-widget-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' ); ?>
		</header>
		<footer class="im-widget-entry-footer">
			<?php im_meta(true, false, false, true, false, false); ?>
		</footer>
	</div>
</li>
