<?php
function im_background($array) {
	if(!empty($array)) {
		if (!empty($array['background-color'])) { 
			echo "background-color: " . $array['background-color'] . " !important;\n";
		}
		if (!empty($array['background-image'])) { 
			echo "background-image: url(" . $array['background-image'] . ") !important;\n";
		}
		if (!empty($array['background-repeat'])) { 
			echo "background-repeat: " . $array['background-repeat'] . " !important;\n";
		}
		if (!empty($array['background-attachment'])) { 
			echo "background-attachment: " . $array['background-attachment'] . " !important;\n";
		}
		if (!empty($array['background-position'])) { 
			echo "background-position: " . $array['background-position'] . " !important;\n";
		}
		if (!empty($array['background-size'])) { 
			echo "background-size: " . $array['background-size'] . " !important;\n";
		}
	}
}

function sanitize_pagination($content) {
    // Remove role attribute
    $content = str_replace('role="navigation"', '', $content);

    // Remove h2 tag
    $content = preg_replace('#<h2.*?>(.*?)<\/h2>#si', '', $content);

    return $content;
}

add_action('navigation_markup_template', 'sanitize_pagination');

function im_font($array, $important = false, $default = false) {
    if(!empty($array)) {
        if (!empty($array['font-family'])) {
            echo "font-family: '" . $array['font-family'] . "';\n";
        } else if ($default) {
            echo "font-family: '" . $default . "';\n";
        }
        if (!empty($array['font-color'])) {
            echo "color: " . $array['font-color'] . ";\n";
        }
        if (!empty($array['font-style'])) {
            echo "font-style: " . $array['font-style'] . ";\n";
        }
        if (!empty($array['font-variant'])) {
            echo "font-variant: " . $array['font-variant'] . ";\n";
        }
        if (!empty($array['font-weight'])) {
            echo "font-weight: " . $array['font-weight'] . ";\n";
        }
        if (!empty($array['font-size'])) {
            	
            if ($important) {
                echo "font-size: " . $array['font-size'] . " !important;\n";
            } else {
                echo "font-size: " . $array['font-size'] . ";\n";
            }
        }
        if (!empty($array['text-decoration'])) {
            echo "text-decoration: " . $array['text-decoration'] . " !important;\n";
        }
        if (!empty($array['text-transform'])) {
            echo "text-transform: " . $array['text-transform'] . " !important;\n";
        }
        if (!empty($array['line-height'])) {
            echo "line-height: " . $array['line-height'] . " !important;\n";
        }
        if (!empty($array['letter-spacing'])) {
            echo "letter-spacing: " . $array['letter-spacing'] . " !important;\n";
        }
    }
    if(empty($array) && !empty($default)) {
        echo "font-family: '" . $default . "';\n";
    }
}

function im_padding($array) {
    if(!empty($array)) {
        if (!empty($array['top'])) {
            echo "padding-top: " . $array['top'] . $array['unit'].";\n";
        }
        if (!empty($array['right'])) {
            echo "padding-right: " . $array['right'] . $array['unit'].";\n";
        }
        if (!empty($array['bottom'])) {
            echo "padding-bottom: " . $array['bottom'] . $array['unit'].";\n";
        }
        if (!empty($array['left'])) {
            echo "padding-left: " . $array['left'] . $array['unit'].";\n";
        }
    }
}

function im_measurement($array, $std = false) {
	if(!empty($array)) {
		return esc_attr($array[0] . $array[1]);
	} else if (!empty($std)) {
		return esc_attr($std[0] . $std[1]);
	}
}

function im_hex2rgb($hex) {
    $hex = str_replace("#", "", $hex);
    if(strlen($hex) == 3) {
      $r = hexdec(substr($hex,0,1).substr($hex,0,1));
      $g = hexdec(substr($hex,1,1).substr($hex,1,1));
      $b = hexdec(substr($hex,2,1).substr($hex,2,1));

    } else {
        $r = hexdec(substr($hex,0,2));
        $g = hexdec(substr($hex,2,2));
        $b = hexdec(substr($hex,4,2));
    }
    $rgb = array($r, $g, $b);
    return implode(",", $rgb); // returns the rgb values separated by commas
}

