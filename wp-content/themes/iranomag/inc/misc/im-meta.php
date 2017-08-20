<?php


if ( ! function_exists( 'im_meta' ) ) :
function im_meta($t, $c, $a, $p, $cat, $tag) {
    echo '<div class="iranomag-meta clearfix">';
    // Display time
    if($t == true) {
        $time_string = '<span class="entry-date published updated">%1$s</span>';

    	$time_string = sprintf( $time_string,
    		esc_html( get_the_date( ot_get_option('date_layout') ) )
    	);

    	$posted_on = sprintf('<div class="posted-on im-meta-item">' . $time_string . '</div>');
        echo $posted_on;
	}
	
	/*
	* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
	* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
	* فروش و پشتیبانی تنها در مارکت وردپرس
	*/
	
	// Display comments
	if ( $c == true && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
	    /*echo '<div class="comments-link im-meta-item">';
	    comments_popup_link( '<i class="fa fa-comment-o"></i>' . esc_html__( '0', 'iranomag' ),
							'<i class="fa fa-comment-o"></i>' . esc_html__( '1', 'iranomag' ),
							'<i class="fa fa-comment-o"></i>' . esc_html__( '%', 'iranomag' ) );
	    echo '</div>';*/
	}

	// Display author
	if($a == true) {
    	$byline = sprintf(
    	    esc_html_x( '%s', 'post author', 'iranomag' ),
    	    '<div class="author vcard im-meta-item"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '"><i class="fa fa-user"></i>' . esc_html( get_the_author() ) . '</a></div>'
    	);
        echo $byline;
	}
	
	// Display post views
	if($p == true) {
    	$post_views = sprintf(
    	    esc_html_x( '%s', 'post views', 'iranomag' ),
    	    impv_postviews()
    	);
    	echo '<div class="post-views im-meta-item"><i class="fa fa-eye"></i>';
        echo $post_views;
        echo '</div>';
	}
	
	// Display category
	if($cat == true) {
	    if(get_post_meta(get_the_ID(), 'meta_post_cat', true) != null) {
	        $cat_id = esc_attr(get_post_meta(get_the_ID(), 'meta_post_cat', true));
	        $cat_name = esc_html(get_the_category_by_ID($cat_id));
	        $cat_url = esc_url(get_category_link($cat_id));
	        echo '<div class="cat-links im-meta-item"><a class="im-catlink-color-' . $cat_id . '" href="' . $cat_url . '" title="' . $cat_name . '">' . $cat_name . '</a></div>';
	    } else {
	        $categories_list = get_the_category();
	        if ( $categories_list && iranomag_categorized_blog() ) {
	            echo '<div class="cat-links im-meta-item"><a class="im-catlink-color-'.$categories_list[0]->cat_ID.'" href="'.get_category_link($categories_list[0]->cat_ID).'">' . $categories_list[0]->cat_name . '</a></div>';
			}
	    }
	}
	
	// Display tags
	if($tag == true) {
    	$tags_list = get_the_tag_list( '<div class="im-tag-items">', '', '</div>' );
    	if ( $tags_list ) {
    	    printf( '<div class="tags-links im-meta-item"><div class="im-tag-title clearfix"><i class="fa fa-tags"></i>' . esc_html__( 'Tags', 'iranomag' ) . '</div>' . esc_html__( '%1$s' ) . '</div>', $tags_list ); // WPCS: XSS OK.
    	}
	}
	echo '</div>';
}
endif;

/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/

/**
 * Returns true if a blog has more than 1 category.
 *
 * @return bool
 */
function iranomag_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'iranomag_categories' ) ) ) {
		// Create an array of all the categories that are attached to posts.
		$all_the_cool_cats = get_categories( array(
			'fields'     => 'ids',
			'hide_empty' => 1,
			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'iranomag_categories', $all_the_cool_cats );
	}

	if ( $all_the_cool_cats > 1 ) {
		// This blog has more than 1 category so iranomag_categorized_blog should return true.
		return true;
	} else {
		// This blog has only 1 category so iranomag_categorized_blog should return false.
		return false;
	}
}

/**
 * Flush out the transients used in iranomag_categorized_blog.
 */
function iranomag_category_transient_flusher() {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	// Like, beat it. Dig?
	delete_transient( 'iranomag_categories' );
}
add_action( 'edit_category', 'iranomag_category_transient_flusher' );
add_action( 'save_post',     'iranomag_category_transient_flusher' );
