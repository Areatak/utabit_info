<?php
/*
 Plugin Name: impv_display_widget
 Description: impv_display_widgets
 */
class impv_display_widget extends WP_Widget {
    function __construct() {
        parent::__construct(
            // Base ID of your widget
            'impv_display_widget',
            // Widget name will appear in UI
           esc_html__( 'IranoMag: Most populare post widget', 'iranomag' ),
            // Widget description
            array( 'description' => esc_html__( 'Display Most Populare Posts.', 'iranomag' ), )
        );
    }
    public function widget( $args, $instance ) {
        $title = apply_filters( 'widget_title', $instance['title'] );

        echo $args['before_widget'];
        
        $widget_id = $this->id;
        
        if ( ! empty( $title ) )
        echo $args['before_title'] . $title . $args['after_title'];
        
        echo '<ul class="im-widget-tabs clearfix">';
            if($instance['week'] == 'on') {
                echo '<li class="widget_pop_btn widget_pop_week"><a href="#'.$widget_id.'-tab1">'.esc_html__( 'Week', 'iranomag' ).'</a></li>';
            }
            if($instance['month'] == 'on') {
                echo '<li class="widget_pop_btn widget_pop_week"><a href="#'.$widget_id.'-tab2">'.esc_html__( 'Month', 'iranomag' ).'</a></li>';
            }
            if($instance['year'] == 'on') {
                echo '<li class="widget_pop_btn widget_pop_week"><a href="#'.$widget_id.'-tab3">'.esc_html__( 'Year', 'iranomag' ).'</a></li>';
            }
        echo "</ul>";
        
        if($instance['week'] == 'on') {
            echo '<div id="'.$widget_id.'-tab1" class="widget_pop_body">';
            if($instance['cat'] >= 0) {
                impv_content('7', $instance['count'], $instance['cat']);
            } else {
                impv_content('7', $instance['count'], null);
            }
            echo '</div>';
        }
        
        if($instance['month'] == 'on') {
            echo '<div id="'.$widget_id.'-tab2" class="widget_pop_body">';
            if($instance['cat'] >= 0) {
                impv_content('30', $instance['count'], $instance['cat']);
            } else {
                impv_content('30', $instance['count'], null);
            }
            echo '</div>';
        }
        if($instance['year'] == 'on') {
            echo '<div id="'.$widget_id.'-tab3" class="widget_pop_body">';
            if($instance['cat'] >= 0) {
                impv_content('365', $instance['count'], $instance['cat']);
            } else {
                impv_content('365', $instance['count'], null);
            }
            echo '</div>';
        }
        if(!$instance['week'] == 'on' && !$instance['month'] == 'on' && !$instance['year'] == 'on') {
            if($instance['cat'] >= 0) {
                impv_content('30', $instance['count'], $instance['cat']);
            } else {
                impv_content('30', $instance['count'], null);
            }
        }
    echo $args['after_widget'];
    }
    // Widget Backend 
    public function form( $instance ) {
    $title = isset($instance[ 'title' ]) ? $instance[ 'title' ] : esc_html__( 'Most Populare Posts', 'iranomag' );
    $cat = isset($instance[ 'cat' ]) ? $instance[ 'cat' ] : '';
    $count = isset($instance[ 'count' ]) ? $instance[ 'count' ] : '5';
    $week = isset($instance[ 'week' ]) ? 'true' : 'false';
    $month = isset($instance[ 'month' ]) ? 'true' : 'false';
    $year = isset($instance[ 'year' ]) ? 'true' : 'false';
    ?>
    <p>
        <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php echo esc_html__( 'Title', 'iranomag' ); ?>:</label> 
        <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
        <br/><br/>
        <label for="<?php echo $this->get_field_id( 'cat' ); ?>"><?php echo esc_html__( 'Category', 'iranomag' ); ?></label>    
        <?php 
            $args = array(
                'show_option_none' => __( 'Display From All Categories', 'iranomag' ),
                'orderby'          => 'name',
                'class'            => 'widefat',
                'name'             => $this->get_field_name( 'cat' ),
                'selected'         => $cat
            );
            wp_dropdown_categories( $args );
        ?>
        <small><?php __( 'Select a Category to Display Posts From', 'iranomag' ); ?></small>
        <br/><br/>
        <label for="<?php echo $this->get_field_id( 'count' ); ?>"><?php echo esc_html__( 'Post Count', 'iranomag' ); ?></label> 
        <input class="widefat" id="<?php echo $this->get_field_id( 'count' ); ?>" name="<?php echo $this->get_field_name( 'count' ); ?>" type="text" value="<?php echo esc_attr( $count); ?>" />
        <small><?php echo esc_html__( 'Put Number of Post to Display Here, Example: 10,100,1000.', 'iranomag' ); ?></small>
    </p>
    <h3><?php echo esc_html__( 'Display By', 'iranomag' ); ?>:</h3>
    <p>
        <input class="checkbox" type="checkbox" <?php checked( isset($instance[ 'week' ]) ? $instance[ 'week' ] : '', 'on' ); ?> id="<?php echo $this->get_field_id( 'week' ); ?>" name="<?php echo $this->get_field_name( 'week' ); ?>" /> 
        <label for="<?php echo $this->get_field_id( 'week' ); ?>"><?php echo esc_html__( 'Week', 'iranomag' ); ?></label>
        <br/>
        <input class="checkbox" type="checkbox" <?php checked( isset($instance[ 'month' ]) ? $instance[ 'month' ] : '', 'on' ); ?> id="<?php echo $this->get_field_id( 'month' ); ?>" name="<?php echo $this->get_field_name( 'month' ); ?>" /> 
        <label for="<?php echo $this->get_field_id( 'month' ); ?>"><?php echo esc_html__( 'Month', 'iranomag' ); ?></label>
        <br/>
        <input class="checkbox" type="checkbox" <?php checked( isset($instance[ 'year' ]) ? $instance[ 'year' ] : '', 'on' ); ?> id="<?php echo $this->get_field_id( 'year' ); ?>" name="<?php echo $this->get_field_name( 'year' ); ?>" /> 
        <label for="<?php echo $this->get_field_id( 'year' ); ?>"><?php echo esc_html__( 'Year', 'iranomag' ); ?></label>
    </p>
    <?php 
    }
    public function update( $new_instance, $old_instance ) {
    $instance = array();
    $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
    $instance['cat'] = $new_instance['cat'];
    $instance['count'] = ( ! empty( $new_instance['count'] ) ) ? strip_tags( $new_instance['count'] ) : '';
    $instance[ 'week' ] = $new_instance[ 'week' ];
    $instance[ 'month' ] = $new_instance[ 'month' ];
    $instance[ 'year' ] = $new_instance[ 'year' ];
    return $instance;
    }
}
function im_load_widget() {
    register_widget( 'impv_display_widget' );
}
add_action( 'widgets_init', 'im_load_widget' );

/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* Ø§ÛŒØ±Ø§Ù†ÙˆÙ…Ú¯ 2 Ø¨ÙˆØ³ÛŒÙ„Ù‡ Ù…Ø­Ù…Ø¯ Ø§Ø¨Ø±Ø§Ù‡ÛŒÙ… Ø±Ù…Ø¶Ø§Ù†Ø®Ø§Ù†ÛŒ (Ebiram), Ø¯Ø± Ø§ÛŒØ±Ø§Ù†ÙˆÙˆØ¨.ir Ø·Ø±Ø§Ø­ÛŒ Ø´Ø¯Ù‡ Ø§Ø³Øª.
* Ù�Ø±ÙˆØ´ Ùˆ Ù¾Ø´ØªÛŒØ¨Ø§Ù†ÛŒ ØªÙ†Ù‡Ø§ Ø¯Ø± Ù…Ø§Ø±Ú©Øª ÙˆØ±Ø¯Ù¾Ø±Ø³
*/