function im_colorAdjuster($color_code,$percentage_adjuster = 0) {
    $percentage_adjuster = round($percentage_adjuster/100,2);
    if(is_array($color_code)) {
        $r = $color_code["r"] - (round($color_code["r"])*$percentage_adjuster);
        $g = $color_code["g"] - (round($color_code["g"])*$percentage_adjuster);
        $b = $color_code["b"] - (round($color_code["b"])*$percentage_adjuster);
        return array("r"=> round(max(0,min(255,$r))),
            "g"=> round(max(0,min(255,$g))),
            "b"=> round(max(0,min(255,$b))));
    }
    else if(preg_match("/#/",$color_code)) {
        $hex = str_replace("#","",$color_code);
        $r = (strlen($hex) == 3)? hexdec(substr($hex,0,1).substr($hex,0,1)):hexdec(substr($hex,0,2));
        $g = (strlen($hex) == 3)? hexdec(substr($hex,1,1).substr($hex,1,1)):hexdec(substr($hex,2,2));
        $b = (strlen($hex) == 3)? hexdec(substr($hex,2,1).substr($hex,2,1)):hexdec(substr($hex,4,2));
        $r = round($r - ($r*$percentage_adjuster));
        $g = round($g - ($g*$percentage_adjuster));
        $b = round($b - ($b*$percentage_adjuster));
        return "#".str_pad(dechex( max(0,min(255,$r)) ),2,"0",STR_PAD_LEFT)
            .str_pad(dechex( max(0,min(255,$g)) ),2,"0",STR_PAD_LEFT)
            .str_pad(dechex( max(0,min(255,$b)) ),2,"0",STR_PAD_LEFT);
    }
}

function dl_select($value) {
    switch($value) {
        case "dark" :
            echo "dark";
            break;
        case "light" :
            echo "light";
            break;
    }
}

function header_style($value) {
	switch($value) {
        case "header-1" :
            get_template_part( 'template-parts/header/header', '1' );
            break;
        case "header-2" :
            get_template_part( 'template-parts/header/header', '2' );
            break;
		case "header-3" :
            get_template_part( 'template-parts/header/header', '3' );
            break;
    }
}

function social_link() {
	$array = array('<span class="im-facebook"><i class="fa fa-facebook"></i>'.esc_html__('Facebook', 'iranomag').'</span>' => ot_get_option('social_facebook'),
			  '<span class="im-twitter"><i class="fa fa-twitter"></i>'.esc_html__('Twitter', 'iranomag').'</span>' => ot_get_option('social_twitter'),
			  '<span class="im-google"><i class="fa fa-google-plus"></i>'.esc_html__('Google +', 'iranomag').'</span>' => ot_get_option('social_google'),
			  '<span class="im-linkedin"><i class="fa fa-linkedin"></i>'.esc_html__('LinkedIn', 'iranomag').'</span>' => ot_get_option('social_linkedin'),
			  '<span class="im-instagram"><i class="fa fa-instagram"></i>'.esc_html__('Instagram', 'iranomag').'</span>' => ot_get_option('social_insta'),
			  '<span class="im-telegram"><i class="fa fa-paper-plane"></i>'.esc_html__('Telegram', 'iranomag').'</span>' => ot_get_option('social_telegram'),
			  '<span class="im-aparat"><i class="fa fa-spinner"></i>'.esc_html__('Aparat', 'iranomag').'</span>' => ot_get_option('social_aparat'),
			  '<span class="im-youtube"><i class="fa fa-youtube"></i>'.esc_html__('YouTube', 'iranomag').'</span>' => ot_get_option('social_youtube'));
	if(!empty($array)) {
		echo '<ul>';
		foreach($array as $key => $value) {
			if(!empty($value)) {
				echo '<li>';
				echo '<a href="'.$value.'">'.$key.'</a>';
				echo '</li>';
			}
		}
		echo '</ul>';
	}
}

function social_link_mobile() {
	$array = array('<span class="im-facebook" title="'.esc_html__('Facebook', 'iranomag').'"><i class="fa fa-facebook"></i></span>' => ot_get_option('social_facebook'),
			  '<span class="im-twitter" title="'.esc_html__('Twitter', 'iranomag').'"><i class="fa fa-twitter"></i></span>' => ot_get_option('social_twitter'),
			  '<span class="im-google" title="'.esc_html__('Google +', 'iranomag').'"><i class="fa fa-google-plus"></i></span>' => ot_get_option('social_google'),
			  '<span class="im-linkedin" title="'.esc_html__('LinkedIn', 'iranomag').'"><i class="fa fa-linkedin"></i></span>' => ot_get_option('social_linkedin'),
			  '<span class="im-instagram" title="'.esc_html__('Instagram', 'iranomag').'"><i class="fa fa-instagram"></i></span>' => ot_get_option('social_insta'),
			  '<span class="im-telegram" title="'.esc_html__('Telegram', 'iranomag').'"><i class="fa fa-paper-plane"></i></span>' => ot_get_option('social_telegram'),
			  '<span class="im-aparat" title="'.esc_html__('Aparat', 'iranomag').'"><i class="fa fa-spinner"></i></span>' => ot_get_option('social_aparat'),
			  '<span class="im-youtube" title="'.esc_html__('YouTube', 'iranomag').'"><i class="fa fa-youtube"></i></span>' => ot_get_option('social_youtube'));
	if(!empty($array)) {
		echo '<ul class="im-social-links-mobile clearfix">';
		foreach($array as $key => $value) {
			if(!empty($value)) {
				echo '<li>';
				echo '<a href="'.$value.'">'.$key.'</a>';
				echo '</li>';
			}
		}
		echo '</ul>';
	}
}

