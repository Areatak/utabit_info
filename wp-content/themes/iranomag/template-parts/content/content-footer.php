<?php
	if(esc_html(get_post_meta(get_the_ID() , 'meta_has_video', true)) == 'on') {
		echo '<div class="im-aparat-video">';
		$link = get_post_meta(get_the_ID() , 'meta_video_url', true);
		im_video_player($link);
		echo '</div>';
	}
?>

<?php if(esc_html(get_post_meta(get_the_ID() , 'meta_has_audio', true)) == 'on') : ?>
	<div class="im-entry-audio">
		<div class="audio-player">
			<audio preload="auto" controls>
				<source src="<?php echo esc_url(get_post_meta(get_the_ID() , 'meta_audio_url', true)); ?>" type="audio/<?php echo esc_attr(get_post_meta(get_the_ID() , 'meta_audio_format', true)); ?>">
				Your browser does not support the audio element.
			</audio>
		</div>
	</div>
<?php endif; ?>

<?php
	if(esc_html(get_post_meta(get_the_ID() , 'meta_source_name', true)) != null) {
		?>
			<div class="clearfix im-article-source">
				<div class="im-article-source-icon pull-right">
					<i class="fa fa-at" title="<?php echo esc_attr__( 'Source', 'iranomag' ); ?>"></i>
				</div>
				<div class="im-article-source-name pull-right">
					<a href="<?php if(esc_html(get_post_meta(get_the_ID() , 'meta_source_link', true)) != null) {echo esc_url(get_post_meta(get_the_ID() , 'meta_source_link', true));} else {echo "#";} ?>" rel="nofollow" title="<?php echo esc_attr(get_post_meta(get_the_ID() , 'meta_source_name', true)); ?>"><?php echo esc_html(get_post_meta(get_the_ID() , 'meta_source_name', true)); ?></a>
				</div>
			</div>
		<?php
	}
?>
<?php
//__()
?>
<div class="im-post-share clearfix">
    <a title="<?php pll_e( 'Share on facebook', 'utabit' ); ?>" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo esc_url( get_permalink() ); ?>"><i class="fa fa-facebook"></i><!--<span>--><?php /*pll_e( 'facebook'); */?></span></a>
    <a title="<?php pll_e( 'Share on twitter', 'utabit' ); ?>" href="https://twitter.com/home?status=<?php echo esc_html( get_the_title() ); ?>"><i class="fa fa-twitter"></i><!--<span>توییتر</span>--></a>
    <a title="<?php pll_e( 'Share on google+', 'utabit' ); ?>" href="https://plus.google.com/share?url=<?php echo esc_url( get_permalink() ); ?>"><i class="fa fa-google-plus"></i><!--<span>گوگل +</span>--></a>
    <a title="<?php pll_e( 'Share on linkedin', 'utabit' ); ?>" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo esc_url( get_permalink() ); ?>/&title=<?php echo esc_html( get_the_title() ); ?>&summary=<?php esc_html(the_excerpt()); ?>&source="><i class="fa fa-linkedin"></i><!--<span>لینکداین</span>--></a>
    <a title="<?php pll_e( 'Share on telegram', 'utabit' ); ?>" href="https://telegram.me/share/url?url=<?php echo esc_url( get_permalink() ); ?>&text=<?php echo esc_html( get_the_title() ); ?>"><i class="fa fa-paper-plane"></i><!--<span>تلگرام</span>--></a>
    <a title="<?php pll_e( 'Share on whatsapp', 'utabit' ); ?>" href="whatsapp://send?text=<?php echo esc_html( get_the_title() ); ?> <?php echo esc_url( get_permalink() ); ?>" data-action="share/whatsapp/share"><i class="fa fa-whatsapp"></i><!--<span>واتس اپ</span>--></a>
    <a title="<?php pll_e( 'Share on club', 'utabit' ); ?>" href="http://www.cloob.com/share/link/add?url=<?php echo esc_url( get_permalink() ); ?>"><i class="fa fa-contao"></i><!--<span>کلوب</span>--></a>
</div>

<?php //get_template_part( 'template-parts/content/content', 'download' ); ?>
<?php //get_template_part( 'template-parts/content/content', 'review' ); ?>
<?php //get_template_part( 'template-parts/content/content', 'votes' ); ?>
<?php if(ot_get_option('post_ad_2') != null) : ?>
	<div class="im-entry-bottom-ad">
		<?php echo ot_get_option('post_ad_2'); ?>
	</div>
<?php endif; ?>
<div class="im-entry-tags clearfix">
	<?php im_meta(false, false, false, false, false, true); ?>
</div>
<?php if(esc_html(ot_get_option('author_desc')) == 'on') : ?>
<div class="im-entry-author clearfix">
	<div class="im-entry-author-img">
		<?php echo get_avatar( esc_html(get_the_author_meta('email')), 85 ); ?>
	</div>
	<div class="im-entry-author-text">
		<h2><?php echo esc_html__( 'About Author', 'iranomag' ); ?></h2>
		<p><?php echo esc_html(get_the_author_meta('description')); ?></p>
		<?php if(esc_html(get_the_author_meta('url')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('url'); ?>" title="<?php echo esc_html__('WebSite', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-link"></i></a></span>
		<?php endif; if(esc_html(get_the_author_meta('facebook')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('facebook'); ?>" title="<?php echo esc_html__('Facebook', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-facebook"></i></a></span>
		<?php endif; if(esc_html(get_the_author_meta('twitter')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('twitter'); ?>" title="<?php echo esc_html__('Twitter', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-twitter"></i></a></span>
		<?php endif; if(esc_html(get_the_author_meta('gplus')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('gplus'); ?>" title="<?php echo esc_html__('Google +', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-google-plus"></i></a></span>
		<?php endif; if(esc_html(get_the_author_meta('linkedin')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('linkedin'); ?>" title="<?php echo esc_html__('LinkedIn', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-linkedin"></i></a></span>
		<?php endif; if(esc_html(get_the_author_meta('telegram')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('telegram'); ?>" title="<?php echo esc_html__('Telegram', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-paper-plane"></i></a></span>
		<?php endif; if(esc_html(get_the_author_meta('instagram')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('instagram'); ?>" title="<?php echo esc_html__('Instagram', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-instagram"></i></a></span>
		<?php endif; if(esc_html(get_the_author_meta('aparat')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('aparat'); ?>" title="<?php echo esc_html__('Aparat', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-spinner"></i></a></span>
		<?php endif; if(esc_html(get_the_author_meta('youtube')) != null) : ?>
			<span><a target="_blank" href="<?php echo get_the_author_meta('youtube'); ?>" title="<?php echo esc_html__('YouTube', 'iranomag'); ?>" rel="nofollow"><i class="fa fa-youtube"></i></a></span>
		<?php endif; ?>
	</div>
</div>
<?php endif; ?>
<div class="im-entry-pages clearfix">
	<?php
		the_post_navigation( array(
			'prev_text'                  => '<div class="nav-before" data-before="'.__( 'Before', 'iranomag' ).'">'.__( '%title', 'iranomag' ).'</div>',
			'next_text'                  => '<div class="nav-after" data-after="'.__( 'After', 'iranomag' ).'">'.__( '%title', 'iranomag' ).'</div>'
		) );
	?> 
</div>
<!--<div class="im-entry-comments">
	<?php
/*		if ( comments_open() || get_comments_number() ) :
			comments_template();
		endif;
	*/?>
</div>-->
