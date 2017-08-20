<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */
 
?>

<article <?php post_class('im-article content-block content-block-1 clearfix'); ?>>
	<div class="row">
		<div class="im-entry-thumb col-md-12">
			<a class="im-entry-link" href="<?php echo esc_url( get_permalink() ); ?>"></a>
			<?php if (has_post_thumbnail()) : ?>
				<div class="im-entry-thumb-image">
					<img <?php if(ot_get_option('Lazy_load') == 'on') echo 'class="lazy-img" data-'; ?>src="<?php the_post_thumbnail_url('grid-carousel'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
				</div>
			<?php endif; ?>
			<div class="im-entry-block block-<?php echo category_id(get_the_ID()); ?>">
				<div class="im-entry-header">
					<?php the_title( '<h3 class="im-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
				</div>
				<div class="im-entry-footer">
					<?php im_meta(true, true, true, true, false, false); ?>
				</div>
			</div>
		</div>
	</div>
</article>
