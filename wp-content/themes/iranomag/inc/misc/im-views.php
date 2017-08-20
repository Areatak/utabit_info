<?php
global $wpdb;
$impv_tablename = $wpdb->prefix.'im_post_views';
function impv_page_viewed_install() {
   	global $wpdb;
   	global $impv_tablename;
   	if($wpdb->get_var("show tables like '$impv_tablename'") != $impv_tablename)
   	{
   	    $sql = "CREATE TABLE " . $impv_tablename . " (
		id BIGINT(50) NOT NULL AUTO_INCREMENT,
        post_id VARCHAR(255) NOT NULL,
        last_date DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
        views BIGINT(50) NOT NULL,
        cat_id VARCHAR(255) NOT NULL,
        PRIMARY KEY (post_id),
        UNIQUE (id)
		);";
   	    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
   	    dbDelta($sql);
   	}
}
add_action('after_switch_theme', 'impv_page_viewed_install');

function impv_page_viewed(){
    if(is_single() && !is_page()){
        global $wpdb, $post, $impv_tablename;
        $wpdb->flush();
		$post_id = $post->ID;
		$esc_query = "SELECT * FROM ".$impv_tablename." WHERE post_id=%d;";
		$esc_sql = $wpdb->prepare($esc_query, $post_id);
        $data = $wpdb->get_row($esc_sql, ARRAY_A);
        if(isset($data)){
            $new_views = esc_html($data['views'] + 1); // increase the views by 1
            $new_date = esc_html(date('Y-m-d H:i:s')); // datetime now
            $cat_id = esc_html(get_post_meta($post_id, 'meta_post_cat', true)); // cat id
            if($cat_id == null) {
				$categories_list = get_the_category();
                $cat_id = $categories_list[0]->cat_ID;
            }
            //$wpdb->query("UPDATE {$impv_tablename} SET views='{$new_views}', last_date='{$new_date}', cat_id='{$cat_id}' WHERE post_id='{$post->ID}';");
			$wpdb->update($impv_tablename,
						array( 
							'views' => $new_views,
							'last_date' => $new_date,
							'cat_id' => $cat_id
						),
						array( 'post_id' => $post_id));
            $wpdb->flush();
        }
        else {
            $new_date = esc_html(date('Y-m-d H:i:s')); // datetime now
            $cat_id = esc_html(get_post_meta($post_id, 'meta_post_cat', true)); // cat id
            if($cat_id == null) {
                $categories_list = get_the_category();
                $cat_id = $categories_list[0]->cat_ID;
            }
            //$wpdb->query("INSERT INTO {$impv_tablename} (post_id, last_date, views, cat_id) VALUES ('{$post->ID}','{$new_date}','1',{$cat_id});");
			$wpdb->insert($impv_tablename,
						array( 
							'post_id' => $post_id,
							'last_date' => $new_date,
							'views' => '1',
							'cat_id' => $cat_id
						));
            $wpdb->flush();
        }
    }
}
add_action('wp_head','impv_page_viewed');

function impv_postviews()
{
    $post_id = get_the_ID();
    global $wpdb, $impv_tablename;
	$esc_query = "SELECT views FROM ".$impv_tablename." WHERE post_id=%d;";
	$esc_sql = $wpdb->prepare($esc_query, $post_id);
    $views = $wpdb->get_var($esc_sql);
	
    if($views != 0) {
        return $views;
    }
    else {
        return 0;
    }
}

function impv_content($range, $count, $cat)
{
    global $wpdb, $impv_tablename;
    $to_date = esc_html(date('Y-m-d H:i:s'));
    $from_date = esc_html(date('Y-m-d H:i:s', strtotime($to_date . '- '.$range.' days')));
    
    if($cat != null) {
		$esc_query = "SELECT * FROM ".$impv_tablename." WHERE last_date BETWEEN %s AND %s AND cat_id = %d ORDER BY views DESC LIMIT 0,%d;";
		$esc_sql = $wpdb->prepare($esc_query, array($from_date,$to_date,$cat,$count));
        $popular = $wpdb->get_results($esc_sql,ARRAY_N);
    } else {
		$esc_query = "SELECT * FROM ".$impv_tablename." WHERE last_date BETWEEN %s AND %s ORDER BY views DESC LIMIT 0,%d;";
		$esc_sql = $wpdb->prepare($esc_query, array($from_date,$to_date,$count));
        $popular = $wpdb->get_results($esc_sql,ARRAY_N);
    }
    
    echo "<ul class='popular_by_views_list'>";
    foreach($popular as $post){
        $postid = $post[1];
        $views = number_format($post[3]);
        $catid = $post[4];
        if($catid != 0) {
            $catname = get_the_category_by_ID($catid);
            $caturl = esc_url(get_category_link($catid));
        }
        $post_url = esc_url(get_permalink($postid));
        $title = get_the_title($postid);
        $thumb = '<img src="'.get_the_post_thumbnail_url($postid,'widget').'" alt="'.$title.'" />';
        ?>
        <li class="im-widget clearfix">
            <?php  if($thumb != null) : ?>
                <figure class="im-widget-thumb">
                    <?php
                        echo '<a href="' . $post_url . '" title="' . $title . '">';
                        echo $thumb;
                        echo '</a>';
                    ?>
                </figure>
            <?php endif; ?>
            <div class="im-widget-entry">
            	<header class="im-widget-entry-header">
            		<?php echo "<h4 class='im-widget-entry-title'><a href='{$post_url}' title='{$title}'>{$title}</a></h4>"; ?>
            	</header>
            	<footer class="im-widget-entry-footer">
					<div class="iranomag-meta clearfix">
						<div class="posted-on im-meta-item">
							<span class="entry-date published updated">
								<?php echo get_the_date(ot_get_option('date_layout') , $postid, true); ?>
							</span>
						</div>
						<div class="post-views im-meta-item">
							<?php echo '<i class="fa fa-eye"></i>' . $views; ?>
						</div>
					</div>
            	</footer>
            </div>
        </li>
        <?php
    }
    echo "</ul>";
}

/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/