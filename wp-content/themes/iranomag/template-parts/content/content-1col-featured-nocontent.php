<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */

?>

<article <?php post_class('im-article content-featured content-featured-nocontent clearfix'); ?>>
	<div class="col-sm-12">
		<div class="im-entry-thumb">
			<?php if (has_post_thumbnail()) : ?>
				<a class="im-entry-thumb-link" href="<?php esc_url(the_permalink());?>" title="<?php esc_attr_e(get_the_title());?>">
					<img <?php if(ot_get_option('Lazy_load') == 'on') echo 'class="lazy-img" data-'; ?>src="<?php the_post_thumbnail_url('featured'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
				</a>
			<?php endif; im_post_review_circle(); ?>
			<header class="im-entry-header">
				<div class="im-entry-category">
					<?php im_meta(false, false, false, false, true, false); ?>
				</div>
				<?php the_title( '<h3 class="im-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
				<div class="im-entry-footer">
					<?php im_meta(true, true, true, true, false, false); ?>
				</div>
			</header>
		</div>
	</div>
</article>