function footer_widget() {
	$col = '';
	$footer = '';
	switch(ot_get_option("footer_style")) {
		case '4widget' :
			$col = 3;
			break;
		case '3widget' :
			$col = 4;
			break;
		case '2widget' :
			$col = 6;
			break;
	}
	$widgets = 12/$col;
	for($i = 1; $i <= $widgets; $i++) {
		$footer = 'footer-'.$i;
		echo '<div class="col-md-'.$col.' col-sm-12">';
		dynamic_sidebar( $footer );
		echo '</div>';
	}
}

function queryFunc($cat = null, $tag = null, $count = null, $off = null, $key = null, $val = null, $ord = null, $osc = null, $meta_key = null) {
    if($key != '') {
        $meta = array(array('key' => $key,'value' => array( $val )));
    }
    $query = new WP_Query(array(
        'cat' => isset($cat) ? $cat : '',
        'tag__in' => isset($tag) ? $tag : '',
        'posts_per_page' => isset($count) ? $count : '',
        'offset' => isset($off) ? $off : '',
        'post_status' => 'publish',
		'ignore_sticky_posts' => 1,
        'meta_query' => isset($meta) ? $meta : '',
		'meta_key' => $meta_key,
        'orderby' => isset($ord) ? $ord : '',
		'order' => isset($osc) ? $osc : ''
    ));
    return $query;
}

/**
 * Filter to add custom option types.
 *
 * @param     array     An array of option types.
 * @return    array
 */
function add_custom_option_types( $types ) {
  $types['category_colorpicker'] = esc_html__('Choose Category Color', 'iranomag');
  return $types;
}
add_filter( 'ot_option_types_array', 'add_custom_option_types' );

/**
 * Category Colorpicker option type.
 *
 * See @ot_display_by_type to see the full list of available arguments.
 *
 * @param     array     An array of arguments.
 * @return    string
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_type_category_colorpicker' ) ) {
  function ot_type_category_colorpicker( $args = array() ) {
    /* turns arguments array into variables */
    extract( $args );
    /* verify a description */
    $has_desc = $field_desc ? true : false;
    $args = array(
    	'type'                     => 'post',
    	'child_of'                 => 0,
    	'parent'                   => '',
    	'orderby'                  => 'name',
    	'order'                    => 'ASC',
    	'hide_empty'               => 0,
    	'hierarchical'             => 0,
    	'exclude'                  => '',
    	'include'                  => '',
    	'number'                   => '',
    	'taxonomy'                 => 'category',
    	'pad_counts'               => false 
    );
    global $sitepress;
    if ($sitepress) {
    	remove_filter('terms_clauses', array($sitepress, 'terms_clauses'));
    }
    $categories = get_terms( 'category', array( 'hide_empty'    => false ) );
    foreach ($categories as $category) {
    	$field_id = 'category_colors_'.$category->term_id;
    	$field_name = 'option_tree[category_colors_'.$category->term_id.']';
    	$field_value = ot_get_option($field_id);
    	/* format setting outer wrapper */
	    echo '<div class="format-setting type-colorpicker im-category-colorpicker has-desc format-settings">';
	      /* description */
	      echo '<div class="description">'.esc_html__('Category Color', 'iranomag').' "' . $category->name . '"</div>';
	      /* format setting inner wrapper */
	      echo '<div class="format-setting-inner">'; 
	        /* build colorpicker */  
	        echo '<div class="option-tree-ui-colorpicker-input-wrap">';
	          /* colorpicker JS */      
	          echo '<script>jQuery(document).ready(function($) { OT_UI.bind_colorpicker("' . esc_attr( $field_id ) . '"); });</script>';
	          /* input */
	          echo '<input type="text" name="' . esc_attr( $field_name ) . '" id="' . esc_attr( $field_id ) . '" value="' . esc_attr( $field_value ) . '" class="hide-color-picker  wp-color-picker ' . esc_attr( $field_class ) . '" autocomplete="off" />';
	          /* set border color */
	          //$border_color = in_array( $field_value, array( '#FFFFFF', '#FFF', '#ffffff', '#fff' ) ) ? '#ccc' : esc_attr( $field_value );
	          // echo '<div id="cp_' . esc_attr( $field_id ) . '" class="cp_box"' . ( $field_value ? " style='background-color:" . esc_attr( $field_value ) . "; border-color:$border_color;'" : '' ) . '></div>';
	        echo '</div>';
	      echo '</div>';
	    echo '</div>';
    }
  }
}

