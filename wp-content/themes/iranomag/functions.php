<?php
/**
 * iranomag functions and definitions.
 */
define('IM_THEME_ROOT', get_template_directory_uri());
define('IM_THEME_ROOT_ABS', get_template_directory());
require get_template_directory() . '/inc/setup.php';
require get_template_directory() . '/inc/enqueue.php';
require get_template_directory() . '/inc/widgets.php';
require get_template_directory() . '/inc/misc/im-functions.php';
require get_template_directory() . '/inc/misc/im-meta.php';
require get_template_directory() . '/inc/misc/im-views.php';
require get_template_directory() . '/inc/misc/extras.php';
require get_template_directory() . '/inc/misc/customizer.php';
require get_template_directory() . '/inc/misc/jetpack.php';
require get_template_directory() . '/inc/ot-functions.php';
require get_template_directory() . '/inc/ot-meta-boxes.php';
require get_template_directory() . '/inc/ot-theme-options.php';
require get_template_directory() . '/inc/acss.php';
require get_template_directory() . '/inc/misc/post-reviews.php';
require get_template_directory() . '/inc/walker/mega-menu.php';
require get_template_directory() . '/inc/walker/simple-menu.php';
require get_template_directory() . '/inc/walker/mobile-menu.php';
require get_template_directory() . '/inc/walker/comment-walker.php';
require get_template_directory() . '/inc/misc/visualcomposer.php';
require get_template_directory() . '/inc/misc/im-grid.php';
require get_template_directory() . '/inc/plugins/plg-populare.php';
require get_template_directory() . '/inc/plugins/plg-newest.php';
require get_template_directory() . '/inc/plugins/plg-ads.php';
require get_template_directory() . '/inc/plugins/plg-multiads.php';
require get_template_directory() . '/inc/plugins/plg-video.php';
/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/
remove_action('wp_head', 'wp_generator');


pll_register_string('Share on facebook', 'Share on facebook', 'utabit');
pll_register_string('Share on twitter', 'Share on twitter', 'utabit');
pll_register_string('Share on google+', 'Share on google+', 'utabit');
pll_register_string('Share on linkedin', 'Share on linkedin', 'utabit');
pll_register_string('Share on telegram', 'Share on telegram', 'utabit');
pll_register_string('Share on whatsapp', 'Share on whatsapp', 'utabit');
pll_register_string('Share on club', 'Share on club', 'utabit');


function numberToEn($num)
{
    $per = array('۰','۱','۲','۳','۴','۵','۶','۷','۸','۹');
    $eng = array('0','1','2','3','4','5','6','7','8','9');
    return str_replace($per,$eng,$num);
}


