<div id="im-header-offconvas" class="im-header-offconvas">
    <div class="im-header-offconvas-off clearfix">
        <button id="off-canvas-off" class="off-canvas-off" ><i class="fa fa-navicon"></i></button>
    </div>
    <nav class="clearfix">
        <?php
            if ( has_nav_menu( 'mobile' ) ) {
                wp_nav_menu(
                    array(
                        'theme_location'     => 'mobile',
                        'container_class'    => 'mobile-menu',
                        'menu_id'            => 'mobile-menu',
                        'depth'              => '2',
                        'walker'             => new Mobile_walker
                    )
                );
            }
        ?>
        <hr/>
        <div class="mobile-menu">
            <?php esc_html(social_link_mobile());
            /*
            * IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
            * ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
            * فروش و پشتیبانی تنها در مارکت وردپرس
            */
            ?>
        </div>
    </nav>
</div>