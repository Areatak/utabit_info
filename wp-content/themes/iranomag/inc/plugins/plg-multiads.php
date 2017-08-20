<?php
// im Single Ad
class im_multiad extends WP_Widget {
	function __construct() {
		$widget_ops = array(
		'classname'   => 'im_multiad',
		'description' => esc_html__( 'Display Advertisements.', 'iranomag' )
		);
		
		parent::__construct(
			'im_multiad_widget',
			esc_html__( 'IranoMag: Multi advertisement widget', 'iranomag' ),
			$widget_ops
		);
			
		$this->defaults = array( 'ad_code_1' => '', 'ad_code_2' => '', 'ad_code_3' => '', 'ad_code_4' => '' );
	}
	
	/*
	* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
	* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
	* فروش و پشتیبانی تنها در مارکت وردپرس
	*/

	function widget($args, $instance) {
		extract($args);
		$ad_code_1 = $instance['ad_code_1'];
		$ad_code_2 = $instance['ad_code_2'];
		$ad_code_3 = $instance['ad_code_3'];
		$ad_code_4 = $instance['ad_code_4'];
		echo $before_widget;
        ?>
		<div class="clearfix">
			<div class="ad-block ab-1 col-md-6 col-sm-3 col-xs-6">
				<?php echo do_shortcode($ad_code_1); ?>
			</div>
			<div class="ad-block ab-2 col-md-6 col-sm-3 col-xs-6">
				<?php echo do_shortcode($ad_code_2); ?>
			</div>
			<div class="ad-block ab-3 col-md-6 col-sm-3 col-xs-6">
				<?php echo do_shortcode($ad_code_3); ?>
			</div>
			<div class="ad-block ab-4 col-md-6 col-sm-3 col-xs-6">
				<?php echo do_shortcode($ad_code_4); ?>
			</div>
		</div>
        <?php
		echo $after_widget;
	}
	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		
		/* Strip tags (if needed) and update the widget settings. */
        $instance = array();
		$instance['ad_code_1'] = $new_instance['ad_code_1'];
		$instance['ad_code_2'] = $new_instance['ad_code_2'];
		$instance['ad_code_3'] = $new_instance['ad_code_3'];
		$instance['ad_code_4'] = $new_instance['ad_code_4'];
		return $instance;
	}
	function form($instance) {
		$defaults = $this->defaults;
		$instance = wp_parse_args( (array) $instance, $defaults );
		?>

		<p>
		 <label for="<?php echo $this->get_field_id( 'ad_code_1' ); ?>">HTML:</label>
		 <textarea class="widefat" rows="4" id="<?php echo $this->get_field_id( 'ad_code_1' ); ?>" name="<?php echo $this->get_field_name( 'ad_code_1' ); ?>" style="width:100%;"><?php echo $instance['ad_code_1']; ?></textarea>
		</p>
		<p>
		 <label for="<?php echo $this->get_field_id( 'ad_code_2' ); ?>">HTML:</label>
		 <textarea class="widefat" rows="4" id="<?php echo $this->get_field_id( 'ad_code_2' ); ?>" name="<?php echo $this->get_field_name( 'ad_code_2' ); ?>" style="width:100%;"><?php echo $instance['ad_code_2']; ?></textarea>
		</p>
		<p>
		 <label for="<?php echo $this->get_field_id( 'ad_code_3' ); ?>">HTML:</label>
		 <textarea class="widefat" rows="4" id="<?php echo $this->get_field_id( 'ad_code_3' ); ?>" name="<?php echo $this->get_field_name( 'ad_code_3' ); ?>" style="width:100%;"><?php echo $instance['ad_code_3']; ?></textarea>
		</p>
		<p>
		 <label for="<?php echo $this->get_field_id( 'ad_code_4' ); ?>">HTML:</label>
		 <textarea class="widefat" rows="4" id="<?php echo $this->get_field_id( 'ad_code_4' ); ?>" name="<?php echo $this->get_field_name( 'ad_code_4' ); ?>" style="width:100%;"><?php echo $instance['ad_code_4']; ?></textarea>
		</p>
	<?php
	}
}
function im_multiad_init() {
	register_widget('im_multiad');
}
add_action('widgets_init', 'im_multiad_init');

?>