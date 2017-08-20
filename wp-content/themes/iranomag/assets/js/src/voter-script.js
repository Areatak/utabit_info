jQuery(document).ready(function ($) {
    $(".user_likes").click(function (evt) {
        evt.preventDefault();
        post_id = $(this).attr("data-post_id")
        nonce = $(this).attr("data-nonce")
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: imAjax.ajaxurl,
            data: { action: "user_likes", post_id: post_id, nonce: nonce },
            success: function (response) {
                $("#likes_counter").html(response.likes_count);
                $("#vote_avg").html(response.avg_count);
                $(".user_likes").removeAttr('href').removeAttr('data-nonce').removeAttr('data-post_id').addClass('im-btn-disabled');
                traverse(document.body);
            }
        });
    });
    $(".user_dislikes").click(function (evt) {
        evt.preventDefault();
        post_id = $(this).attr("data-post_id")
        nonce = $(this).attr("data-nonce")
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: imAjax.ajaxurl,
            data: { action: "user_dislikes", post_id: post_id, nonce: nonce },
            success: function (response) {
                $("#dislikes_counter").html(response.dislikes_count);
                $("#vote_avg").html(response.avg_count);
                $(".user_dislikes").removeAttr('href').removeAttr('data-nonce').removeAttr('data-post_id').addClass('im-btn-disabled');
                traverse(document.body);
            }
        });
    });
});