<?php
/**
 * Template part for displaying posts.
 */
?>

	</div>
</div>

	<div class="content-layout-full">
		<div class="im-entry-thumb">
			<?php
				if (has_post_thumbnail()) {
					echo '<div class="clearfix">';
					echo the_post_thumbnail('full', array());
					echo '</div>';
				}
			?>
			<header class="im-entry-header">
				<div class="im-entry-header-box">
					<div class="im-entry-category">
						<?php im_meta(false, false, false, false, true, false); ?>
					</div>
					<?php the_title( '<h1 class="im-entry-title">', '</h1>' ); ?>
					<div class="im-entry-meta">
						<?php im_meta(true, true, true, true, false, false); ?>
					</div>
				</div>
			</header>
		</div>
	</div>

<div class="im-content container">
	<div class="im-main-row clearfix">

<article <?php post_class('im-article content-single content-layout-2 content-layout-3 content-layout-full content-layout-full-corrector'); ?>>
	<div class="clearfix">
		<div class="im-entry col-md-12">
			<?php if(ot_get_option('post_ad_1') != null) : ?>
				<div class="im-entry-top-ad">
					<?php echo ot_get_option('post_ad_1'); ?>
				</div>
			<?php endif; ?>
			<div class="im-entry-content">
				<?php esc_html(the_content()); ?>
			</div>
		
			<footer class="im-entry-footer">
				<?php get_template_part( 'template-parts/content/content', 'footer' ); ?>
			</footer>
		</div>
	</div>
</article>
