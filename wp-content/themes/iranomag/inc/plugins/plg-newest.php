<?php
/*
 Plugin Name: im newest
 Description: Iranomag newest widget
 */
class im_newest extends WP_Widget {
    function __construct() {
        parent::__construct(
            'im_newest',
            esc_html__('IranoMag: Newest Posts', 'iranomag'),
            array( 'description' => esc_html__( 'Display Newest Posts.', 'iranomag' ), )
        );
    }
    public function widget( $args, $instance ) {
        $title = apply_filters( 'widget_title', $instance['title'] );
        if($instance['cat'] == "-1") {
            $my_cat = '';
            $new_before_title = $args['before_title'];
        }
        else {
            $my_cat = $instance['cat'];
            $new_before_title = '<div class="widget-head widget-head-'.$my_cat.'"><strong class="widget-title">';
        }
        if($instance[ 'order' ] == 'meta_ratings_avg') {
            $meta_key = 'meta_ratings_avg';
            $instance[ 'order' ] = 'meta_value_num';
        }
        else {
            $meta_key = '';
        }
        if($instance[ 'order' ] == 'vote_avg') {
            $meta_key = 'vote_avg';
            $instance[ 'order' ] = 'meta_value_num';
        }
        if($instance[ 'order' ] == 'meta_featured_post') {
            $key = 'meta_featured_post';
            $value = 'on';
            $instance[ 'order' ] = 'date';
        }
        else {
            $key = '';
            $value = '';
        }
        echo $args['before_widget'];
        if ( ! empty( $title ) )
        echo $new_before_title . $title . $args['after_title'];
        echo '<ul>';
        $query = queryFunc($my_cat, $instance['tag'], $instance['count'], '', $key, $value, $instance[ 'order' ], $instance[ 'osc' ], $meta_key);
        if ( $query->have_posts() ) {
            if($my_cat != '') {
                $cat_name = esc_html(get_the_category_by_ID($my_cat));
                $cat_url = esc_url(get_category_link($my_cat));
                echo '<li class="im-widget-view-all-list"><a class="im-widget-view-all" href="' . $cat_url . '" title="' . esc_html__('Display Rest of Category Posts', 'iranomag') . $cat_name . '">'.esc_html__('Display All', 'iranomag').'</a></li>';
            }
            while ( $query->have_posts() ) {
                $query->the_post();
                if($instance['default'] == 'default_1') {
                    get_template_part( 'template-parts/widget/widget', '1-list');
                } elseif($instance['default'] == 'default_2') {
                    get_template_part( 'template-parts/widget/widget', '1-thumb');
                } elseif($instance['default'] == 'default_3') {
                    get_template_part( 'template-parts/widget/widget', '1-featured');
                }
            }
        }
        wp_reset_postdata();
        echo '</ul>';
        echo $args['after_widget'];
    }
    public function form( $instance ) {
        $title = isset($instance[ 'title' ]) ? $instance[ 'title' ] : esc_html__( 'New Posts', 'iranomag' );
        $cat = isset($instance[ 'cat' ]) ? $instance[ 'cat' ] : '';
        $tag = isset($instance[ 'tag' ]) ? $instance[ 'tag' ] : '';
        $count = isset($instance[ 'count' ]) ? $instance[ 'count' ] : '5';
        $order = isset($instance[ 'order' ]) ? $instance[ 'order' ] : esc_html__( 'date', 'iranomag' );
        $osc = isset($instance[ 'osc' ]) ? $instance[ 'osc' ] : 'DESC';
        $default = isset($instance[ 'default' ]) ? $instance[ 'default' ] : esc_html__( 'default_1', 'iranomag' );
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
        <small><?php echo esc_html__( 'Select a Category to Display Posts From', 'iranomag' ); ?></small>
        <br/><br/>
        <label for="<?php echo $this->get_field_id( 'tag' ); ?>"><?php echo esc_html__( 'Tag', 'iranomag' ); ?></label> 
        <input class="widefat" id="<?php echo $this->get_field_id( 'tag' ); ?>" name="<?php echo $this->get_field_name( 'tag' ); ?>" type="text" value="<?php echo esc_attr( $tag); ?>" />
        <small><?php echo __( 'Put Tag ID Here, Example: (1,2,3,15,20). <br/><b>This Field is Nullable.</b>', 'iranomag' ); ?></small>
        <br/><br/>
        <label for="<?php echo $this->get_field_id( 'count' ); ?>"><?php echo esc_html__( 'Post Count', 'iranomag' ); ?></label> 
        <input class="widefat" id="<?php echo $this->get_field_id( 'count' ); ?>" name="<?php echo $this->get_field_name( 'count' ); ?>" type="text" value="<?php echo esc_attr( $count); ?>" />
        <small><?php echo esc_html__( 'Put Number of Post to Display Here, Example: 10,100,1000.', 'iranomag' ); ?></small>
    </p>
    <h3><?php echo esc_html__( 'Display From', 'iranomag' ); ?>:</h3>
    <p>
        <input id="<?php echo $this->get_field_id('order_1'); ?>" name="<?php echo $this->get_field_name('order'); ?>" type="radio" value="date" <?php if($order === 'date'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'order_1' ); ?>"><small><?php echo esc_html__( 'Publish Date', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('order_2'); ?>" name="<?php echo $this->get_field_name('order'); ?>" type="radio" value="comment_count" <?php if($order === 'comment_count'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'order_2' ); ?>"><small><?php echo esc_html__( 'Comments Count', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('order_3'); ?>" name="<?php echo $this->get_field_name('order'); ?>" type="radio" value="title" <?php if($order === 'title'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'order_3' ); ?>"><small><?php echo esc_html__( 'Title', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('order_4'); ?>" name="<?php echo $this->get_field_name('order'); ?>" type="radio" value="author" <?php if($order === 'author'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'order_4' ); ?>"><small><?php echo esc_html__( 'Author', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('order_5'); ?>" name="<?php echo $this->get_field_name('order'); ?>" type="radio" value="rand" <?php if($order === 'rand'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'order_5' ); ?>"><small><?php echo esc_html__( 'Random', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('order_6'); ?>" name="<?php echo $this->get_field_name('order'); ?>" type="radio" value="meta_ratings_avg" <?php if($order === 'meta_ratings_avg'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'order_6' ); ?>"><small><?php echo esc_html__( 'Reviews', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('order_7'); ?>" name="<?php echo $this->get_field_name('order'); ?>" type="radio" value="vote_avg" <?php if($order === 'vote_avg'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'order_7' ); ?>"><small><?php echo esc_html__( 'User Votes', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('order_8'); ?>" name="<?php echo $this->get_field_name('order'); ?>" type="radio" value="meta_featured_post" <?php if($order === 'meta_featured_post'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'order_8' ); ?>"><small><?php echo esc_html__( 'Featured Post', 'iranomag' ); ?></small></label>
    </p>
    <h3><?php echo esc_html__( 'Display By', 'iranomag' ); ?>:</h3>
    <p>
        <input id="<?php echo $this->get_field_id('osc_1'); ?>" name="<?php echo $this->get_field_name('osc'); ?>" type="radio" value="DESC" <?php if($osc === 'DESC'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'osc_1' ); ?>"><small><?php echo esc_html__( 'DESC', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('osc_2'); ?>" name="<?php echo $this->get_field_name('osc'); ?>" type="radio" value="ASC" <?php if($osc === 'ASC'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'osc_2' ); ?>"><small><?php echo esc_html__( 'ASC', 'iranomag' ); ?></small></label>
    </p>
    <h3><?php echo esc_html__( 'Display By Style', 'iranomag' ); ?>:</h3>
    <p>
        <input id="<?php echo $this->get_field_id('default_1'); ?>" name="<?php echo $this->get_field_name('default'); ?>" type="radio" value="default_1" <?php if($default === 'default_1'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'default_1' ); ?>"><small><?php echo esc_html__( 'List', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('default_2'); ?>" name="<?php echo $this->get_field_name('default'); ?>" type="radio" value="default_2" <?php if($default === 'default_2'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'default_2' ); ?>"><small><?php echo esc_html__( 'List with Thumbnail', 'iranomag' ); ?></small></label>
        <br/>
        <input id="<?php echo $this->get_field_id('default_3'); ?>" name="<?php echo $this->get_field_name('default'); ?>" type="radio" value="default_3" <?php if($default === 'default_3'){ echo 'checked="checked"'; } ?> />
        <label for="<?php echo $this->get_field_id( 'default_3' ); ?>"><small><?php echo esc_html__( 'List with Featured Thumbnail', 'iranomag' ); ?></small></label>
    </p>
    <?php 
    }
    public function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
        $instance['cat'] = $new_instance['cat'];
        $instance['tag'] = ( ! empty( $new_instance['tag'] ) ) ? strip_tags( $new_instance['tag'] ) : '';
        $instance['count'] = ( ! empty( $new_instance['count'] ) ) ? strip_tags( $new_instance['count'] ) : '';
        $instance['order'] = strip_tags($new_instance['order']);
        $instance['osc'] = strip_tags($new_instance['osc']);
        $instance['default'] = strip_tags($new_instance['default']);
        return $instance;
    }
}
function im_newest_load_widget() {
    register_widget( 'im_newest' );
}
add_action( 'widgets_init', 'im_newest_load_widget' );