/* Post Categories Array */
function im_blogCategories(){
	$blog_categories = get_categories();
	$out = array();
	foreach($blog_categories as $category) {
		$out[$category->name] = $category->cat_ID;
	}
	return $out;
}

// Calulate average post score
function score_avg($post_id) {
	$post = get_post($post_id);
	if(get_post_meta($post_id, 'meta_is_review', TRUE) == 'on') {
		$ratings = get_post_meta($post_id, 'meta_ratings_percentage', TRUE);
		$scores = array();
		foreach($ratings as $rate) {
			array_push($scores, $rate['meta_score']);
		}
		$scores_sum = array_sum($scores);
		$scores_avg = count($scores);
		$average_score = $scores_sum/$scores_avg;	
		update_post_meta($post_id, 'meta_ratings_avg', esc_attr(round( $average_score, 1, PHP_ROUND_HALF_DOWN)));
	}
}
add_action( 'save_post', 'score_avg', 10, 1 );


/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/

remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10 );

// Set Vote Average 0
function vote_avg_save($post_id) {
	$avg = get_post_meta($post_id, 'vote_avg', true);
	if(empty($avg)) {
		$avg = 0;
	}
	update_post_meta($post_id, "vote_avg", $avg);
}
add_action( 'save_post', 'vote_avg_save', 10, 1 );

// get post category id
function category_id($postID) {
	if(get_post_meta($postID, 'meta_post_cat', true) != null) {
		$cat_id = get_post_meta($postID, 'meta_post_cat', true);
	} else {
		$categories_list = get_the_category();
		if ( $categories_list && iranomag_categorized_blog() ) {
		$cat_id = $categories_list[0]->cat_ID;
		}
	}
	return $cat_id;
}

// Edit Category widget
function category_edit($output) {
	$output = str_replace(' (','<span> ',$output);
	$output = str_replace(')','</span> ',$output);
	return $output;
}
add_filter('wp_list_categories', 'category_edit');

// Post Download Items
function download_item($post_id) {
	if(get_post_meta($post_id, 'meta_has_download', TRUE) == 'on') {
		$links = get_post_meta($post_id, 'meta_download_links', TRUE);
		echo '<ul>';
		foreach($links as $link) {
			switch($link['meta_download_type']) {
				case 'download_link':
					echo '<li class="im-post-download-item-link"><a href="' . $link['meta_link'] . '" rel="nofollow" target="_blank"><i class="fa fa-download"></i>'. $link['title'] .'</a></li>';
					break;
				case 'download_title':
					echo '<li class="im-post-download-item-title"><strong><i class="fa fa-info"></i>'. $link['title'] .'</strong></li>';
					break;
				case 'download_desc':
					echo '<li class="im-post-download-item-desc"><span><i class="fa fa-ellipsis-h"></i>'. $link['title'] .'</span></li>';
					break;
				case 'download_external':
					echo '<li class="im-post-download-item-exlink"><a href="' . $link['meta_link'] . '" rel="nofollow" target="_blank"><i class="fa fa-external-link"></i>'. $link['title'] .'</a></li>';
					break;
				case 'download_space':
					echo '<li class="im-post-download-item-space"></li>';
					break;
			}
		}
		echo '</ul>';
	}
}

// Post Review Items
function review_item($post_id) {
	if(get_post_meta($post_id, 'meta_is_review', TRUE) == 'on') {
		$ratings = get_post_meta($post_id, 'meta_ratings_percentage', TRUE);
		foreach($ratings as $rate) { ?>
			<div class="clearfix">
				<h3 class="review-item-title"><?php echo $rate['title']; ?></h3>
				<div class="review-path">
					<div class="review-line" style="width: <?php echo ($rate['meta_score']*10); ?>%"></div>
					<div class="review-score"><?php echo $rate['meta_score']; ?></div>
				</div>
			</div>
		<?php }
	}
}

