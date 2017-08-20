<div class="im-header-3 im-header-block">
    <?php if(esc_html(ot_get_option('topnav_status')) == 'on') { get_template_part( 'template-parts/header/header', 'top' ); } ?>
    <header class="im-main-header clearfix <?php esc_attr(dl_select(ot_get_option("header_color"))); ?><?php if(esc_html(ot_get_option("header_full")) == "off") echo " container"; ?>">
        <div<?php if(esc_html(ot_get_option("header_full")) == "on") echo " class='container'"; ?>>
            <div class="im-header-noflex">
                <figure class="im-header-logo col-md-12 text-center">
                    <?php if(ot_get_option("header_logo") != null) : ?>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                            <img class="im-header-logo-image" src="<?php echo esc_url(ot_get_option("header_logo")['background-image']); ?>" alt="<?php bloginfo( 'name' ); ?>">
                        </a>
                    <?php else : ?>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                            <img class="im-header-logo-image" src="<?php echo IM_THEME_ROOT; ?>/assets/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
                        </a>
                    <?php endif; ?>
                </figure>
                <?php if(esc_html(ot_get_option("header_ad")) != null) {
                    echo '<div class="im-header-ad col-md-12 text-center">';
                    echo ot_get_option("header_ad");
                    echo '</div>';
                } ?>
            </div>
        </div>
    </header>
    <nav class="im-navigation <?php esc_attr(dl_select(ot_get_option("menu_color"))); ?><?php if(esc_html(ot_get_option("menu_full")) == "off") echo " container"; ?>">
        <div<?php if(esc_html(ot_get_option("menu_full")) == "on") echo " class='container'"; ?>>
            <div class="col-md-12">
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