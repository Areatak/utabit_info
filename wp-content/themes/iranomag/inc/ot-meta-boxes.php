<?php
/**
 * Initialize the im Meta Boxes. 
 */
add_action( 'admin_init', 'im_meta_boxes' );
function im_meta_boxes() {
  
  $im_meta_box = array(
    'id'          => 'im_meta_box',
    'title'       => __( 'Meta Box', 'iranomag' ),
    'desc'        => '',
    'pages'       => array( 'post' ),
    'context'     => 'normal',
    'priority'    => 'high',
    'fields'      => array(
      array(
        'label'       => __( 'Attributes', 'iranomag' ),
        'id'          => 'meta_attrs',
        'type'        => 'tab'
      ),
      array(
        'label'       => __( 'Post Category', 'iranomag' ),
        'id'          => 'meta_post_cat',
        'type'        => 'category-select',
        'desc'        => sprintf( __( 'Select a Category for Post', 'iranomag' ) ),
        'std'         => ''
      ),
      array(
        'label'       => __( 'Featured Post', 'iranomag' ),
        'id'          => 'meta_featured_post',
        'type'        => 'on-off',
        'desc'        => sprintf( __( 'is this Post Featured?', 'iranomag' ) ),
        'std'         => 'off'
      ),
      array(
        'label'       => __( 'Source Name', 'iranomag' ),
        'id'          => 'meta_source_name',
        'type'        => 'text',
        'desc'        => __( 'Article source name goes here.', 'iranomag' )
      ),
      array(
        'label'       => __( 'Source Link', 'iranomag' ),
        'id'          => 'meta_source_link',
        'type'        => 'text',
        'desc'        => __( 'Article source link goes here.', 'iranomag' )
      ),
      array(
        'label'       => __( 'Layout', 'iranomag' ),
        'id'          => 'meta_layout',
        'type'        => 'tab'
      ),
      array(
        'label'       => __( 'Post Layout', 'iranomag' ),
        'id'          => 'meta_post_layout',
        'type'        => 'radio-image',
        'desc'        => __( 'Choose a style for post to display in frontend.', 'iranomag' ),
        'std'         => 'layout-1',
        'choices'     => array( 
          array(
            'value'       => 'layout-1',
            'label'       => 'layout-1',
            'src'         => 'OT_URL/assets/images/layout/layout-1.png'
          ),
          array(
            'value'       => 'layout-2',
            'label'       => 'layout-2',
            'src'         => 'OT_URL/assets/images/layout/layout-2.png'
          ),
          array(
            'value'       => 'layout-3',
            'label'       => 'layout-3',
            'src'         => 'OT_URL/assets/images/layout/layout-3.png'
          ),
          array(
            'value'       => 'layout-4',
            'label'       => 'layout-4',
            'src'         => 'OT_URL/assets/images/layout/layout-4.png'
          ),
          array(
            'value'       => 'layout-5',
            'label'       => 'layout-5',
            'src'         => 'OT_URL/assets/images/layout/layout-5.png'
          )
        )
      ),
      array(
        'label'       => __( 'Review & Rating', 'iranomag' ),
        'id'          => 'meta_rating',
        'type'        => 'tab'
      ),
      array(
        'label'       => __( 'is Post a Review?', 'iranomag' ),
        'id'          => 'meta_is_review',
        'type'        => 'on_off',
        'desc'        => __( 'Selected Post is a Review', 'iranomag' ),
        'std'         => 'off'
      ),
      array(
        'label'       => __( 'Review Title', 'iranomag' ),
        'id'          => 'meta_ratings_title',
        'type'        => 'text',
        'desc'        => __( 'Set a title for your Review.', 'iranomag' ),
        'condition'   => 'meta_is_review:is(on)'
      ),
      array(
        'label'       => __( 'Ratings', 'iranomag' ),
        'id'          => 'meta_ratings_percentage',
        'type'        => 'list-item',
        'desc'        => __( 'In this section you can review the post by choosing rates between 0 to 10.', 'iranomag' ),
        'settings'    => array(
          array(
            'label'       => __( 'Score', 'iranomag' ),
            'id'          => 'meta_score',
            'desc'        => __( 'Value should be between 0-10', 'iranomag' ),
            'std'         => '5',
            'type'        => 'numeric-slider',
            'min_max_step'=> '0,10,1'
          )
        ),
        'condition'   => 'meta_is_review:is(on)'
      ),
      array(
        'label'       => __( 'Review Average', 'iranomag' ),
        'id'          => 'meta_ratings_avg',
        'type'        => 'text',
        'desc'        => __( 'This is average score of the review. You can edit this but it is not recommended.', 'iranomag' ),
        'condition'   => 'meta_is_review:is(on)'
      ),
      array(
        'label'       => __( 'Pros/Cons', 'iranomag' ),
        'id'          => 'meta_proscons',
        'type'        => 'list-item',
        'desc'        => __( 'You can add Pros & Cons for your review.', 'iranomag' ),
        'settings'    => array(
          array(
            'label'       => __( 'Pros or Cons', 'iranomag' ),
            'id'          => 'meta_pc_status',
            'desc'        => __( 'Choose between Pros or Cons.', 'iranomag' ),
            'std'         => 'pros',
            'type'        => 'radio',
            'choices'     => array( 
            array(
              'value'       => 'pros',
              'label'       => __( 'Pros', 'iranomag' )
            ),
            array(
              'value'       => 'cons',
              'label'       => __( 'Cons', 'iranomag' )
            )
          )
          )
        ),
        'condition'   => 'meta_is_review:is(on)'
      ),
      array(
        'label'       => __( 'Multimedia', 'iranomag' ),
        'id'          => 'meta_video',
        'type'        => 'tab'
      ),
      array(
        'label'       => __( 'Post has Video?', 'iranomag' ),
        'id'          => 'meta_has_video',
        'type'        => 'on_off',
        'desc'        => __( 'If selected post has a video turn this on.', 'iranomag' ),
        'std'         => 'off'
      ),
      array(
        'label'       => __( 'Video URL', 'iranomag' ),
        'id'          => 'meta_video_url',
        'type'        => 'text',
        'desc'        => __( 'Put URL of the Video here.', 'iranomag' ),
        'condition'   => 'meta_has_video:is(on)'
      ),
      array(
        'label'       => __( 'Post has Audio?', 'iranomag' ),
        'id'          => 'meta_has_audio',
        'type'        => 'on_off',
        'desc'        => __( 'If selected post has a audio turn this on.', 'iranomag' ),
        'std'         => 'off'
      ),
      array(
        'label'       => __( 'Audio Format', 'iranomag' ),
        'id'          => 'meta_audio_format',
        'type'        => 'radio',
        'desc'        => __( 'Supported Formats: MP3, Ogg & Wav', 'iranomag' ),
        'std'         => 'mpeg',
        'condition'   => 'meta_has_audio:is(on)',
        'choices'     => array( 
          array(
            'value'       => 'mpeg',
            'label'       => esc_html__( 'MP3', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'ogg',
            'label'       => esc_html__( 'Ogg', 'iranomag' ),
            'src'         => ''
          ),
          array(
            'value'       => 'wav',
            'label'       => esc_html__( 'Wav', 'iranomag' ),
            'src'         => ''
          )
        )
      ),
      array(
        'label'       => __( 'Audio URL', 'iranomag' ),
        'id'          => 'meta_audio_url',
        'type'        => 'text',
        'desc'        => __( 'Put URL of the Audio File here.', 'iranomag' ),
        'condition'   => 'meta_has_audio:is(on)'
      ),
      array(
        'label'       => __( 'Download Box', 'iranomag' ),
        'id'          => 'meta_download',
        'type'        => 'tab'
      ),
      array(
        'label'       => __( 'Download Box', 'iranomag' ),
        'id'          => 'meta_has_download',
        'type'        => 'on_off',
        'desc'        => __( 'If selected post has files to download, turn this on.', 'iranomag' ),
        'std'         => 'off'
      ),
      array(
        'label'       => __( 'Download Links', 'iranomag' ),
        'id'          => 'meta_download_links',
        'type'        => 'list-item',
        'desc'        => __( 'You can add download links for your post from this section.', 'iranomag' ),
        'settings'    => array(
          array(
            'label'       => __( 'Link', 'iranomag' ),
            'id'          => 'meta_link',
            'type'        => 'text'
          ),
          array(
            'label'       => __( 'Item Type', 'iranomag' ),
            'id'          => 'meta_download_type',
            'std'         => 'download_link',
            'type'        => 'radio',
            'choices'     => array(
              array(
                'value'       => 'download_link',
                'label'       => __( 'Link', 'iranomag' )
              ),
              array(
                'value'       => 'download_title',
                'label'       => __( 'Title', 'iranomag' )
              ),
              array(
                'value'       => 'download_desc',
                'label'       => __( 'Description', 'iranomag' )
              ),
              array(
                'value'       => 'download_external',
                'label'       => __( 'External Link', 'iranomag' )
              ),
              array(
                'value'       => 'download_space',
                'label'       => __( 'Space', 'iranomag' )
              )
            )
          )
        ),
        'condition'   => 'meta_has_download:is(on)'
      ),
      array(
        'label'       => __( 'Download Descriptions', 'iranomag' ),
        'id'          => 'meta_download_descriptions',
        'type'        => 'textarea-simple',
        'rows'        => '5',
        'condition'   => 'meta_has_download:is(on)'
      ),
      array(
        'label'       => __( 'Download Password', 'iranomag' ),
        'id'          => 'meta_download_password',
        'type'        => 'text',
        'condition'   => 'meta_has_download:is(on)'
      )
    )
  );
  
  if ( function_exists( 'ot_register_meta_box' ) )
    ot_register_meta_box( $im_meta_box );

}