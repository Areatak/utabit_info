<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */

?>

<article <?php post_class('im-article content-column clearfix'); ?>>
	<div class="im-entry-thumb col-md-5 col-sm-12">
		<?php if (has_post_thumbnail()) : ?>
			<a class="im-entry-thumb-link" href="<?php esc_url(the_permalink());?>" title="<?php esc_attr_e(get_the_title());?>">
				<img <?php if(ot_get_option('Lazy_load') == 'on') echo 'class="lazy-img" data-'; ?>src="<?php the_post_thumbnail_url('blog'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
			</a>
		<?php endif; im_post_review_circle(); ?>
	</div>
	
	<div class="im-entry col-md-7 col-sm-12">
		<header class="im-entry-header">
			<div class="im-entry-category">
				<?php im_meta(false, false, false, false, true, false); ?>
			</div>
			<?php the_title( '<h3 class="im-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
		</header>
	
		<div class="im-entry-content">
			<?php esc_html(the_excerpt()); ?>
		</div>
	
		<footer class="im-entry-footer">
			<?php im_meta(true, true, true, true, false, false); ?>
		</footer>
	</div>
</article>
