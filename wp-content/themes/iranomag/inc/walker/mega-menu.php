<?php

/* Category ID on Menu */
function im_category_id_on_menu( $classes, $item ) {
  if( $item->object !== 'category' )
		return $classes;
		
	$classes[] = 'menu-item-category-' . $item->object_id;
	return $classes;
}
add_filter( 'nav_menu_css_class', 'im_category_id_on_menu', 10, 2 );

/**
 * Custom Walker :: NON_BS_Walker
 *
 * @access      public
 * @since       1.0
 * @return      void
 */
class MegaMenu_Walker extends Walker_Nav_Menu {

    private $in_sub_menu = 0;
	var $active_megamenu = 0;
	var $mega_menu_content;
    
    /**
     * @see Walker::start_lvl()
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param int $depth Depth of page. Used for padding.
     */
    function start_lvl(&$output, $depth = 0, $args = array()) {
        $indent = str_repeat("\t", $depth);
        if($depth === 0) $output .= "\n{replace_one}\n";
        $output .= "\n$indent<ul class=\"sub-menu ".(($depth === 0) ? "{locate_class}": "")."\">\n";
    }
    
    /**
	* @see Walker::end_lvl()
	*
	* @param string $output Passed by reference. Used to append additional content.
	* @param int $depth Depth of page. Used for padding.
	*/
	function end_lvl(&$output, $depth = 0, $args = array()) {
	  $indent = str_repeat("\t", $depth);
	  $output .= "$indent</ul>\n";
	  if($depth === 0 && $this->active_megamenu) {
	  	$output.= '<div class="category-children">'.$this->mega_menu_content.'</div>';
	  }
		if($depth === 0) {
			if($this->active_megamenu) {
				$output = str_replace("{replace_one}", '<div class="im_mega_menu_holder clearfix">', $output);
				$output = str_replace("{locate_class}", "im_mega_menu", $output);
			}
			else {
			  $output = str_replace("{locate_class}", "", $output);
			  $output = str_replace("{replace_one}", "", $output);
			}
		}
		$this->mega_menu_content = '';
	}
	
	function start_el(&$output, $item, $depth = 0, $args = array(), $current_object_id = 0) {
	    $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
	     
	    $classes = empty( $item->classes ) ? array() : (array) $item->classes;
	    $classes[] = 'menu-item-' . $item->ID;
	     
	    if( $depth == 1 ) {
	        if( ! $this->in_sub_menu ) {
	            $this->in_sub_menu = 1;
	            array_push($classes, 'active');
	        }
	    }
	    if( $depth == 0 ) {
	        $this->in_sub_menu = 0;
	        $this->active_megamenu = get_post_meta( $item->ID, '_menu_item_megamenu', true);
	    }
	     
	    if($depth === 0 && $this->active_megamenu)
	    {
	        array_push($classes, 'menu-item-mega-parent');
	    }
		
		/*
		* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
		* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
		* فروش و پشتیبانی تنها در مارکت وردپرس
		*/
		 
	    $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
	    $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';
	
	    $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args, $depth );
	    $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';
	
	    $output .= $indent . '<li' . $id . $class_names . '>';
	
	    $atts = array();
	    $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
	    $atts['target'] = ! empty( $item->target )     ? $item->target     : '';
	    $atts['rel']    = ! empty( $item->xfn )        ? $item->xfn        : '';
	    $atts['href']   = ! empty( $item->url )        ? $item->url        : '';
	     
