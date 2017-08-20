<?php

function im_post_review_circle() {
	$id = get_the_ID();
	if(esc_html(get_post_meta(get_the_ID(), 'meta_post_cat', true)) != null) {
		$cat_id = esc_html(get_post_meta(get_the_ID(), 'meta_post_cat', true));
	} else {
		$categories_list = get_the_category();
		if ( $categories_list && iranomag_categorized_blog() ) {
			$cat_id = $categories_list[0]->cat_ID;
		}
	}
	if (esc_html(get_post_meta($id, 'meta_is_review', TRUE)) == 'on') {
		$average_score = esc_html(get_post_meta($id, 'meta_ratings_avg', TRUE));
        $w = 52;
        $r = 22;
        $x = 26;
        $pi = 2 * 3.14 * $r;
        $percent = $pi - (($pi / 10) * $average_score);
		?>
		<div class="im-rating">
			<div class="im-cont" data-pct="<?php echo esc_attr(round( $average_score, 1, PHP_ROUND_HALF_DOWN)); ?>">
				<svg class="im-svg" width="<?php echo esc_attr($w); ?>" height="<?php echo esc_attr($w); ?>" viewbox="0 0 <?php echo esc_attr($w); ?> <?php echo esc_attr($w); ?>" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<circle class="im-path" r="<?php echo esc_attr($r); ?>" cx="<?php echo esc_attr($x); ?>" cy="<?php echo esc_attr($x); ?>" fill="transparent" stroke-dasharray="<?php echo esc_attr($pi); ?>" stroke-dashoffset="0"></circle>
					<circle class="im-bar im-bar-<?php echo $cat_id; ?>" r="<?php echo esc_attr($r); ?>" cx="<?php echo esc_attr($x); ?>" cy="<?php echo esc_attr($x); ?>" fill="transparent" stroke-dasharray="<?php echo esc_attr($pi); ?>" stroke-dashoffset="<?php echo esc_attr($percent); ?>"></circle>
				</svg>
			</div>
		</div>
		<?php
	}
}
add_action( 'im_post_review_circle', 'im_post_review_circle', 10, 2 );

/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/