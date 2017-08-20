<?php
// im video
class im_video extends WP_Widget {
	function __construct() {
		$widget_ops = array(
		'classname'   => 'im_video',
		'description' => esc_html__( 'Display Video.', 'iranomag' )
		);
		
		parent::__construct(
			'im_video_widget',
			esc_html__( 'IranoMag: Video widget', 'iranomag' ),
			$widget_ops
		);
			
		$this->defaults = array( 'video_link' => '' );
	}

	function widget($args, $instance) {
        extract($args);
        $title = apply_filters( 'widget_title', $instance['title'] );
        echo $before_widget;
        if ( ! empty( $title ) ) {
			echo $before_title . $title . $after_title;
		}
		$link = $instance['video_link'];
		im_video_player($link);
		echo $after_widget;
	}
	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		
		/* Strip tags (if needed) and update the widget settings. */
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		$instance['video_link'] = $new_instance['video_link'];
		return $instance;
	}
	function form($instance) {
        if ( isset( $instance[ 'title' ] ) ) {
            $title = $instance[ 'title' ];
        } else {
            $title = __( 'Video', 'iranomag' );
        }
		$defaults = $this->defaults;
		$instance = wp_parse_args( (array) $instance, $defaults );
		?>
        <p>
            <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php echo __( 'Title', 'iranomag' ); ?>:</label> 
            <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
        </p>
	
		<p>
            <label for="<?php echo $this->get_field_id( 'video_link' ); ?>">لینک:</label>
            <input class="widefat" type="text" value="<?php echo $instance['video_link']; ?>" id="<?php echo $this->get_field_id( 'video_link' ); ?>" name="<?php echo $this->get_field_name( 'video_link' ); ?>" />
		</p>
	<?php
	}
}
function im_video_init() {
	register_widget('im_video');
}
add_action('widgets_init', 'im_video_init');

?>