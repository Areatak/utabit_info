<div class="im-topnav <?php esc_attr(dl_select(ot_get_option("topnav_color"))); ?><?php if(esc_html(ot_get_option("topnav_full")) == "off") echo " container"; ?>">
    <div<?php if(esc_html(ot_get_option("topnav_full") == "on")) echo " class='container'"; ?>>
        <?php
            if ( has_nav_menu( 'top' ) ) {
                wp_nav_menu(
                array(
                        'theme_location'     => 'top',
                        'container_class'    => 'top-menu col-md-8',
                        'menu_id'            => 'top-menu',
                        'depth'              => '2',
                        'walker'             => new Simple_Walker
                    )
                );
            }
        ?>
        <div style="float: left;">
        <?php if(ot_get_option("header_logo") != null) : ?>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                <img class="im-header-logo-image" src="<?php echo esc_url(ot_get_option("header_logo")['background-image']); ?>" alt="<?php bloginfo( 'name' ); ?>">
            </a>
        <?php else : ?>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                <img class="im-header-logo-image" src="<?php echo IM_THEME_ROOT; ?>/assets/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
            </a>
        <?php endif; ?>
        </div>
        <!--<div class="im-search im-<?php /*if(ot_get_option('menu_btn') == 'auto') echo 'slide'; else echo 'click' */?>-block pull-left">
            <div class="search-btn slide-btn" >
                <i class="fa fa-search"></i>
                <div class="im-search-panel im-slide-panel">
                    <?php /*get_template_part( 'searchform'); */?>
                </div>
            </div>
        </div>
        <div class="im-social im-<?php /*if(ot_get_option('menu_btn') == 'auto') echo 'slide'; else echo 'click' */?>-block pull-left">
            <div class="social-btn slide-btn" >
                <i class="fa fa-share-alt"></i>
                <div class="im-social-panel im-slide-panel">
                    <?php /*esc_html(social_link()); */?>
                </div>
            </div>
        </div>-->
        <div class="im-slide-block" style="float: left; width: 20%;margin: 0 0 auto;">
            <div class="btcwdgt-price" bw-theme="light" style="box-shadow: 0 0 0!important;"></div>

            <!-- <button class="btn btn-block" style="background: #646464;color: yellow;border-radius: 4px;padding: 10px;">$2187.50&nbsp;&nbsp;<i class="fa fa-bitcoin fa-align-center"></i></button>
             <div class="slide-btn">
             </div>-->
        </div>
        <?php
//        echo pll_home_url('fa');
//        echo pll_home_url('en');
        ?>
        <div class="im-slide-block pull-left" style="float: right!important;" dir="ltr">
            <div class="lang-item lang-item-62 lang-item-en" style="margin-left: 10px;margin-right: 10px;"><a <?php if(pll_current_language() === 'en') {?> class="current-lang disabled" <?php } else {?> class="lang-switcher" <?php }?> lang="en-US" hreflang="en-US"
                                                                                                                                                                                                                                  href="http://utabit.info/?page_id=506&lang=en"
                                                                                                                                                                                                                                  target="_self">En</a></div>
            <div class="lang-item lang-item-88 lang-item-ru" style="margin-left: 10px;margin-right: 10px;"><a <?php if(pll_current_language() === 'ru') {?> class="current-lang disabled" <?php } else {?> class="lang-switcher" <?php }?> lang="ru-RU" hreflang="ru-RU"
                                                                                                                                                                                                                                           href="http://utabit.info/?page_id=898&lang=ru"
                                                                                                                                                                                                                                           target="_self">РУС</a></div>
        </div>
<!--        <div id="coindesk-widget" data-align="center"></div>-->
<!--        <script type="text/javascript" src="/utabit/wp-content/themes/iranomag/assets/js/coindesk-widget.js"></script>-->

    </div>
</div>