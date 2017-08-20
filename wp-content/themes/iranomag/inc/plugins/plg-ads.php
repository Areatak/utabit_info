<?php
// im Single Ad
class im_singlead extends WP_Widget {
	function __construct() {
		$widget_ops = array(
		'classname'   => 'im_singlead',
		'description' => esc_html__( 'Display Advertisements.', 'iranomag' )
		);
		
		parent::__construct(
			'im_singlead_widget',
			esc_html__( 'IranoMag: Advertisement widget', 'iranomag' ),
			$widget_ops
		);
			
		$this->defaults = array( 'ad_code' => '' );
	}

	function widget($args, $instance) {
		extract($args);
		$ad_code = $instance['ad_code'];
		echo $before_widget;
        echo do_shortcode($ad_code);
		echo $after_widget;
	}
	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		
		/* Strip tags (if needed) and update the widget settings. */
        $instance = array();
		$instance['ad_code'] = $new_instance['ad_code'];
		return $instance;
	}
	function form($instance) {
		$defaults = $this->defaults;
		$instance = wp_parse_args( (array) $instance, $defaults );
		?>
	
		<p>
		 <label for="<?php echo $this->get_field_id( 'ad_code' ); ?>">HTML:</label>
		 <textarea class="widefat" rows="6" id="<?php echo $this->get_field_id( 'ad_code' ); ?>" name="<?php echo $this->get_field_name( 'ad_code' ); ?>" style="width:100%;"><?php echo $instance['ad_code']; ?></textarea>
		</p>
	<?php
	}
}
function im_singlead_init() {
	register_widget('im_singlead');
}
add_action('widgets_init', 'im_singlead_init');

?>