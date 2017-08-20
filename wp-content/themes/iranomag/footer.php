<?php
/**
 * The template for displaying the footer.
 */
?>

</div>
</div><!-- im-container -->

<a href="#" id="back-to-top" title="<?php echo esc_attr("بازگشت به ابتدای صفحه"); ?>"><i class="fa fa-arrow-up"></i></a>

<?php get_template_part('template-parts/footer/footer');
/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/
?>

<?php wp_footer(); ?>
<?php if (ot_get_option('Lazy_load') == 'on') : ?>
    <script type="text/javascript">
        jQuery(window).load(function () {
            setTimeout(function () {
//                console.log(jQuery('.lazy-img'));
                jQuery('.lazy-img').unveil(500, function () {
                    "use strict";
                    jQuery(this).load(function () {
                        this.style.opacity = 1;
                    });
                });
            }, 0)
        });
    </script>
<?php endif; ?>
<?php if (ot_get_option('sticky_kit') == 'on') : ?>
    <script type="text/javascript">
        jQuery(".sticky-sidebar").stick_in_parent({offset_top: fixed_header_height});
    </script>
<?php endif; ?>
</body>
</html>