// Post Review Pros/Cons
function review_proscons($post_id) {
	if(get_post_meta($post_id, 'meta_is_review', TRUE) == 'on') {
		if(get_post_meta($post_id, 'meta_proscons', TRUE) != null) {
			$proscons = get_post_meta($post_id, 'meta_proscons', TRUE);
			echo '<div class="col-md-6 col-sm-6"><h2>'.__( 'Pros', 'iranomag' ).'</h2><ul>';
			foreach($proscons as $item) {
				if($item['meta_pc_status'] == 'pros') { ?>
				<li><i class="fa fa-check"></i><?php echo $item['title']; ?></li>
			<?php } }
			echo '</ul></div><div class="col-md-6 col-sm-6"><h2>'.__( 'Cons', 'iranomag' ).'</h2><ul>';
			foreach($proscons as $item) {
				if($item['meta_pc_status'] == 'cons') { ?>
				<li><i class="fa fa-times"></i><?php echo $item['title']; ?></li>
			<?php } }
			echo '</ul></div>';
		}
	}
}

function review_avg($post_id) {
	if (get_post_meta($post_id, 'meta_is_review', TRUE) == 'on') {
		$average_score = get_post_meta($post_id, 'meta_ratings_avg', TRUE);
        $w = 118;
        $r = 55;
        $x = 59;
        $pi = 2 * 3.14 * $r;
        $percent = $pi - (($pi / 10) * $average_score);
		?>
		<div class="review-avg-rating">
			<div id="review-avg-cont" data-pct="<?php echo esc_attr(round( $average_score, 1, PHP_ROUND_HALF_DOWN)); ?>">
				<svg id="review-avg-svg" width="<?php echo esc_attr($w); ?>" height="<?php echo esc_attr($w); ?>" viewPort="0 0 <?php echo esc_attr($w); ?> <?php echo esc_attr($w); ?>" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<circle id="review-avg-path" r="<?php echo esc_attr($r); ?>" cx="<?php echo esc_attr($x); ?>" cy="<?php echo esc_attr($x); ?>" fill="transparent" stroke-dasharray="<?php echo esc_attr($pi); ?>" stroke-dashoffset="0"></circle>
					<circle id="review-avg-bar" r="<?php echo esc_attr($r); ?>" cx="<?php echo esc_attr($x); ?>" cy="<?php echo esc_attr($x); ?>" fill="transparent" stroke-dasharray="<?php echo esc_attr($pi); ?>" stroke-dashoffset="<?php echo esc_attr($percent); ?>"></circle>
				</svg>
			</div>
		</div>
		<?php
	}
}

function user_vote($val) {
	if ( !wp_verify_nonce( $_REQUEST['nonce'], "user_".$val."_nonce")) {
		exit("No naughty business please");
	} 
	$vote_count = get_post_meta($_REQUEST["post_id"], "$val", true);
	$vote_count = ($vote_count == '') ? 0 : $vote_count;
	$new_vote_count = $vote_count + 1;
	$votes = update_post_meta($_REQUEST["post_id"], "$val", $new_vote_count);
	
	if($val == 'likes') {
		$disval_count = get_post_meta($_REQUEST["post_id"], "dislikes", true);
	} else {
		$disval_count = get_post_meta($_REQUEST["post_id"], "likes", true);
	}
	$disval_count = ($disval_count == '') ? 0 : $disval_count;
	
	if($new_vote_count == '0' || $disval_count == '0') {
		if($val == 'likes') {
			$vote_avg = round($new_vote_count/1, 2);
		} else {
			$vote_avg = round($disval_count/1, 2);
		}
	}
	else {
		if($val == 'likes') {
			$vote_avg = round($new_vote_count/$disval_count, 2);
		} else {
			$vote_avg = round($disval_count/$new_vote_count, 2);
		}
	}
	$user_avg = update_post_meta($_REQUEST["post_id"], "vote_avg", $vote_avg);
	
	$result['type'] = "success";
	$result[$val.'_count'] = $new_vote_count;
	$result['avg_count'] = $vote_avg;
	if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
		$result = json_encode($result);
		echo $result;
	}
	else {
		header("Location: ".$_SERVER["HTTP_REFERER"]);
	}
	die();
}

