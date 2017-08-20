<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */
?>

<article <?php post_class('im-article content-2col col-md-6 col-sm-6'); ?>>
	<div class="im-entry-thumb">
		<?php if(esc_html(get_post_meta( get_the_ID(), 'meta_featured_post', true )) == 'on') {
			echo '<div class="im-2col-featured im-featured" data-featured="'.esc_html__( 'Featured Post', 'iranomag' ).'"></div>';
		} ?>
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
			<?php im_meta(true, true, true, true, false, false); ?>
		</footer>
	</div>
</article>
