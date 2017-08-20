<div class="im-header-mobile">
    <header class="im-main-header clearfix <?php esc_attr(dl_select(ot_get_option("header_color"))); ?><?php if(esc_html(ot_get_option("header_full")) == "off") echo " container"; ?>">
        <div<?php if(esc_html(ot_get_option("header_full")) == "on") echo " class='container'"; ?>>
            <div class="row">
                <div class="im-search im-<?php if(ot_get_option('menu_btn') == 'auto') echo 'slide'; else echo 'click' ?>-block col-sm-2 col-xs-2">
                    <div class="search-btn slide-btn">
                        <i class="fa fa-search"></i>
                        <div class="im-search-panel im-slide-panel">
                            <?php get_template_part( 'searchform'); ?>
                        </div>
                    </div>
                </div>
                <div class="im-mobile-logo col-sm-8 col-xs-8">
                    <?php if(ot_get_option("header_logo") != null) : ?>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                            <img class="im-header-logo-image" src="<?php echo esc_url(ot_get_option("header_logo")['background-image']); ?>" alt="<?php bloginfo( 'name' ); ?>">
                        </a>
                    <?php else : ?>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                            <img class="im-mobile-logo-image" src="<?php echo IM_THEME_ROOT; ?>/assets/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
                        </a>
                    <?php endif; ?>
                </div>
                <div class="im-off-canvas col-sm-2 col-xs-2">
                    <button id="off-canvas-on" class="off-canvas-on" ><i class="fa fa-navicon"></i></button>
                </div>
            </div>
        </div>
    </header>
</div>
<?php if(esc_html(ot_get_option("header_ad")) != null) {
    echo '<div class="container"><div class="im-header-mobile-ad col-md-12 text-center">';
    echo ot_get_option("header_ad");
    echo '</div></div>';
} ?>