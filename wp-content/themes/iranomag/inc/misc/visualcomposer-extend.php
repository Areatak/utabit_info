<?php

// Shortcodes 
$shortcodes = IM_THEME_ROOT_ABS.'/vc_templates/';
$files = glob($shortcodes.'/im_?*.php');
foreach ($files as $filename)
{
	require get_template_directory().'/vc_templates/'.basename($filename);
}

// Remove parameters
vc_remove_param( "vc_row", "full_width" );
vc_remove_param( "vc_row", "content_placement" );
vc_remove_param( "vc_row", "parallax" );
vc_remove_param( "vc_row", "video_bg" );
vc_remove_param( "vc_row", "video_bg_url" );
vc_remove_param( "vc_row", "video_bg_parallax" );
vc_remove_param( "vc_row", "parallax_image" );

// Gap shortcode
vc_map( array(
	"name" => esc_html__("Gap", 'iranomag'),
	"base" => "im_gap",
	"icon" => "im_vc_ico_gap",
	"class" => "im_vc_sc_gap",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params" => array(
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Gap Height", 'iranomag'),
		  "param_name" => "height",
		  "admin_label" => true,
		  "description" => esc_html__("Enter height of the gap in px.", 'iranomag')
		)
	),
	"description" => esc_html__("Add a gap to seperate elements", 'iranomag')
) );

// Aparat shortcode
vc_map( array(
	"name" => esc_html__("Video", 'iranomag'),
	"base" => "im_aparat",
	"icon" => "im_vc_ico_aparat",
	"class" => "im_vc_sc_aparat",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params" => array(
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Aparat Link", 'iranomag'),
		  "param_name" => "aparat_link",
		  "admin_label" => true,
		  "description" => esc_html__("Enter Aparat Link.", 'iranomag')
		)
	),
	"description" => esc_html__("Display a video from Aparat.", 'iranomag')
) );

// Image shortcode
vc_map( array(
	"name" => esc_html__("Image", 'iranomag'),
	"base" => "im_image",
	"icon" => "im_vc_ico_image",
	"class" => "im_vc_sc_image",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params" => array(
		array(
			"type" => "attach_image", //attach_images
			"class" => "",
			"heading" => esc_html__("Select Image", 'iranomag'),
			"param_name" => "image",
			"description" => ""
		),
		array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Full Width?", 'iranomag'),
			"param_name" => "full_width",
			"value" => array(
				"" => "true"
			),
			"description" => esc_html__("If selected, the image will always fill its container", 'iranomag')
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Image size", 'iranomag'),
		  "param_name" => "img_size",
		  "description" => esc_html__("Enter image size. Example: thumbnail, medium, large, full or other sizes defined by current theme. Alternatively enter image size in pixels: 200x100 (Width x Height). Leave empty to use 'thumbnail' size.", 'iranomag')
		),
		array(
		  "type" => "dropdown",
		  "heading" => esc_html__("Image alignment", 'iranomag'),
		  "param_name" => "alignment",
		  "value" => array(esc_html__("Align left", 'iranomag') => "alignleft", esc_html__("Align right", 'iranomag') => "alignright", esc_html__("Align center", 'iranomag') => "aligncenter"),
		  "description" => "Select image alignment."
		),
		array(
		  "type" => "vc_link",
		  "heading" => esc_html__("Image link", 'iranomag'),
		  "param_name" => "img_link",
		  "description" => esc_html__("Enter url if you want this image to have link.", 'iranomag')
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Rel Attr", 'iranomag'),
		  "param_name" => "img_rel",
		  "description" => esc_html__("Enter image link rel attribute. Example: bookmark, follow, nofollow & ...", 'iranomag')
		),
	),
	"description" => esc_html__("Add an image", 'iranomag')
) );

