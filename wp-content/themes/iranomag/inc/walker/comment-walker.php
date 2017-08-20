<?php
	class comment_walker extends Walker_Comment {
		var $tree_type = 'comment';
		var $db_fields = array( 'parent' => 'comment_parent', 'id' => 'comment_ID' );
		function __construct() { ?>
			<section class="comments-list clearfix">
		<?php }
		function start_lvl( &$output, $depth = 0, $args = array() ) {
			$GLOBALS['comment_depth'] = $depth + 2; ?>
			<section class="child-comments comments-list">
		<?php }
		function end_lvl( &$output, $depth = 0, $args = array() ) {
			$GLOBALS['comment_depth'] = $depth + 2; ?>
			</section>
		<?php }
		function start_el( &$output, $comment, $depth = 0, $args = array(), $id = 0 ) {
			$depth++;
			$GLOBALS['comment_depth'] = $depth;
			$GLOBALS['comment'] = $comment;
			$parent_class = ( empty( $args['has_children'] ) ? '' : 'parent' ); 
			if ( 'article' == $args['style'] ) {
				$tag = 'article';
				$add_below = 'comment';
			} else {
				$tag = 'article';
				$add_below = 'comment';
			} ?>
            
            
			<article <?php comment_class(empty( $args['has_children'] ) ? '' :'parent') ?> id="comment-<?php comment_ID() ?>" itemscope itemtype="http://schema.org/Comment">
                <div class="im-comment-box">
                    <div class="im-comment-details clearfix">
                        <div class="im-comment-avatar pull-right">
                            <figure class="gravatar"><?php if ( 0 != $args['avatar_size'] ) echo get_avatar( $comment, $args['avatar_size'] ); ?></figure>
                        </div>
                        <div class="im-comment-meta" role="complementary">
                            <div>
                                <h3 class="comment-author">
                                    <a class="comment-author-link" href="<?php esc_url(comment_author_url()); ?>"><?php comment_author(); ?></a>
                                </h3>
                            </div>
                            <div class="clearfix">
                                <div class="pull-right">
                                    <span class="comment-meta-time"><?php comment_date(ot_get_option('date_layout')) ?>, <a href="#comment-<?php comment_ID() ?>"><?php comment_time() ?></a></span>
                                    <?php edit_comment_link('<i class="fa fa-edit"></i>','',''); ?>
                                    <?php if ($comment->comment_approved == '0') : ?>
                                        <span class="comment-meta-item"><i class="fa fa-info"></i><?php esc_html_e( 'Comment awaiting moderation', 'iranomag' ); ?></span>
                                    <?php endif; ?>
                                </div>
                                <div class="pull-left">
                                    <?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="comment-content post-content clearfix">
                        <?php comment_text() ?>
                    </div>
                </div>
                
                
		<?php }
		function end_el(&$output, $comment, $depth = 0, $args = array() ) { ?>
			</article>
		<?php }
		function __destruct() { ?>
			</section>
		<?php }
	}
?>