	    $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );
	     
	    $attributes = '';
	    foreach ( $atts as $attr => $value ) {
	        if ( ! empty( $value ) ) {
	            $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
	            $attributes .= ' ' . $attr . '="' . $value . '"';
	        }
	    }
	
	    $item_output = $args->before;
		$item_output .= '<a'. $attributes .'>';
	    if( $depth == 1 && $this->active_megamenu ) {
	    } else {
	        $this->in_sub_menu = 1;
	    }
	    $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
		if( $depth == 0 && in_array('menu-item-has-children', $item->classes) ) {
			$item_output .= '<i class="fa fa-angle-down"></i></a>';
	    } else {
		  $item_output .= '</a>';
		}
	    $item_output .= $args->after;
	
	    $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
	}
    
    public function end_el( &$output, $item, $depth = 0, $args = array() ) {
		if( $depth == 1 && $this->in_sub_menu ) {
			
			if (in_array($item->object, array('post_tag','category', 'post_format'))) {
				if ($item->object == 'post_tag') {
					$args = array(
					    'tag_id' => $item->object_id,
					    'posts_per_page' => 3,
					    'no_found_rows' => true
					);
				} else if ($item->object == 'category') {
					$args = array(
					    'cat' => $item->object_id,
					    'posts_per_page' => 3,
					    'no_found_rows' => true					
					);
				} else if ($item->object == 'post_format') {
					$format = get_term($item->object_id, 'post_format');
					$args = array(
					    'posts_per_page' => 3,
					    'tax_query' => array(
			            array(
	            			'taxonomy' => 'post_format',
	            			'field'    => 'slug',
	            			'terms'    => array( $format->slug ),
	            			'operator' => 'IN'
	            		),
			        )
					);
					
				}
				$query = new WP_Query($args);
				ob_start();
					if ($query->have_posts()) {
					    echo '<div class="im_mega_menu_holder_row clearfix">';
						while ($query->have_posts()) : $query->the_post();
							get_template_part( 'template-parts/mega-menu');
						endwhile;
						echo '</div>';
					}
				$this->mega_menu_content .= ob_get_contents();
				ob_end_clean();
				wp_reset_query();
				wp_reset_postdata();
			}
		}
		if( $depth == 0 && $this->active_megamenu){
			$output .= '</div>';
		}
		$output .= "</li>\n";
	}
}

/* Custom Menu Fields */
$GLOBALS['im_custom_menu'] = new rc_im_custom_menu();

class rc_im_custom_menu {

    /*--------------------------------------------*
     * Constructor
     *--------------------------------------------*/

    /**
     * Initializes the plugin by setting localization, filters, and administration functions.
     */
    function __construct() {


        // add custom menu fields to menu
        add_filter( 'wp_setup_nav_menu_item', array( $this, 'rc_scm_add_custom_nav_fields' ) );

        // save menu custom fields
        add_action( 'wp_update_nav_menu_item', array( $this, 'rc_scm_update_custom_nav_fields'), 10, 3 );

        // edit menu walker
        add_filter( 'wp_edit_nav_menu_walker', array( $this, 'rc_scm_edit_walker'), 10, 2 );

    } // end constructor


    /**
     * Add custom fields to $item nav object
     * in order to be used in custom Walker
     *
     * @access      public
     * @since       1.0
     * @return      void
     */
    function rc_scm_add_custom_nav_fields( $menu_item ) {

        $menu_item->megamenu = get_post_meta( $menu_item->ID, '_menu_item_megamenu', true );
        return $menu_item;

    }
	
	/*
	* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
	* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
	* فروش و پشتیبانی تنها در مارکت وردپرس
	*/

    /**
     * Save menu custom fields
     *
     * @access      public
     * @since       1.0
     * @return      void
     */
    function rc_scm_update_custom_nav_fields( $menu_id, $menu_item_db_id, $args ) {

        // Check if element is properly sent
        if (!isset($_REQUEST['edit-menu-item-megamenu'][$menu_item_db_id])) {
            $_REQUEST['edit-menu-item-megamenu'][$menu_item_db_id] = '';
        }
        $menu_mega_enabled_value = $_REQUEST['edit-menu-item-megamenu'][$menu_item_db_id];
        update_post_meta( $menu_item_db_id, '_menu_item_megamenu', $menu_mega_enabled_value );
    }

    /**
     * Define new Walker edit
     *
     * @access      public
     * @since       1.0
     * @return      void
     */
    function rc_scm_edit_walker($walker,$menu_id) {

        return 'Walker_Nav_Menu_Edit_Custom';
    }
}