// Posts Carousel
vc_map( array(
	"name" => esc_html__("Posts Carousel", 'iranomag'),
	"base" => "im_postcarousel",
	"icon" => "im_vc_ico_postcarousel",
	"class" => "im_vc_sc_postcarousel",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params"	=> array(
		array(
			"type" => "dropdown",
			"heading" => esc_html__("Posts Source", 'iranomag'),
			"param_name" => "source",
			"value" => array(
				esc_html__('Most Recent', 'iranomag') => "most-recent",
				esc_html__('By Category', 'iranomag') => "by-category",
				esc_html__('By Post ID', 'iranomag') => "by-id",
				esc_html__('By Tag', 'iranomag') => "by-tag",
				esc_html__('By Author', 'iranomag') => "by-author",
				esc_html__('Top Reviews', 'iranomag') => "top-reviews",
				esc_html__('Latest Reviews', 'iranomag') => "latest-reviews",
				esc_html__('Top User Vote', 'iranomag') => "top-vote",
				esc_html__('By Featured Post', 'iranomag') => "featured-post"
				),
			"admin_label" => true,
			"description" => esc_html__("Select the source of the posts you'd like to show.", 'iranomag')
		),
		array(
		  "type" => "checkbox",
		  "heading" => esc_html__("Post Categories", 'iranomag'),
		  "param_name" => "cat",
		  "value" => im_blogCategories(),
		  "description" => esc_html__("Which categories would you like to show?", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-category'))
		),
		array(
		  "type" => "textfield",
		  "class" => "",
		  "heading" => esc_html__("Number of posts", 'iranomag'),
		  "param_name" => "item_count",
		  "value" => "5",
		  "description" => esc_html__("The number of posts to show.", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-category', 'by-tag', 'by-share', 'by-author', 'most-recent', 'top-reviews', 'latest-reviews', 'top-vote', 'featured-post'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Excluded Tag IDs", 'iranomag'),
		  "param_name" => "excluded_tag_ids",
		  "description" => esc_html__("Enter the tag ids you would like to exclude from the most recent posts separated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('most-recent'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Excluded Category IDs", 'iranomag'),
		  "param_name" => "excluded_cat_ids",
		  "description" => esc_html__("Enter the category ids you would like to exclude from the most recent posts separated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('most-recent'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Post IDs", 'iranomag'),
		  "param_name" => "post_ids",
		  "description" => esc_html__("Enter the post IDs you would like to display seperated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-id'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Tag slugs", 'iranomag'),
		  "param_name" => "tag_slugs",
		  "description" => esc_html__("Enter the tag slugs you would like to display seperated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-tag'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Author IDs", 'iranomag'),
		  "param_name" => "author_ids",
		  "description" => esc_html__("Enter the Author IDs you would like to display seperated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-author'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Offset", 'iranomag'),
		  "param_name" => "offset",
		  "description" => esc_html__("You can offset your post with the number of posts entered in this setting", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('most-recent', 'by-category', 'by-tag', 'by-author', 'top-reviews', 'latest-reviews', 'top-vote', 'featured-post'))
		)
	),
	"description" => esc_html__("Display Posts from your blog in a Carousel", 'iranomag')
) );

// Posts Category
vc_map( array(
	"name" => esc_html__("Posts Category", 'iranomag'),
	"base" => "im_postcategory",
	"icon" => "im_vc_ico_postcategory",
	"class" => "im_vc_sc_postcategory",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params"	=> array(
		array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Display Category Title?", 'iranomag'),
			"param_name" => "title",
			"value" => array(
				"" => "true"
			),
			"description" => esc_html__("If selected, the category title will be displayed on top", 'iranomag')
		),
		array(
		    "type" => "dropdown",
		    "heading" => esc_html__("Style", 'iranomag'),
		    "param_name" => "style",
		    "admin_label" => true,
		    "value" => array(
		    	esc_html__("Style 1", 'iranomag') => "style1",
		    	esc_html__("Style 2", 'iranomag') => "style2",
		    	esc_html__("Style 3", 'iranomag') => "style3"
		    ),
		    "description" => esc_html__("This changes the style of the posts", 'iranomag')
		),
		array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Display Post Content?", 'iranomag'),
			"param_name" => "post_content",
			"value" => array(
				"" => "true"
			),
			"description" => esc_html__("If selected, the content of the post will be displayed", 'iranomag'),
			"dependency" => Array('element' => "style", 'value' => array('style2'))
		),
		array(
		  "type" => "dropdown",
		  "heading" => esc_html__("Post Categories", 'iranomag'),
		  "param_name" => "cat",
		  "value" => im_blogCategories(),
		  "description" => esc_html__("Which category would you like to show?", 'iranomag')
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Excluded Tag IDs", 'iranomag'),
		  "param_name" => "excluded_tag_ids",
		  "description" => esc_html__("Enter the tag ids you would like to exclude separated by comma", 'iranomag')
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Number of posts", 'iranomag'),
		  "param_name" => "item_count",
		  "value" => "",
		  "description" => esc_html__("The number of posts to show.<small>Minium 1</small>", 'iranomag'),
		  "dependency" => Array('element' => "style", 'value' => array('style3'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Offset", 'iranomag'),
		  "param_name" => "offset",
		  "description" => esc_html__("You can offset your post with the number of posts entered in this setting", 'iranomag')
		)
	),
	"description" => esc_html__("Display a Category with posts", 'iranomag')
) );

