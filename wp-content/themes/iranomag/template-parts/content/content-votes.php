<div class="im-post-vote clearfix">
	<div class="im-post-vote-item">
		<h2><i class="fa fa-heartbeat"></i><?php echo esc_html__( 'Vote This Article', 'iranomag' ); ?></h2>
	</div>
	<div class="im-post-vote-item">
		<?php
			$likes = esc_html(get_post_meta(get_the_ID(), "likes", true));
			$likes = ($likes == "") ? 0 : $likes;
			$likes_nonce = esc_attr(wp_create_nonce("user_likes_nonce"));
			$likes_link = esc_url(admin_url('admin-ajax.php?action=user_likes&post_id='.get_the_ID().'&nonce='.$likes_nonce));
			echo '<a rel="nofollow" class="user_likes" data-nonce="' . $likes_nonce . '" data-post_id="' . get_the_ID() . '" href="' . $likes_link . '"><i class="fa fa-thumbs-o-up"></i>'.esc_html__( 'Like', 'iranomag' ).'<span id="likes_counter">'.$likes.'</span></a>';
		?>
	</div>
	<div class="im-post-vote-item">
		<?php
			$dislikes = esc_html(get_post_meta(get_the_ID(), "dislikes", true));
			$dislikes = ($dislikes == "") ? 0 : $dislikes;
			$dislikes_nonce = esc_attr(wp_create_nonce("user_dislikes_nonce"));
			$dislikes_link = esc_url(admin_url('admin-ajax.php?action=user_dislikes&post_id='.get_the_ID().'&nonce='.$dislikes_nonce));
			echo '<a rel="nofollow" class="user_dislikes" data-nonce="' . $dislikes_nonce . '" data-post_id="' . get_the_ID() . '" href="' . $dislikes_link . '"><i class="fa fa-thumbs-o-down"></i>'.esc_html__( 'Dislike', 'iranomag' ).'<span id="dislikes_counter">'.$dislikes.'</span></a>';
		?>
	</div>
	<div class="im-post-vote-item">
		<?php $vote_avg = esc_html(get_post_meta(get_the_ID(), "vote_avg", true)); $vote_avg = ($vote_avg == "") ? 0 : $vote_avg; ?>
		<i class="fa fa-heart-o"></i><?php echo esc_html__( 'Average', 'iranomag' ).'<span id="vote_avg">'.$vote_avg.'</span>'; ?>
	</div>
</div>