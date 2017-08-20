<?php
/**
 * Template part for displaying posts.
 *
 * @package iranomag
 */

?>

<li class="widget-<?php esc_attr(the_ID()); ?> im-widget-list clearfix">
	<div class="im-widget-entry-list">
		<header class="im-widget-entry-header">
			<?php the_title( '<h4 class="im-widget-entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' ); ?>
		</header>
		<footer class="im-widget-entry-footer">
			<?php im_meta(true, true, false, true, false, false); ?>
		</footer>
	</div>
</li>
