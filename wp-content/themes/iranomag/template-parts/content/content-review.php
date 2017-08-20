<?php if(esc_html(get_post_meta(get_the_ID(), 'meta_is_review', true)) == 'on') { ?>
<div class="im-entry-review">
	<h2 class="im-entry-review-title">
		<?php echo esc_html(get_post_meta(get_the_ID(), 'meta_ratings_title', true)); ?>
	</h2>
	<div class="im-entry-review-box">
		<?php esc_html(review_item(get_the_ID())); ?>
	</div>
	<div class="im-entry-review-details">
		<div class="im-entry-review-proscons">
			<div class="row">
				<?php esc_html(review_proscons(get_the_ID())); ?>
			</div>
		</div>
		<div class="im-entry-review-avg">
			<?php esc_html(review_avg(get_the_ID())); ?>
		</div>
	</div>
</div>
<?php } ?>