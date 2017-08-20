<?php
get_header(); ?>
<?php $VC = class_exists('WPBakeryVisualComposerAbstract'); ?>

<?php if (have_posts()) :  while (have_posts()) : the_post(); ?>
<article <?php post_class('post post-detail'); ?> id="post-<?php esc_attr(the_ID()); ?>">
	<div class="post-content">
		<?php if ($VC) { ?>
			<div class="content-page">
				<div class="im-entry-content">
					<?php esc_html(the_content()); ?>
				</div>
			</div>
		<?php } else { ?>
			<div class="clearfix">
				<div class="content-page content-page-correction col-md-12">
					<div class="im-entry clearfix">
					<header class="im-entry-header">
						<br/>
						<?php the_title( '<h1 class="im-entry-title">', '</h1>' ); ?>
						<hr/>
					</header>
					<div class="im-entry-content">
						<?php esc_html(the_content()); ?>
					</div>
				</div>
				</div>
			</div>
		<?php } ?>
	</div>
</article>
<?php endwhile; else : endif; ?>
<?php get_footer(); ?>
