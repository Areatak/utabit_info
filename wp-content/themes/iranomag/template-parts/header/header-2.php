<div class="im-header-2 im-header-block">
    <?php if(esc_html(ot_get_option('topnav_status')) == 'on') { get_template_part( 'template-parts/header/header', 'top' ); } ?>
    <header class="im-main-header clearfix <?php esc_attr(dl_select(ot_get_option("header_color"))); ?><?php if(esc_html(ot_get_option("header_full")) == "off") echo " container"; ?>">
        <div<?php if(esc_html(ot_get_option("header_full")) == "on") echo " class='container'"; ?>>
            <div class="im-header-flex">
                <figure class="im-header-logo col-lg-3 col-md-2 col-sm-12">
                    <div class="im-header-logo-row">
                        <figcaption class="im-header-logo-caption">
                        <?php if(ot_get_option("header_logo") != null) : ?>
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                                <img class="im-header-logo-image" src="<?php echo esc_url(ot_get_option("header_logo")['background-image']); ?>" alt="<?php bloginfo( 'name' ); ?>">
                            </a>
                        <?php else : ?>
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                                <img class="im-header-logo-image" src="<?php echo IM_THEME_ROOT; ?>/assets/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
                            </a>
                        <?php endif; ?>
                        </figcaption>
                    </div>
                </figure>
                <nav class="im-navigation col-lg-9 col-md-10 col-sm-12 <?php esc_attr(dl_select(ot_get_option("header_color"))); ?>">
                    <div class="clearfix">
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
                </nav>
            </div>
        </div>
    </header>
</div>