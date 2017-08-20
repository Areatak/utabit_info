<?php if (esc_html(ot_get_option("footer_status")) == "on") { ?>
    <div
        class="im-top-footer clearfix <?php esc_attr(dl_select(ot_get_option("footer_color"))); ?><?php if (esc_html(ot_get_option("footer_full")) == "off") echo " container"; ?>">
        <div<?php if (esc_html(ot_get_option("footer_full")) == "on") echo " class='container'"; ?>>
            <?php footer_widget(); ?>
        </div>
    </div>
<?php } ?>
<footer
    class="im-footer clearfix <?php esc_attr(dl_select(ot_get_option("copyright_color"))); ?><?php if (esc_html(ot_get_option("copyright_full")) == "off") echo " container"; ?>">
    <div<?php if (esc_attr(ot_get_option("copyright_full")) == "on") echo " class='container'"; ?>>
        <div class="im-footer-logo">
            <?php if (ot_get_option("copyright_logo") != null) : ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                    <img class="im-footer-logo-image"
                         src="<?php echo esc_url(ot_get_option("copyright_logo")['background-image']); ?>"
                         alt="<?php bloginfo('name'); ?>">
                </a>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                    <img class="im-footer-logo-image" src="<?php echo IM_THEME_ROOT; ?>/assets/img/logo-footer.png"
                         alt="<?php bloginfo('name'); ?>">
                </a>
            <?php endif; ?>
        </div>
        <div class="im-copytight">
            <P>
                <?php echo ot_get_option('copyright_text'); ?>
            </P>
            <div class="row" style="display: block;margin: auto;" dir="ltr">
                <span class=""
                      style="margin-left: 5px;margin-right: 5px;"><a <?php if (pll_current_language() === 'en') { ?> class="current-lang disabled" <?php } else { ?> class="lang-switcher" <?php } ?>
                        lang="en-US" hreflang="en-US"
                        href="http://utabit.info/?page_id=506&lang=en"
                        target="_self">En</a></span>
                <span class=""
                      style="margin-left: 5px;margin-right: 5px;"><a <?php if (pll_current_language() === 'ru') { ?> class="current-lang disabled" <?php } else { ?> class="lang-switcher" <?php } ?>
                        lang="ru-RU" hreflang="ru-RU"
                        href="http://utabit.info/?page_id=898&lang=ru"
                        target="_self">РУС</a></span>
            </div>
        </div>
        <?php
        if (has_nav_menu('footer')) {
            wp_nav_menu(
                array(
                    'theme_location' => 'footer',
                    'container_class' => 'footer-menu',
                    'menu_id' => 'footer-menu',
                    'depth' => '1',
                    'walker' => new Simple_Walker
                )
            );
        }
        /*
        * IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
        * ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
        * فروش و پشتیبانی تنها در مارکت وردپرس
        */
        ?>
    </div>
    <?php
    /*
     * If you want support, DO NOT REMOVE THIS!
    */
    ?>
    <?php if (ot_get_option('show_copyright') == 'on') : ?>
        <div class="iranoweb"><a href="http://www.iranoweb.ir"
                                 title="طراحی و توسعه توسط محمد ابراهیم رمضانخانی. حق مالکیت متعلق به ایرانووب می باشد."></a>
        </div>
    <?php else : ?>
        <br/>
    <?php endif; ?>
</footer>


<script>
    (function (b, i, t, C, O, I, N) {
        window.addEventListener('load', function () {
            if (b.getElementById(C))return;
            I = b.createElement(i), N = b.getElementsByTagName(i)[0];
            I.src = t;
            I.id = C;
            N.parentNode.insertBefore(I, N);
        }, false)
    })(document, 'script', '/wp-content/themes/iranomag/assets/js/bitcoin-price.js', 'btcwdgt');
    // TODO Change me before deploy
</script>