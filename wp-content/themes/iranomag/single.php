<?php
/**
 * The template for displaying all single posts.
 */

$post_layout = esc_html(get_post_meta( get_the_ID(), 'meta_post_layout', true ));

get_header();
while ( have_posts() ) : the_post();
	if(empty($post_layout)) {
		get_template_part( 'template-parts/content/content', 'layout-1' );
	} else {
		switch($post_layout) {
			case 'layout-1' :
				get_template_part( 'template-parts/content/content', 'layout-1' );
				break;
			case 'layout-2' :
				get_template_part( 'template-parts/content/content', 'layout-2' );
				break;
			case 'layout-3' :
				get_template_part( 'template-parts/content/content', 'layout-3' );
				break;
			case 'layout-4' :
				get_template_part( 'template-parts/content/content', 'layout-4' );
				break;
			case 'layout-5' :
				get_template_part( 'template-parts/content/content', 'layout-5' );
				break;
		}
	}
endwhile;
if(esc_html(ot_get_option('related_posts')) == 'on') : ?>
	</div>
	<div class="im-main-row im-related-posts-row clearfix">
	<div class="im-related-posts">
		<div class="col-md-12">
			<div class="widget-head">
				<strong class="widget-title"><?php echo esc_html__('Related Posts', 'iranomag'); ?></strong>
				<div class="widget-head-bar"></div>
				<div class="widget-head-line"></div>
			</div>
		</div>
		<ul class="clearfix">
		<?php
			$tags = wp_get_post_tags( get_the_ID(), array( 'fields' => 'ids' ) );
			$count = esc_attr(ot_get_option('related_post_count'));
			$query = queryFunc('', $tags, $count);
			if ( $query->have_posts() ) {
				while ( $query->have_posts() ) {
					$query->the_post();
					echo '<li>';
					get_template_part( 'template-parts/content/content', 'related');
					echo '</li>';
				}
			}
			wp_reset_postdata();
		?>
		</ul>
	</div>
<?php endif;
get_footer();

/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/