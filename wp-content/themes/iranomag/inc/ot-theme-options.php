<?php
/**
 * Initialize the custom theme options.
 */
add_action( 'init', 'custom_theme_options' );

/**
 * Build the custom settings & update OptionTree.
 */
function custom_theme_options() {
  
  /* OptionTree is not loaded yet, or this is not an admin request */
  if ( ! function_exists( 'ot_settings_id' ) || ! is_admin() )
    return false;
    
  /**
   * Get a copy of the saved settings array. 
   */
  $saved_settings = get_option( ot_settings_id(), array() );
  
  /**
   * Custom settings array that will eventually be 
   * passes to the OptionTree Settings API Class.
   */
  $custom_settings = array( 
    'contextual_help' => array( 
      'sidebar'       => ''
    ),
    'sections'        => array( 
      array(
        'id'          => 'general_section',
        'title'       => esc_html__( 'General', 'iranomag' )
      ),
      array(
        'id'          => 'ad_section',
        'title'       => esc_html__( 'Advertisements', 'iranomag' )
      ),
      array(
        'id'          => 'header_section',
        'title'       => esc_html__( 'Header Options', 'iranomag' )
      ),
      array(
        'id'          => 'custom_section',
        'title'       => esc_html__( 'Customization', 'iranomag' )
      ),
      array(
        'id'          => 'content_section',
        'title'       => esc_html__( 'Content Options', 'iranomag' )
      ),
      array(
        'id'          => 'footer_section',
        'title'       => esc_html__( 'Footer Options', 'iranomag' )
      ),
    ),
    'settings'        => array( 
      array(
        'id'          => 'general_tab',
        'label'       => esc_html__( 'Site Details', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'site_name',
        'label'       => esc_html__( 'Site Name', 'iranomag' ),
        'desc'        => esc_html__( 'Enter the name of your site. The name may be used in different parts of the theme, so enter the correct one.', 'iranomag' ),
        'std'         => esc_html__( 'IranoMag', 'iranomag' ),
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '1',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'site_desc',
        'label'       => esc_html__( 'Meta Descriptions', 'iranomag' ),
        'desc'        => esc_html__( 'Write a short description about your site. The text in this section will be inserted as the meta description of your site in the page title (HTML Tag).', 'iranomag' ),
        'std'         => 'IranoMag 2 WordPress theme, Designed by IranoWeb.',
        'type'        => 'textarea-simple',
        'section'     => 'general_section',
        'rows'        => '2',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'date_layout',
        'label'       => esc_html__( 'Date Format', 'iranomag' ),
        'desc'        => esc_html__( 'In this section, you can specify the date format used in the theme. This format used in all parts of this theme. <br /> Default Format: <code> l, j FY </code> <br /> <p class="warning"> If you use extensions, the desired format may not works. In this case set the date format from <code> Settings > Date Format > Custom </code></p>', 'iranomag' ),
        'std'         => 'l, j F Y',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'sticky_kit',
        'label'       => esc_html__( 'Sticky Kit', 'iranomag' ),
        'desc'        => esc_html__( 'فعال یا غیر فعال نمودن منوی چسبان (Sticky Sidebar).', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'Lazy_load',
        'label'       => esc_html__( 'Lazy Load', 'iranomag' ),
        'desc'        => esc_html__( 'فعال یا غیر فعال نمودن Lazy Load.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'menu_btn',
        'label'       => esc_html__( 'منوهای باز شدنی', 'iranomag' ),
        'desc'        => esc_html__( 'شیوه باز شدن منوهای شبکه های اجتماعی و جستجو را انتخاب نمایید.', 'iranomag' ),
        'std'         => 'auto',
        'type'        => 'Select',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'auto',
            'label'       => esc_html__( 'خودکار', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'click',
            'label'       => esc_html__( 'کلیک/لمس', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      //array(
        //'id'          => 'favico',
        //'label'       => esc_html__( 'Site Icon', 'iranomag' ),
        //'desc'        => esc_html__( 'From this section you can specify an icon.<br /><p class="warning">Recommendation: Use an image in png or ico format with the size of 64x64 for this section.</p>', 'iranomag' ),
        //'std'         => '',
        //'type'        => 'background',
        //'section'     => 'general_section',
        //'rows'        => '',
        //'post_type'   => '',
        //'taxonomy'    => '',
        //'min_max_step'=> '',
        //'class'       => '',
        //'condition'   => '',
        //'operator'    => 'and'
      //),
      array(
        'id'          => 'social_tab',
        'label'       => esc_html__( 'Social Networks', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'social_facebook',
        'label'       => esc_html__( 'Facebook', 'iranomag' ),
        'desc'        => esc_html__( 'Put your Facebook page URL Here.', 'iranomag' ),
        'std'         => '#',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'social_twitter',
        'label'       => esc_html__( 'Twitter', 'iranomag' ),
        'desc'        => esc_html__( 'Put your Twitter page URL Here.', 'iranomag' ),
        'std'         => '#',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'social_google',
        'label'       => esc_html__( 'Google +', 'iranomag' ),
        'desc'        => esc_html__( 'Put your Google + page URL Here.', 'iranomag' ),
        'std'         => '#',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'social_linkedin',
        'label'       => esc_html__( 'LinkedIn', 'iranomag' ),
        'desc'        => esc_html__( 'Put your LinkedIn page URL Here.', 'iranomag' ),
        'std'         => '#',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'social_insta',
        'label'       => esc_html__( 'Instagram', 'iranomag' ),
        'desc'        => esc_html__( 'Put your Instagram page URL Here.', 'iranomag' ),
        'std'         => '#',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'social_telegram',
        'label'       => esc_html__( 'Telegram', 'iranomag' ),
        'desc'        => esc_html__( 'Put your Telegram URL Here.', 'iranomag' ),
        'std'         => '#',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'social_aparat',
        'label'       => esc_html__( 'Aparat', 'iranomag' ),
        'desc'        => esc_html__( 'Put your Aparat page URL Here.', 'iranomag' ),
        'std'         => '#',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'social_youtube',
        'label'       => esc_html__( 'YouTube', 'iranomag' ),
        'desc'        => esc_html__( 'Put your YouTube page URL Here.', 'iranomag' ),
        'std'         => '#',
        'type'        => 'text',
        'section'     => 'general_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_ad',
        'label'       => esc_html__( 'Header Ads', 'iranomag' ),
        'desc'        => esc_html__( 'This section allows you to display any text or image in your header.', 'iranomag' ),
        'std'         => '',
        'type'        => 'textarea',
        'section'     => 'ad_section',
        'rows'        => '3',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'top_ad',
        'label'       => esc_html__( 'After Header Ads', 'iranomag' ),
        'desc'        => esc_html__( 'The content of this section will be displayed after the main menu.', 'iranomag' ),
        'std'         => '',
        'type'        => 'textarea',
        'section'     => 'ad_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'post_ad_1',
        'label'       => esc_html__( 'Post Top Ad', 'iranomag' ),
        'desc'        => esc_html__( 'The content of this section will be displayed on Post Top.', 'iranomag' ),
        'std'         => '',
        'type'        => 'textarea',
        'section'     => 'ad_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'post_ad_2',
        'label'       => esc_html__( 'Post Bottom Ad', 'iranomag' ),
        'desc'        => esc_html__( 'The content of this section will be displayed on Post Bottom.', 'iranomag' ),
        'std'         => '',
        'type'        => 'textarea',
        'section'     => 'ad_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_tab',
        'label'       => esc_html__( 'Header', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_full',
        'label'       => esc_html__( 'Full Width', 'iranomag' ),
        'desc'        => esc_html__( 'When you turn on this option, the Header will displayed in full width.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_style',
        'label'       => esc_html__( 'Header Layout', 'iranomag' ),
        'desc'        => esc_html__( 'From this section you can choose how to display the header.', 'iranomag' ),
        'std'         => 'header-1',
        'type'        => 'radio-image',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'header-1',
            'label'       => esc_html__( 'Style 1', 'iranomag' ),
            'src'         => 'OT_URL/assets/images/header/header-1.png'
          ),
          array(
            'value'       => 'header-2',
            'label'       => esc_html__( 'Style 2', 'iranomag' ),
            'src'         => 'OT_URL/assets/images/header/header-2.png'
          ),
          array(
            'value'       => 'header-3',
            'label'       => esc_html__( 'Style 3', 'iranomag' ),
            'src'         => 'OT_URL/assets/images/header/header-3.png'
          )
        )
      ),
      array(
        'id'          => 'header_color',
        'label'       => esc_html__( 'Header Color', 'iranomag' ),
        'desc'        => esc_html__( 'Header color can specify from this section. More options form <code>Customization</code> tab.', 'iranomag' ),
        'std'         => 'light',
        'type'        => 'radio',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'dark',
            'label'       => esc_html__( 'Dark', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'light',
            'label'       => esc_html__( 'Light', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      array(
        'id'          => 'header_topnav',
        'label'       => esc_html__( 'Top Menu', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'topnav_status',
        'label'       => esc_html__( 'Display', 'iranomag' ),
        'desc'        => esc_html__( 'Enable/Disable Top Menu.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'topnav_full',
        'label'       => esc_html__( 'Full Width', 'iranomag' ),
        'desc'        => esc_html__( 'When you turn on this option, the top menu will displayed in full width.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'topnav_color',
        'label'       => esc_html__( 'Top Menu Color', 'iranomag' ),
        'desc'        => esc_html__( 'Top Menu color can specify from this section. More options form <code>Customization</code> tab.', 'iranomag' ),
        'std'         => 'light',
        'type'        => 'radio',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'dark',
            'label'       => esc_html__( 'Dark', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'light',
            'label'       => esc_html__( 'Light', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      array(
        'id'          => 'menu_tab',
        'label'       => esc_html__( 'Main Menu', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'menu_full',
        'label'       => esc_html__( 'Full Width', 'iranomag' ),
        'desc'        => esc_html__( 'When you turn on this option, the Main Menu will displayed in full width.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'menu_color',
        'label'       => esc_html__( 'Main Menu Color', 'iranomag' ),
        'desc'        => esc_html__( 'Main Menu color can specify from this section. More options form <code>Customization</code> tab.', 'iranomag' ),
        'std'         => 'light',
        'type'        => 'radio',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'dark',
            'label'       => esc_html__( 'Dark', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'light',
            'label'       => esc_html__( 'Light', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      array(
        'id'          => 'header_fixed',
        'label'       => esc_html__( 'Fixed Menu', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_fixed_full',
        'label'       => esc_html__( 'Full Width', 'iranomag' ),
        'desc'        => esc_html__( 'When you turn on this option, the Fixed Menu will displayed in full width.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'logo_tab',
        'label'       => esc_html__( 'Logo', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_logo',
        'label'       => esc_html__( 'Logo Image', 'iranomag' ),
        'desc'        => esc_html__( 'This image will be displayed in the Header and also Mobile Menu tab.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_logo_height',
        'label'       => esc_html__( 'Logo Height', 'iranomag' ),
        'desc'        => esc_html__( 'Specify the maximum height of the logo image.', 'iranomag' ),
        'std'         => '',
        'type'        => 'measurement',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_fixed_logo',
        'label'       => esc_html__( 'Fixed Header Logo Image', 'iranomag' ),
        'desc'        => esc_html__( 'This image will be displayed in the Fixed Header.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'header_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'general_color_tab',
        'label'       => esc_html__( 'General', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'accent_color',
        'label'       => esc_html__( 'Accent Color', 'iranomag' ),
        'desc'        => esc_html__( 'This color will be used as the default color for all elements of the theme.', 'iranomag' ),
        'std'         => '#298bca',
        'type'        => 'colorpicker',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'extra_css',
        'label'       => esc_html__( 'Additional CSS', 'iranomag' ),
        'desc'        => esc_html__( 'In this section, you can customize theme style. To do this, simply put the CSS code in here.', 'iranomag' ),
        'std'         => '',
        'type'        => 'css',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'theme_color_tab',
        'label'       => esc_html__( 'Theme Color', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'theme_background',
        'label'       => esc_html__( 'Theme Background', 'iranomag' ),
        'desc'        => esc_html__( 'Color, image and background properties for theme background.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'header_background',
        'label'       => esc_html__( 'Header Background', 'iranomag' ),
        'desc'        => esc_html__( 'Color, image and background properties for theme Header.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'topnav_background',
        'label'       => esc_html__( 'Top Menu Background', 'iranomag' ),
        'desc'        => esc_html__( 'Color, image and background properties for theme Top Menu.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'primarymenu_background',
        'label'       => esc_html__( 'Main Menu Background', 'iranomag' ),
        'desc'        => esc_html__( 'Color, image and background properties for theme Main Menu.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'footer_background',
        'label'       => esc_html__( 'Footer Background', 'iranomag' ),
        'desc'        => esc_html__( 'Color, image and background properties for theme Footer.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'copyright_background',
        'label'       => esc_html__( 'Sub Footer Background', 'iranomag' ),
        'desc'        => esc_html__( 'Color, image and background properties for theme Sub Footer.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'category_color',
        'label'       => esc_html__( 'Category Color', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'category_colorpicker',
        'label'       => esc_html__( 'Category Color', 'iranomag' ),
        'desc'        => esc_html__( 'You can Select a color for each category. If color selected, The category will be displayed everywhere in theme with this color.', 'iranomag' ),
        'std'         => '',
        'type'        => 'category_colorpicker',
        'section'     => 'custom_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'content_tab',
        'label'       => esc_html__( 'General', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'blog_type',
        'label'       => esc_html__( 'Blog Layout', 'iranomag' ),
        'desc'        => esc_html__( 'If you use blog style, the layout of blog can be managed here.<br />You can use Visual Composer to build custom pages.', 'iranomag' ),
        'std'         => '1col',
        'type'        => 'radio-image',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => '2col',
            'label'       => esc_html__( '2 Columns', 'iranomag' ),
            'src'         => 'OT_URL/assets/images/blog/2col.png'
          ),
          array(
            'value'       => '1col',
            'label'       => esc_html__( '1 Column', 'iranomag' ),
            'src'         => 'OT_URL/assets/images/blog/1col.png'
          )
        )
      ),
      array(
        'id'          => 'author_desc',
        'label'       => esc_html__( 'Display About Author', 'iranomag' ),
        'desc'        => esc_html__( 'Enable/Disable About Author Box.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'related_posts',
        'label'       => esc_html__( 'Display Related Posts', 'iranomag' ),
        'desc'        => esc_html__( 'Enable/Disable Related Posts Section.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'related_post_count',
        'label'       => esc_html__( 'Related Posts Count', 'iranomag' ),
        'desc'        => esc_html__( 'How many posts do you want to display as Related Posts?', 'iranomag' ),
        'std'         => '8',
        'type'        => 'text',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'content_sidebar',
        'label'       => esc_html__( 'Add Sidebar', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'dynamic_sidebar',
        'label'       => esc_html__( 'Additional Sidebar', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'list-item',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'settings'    => array( 
          array(
            'id'          => 'sidebar_id',
            'label'       => esc_html__( 'Sidebar ID', 'iranomag' ),
            'desc'        => '',
            'std'         => '',
            'type'        => 'text',
            'rows'        => '',
            'post_type'   => '',
            'taxonomy'    => '',
            'min_max_step'=> '',
            'class'       => '',
            'condition'   => '',
            'operator'    => 'and'
          )
        )
      ),
      array(
        'id'          => 'content_grid',
        'label'       => esc_html__( 'Posts Grid Box', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'grid_status',
        'label'       => esc_html__( 'Posts Grid Box', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'grid_style',
        'label'       => esc_html__( 'Style', 'iranomag' ),
        'desc'        => esc_html__( 'This changes the layouts of the grids', 'iranomag' ),
        'std'         => 'style1',
        'type'        => 'Select',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => 'grid_status:is(on)',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'style1',
            'label'       => esc_html__( 'Style 1', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'style2',
            'label'       => esc_html__( 'Style 2', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'style3',
            'label'       => esc_html__( 'Style 3', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'style4',
            'label'       => esc_html__( 'Style 4', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      array(
        'id'          => 'grid_source',
        'label'       => esc_html__( 'Posts Source', 'iranomag' ),
        'desc'        => esc_html__( "Select the source of the posts you'd like to show.", "iranomag" ),
        'std'         => 'most-recent',
        'type'        => 'Select',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => 'grid_status:is(on)',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'most-recent',
            'label'       => esc_html__( 'Most Recent', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'by-category',
            'label'       => esc_html__( 'By Category', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'by-id',
            'label'       => esc_html__( 'By Post ID', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'by-tag',
            'label'       => esc_html__( 'By Tag', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'by-author',
            'label'       => esc_html__( 'By Author', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'top-reviews',
            'label'       => esc_html__( 'Top Reviews', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'latest-reviews',
            'label'       => esc_html__( 'Latest Reviews', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'top-vote',
            'label'       => esc_html__( 'Top User Vote', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'featured-post',
            'label'       => esc_html__( 'By Featured Post', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      array(
        'id'          => 'grid_excluded_tag_ids',
        'label'       => esc_html__( 'Excluded Tag IDs', 'iranomag' ),
        'desc'        => esc_html__( 'Enter the tag ids you would like to exclude from the most recent posts separated by comma', 'iranomag' ),
        'std'         => '',
        'type'        => 'text',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => 'grid_status:is(on),grid_source:is(most-recent)',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'grid_excluded_cat_ids',
        'label'       => esc_html__( 'Excluded Category IDs', 'iranomag' ),
        'desc'        => esc_html__( 'Enter the category ids you would like to exclude from the most recent posts separated by comma', 'iranomag' ),
        'std'         => '',
        'type'        => 'text',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => 'grid_status:is(on),grid_source:is(most-recent)',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'grid_cat',
        'label'       => esc_html__( 'Post Categories', 'iranomag' ),
        'desc'        => esc_html__( 'Which categories would you like to show?', 'iranomag' ),
        'std'         => '',
        'type'        => 'category-checkbox',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => 'grid_status:is(on),grid_source:is(by-category)',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'grid_post_ids',
        'label'       => esc_html__( 'Post IDs', 'iranomag' ),
        'desc'        => esc_html__( 'Enter the post IDs you would like to display seperated by comma', 'iranomag' ),
        'std'         => '',
        'type'        => 'text',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => 'grid_status:is(on),grid_source:is(by-id)',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'grid_tag_slugs',
        'label'       => esc_html__( 'Tag slugs', 'iranomag' ),
        'desc'        => esc_html__( 'Enter the tag slugs you would like to display seperated by comma', 'iranomag' ),
        'std'         => '',
        'type'        => 'text',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => 'grid_status:is(on),grid_source:is(by-tag)',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'grid_author_ids',
        'label'       => esc_html__( 'Author IDs', 'iranomag' ),
        'desc'        => esc_html__( 'Enter the Author IDs you would like to display seperated by comma', 'iranomag' ),
        'std'         => '',
        'type'        => 'text',
        'section'     => 'content_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => 'grid_status:is(on),grid_source:is(by-author)',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'footer_tab',
        'label'       => esc_html__( 'Footer', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'footer_status',
        'label'       => esc_html__( 'Display', 'iranomag' ),
        'desc'        => esc_html__( 'Enable/Disable Footer.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'footer_full',
        'label'       => esc_html__( 'Full Width', 'iranomag' ),
        'desc'        => esc_html__( 'When you turn on this option, the Footer will displayed in full width.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'footer_style',
        'label'       => esc_html__( 'Footer Layout', 'iranomag' ),
        'desc'        => esc_html__( 'You can manage footer columns from this section.', 'iranomag' ),
        'std'         => '4widget',
        'type'        => 'radio-image',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => '4widget',
            'label'       => esc_html__( '4 Widgets', 'iranomag' ),
            'src'         => 'OT_URL/assets/images/footer/footer-1.png'
          ),
          array(
            'value'       => '3widget',
            'label'       => esc_html__( '3 Widgets', 'iranomag' ),
            'src'         => 'OT_URL/assets/images/footer/footer-2.png'
          ),
          array(
            'value'       => '2widget',
            'label'       => esc_html__( '2 Widgets', 'iranomag' ),
            'src'         => 'OT_URL/assets/images/footer/footer-3.png'
          )
        )
      ),
      array(
        'id'          => 'footer_color',
        'label'       => esc_html__( 'Footer Color', 'iranomag' ),
        'desc'        => esc_html__( 'Footer color can specify from this section. More options form <code>Customization</code> tab.', 'iranomag' ),
        'std'         => 'light',
        'type'        => 'radio',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'dark',
            'label'       => esc_html__( 'Dark', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'light',
            'label'       => esc_html__( 'Light', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      array(
        'id'          => 'copyright_tab',
        'label'       => esc_html__( 'Sub Footer', 'iranomag' ),
        'desc'        => '',
        'std'         => '',
        'type'        => 'tab',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'copyright_full',
        'label'       => esc_html__( 'Full Width', 'iranomag' ),
        'desc'        => esc_html__( 'When you turn on this option, the Sub Footer will displayed in full width.', 'iranomag' ),
        'std'         => 'on',
        'type'        => 'on-off',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'copyright_color',
        'label'       => esc_html__( 'Sub Footer Color', 'iranomag' ),
        'desc'        => esc_html__( 'Sub Footer color can specify from this section. More options form <code>Customization</code> tab.', 'iranomag' ),
        'std'         => 'light',
        'type'        => 'radio',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and',
        'choices'     => array( 
          array(
            'value'       => 'dark',
            'label'       => esc_html__( 'Dark', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'light',
            'label'       => esc_html__( 'Light', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      array(
        'id'          => 'copyright_logo',
        'label'       => esc_html__( 'Sub Footer Logo', 'iranomag' ),
        'desc'        => esc_html__( 'This image will be displayed in the Sub Footer.', 'iranomag' ),
        'std'         => '',
        'type'        => 'background',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'copyright_logo_height',
        'label'       => esc_html__( 'Logo Height', 'iranomag' ),
        'desc'        => esc_html__( 'Specify the maximum height of the logo image.', 'iranomag' ),
        'std'         => '',
        'type'        => 'measurement',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
      array(
        'id'          => 'copyright_text',
        'label'       => esc_html__( 'CopyRight Text', 'iranomag' ),
        'desc'        => esc_html__( 'Put some text as your site CopyRight here. this will show on Sub Footer.', 'iranomag' ),
        'std'         => 'CopyRight &copy 2016, IranoMag. All Rights Reserved For IranoWeb.',
        'type'        => 'text',
        'section'     => 'footer_section',
        'rows'        => '',
        'post_type'   => '',
        'taxonomy'    => '',
        'min_max_step'=> '',
        'class'       => '',
        'condition'   => '',
        'operator'    => 'and'
      ),
        array(
            'id'          => 'show_copyright',
            'label'       => esc_html__( 'حمایت از ایرانووب' ),
            'desc'        => esc_html__( 'نمایش یا عدم نمایش لوگوی ایرانووب در انتهای وب سایت.' ),
            'std'         => 'on',
            'type'        => 'on-off',
            'section'     => 'footer_section',
            'rows'        => '',
            'post_type'   => '',
            'taxonomy'    => '',
            'min_max_step'=> '',
            'class'       => '',
            'condition'   => '',
            'operator'    => 'and'
        )
    )
  );
  
  /* allow settings to be filtered before saving */
  $custom_settings = apply_filters( ot_settings_id() . '_args', $custom_settings );
  
  /* settings are not the same update the DB */
  if ( $saved_settings !== $custom_settings ) {
    update_option( ot_settings_id(), $custom_settings ); 
  }
  
  /* Lets OptionTree know the UI Builder is being overridden */
  global $ot_has_custom_theme_options;
  $ot_has_custom_theme_options = true;
}