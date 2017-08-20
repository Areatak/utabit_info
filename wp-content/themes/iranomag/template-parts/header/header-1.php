<div class="im-header-1 im-header-block">
    <?php if(esc_html(ot_get_option('topnav_status')) == 'on') { get_template_part( 'template-parts/header/header', 'top' ); } ?>
    <header class="im-main-header clearfix <?php esc_attr(dl_select(ot_get_option("header_color"))); ?><?php if(esc_html(ot_get_option("header_full")) == "off") echo " container"; ?>">
        <div<?php if(esc_html(ot_get_option("header_full")) == "on") echo " class='container'"; ?>>
            <!--<div class="im-header-flex">
                <div class="im-header-logo col-md-4 col-sm-12">
                    <?php /*if(ot_get_option("header_logo") != null) : */?>
                        <a href="<?php /*echo esc_url( home_url( '/' ) ); */?>" rel="home">
                            <img class="im-header-logo-image" src="<?php /*echo esc_url(ot_get_option("header_logo")['background-image']); */?>" alt="<?php /*bloginfo( 'name' ); */?>">
                        </a>
                    <?php /*else : */?>
                        <a href="<?php /*echo esc_url( home_url( '/' ) ); */?>" rel="home">
                            <img class="im-header-logo-image" src="<?php /*echo IM_THEME_ROOT; */?>/assets/img/logo.png" alt="<?php /*bloginfo( 'name' ); */?>">
                        </a>
                    <?php /*endif; */?>
                </div>
                <div class="im-header-ad col-md-8 col-sm-12">
                    <?php /*if(esc_html(ot_get_option("header_ad")) != null) {
                        echo ot_get_option("header_ad");
                    } */?>
                </div>
            </div>-->
        </div>
    </header>
    <nav class="im-navigation <?php esc_attr(dl_select(ot_get_option("menu_color"))); ?><?php if(esc_html(ot_get_option("menu_full")) == "off") echo " container"; ?>">
        <div<?php if(esc_html(ot_get_option("menu_full")) == "on") echo " class='container'"; ?>>
            <div class="col-md-12">
                <?php if(pll_current_language() == 'fa' || 1) {?>
                <div class="im-search im-<?php if(ot_get_option('menu_btn') == 'auto') echo 'slide'; else echo 'click' ?>-block pull-left">
                    <div class="search-btn slide-btn" >
                        <i class="fa fa-search"></i>
                        <div class="im-search-panel im-slide-panel">
                            <?php get_template_part( 'searchform'); ?>
                        </div>
                    </div>
                </div>
                <?php }?>
                <?php
                    if ( has_nav_menu( 'primary' ) ) {
                        wp_nav_menu(
                            array(
                                'theme_location'     => 'primary',
                                'container_class'    => 'primary-menu',
                                'menu_id'            => 'primary-menu',
                                'depth'              => '2',
                                'walker'             => new MegaMenu_Walker
                            )
                        );
                    }
                ?>
            </div>
        </div>
    </nav>
</div>