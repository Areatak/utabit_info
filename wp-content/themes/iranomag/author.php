<?php
/**
 * The template for displaying archive pages.
 */

get_header(); ?>
	<div class="im-page-header clearfix">
		<div class="col-md-12">
			<div class="im-page-box clearfix">
				<div class="im-page-avatar pull-right">
					<?php echo get_avatar( esc_html(get_the_author_meta('user_email')), 100 ); ?> 
				</div>
				<div class="im-page-desc">
					<div>
						<h1>
							<?php echo esc_html(get_the_author_meta('display_name')); ?>
						</h1>
						<p>
							<?php echo esc_html(get_the_author_meta('description')); ?> 
						</p>
						<?php if(esc_html(get_the_author_meta('url')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('url'); ?>" title="<?php echo esc_html__('WebSite', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-link"></i></a></span>
						<?php endif; if(esc_html(get_the_author_meta('facebook')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('facebook'); ?>" title="<?php echo esc_html__('Facebook', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-facebook"></i></a></span>
						<?php endif; if(esc_html(get_the_author_meta('twitter')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('twitter'); ?>" title="<?php echo esc_html__('Twitter', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-twitter"></i></a></span>
						<?php endif; if(esc_html(get_the_author_meta('gplus')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('gplus'); ?>" title="<?php echo esc_html__('Google +', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-google-plus"></i></a></span>
						<?php endif; if(esc_html(get_the_author_meta('linkedin')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('linkedin'); ?>" title="<?php echo esc_html__('LinkedIn', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-linkedin"></i></a></span>
						<?php endif; if(esc_html(get_the_author_meta('telegram')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('telegram'); ?>" title="<?php echo esc_html__('Telegram', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-paper-plane"></i></a></span>
						<?php endif; if(esc_html(get_the_author_meta('instagram')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('instagram'); ?>" title="<?php echo esc_html__('Instagram', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-instagram"></i></a></span>
						<?php endif; if(esc_html(get_the_author_meta('aparat')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('aparat'); ?>" title="<?php echo esc_html__('Aparat', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-spinner"></i></a></span>
						<?php endif; if(esc_html(get_the_author_meta('youtube')) != null) : ?>
							<span><a target="_blank" href="<?php echo get_the_author_meta('youtube'); ?>" title="<?php echo esc_html__('YouTube', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-youtube"></i></a></span>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="clearfix">
		<div class="im-content-area col-md-8 col-sm-12">
			<main class="im-blog row" role="main">
			<?php
			if ( have_posts() ) : ?>
				<?php
				echo '<div class="clearfix">';
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content/content', '1col' );
				endwhile;
				echo '</div>';
				?>
					<div class="col-md-12">
						<?php
							the_posts_pagination(array(
								'prev_text' 			=> '<span>'.esc_html__( "&rarr;", 'iranomag' ).'</span>',
								'next_text' 			=> '<span>'.esc_html__( "&larr;", 'iranomag' ).'</span>',
								'mid_size'				=> 2
							));
						?>
					</div>
				<?php
			else :
				get_template_part( 'template-parts/content/content', 'none' );
			endif; ?>
			</main>
		</div>
		<aside class="im-widget-area col-md-4 col-sm-12 sticky-sidebar" role="complementary">
			<?php dynamic_sidebar( 'author' ); ?>
		</aside>
	</div>

<?php
get_footer();