// Posts Grid
vc_map( array(
	"name" => esc_html__("Posts Grid", 'iranomag'),
	"base" => "im_postgrid",
	"icon" => "im_vc_ico_postgrid",
	"class" => "im_vc_sc_postgrid",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params"	=> array(
		array(
		    "type" => "dropdown",
		    "heading" => esc_html__("Style", 'iranomag'),
		    "param_name" => "style",
		    "admin_label" => true,
		    "value" => array(
		    	esc_html__("Style 1", 'iranomag') => "style1",
		    	esc_html__("Style 2", 'iranomag') => "style2"
		    ),
		    "description" => esc_html__("This changes the layouts of the grids", 'iranomag')
		),
	  array(
	  	"type" => "dropdown",
	  	"heading" => esc_html__("Posts Source", 'iranomag'),
	  	"param_name" => "source",
	  	"value" => array(
	  		esc_html__('Most Recent', 'iranomag') => "most-recent",
	  		esc_html__('By Category', 'iranomag') => "by-category",
	  		esc_html__('By Post ID', 'iranomag') => "by-id",
	  		esc_html__('By Tag', 'iranomag') => "by-tag",
	  		esc_html__('By Author', 'iranomag') => "by-author",
			esc_html__('Top Reviews', 'iranomag') => "top-reviews",
			esc_html__('Latest Reviews', 'iranomag') => "latest-reviews",
			esc_html__('Top User Vote', 'iranomag') => "top-vote",
			esc_html__('By Featured Post', 'iranomag') => "featured-post"
	  	),
	  	"std" => "most-recent",
	  	"admin_label" => true,
	  	"description" => esc_html__("Select the source of the posts you'd like to show.", 'iranomag')
	  ),
	  array(
	    "type" => "checkbox",
	    "heading" => esc_html__("Post Categories", 'iranomag'),
	    "param_name" => "cat",
	    "value" => im_blogCategories(),
	    "description" => esc_html__("Which categories would you like to show?", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-category'))
	  ),
	  array(
	    "type" => "textfield",
	    "class" => "",
	    "heading" => esc_html__("Number of posts", 'iranomag'),
	    "param_name" => "item_count",
	    "value" => "4",
	    "description" => esc_html__("The number of posts to show.", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('most-recent','by-category', 'by-tag', 'by-share', 'by-author', 'top-reviews', 'latest-reviews', 'top-vote', 'featured-post'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Post IDs", 'iranomag'),
	    "param_name" => "post_ids",
	    "description" => esc_html__("Enter the post IDs you would like to display seperated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-id'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Tag slugs", 'iranomag'),
	    "param_name" => "tag_slugs",
	    "description" => esc_html__("Enter the tag slugs you would like to display seperated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-tag'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Author IDs", 'iranomag'),
	    "param_name" => "author_ids",
	    "description" => esc_html__("Enter the Author IDs you would like to display seperated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-author'))
	  ),
	  array(
	      "type" => "dropdown",
	      "heading" => esc_html__("Columns", 'iranomag'),
	      "param_name" => "columns",
	      "admin_label" => true,
	      "value" => array(
	      	esc_html__("Four Columns", 'iranomag') => "4",
	      	esc_html__("Three Columns", 'iranomag') => "3",
	      	esc_html__("Two Columns", 'iranomag') => "2"
	      ),
	      "description" => esc_html__("Select the layout of the posts.", 'iranomag'),
	      "dependency" => Array('element' => "style", 'value' => array('style2'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Offset", 'iranomag'),
	    "param_name" => "offset",
	    "description" => esc_html__("You can offset your post with the number of posts entered in this setting", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('most-recent', 'by-category', 'by-tag', 'by-author', 'top-reviews', 'latest-reviews', 'top-vote', 'featured-post'))
	  ),
	),
	"description" => esc_html__("Display your posts in different grid layouts.", 'iranomag')
) );

// Posts Grid Box
vc_map( array(
	"name" => esc_html__("Posts Grid Box", 'iranomag'),
	"base" => "im_postgrid_box",
	"icon" => "im_vc_ico_postgrid_box",
	"class" => "im_vc_sc_postgrid_box",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params"	=> array(
	  array(
	      "type" => "dropdown",
	      "heading" => esc_html__("Style", 'iranomag'),
	      "param_name" => "style",
	      "admin_label" => true,
	      "value" => array(
	      	esc_html__("Style 1", 'iranomag') => "style1",
	      	esc_html__("Style 2", 'iranomag') => "style2",
	      	esc_html__("Style 3", 'iranomag') => "style3",
	      	esc_html__("Style 4", 'iranomag') => "style4"
	      ),
	      "description" => esc_html__("This changes the layouts of the grids", 'iranomag')
	  ),
	  array(
	  	"type" => "dropdown",
	  	"heading" => esc_html__("Posts Source", 'iranomag'),
	  	"param_name" => "source",
	  	"value" => array(
	  		esc_html__('Most Recent', 'iranomag') => "most-recent",
	  		esc_html__('By Category', 'iranomag') => "by-category",
	  		esc_html__('By Post ID', 'iranomag') => "by-id",
	  		esc_html__('By Tag', 'iranomag') => "by-tag",
	  		esc_html__('By Author', 'iranomag') => "by-author",
			esc_html__('Top Reviews', 'iranomag') => "top-reviews",
			esc_html__('Latest Reviews', 'iranomag') => "latest-reviews",
			esc_html__('Top User Vote', 'iranomag') => "top-vote",
			esc_html__('By Featured Post', 'iranomag') => "featured-post"
	  	),
	  	"std" => "most-recent",
	  	"admin_label" => true,
	  	"description" => esc_html__("Select the source of the posts you'd like to show.", 'iranomag')
	  ),
	  array(
	    "type" => "checkbox",
	    "heading" => esc_html__("Post Categories", 'iranomag'),
	    "param_name" => "cat",
	    "value" => im_blogCategories(),
	    "description" => esc_html__("Which categories would you like to show?", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-category'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Excluded Tag IDs", 'iranomag'),
	    "param_name" => "excluded_tag_ids",
	    "description" => esc_html__("Enter the tag ids you would like to exclude from the most recent posts separated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('most-recent'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Excluded Category IDs", 'iranomag'),
	    "param_name" => "excluded_cat_ids",
	    "description" => esc_html__("Enter the category ids you would like to exclude from the most recent posts separated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('most-recent'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Post IDs", 'iranomag'),
	    "param_name" => "post_ids",
	    "description" => esc_html__("Enter the post IDs you would like to display seperated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-id'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Tag slugs", 'iranomag'),
	    "param_name" => "tag_slugs",
	    "description" => esc_html__("Enter the tag slugs you would like to display seperated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-tag'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Author IDs", 'iranomag'),
	    "param_name" => "author_ids",
	    "description" => esc_html__("Enter the Author IDs you would like to display seperated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-author'))
	  )
	),
	"description" => esc_html__("Display different grid layouts inside a box", 'iranomag')
) );

// Post Block
vc_map( array(
	"name" => esc_html__("Post Block", 'iranomag'),
	"base" => "im_postblock",
	"icon" => "im_vc_ico_postblock",
	"class" => "im_vc_sc_postblock",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params"	=> array(
		array(
		    "type" => "dropdown",
		    "heading" => esc_html__("Style", 'iranomag'),
		    "param_name" => "style",
		    "admin_label" => true,
		    "value" => array(
		    	esc_html__("Style 1", 'iranomag') => "style1",
		    	esc_html__("Style 2", 'iranomag') => "style2"
		    ),
		    "description" => esc_html__("This changes the layouts of the grids", 'iranomag')
		),
	    array(
			"type" => "dropdown",
			"heading" => esc_html__("Posts Source", 'iranomag'),
			"param_name" => "source",
			"value" => array(
				esc_html__('Most Recent', 'iranomag') => "most-recent",
				esc_html__('By Category', 'iranomag') => "by-category",
				esc_html__('By Post ID', 'iranomag') => "by-id",
				esc_html__('By Tag', 'iranomag') => "by-tag",
				esc_html__('By Author', 'iranomag') => "by-author",
				esc_html__('Top Reviews', 'iranomag') => "top-reviews",
				esc_html__('Latest Reviews', 'iranomag') => "latest-reviews",
				esc_html__('Top User Vote', 'iranomag') => "top-vote",
				esc_html__('By Featured Post', 'iranomag') => "featured-post"
				),
			"admin_label" => true,
			"description" => esc_html__("Select the source of the posts you'd like to show.", 'iranomag')
		),
		array(
		  "type" => "checkbox",
		  "heading" => esc_html__("Post Categories", 'iranomag'),
		  "param_name" => "cat",
		  "value" => im_blogCategories(),
		  "description" => esc_html__("Which categories would you like to show?", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-category'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Excluded Tag IDs", 'iranomag'),
		  "param_name" => "excluded_tag_ids",
		  "description" => esc_html__("Enter the tag ids you would like to exclude from the most recent posts separated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('most-recent'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Excluded Category IDs", 'iranomag'),
		  "param_name" => "excluded_cat_ids",
		  "description" => esc_html__("Enter the category ids you would like to exclude from the most recent posts separated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('most-recent'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Post IDs", 'iranomag'),
		  "param_name" => "post_ids",
		  "description" => esc_html__("Enter the post IDs you would like to display seperated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-id'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Tag slugs", 'iranomag'),
		  "param_name" => "tag_slugs",
		  "description" => esc_html__("Enter the tag slugs you would like to display seperated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-tag'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Author IDs", 'iranomag'),
		  "param_name" => "author_ids",
		  "description" => esc_html__("Enter the Author IDs you would like to display seperated by comma", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('by-author'))
		),
		array(
		  "type" => "textfield",
		  "heading" => esc_html__("Offset", 'iranomag'),
		  "param_name" => "offset",
		  "description" => esc_html__("You can offset your post with the number of posts entered in this setting", 'iranomag'),
		  "dependency" => Array('element' => "source", 'value' => array('most-recent', 'by-category', 'by-tag', 'by-author', 'top-reviews', 'latest-reviews', 'top-vote', 'featured-post'))
		)
	),
	"description" => esc_html__("Display a post in block grid layouts.", 'iranomag')
) );

// Title shortcode
vc_map( array(
	"name" => esc_html__("Title", 'iranomag'),
	"base" => "im_title",
	"icon" => "im_vc_ico_title",
	"class" => "im_vc_sc_title",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params" => array(
		array(
		  "type" => "textfield",
		  "class" => "",
		  "heading" => esc_html__("Title", 'iranomag'),
		  "param_name" => "title",
		  "value" => "",
		  "description" => esc_html__("The title text", 'iranomag')
		),
		array(
		    "type" => "dropdown",
		    "heading" => esc_html__("Color", 'iranomag'),
		    "param_name" => "color",
		    "admin_label" => true,
		    "value" => array(
		    	esc_html__("Light", 'iranomag') => "light",
		    	esc_html__("Dark", 'iranomag') => "dark"
		    ),
		    "description" => esc_html__("This changes the color of the title", 'iranomag')
		)
	),
	"description" => esc_html__("Add a title to your sections", 'iranomag')
) );

/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/

// Video Playlist
vc_map( array(
	"name" => esc_html__("Video Playlist", 'iranomag'),
	"base" => "im_videos",
	"icon" => "im_vc_ico_videos",
	"class" => "im_vc_sc_videos",
	"category" => esc_html__("IranoMag", 'iranomag'),
	"params"	=> array(
	  array(
	  	"type" => "dropdown",
	  	"heading" => esc_html__("Posts Source", 'iranomag'),
	  	"param_name" => "source",
	  	"value" => array(
	  		esc_html__('Most Recent', 'iranomag') => "most-recent",
	  		esc_html__('By Category', 'iranomag') => "by-category",
	  		esc_html__('By Tag', 'iranomag') => "by-tag",
	  		esc_html__('By Author', 'iranomag') => "by-author",
			esc_html__('Top User Vote', 'iranomag') => "top-vote",
			esc_html__('By Featured Post', 'iranomag') => "featured-post"
	  	),
	  	"std" => "most-recent",
	  	"admin_label" => true,
	  	"description" => esc_html__("Select the source of the posts you'd like to show.", 'iranomag')
	  ),
	  array(
	    "type" => "checkbox",
	    "heading" => esc_html__("Post Categories", 'iranomag'),
	    "param_name" => "cat",
	    "value" => im_blogCategories(),
	    "description" => esc_html__("Which categories would you like to show?", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-category'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Tag slugs", 'iranomag'),
	    "param_name" => "tag_slugs",
	    "description" => esc_html__("Enter the tag slugs you would like to display seperated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-tag'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Author IDs", 'iranomag'),
	    "param_name" => "author_ids",
	    "description" => esc_html__("Enter the Author IDs you would like to display seperated by comma", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('by-author'))
	  ),
	  array(
	    "type" => "textfield",
	    "heading" => esc_html__("Offset", 'iranomag'),
	    "param_name" => "offset",
	    "description" => esc_html__("You can offset your post with the number of posts entered in this setting", 'iranomag'),
	    "dependency" => Array('element' => "source", 'value' => array('most-recent', 'by-category', 'by-tag', 'by-author', 'top-vote', 'featured-post'))
	  ),
	  array(
		    "type" => "dropdown",
		    "heading" => esc_html__("Color", 'iranomag'),
		    "param_name" => "color",
		    "admin_label" => true,
		    "value" => array(
		    	esc_html__("Light", 'iranomag') => "light",
		    	esc_html__("Dark", 'iranomag') => "dark"
		    ),
		    "description" => esc_html__("This changes the color of the video playlist", 'iranomag')
		)
	),
	"description" => esc_html__("Display your video posts in a playlist", 'iranomag')
) );