/* Likes */
function user_likes() {
	user_vote('likes');
}
add_action("wp_ajax_user_likes", "user_likes");
add_action("wp_ajax_nopriv_user_likes", "user_likes");

/* Dislikes */
function user_dislikes() {
	user_vote('dislikes');
}
add_action("wp_ajax_user_dislikes", "user_dislikes");
add_action("wp_ajax_nopriv_user_dislikes", "user_dislikes");

/* search query currection */
function SearchFilter($query) {
    if ($query->is_search) {
        $query->set('post_type', 'post');
    }
    return $query;
}
add_filter('pre_get_posts','SearchFilter');

function im_typo($array, $important = false, $default = false) {
	global $im_fontlist;
	
	if(!empty($array)) {
		
		if (!empty($array['font-family'])) { 
			echo "font-family: '" . $array['font-family'] . "';\n";
		} else if ($default) {
			echo "font-family: '" . $default . "';\n";
		}
		if (!empty($array['font-color'])) { 
			echo "color: " . $array['font-color'] . ";\n";
		}
		if (!empty($array['font-style'])) { 
			echo "font-style: " . $array['font-style'] . ";\n";
		}
		if (!empty($array['font-variant'])) { 
			echo "font-variant: " . $array['font-variant'] . ";\n";
		}
		if (!empty($array['font-weight'])) { 
			echo "font-weight: " . $array['font-weight'] . ";\n";
		}
		if (!empty($array['font-size'])) { 
			
			if ($important) {
				echo "font-size: " . $array['font-size'] . " !important;\n";
			} else {
				echo "font-size: " . $array['font-size'] . ";\n";
			}
		}
		if (!empty($array['text-decoration'])) { 
				echo "text-decoration: " . $array['text-decoration'] . " !important;\n";
		}
		if (!empty($array['text-transform'])) { 
				echo "text-transform: " . $array['text-transform'] . " !important;\n";
		}
		if (!empty($array['line-height'])) { 
				echo "line-height: " . $array['line-height'] . " !important;\n";
		}
		if (!empty($array['letter-spacing'])) { 
				echo "letter-spacing: " . $array['letter-spacing'] . " !important;\n";
		}
	}
	if(empty($array) && !empty($default)) {
		echo "font-family: '" . $default . "';\n";
	}
}

function im_video_player($link) {
	if(strpos($link, 'namasha.com')) {
		$id = str_replace('http://www.namasha.com/v/', '', $link);
		$embed = "<div class='im-vc-video'><iframe class='im-vc-video-frame' src='http://www.namasha.com/embed/{$id}' frameborder='0' allowfullscreen='true'></iframe></div>";
	}
	if(strpos($link, 'aparat.com')) {
		$id = str_replace('http://www.aparat.com/v/', '', $link);
		$embed = "<div class='im-vc-video'><iframe class='im-vc-video-frame' src='http://www.aparat.com/video/video/embed/videohash/{$id}/vt/frame' frameborder='0' allowfullscreen='true'></iframe></div>";
	}
	echo $embed;
}

function lightbox_func( $atts, $content = '' ) {
    return "<span class='im-lightbox-content'>$content</span>";
}
add_shortcode( 'lb', 'lightbox_func' );

function im_modify_contact_methods($profile_fields) {

	// Add new fields
	$profile_fields['facebook'] = esc_html__('Facebook', 'iranomag');
	$profile_fields['twitter'] = esc_html__('Twitter', 'iranomag');
	$profile_fields['gplus'] = esc_html__('Google +', 'iranomag');
	$profile_fields['linkedin'] = esc_html__('LinkedIn', 'iranomag');
	$profile_fields['telegram'] = esc_html__('Telegram', 'iranomag');
	$profile_fields['instagram'] = esc_html__('Instagram', 'iranomag');
	$profile_fields['aparat'] = esc_html__('Aparat', 'iranomag');
	$profile_fields['youtube'] = esc_html__('YouTube', 'iranomag');

	return $profile_fields;
}
add_filter('user_contactmethods', 'im_modify_contact_methods');

/**
 * Disable the emoji's
 */
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );	
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );	
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}
add_action( 'init', 'disable_emojis' );

/**
 * Filter function used to remove the tinymce emoji plugin.
 * 
 * @param    array  $plugins  
 * @return   array             Difference betwen the two arrays
 */
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}

// Remove WP embed script
function speed_stop_loading_wp_embed() {
if (!is_admin()) {
wp_deregister_script('wp-embed');
}
}
add_action('init', 'speed_stop_loading_wp_embed');
