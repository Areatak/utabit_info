<form action="<?php echo esc_url(get_bloginfo( 'url' )); ?>" name="searchform" method="get">
    <fieldset class="search-fieldset">
        <div class="input-group">
            <input type="search" class="form-control" name="s" placeholder="<?php echo esc_attr__('Enter the Search Query Here...', 'iranomag'); ?>" required />
            <span class="input-group-btn">
                <input type="submit" class="btn btn-default" value="<?php echo esc_attr__('Find', 'iranomag'); ?>" />
            </span>
        </div>
    </fieldset>
</form>