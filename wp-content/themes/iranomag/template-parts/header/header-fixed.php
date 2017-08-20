<?php
    if( is_admin_bar_showing() )
    {
        $top = "top: 32px;";
    }
?>
<div id="im-header-fixed" class="im-header-fixed" style="<?php if( is_admin_bar_showing() ) { echo $top; } ?>">
    <header class="im-main-header clearfix <?php esc_attr(dl_select(ot_get_option("header_color"))); ?><?php if(esc_html(ot_get_option("header_fixed_full")) == "off") echo " container"; ?>">
        <div<?php if(esc_html(ot_get_option("header_fixed_full")) == "on") echo " class='container'"; ?>>
            <div class="im-header-flex">
                <div class="im-header-logo col-md-1 col-sm-12">
                    <figure class="im-header-logo-row">
                        <figcaption class="im-header-logo-caption">
                        <?php if(ot_get_option("header_logo") != null) : ?>
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                                <img class="im-header-logo-image fixed" src="<?php echo esc_url(ot_get_option("header_fixed_logo")['background-image']); ?>" alt="<?php bloginfo( 'name' ); ?>">
                            </a>
                        <?php else : ?>
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                                <img class="im-header-logo-image fixed" src="<?php echo IM_THEME_ROOT; ?>/assets/img/logo-footer.png" alt="<?php bloginfo( 'name' ); ?>">
                            </a>
                        <?php endif; ?>
                        </figcaption>
                    </figure>
                </div>
                <nav class="im-navigation col-md-11 col-sm-12 <?php esc_attr(dl_select(ot_get_option("header_color"))); ?>">
                    <div class="row">
                        <?php
                            if ( has_nav_menu( 'primary' ) ) {
                                wp_nav_menu(
                                    array(
                                        'theme_location'     => 'primary',
                                        'container_class'    => 'primary-menu',
                                        'menu_id'            => 'primary-menu-fixed',
                                        'depth'              => '2',
                                        'walker'             => new MegaMenu_Walker
                                    )
                                );
                            }
                            /*
                            * IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
                            * ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
                            * فروش و پشتیبانی تنها در مارکت وردپرس
                            */
                        ?>
                        <div class="im-social im-<?php if(ot_get_option('menu_btn') == 'auto') echo 'slide'; else echo 'click' ?>-block">
                            <div class="social-btn slide-btn" >
                                <i class="fa fa-share-alt"></i>
                                <div class="im-social-panel im-slide-panel">
                                    <?php esc_html(social_link()); ?>
                                </div>
                            </div>
                        </div>
                        <div class="im-search im-<?php if(ot_get_option('menu_btn') == 'auto') echo 'slide'; else echo 'click' ?>-block">
                            <div class="search-btn slide-btn" >
                                <i class="fa fa-search"></i>
                                <div class="im-search-panel im-slide-panel">
                                    <?php get_template_part( 'searchform'); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</div>