<?php if(esc_html(get_post_meta(get_the_ID() , 'meta_has_download', true)) == 'on') : ?>
<div class="im-post-download clearfix">
	<h2 id="im-dl-link" class="im-post-download-title"><?php echo esc_html__( 'Download Links', 'iranomag' ); ?></h2>
	<div class="im-post-download-list">
		<?php download_item(get_the_ID()); ?>
	</div>
</div>
<?php if(esc_html(get_post_meta(get_the_ID() , 'meta_download_descriptions', true)) != null) : ?>
<div class="im-post-download-description clearfix">
	<h2 class="im-post-download-description-title"><?php echo esc_html__( 'Download Descriptions', 'iranomag' ); ?></h2>
	<div class="im-post-download-description-text">
		<p>
		<?php
			$desc = get_post_meta(get_the_ID() , 'meta_download_descriptions', true);
			echo nl2br($desc);
		?>
		</p>
	</div>
</div>
<?php endif; ?>
<?php if(esc_html(get_post_meta(get_the_ID() , 'meta_download_password', true)) != null) : ?>
<div class="im-post-download-password clearfix">
	<div class="im-post-download-password-title"><span><?php echo esc_html__( 'Download Password', 'iranomag' ); ?></span></div>
	<div class="im-post-download-password-text">
		<?php echo get_post_meta(get_the_ID() , 'meta_download_password', true); ?>
	</div>
</div>
<?php endif; endif; ?>