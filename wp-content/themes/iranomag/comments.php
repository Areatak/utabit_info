<?php
/**
 * The template for displaying comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">
	<?php
	if ( have_comments() ) : ?>
		<h2 class="comments-title">
			<i class="fa fa-comments"></i>
			<?php
				printf(
					esc_html( _nx( 'One thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', get_comments_number(), 'comments title', 'iranomag' ) ),
					number_format_i18n( get_comments_number() ),
					'<span>' . esc_html(get_the_title()) . '</span>'
				);
			?>
		</h2>
		<?php
			wp_list_comments( array(
				'walker'     		=> new comment_walker,
				'style'     		=> '',
				'short_ping' 		=> true,
				'format'     		=> 'html5',
				'avatar_size'       => 50,
			) );
		?>
		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
		<nav class="navigation pagination" role="navigation">
			<div class="nav-links">
				<?php
					paginate_comments_links();
					/*
					* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
					* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
					* فروش و پشتیبانی تنها در مارکت وردپرس
					*/
				?>
			</div>
		</nav>
		<?php
		endif;
	endif;
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>
		<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'iranomag' ); ?></p>
	<?php
	endif;
	
	$aria_req = ( $req ? " aria-required='true'" : '' );
	
	$fields =  array(
	'author' =>
	  '<div class="row"><p class="comment-form-author col-md-4 col-sm-12">' .
	  '<input id="author" name="author" type="text" placeholder="' . esc_attr__( 'Name' ) . ( $req ? ' (*)' : '' ) .'" value="' . esc_attr( $commenter['comment_author'] ) .
	  '" size="30"' . esc_attr($aria_req) . ' /></p>',
	
	'email' =>
	  '<p class="comment-form-email col-md-4 col-sm-12">' .
	  '<input id="email" name="email" type="text" placeholder="' . esc_attr__( 'Email' ) . ( $req ? ' (*)' : '' ) .'" value="' . esc_attr(  $commenter['comment_author_email'] ) .
	  '" size="30"' . esc_attr($aria_req) . ' /></p>',
	
	'url' =>
	  '<p class="comment-form-url col-md-4 col-sm-12">' .
	  '<input id="url" name="url" type="text" placeholder="' . esc_attr__( 'Website' ) .'" value="' . esc_attr( $commenter['comment_author_url'] ) .
	  '" size="30" /></p></div>',
	);
	
	$comments_args = array(
		'title_reply' => '<i class="fa fa-comment-o"></i> '.esc_attr__( 'Write a Reply or Comment', 'iranomag' ),
		'format'            => 'xhtml',
		'fields' => apply_filters( 'comment_form_default_fields', $fields ),
	  );
	comment_form( $comments_args );
	?>
</div>
