<?php
/**
 * Template part for displaying a message that posts cannot be found.
 */
?>
<section class="no-results not-found col-md-12">
	<div class="im-page-header clearfix">
		<div class="im-page-box clearfix">
			<div class="im-page-avatar pull-right">
				<i class="fa fa-warning"></i>
			</div>
			<div class="im-page-desc">
				<div>
					<h1>
						<?php esc_html_e( 'Nothing Found', 'iranomag' ); ?>
					</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="im-content-area col-md-12">
		<main class="im-blog row" role="main">
		<?php
		if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
			<p><?php printf( wp_kses( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'iranomag' ), array( 'a' => array( 'href' => array() ) ) ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
		<?php elseif ( is_search() ) : ?>

			<p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'iranomag' ); ?></p>
			<?php
				get_search_form();
		else : ?>
			<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'iranomag' ); ?></p>
			<?php
				get_search_form();
		endif; ?>
		</main>
	</div>
</section>
