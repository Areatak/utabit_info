<?php
add_action('init', 'im_TheShortcodesForVC');
function im_TheShortcodesForVC() {
	
	
	if (!class_exists('WPBakeryVisualComposerAbstract')) { // or using plugins path function
		return;
	}
	
	remove_action('wp_head', array(visual_composer(), 'addMetaData'));
	
	if(function_exists('vc_set_default_editor_post_types')) vc_set_default_editor_post_types( array('post','page','product') );
	
	if(function_exists('vc_set_as_theme')) vc_set_as_theme(true);
	
	add_filter( 'vc_load_default_templates', 'im_custom_template_modify_array' );
	function im_custom_template_modify_array( $data ) {
	    return array();
	}
	
	// Removing Default shortcodes
	vc_remove_element("vc_wp_search");
	vc_remove_element("vc_wp_meta");
	vc_remove_element("vc_wp_recentcomments");
	vc_remove_element("vc_wp_calendar");
	vc_remove_element("vc_wp_pages");
	vc_remove_element("vc_wp_tagcloud");
	vc_remove_element("vc_wp_custommenu");
	vc_remove_element("vc_wp_text");
	vc_remove_element("vc_wp_posts");
	vc_remove_element("vc_wp_links");
	vc_remove_element("vc_wp_categories");
	vc_remove_element("vc_wp_archives");
	vc_remove_element("vc_wp_rss");
	
	if (is_admin()) :
		function im_remove_vc_teaser() {
			remove_meta_box('vc_teaser', 'post' , 'side');
			remove_meta_box('vc_teaser', 'page' , 'side');
			remove_meta_box('vc_teaser', 'product' , 'side');
			remove_meta_box('mymetabox_revslider_0', 'page', 'normal');
			remove_meta_box('mymetabox_revslider_0', 'post', 'normal');
		}
		add_action( 'admin_head', 'im_remove_vc_teaser' );
	endif;
	
	// Shortcodes 
	require_once('visualcomposer-extend.php');
	
	/* Columns */
	function im_translateColumnWidthToSpan($width) {
	  switch ( $width ) {
	    case "1/6" :
	      $w = "col-md-2";
	      break;    
	    case "1/4" :
	    case "3/12" :
	      $w = "col-md-3";
	      break;
	    case "1/3" :
	    case "2/6" :
	    case "4/12" :
	      $w = "col-md-4";
	      break;
	    case "2/4" :
	    case "1/2" :
	      $w = "col-md-6";
	      break;
	    case "2/3" :
	    case "4/6" :
	    case "8/12" :
	    	$w = "col-md-8";
	    	break; 
	    case "3/4" :
	    case "9/12" :
	      $w = "col-md-9";
	      break;
	    case "10/12" :
	    	$w = "col-md-10";
	    	break;   
	    case "5/6" :
	      $w = "col-md-10";
	      break;    
	    case "1/1" :
	      $w = "col-md-12";
	      break;
	    case "1/12" :
	      $w = "col-md-1";
	      break;
	    case "2/12" :
	      $w = "col-md-2";
	      break;
	    case "5/12" :
	      $w = "col-md-5";
	      break;
	    case "7/12" :
	      $w = "col-md-7";
	      break;
	    default :
	      $w = $width;
	  }
	  return $w;
	}
	
	/* Offsets */
	function im_column_offset_class_merge($column_offset, $width) {
		/* Remove VC */
		$column_offset = preg_replace('/vc_col-/', '', $column_offset);
		
		/* Check If no Small setting */
		if (!preg_match('/vc_col\-(sm|xs)[^\s]*/', $column_offset))  {
			$column_offset = 'col-sm-12 '. $column_offset;
		}
		/* Change visibility */
		$column_offset = preg_replace('/vc_hidden-large/', 'hidden-lg', $column_offset);
		$column_offset = preg_replace('/vc_hidden-medium/', 'hidden-md', $column_offset);
		$column_offset = preg_replace('/vc_hidden-small/', 'hidden-sm', $column_offset);
		$column_offset = preg_replace('/vc_hidden-smallall/', 'hidden-xs', $column_offset);
		
		
		return $width.(empty($column_offset) ? '' : ' '.$column_offset);
	}
	
	// Remove visual composer plugin update notifications
	function im_filter_vc_updates( $value ) {
		if ( isset($value) && is_object($value) ) {
			unset( $value->response['js_composer/js_composer.php'] );
	    return $value;
		}
	}
	add_filter( 'site_transient_update_plugins', 'im_filter_vc_updates' );
}