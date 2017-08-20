<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package iranomag
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside class="im-widget-area col-md-4 col-sm-12 sticky-sidebar" role="complementary">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside>
