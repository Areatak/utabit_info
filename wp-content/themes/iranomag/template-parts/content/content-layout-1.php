<?php
/**
 * Template part for displaying posts.
 */
?>
<article <?php post_class('im-article content-single content-layout-1 col-md-8'); ?>>
	<div class="im-entry-thumb clearfix">
		<?php
			if (has_post_thumbnail()) {
				echo the_post_thumbnail('post', array());
			}
		?>
	</div>
	<div class="im-entry clearfix">
		<header class="im-entry-header">
			<div class="im-entry-category">
				<?php im_meta(false, false, false, false, true, false); ?>
			</div>
			<div class="im-entry-meta">
				<?php im_meta(true, true, true, true, false, false); ?>
			</div>
			<?php the_title( '<h1 class="im-entry-title">', '</h1>' ); ?>
		</header>
		<?php if(ot_get_option('post_ad_1') != null) : ?>
			<div class="im-entry-top-ad">
				<?php echo ot_get_option('post_ad_1'); ?>
			</div>
		<?php endif; ?>
		<div class="im-entry-content">
			<?php esc_html(the_content()); ?>
		</div>
		<footer class="im-entry-footer row">
			<?php get_template_part( 'template-parts/content/content', 'footer' ); ?>
		</footer>
	</div>
</article>
<aside class="im-widget-area col-md-4 col-sm-12 sticky-sidebar" role="complementary">
	<?php dynamic_sidebar( 'post' ); ?>
</aside>
