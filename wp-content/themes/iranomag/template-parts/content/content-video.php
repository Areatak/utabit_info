<?php
/**
 * Template part for displaying posts.
 */
?>
<article <?php post_class('im-article content-2col content-2col-nocontent content-video'); ?>>
	<div class="im-entry-thumb">
		<?php if (has_post_thumbnail()) : ?>
			<a class="im-entry-thumb-link" href="<?php esc_url(the_permalink());?>" title="<?php esc_attr_e(get_the_title());?>">
				<img <?php if(ot_get_option('Lazy_load') == 'on') echo 'class="lazy-img" data-'; ?>src="<?php the_post_thumbnail_url('2col'); ?>" alt="<?php esc_attr_e(get_the_title());?>" />
			</a>
		<?php endif; ?>
		<header class="im-entry-header">
			<?php the_title( '<h4 class="im-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' ); ?>
			<div class="im-entry-footer hidden-md">
				<?php im_meta(true, true, false, false, false, false); ?>
			</div>
		</header>
	</div>
</article>