/**
 *  /!\ This is a copy of Walker_Nav_Menu_Edit class in core
 *
 * Create HTML list of nav menu input items.
 *
 * @package WordPress
 * @since 3.0.0
 * @uses Walker_Nav_Menu
 */
class Walker_Nav_Menu_Edit_Custom extends Walker_Nav_Menu  {
    /**
     * @see Walker::$tree_type
     * @var string
     */
    var $tree_type = array( 'post_type', 'taxonomy', 'custom' );

    /**
     * @see Walker::$db_fields
     * @todo Decouple this.
     * @var array
    */
    var $db_fields = array( 'parent' => 'menu_item_parent', 'id' => 'db_id' );


    /**
     * @see Walker_Nav_Menu::start_lvl()
     * @since 3.0.0
     *
     * @param string $output Passed by reference.
    */
    function start_lvl(&$output, $depth = 0, $args = array()) {
    }

    /**
     * @see Walker_Nav_Menu::end_lvl()
     * @since 3.0.0
     *
     * @param string $output Passed by reference.
     */
    function end_lvl(&$output, $depth = 0, $args = array()) {
    }
    /**
     * @see Walker::start_el()
     * @since 3.0.0
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param object $item Menu item data object.
     * @param int $depth Depth of menu item. Used for padding.
     * @param object $args
     */
    function start_el(&$output, $item, $depth = 0, $args = array(), $current_object_id = 0) {
        global $_wp_nav_menu_max_depth;

        $_wp_nav_menu_max_depth = $depth > $_wp_nav_menu_max_depth ? $depth : $_wp_nav_menu_max_depth;

        $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

        ob_start();
        $item_id = esc_attr( $item->ID );
        $removed_args = array(
            'action',
            'customlink-tab',
            'edit-menu-item',
            'menu-item',
            'page-tab',
            '_wpnonce',
        );



        $original_title = '';
        if ( 'taxonomy' == $item->type ) {
            $original_title = get_term_field( 'name', $item->object_id, $item->object, 'raw' );
            if ( is_wp_error( $original_title ) )
                $original_title = false;
        } elseif ( 'post_type' == $item->type ) {
            $original_object = get_post( $item->object_id );
            $original_title = $original_object->post_title;
        }

        $classes = array(
            'menu-item menu-item-depth-' . $depth,
            'menu-item-' . esc_attr( $item->object ),
            'menu-item-edit-' . ( ( isset( $_GET['edit-menu-item'] ) && $item_id == $_GET['edit-menu-item'] ) ? 'active' : 'inactive'),
        );

        $title = $item->title;

        if ( ! empty( $item->_invalid ) ) {
            $classes[] = 'menu-item-invalid';
            /* translators: %s: title of menu item which is invalid */
            $title = sprintf( esc_html__( '%s (Invalid)'), $item->title );
        } elseif ( isset( $item->post_status ) && 'draft' == $item->post_status ) {
            $classes[] = 'pending';
            /* translators: %s: title of menu item in draft status */
            $title = sprintf( esc_html__('%s (Pending)'), $item->title );
        }

        $title = empty( $item->label ) ? $title : $item->label;

        ?>
		<li id="menu-item-<?php echo $item_id; ?>" class="<?php echo implode(' ', $classes ); ?>">
			<dl class="menu-item-bar">
					<dt class="menu-item-handle">
					    <span class="item-title"><?php echo esc_html( $title ); ?></span>
					    <span class="item-controls">
					        <span class="item-type"><?php echo esc_html( $item->type_label ); ?></span>
					        <span class="item-order hide-if-js">
					            <a href="<?php
					                echo wp_nonce_url(
					                    add_query_arg(
					                        array(
					                            'action' => 'move-up-menu-item',
					                            'menu-item' => $item_id,
					                        ),
					                        remove_query_arg($removed_args, admin_url( 'nav-menus.php' ) )
					                    ),
					                    'move-menu_item'
					                );
					            ?>" class="item-move-up"><abbr title="<?php esc_attr_e('Move up'); ?>">&#8593;</abbr></a>
					            |
					            <a href="<?php
					                echo wp_nonce_url(
					                    add_query_arg(
					                        array(
					                            'action' => 'move-down-menu-item',
					                            'menu-item' => $item_id,
					                        ),
					                        remove_query_arg($removed_args, admin_url( 'nav-menus.php' ) )
					                    ),
					                    'move-menu_item'
					                );
					            ?>" class="item-move-down"><abbr title="<?php esc_attr_e('Move down'); ?>">&#8595;</abbr></a>
					        </span>
					        <a class="item-edit" id="edit-<?php echo $item_id; ?>" title="<?php esc_attr_e('Edit Menu Item'); ?>" href="<?php
					            echo ( isset( $_GET['edit-menu-item'] ) && $item_id == $_GET['edit-menu-item'] ) ? admin_url( 'nav-menus.php' ) : add_query_arg( 'edit-menu-item', $item_id, remove_query_arg( $removed_args, admin_url( 'nav-menus.php#menu-item-settings-' . $item_id ) ) );
					        ?>"><?php _e( 'Edit Menu Item'); ?></a>
					    </span>
					</dt>
				</dl>
		
		  <div class="menu-item-settings clearfix" id="menu-item-settings-<?php echo $item_id; ?>">
		      <div class="clearfix">
		        <?php if( 'custom' == $item->type ) : ?>
		            <p class="field-url description description-wide">
		                <label for="edit-menu-item-url-<?php echo $item_id; ?>">
		                    <?php _e( 'URL' ); ?><br />
		                    <input type="text" id="edit-menu-item-url-<?php echo $item_id; ?>" class="widefat code edit-menu-item-url" name="menu-item-url[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->url ); ?>" />
		                </label>
		            </p>
		        <?php endif; ?>
		        <p class="description description-thin">
		            <label for="edit-menu-item-title-<?php echo $item_id; ?>">
		                <?php _e( 'Navigation Label' ); ?><br />
		                <input type="text" id="edit-menu-item-title-<?php echo $item_id; ?>" class="widefat edit-menu-item-title" name="menu-item-title[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->title ); ?>" />
		            </label>
		        </p>
		        <p class="description description-thin">
		            <label for="edit-menu-item-attr-title-<?php echo $item_id; ?>">
		                <?php _e( 'Title Attribute' ); ?><br />
		                <input type="text" id="edit-menu-item-attr-title-<?php echo $item_id; ?>" class="widefat edit-menu-item-attr-title" name="menu-item-attr-title[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->post_excerpt ); ?>" />
		            </label>
		        </p>
		        <p class="field-link-target description">
		            <label for="edit-menu-item-target-<?php echo $item_id; ?>">
		                <input type="checkbox" id="edit-menu-item-target-<?php echo $item_id; ?>" value="_blank" name="menu-item-target[<?php echo $item_id; ?>]"<?php checked( $item->target, '_blank' ); ?> />
		                <?php _e( 'Open link in a new window/tab' ); ?>
		            </label>
		        </p>
		        <p class="field-css-classes description description-thin">
		            <label for="edit-menu-item-classes-<?php echo $item_id; ?>">
		                <?php _e( 'CSS Classes (optional)' ); ?><br />
		                <input type="text" id="edit-menu-item-classes-<?php echo $item_id; ?>" class="widefat code edit-menu-item-classes" name="menu-item-classes[<?php echo $item_id; ?>]" value="<?php echo esc_attr( implode(' ', $item->classes ) ); ?>" />
		            </label>
		        </p>
		        <p class="field-xfn description description-thin">
		            <label for="edit-menu-item-xfn-<?php echo $item_id; ?>">
		                <?php _e( 'Link Relationship (XFN)'  ); ?><br />
		                <input type="text" id="edit-menu-item-xfn-<?php echo $item_id; ?>" class="widefat code edit-menu-item-xfn" name="menu-item-xfn[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->xfn ); ?>" />
		            </label>
		        </p>
		        <p class="field-description description description-wide">
		            <label for="edit-menu-item-description-<?php echo $item_id; ?>">
		                <?php _e( 'Description' ); ?><br />
		                <textarea id="edit-menu-item-description-<?php echo $item_id; ?>" class="widefat edit-menu-item-description" rows="3" cols="20" name="menu-item-description[<?php echo $item_id; ?>]"><?php echo esc_html( $item->description ); // textarea_escaped ?></textarea>
		                <span class="description"><?php _e('The description will be displayed in the menu if the current theme supports it.'); ?></span>
		            </label>
		        </p>
						<?php do_action( 'wp_nav_menu_item_custom_fields', $item_id, $item, $depth, $args );?>
		      </div>
		
	          <div class="im_menu_options clearfix"> 
					<p class="im-field-link-mega description description-wide">
		          	<h4><?php echo __( 'Activate Mega Menu' , 'iranomag' ); ?></h4>
		              <?php 
		
		                  $value = get_post_meta( $item_id, '_menu_item_megamenu', true);
		                  if($value != "") $value = "checked='checked'";
		
		              ?>
		              <label for="edit-menu-item-megamenu-<?php echo $item_id; ?>">
		                  <input type="checkbox" value="enabled" id="edit-menu-item-megamenu-<?php echo $item_id; ?>" name="edit-menu-item-megamenu[<?php echo $item_id; ?>]" <?php echo $value; ?> />
		                  <?php echo __( 'Enable', 'iranomag' ); ?>
		              </label>
		              <br/>
		              <small><?php echo __( 'This is Optional!' , 'iranomag' ); ?><br/><?php echo __( 'Warning: if There is no Sub-Menu for this Item or the Selected Items are NOT Categories, do NOT Use this Option.' , 'iranomag' ); ?></small>
		          </p>
		      </div>
		     
		
		      <div class="menu-item-actions description-wide submitbox clearfix">
		          <?php if( 'custom' != $item->type && $original_title !== false ) : ?>
		              <p class="link-to-original">
		                  <?php printf( esc_html__('Original: %s'), '<a href="' . esc_attr( $item->url ) . '">' . esc_html( $original_title ) . '</a>' ); ?>
		              </p>
		          <?php endif; ?>
		          <a class="item-delete submitdelete deletion" id="delete-<?php echo $item_id; ?>" href="<?php
		          echo wp_nonce_url(
		              add_query_arg(
		                  array(
		                      'action' => 'delete-menu-item',
		                      'menu-item' => $item_id,
		                  ),
		                  remove_query_arg($removed_args, admin_url( 'nav-menus.php' ) )
		              ),
		              'delete-menu_item_' . $item_id
		          ); ?>"><?php _e('Remove' ); ?></a> <span class="meta-sep"> | </span> <a class="item-cancel submitcancel" id="cancel-<?php echo $item_id; ?>" href="<?php echo esc_url( add_query_arg( array('edit-menu-item' => $item_id, 'cancel' => time()), remove_query_arg( $removed_args, admin_url( 'nav-menus.php' ) ) ) );
		              ?>#menu-item-settings-<?php echo $item_id; ?>"><?php _e('Cancel'); ?></a>
		      </div>
		
		      <input class="menu-item-data-db-id" type="hidden" name="menu-item-db-id[<?php echo $item_id; ?>]" value="<?php echo $item_id; ?>" />
		      <input class="menu-item-data-object-id" type="hidden" name="menu-item-object-id[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->object_id ); ?>" />
		      <input class="menu-item-data-object" type="hidden" name="menu-item-object[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->object ); ?>" />
		      <input class="menu-item-data-parent-id" type="hidden" name="menu-item-parent-id[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->menu_item_parent ); ?>" />
		      <input class="menu-item-data-position" type="hidden" name="menu-item-position[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->menu_order ); ?>" />
		      <input class="menu-item-data-type" type="hidden" name="menu-item-type[<?php echo $item_id; ?>]" value="<?php echo esc_attr( $item->type ); ?>" />
		  </div><!-- .menu-item-settings-->
		  <ul class="menu-item-transport"></ul>
		<?php
		
		$output .= ob_get_clean();
	
	}
}