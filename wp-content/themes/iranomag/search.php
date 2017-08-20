<?php
/**
 * The template for displaying search results pages.
 */

get_header(); ?>
	<div class="im-page-header clearfix">
		<div class="col-md-12">
			<div class="im-page-box clearfix">
				<div class="im-page-avatar pull-right">
					<i class="fa fa-search"></i>
				</div>
				<div class="im-page-desc">
					<div>
						<h1>
							<?php printf( esc_html__( 'Search Results for: %s', 'iranomag' ), '<span>' . get_search_query() . '</span>' ); ?>
						</h1>
						<br/>
						<p>
							<?php get_template_part( 'searchform'); ?>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
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
		<?php dynamic_sidebar( 'search' ); ?>
	</aside>

<?php
get_footer();