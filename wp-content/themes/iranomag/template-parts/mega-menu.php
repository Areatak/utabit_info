<article <?php post_class("im-article mega-menu-item col-md-4"); ?>>
	<div class="clearfix">
		<figure class="mega-menu-thumb">
			<?php if (has_post_thumbnail()) : ?>
				<a class="im-entry-thumb-link" href="<?php esc_url(the_permalink());?>" title="<?php esc_attr(get_the_title());?>">
					<?php echo get_the_post_thumbnail(get_the_ID(), 'blog', array()); ?>
				</a>
			<?php endif; im_post_review_circle(); ?>
		</figure>
		<div class="mega-menu-item-header">
			<?php the_title( '<h3 class="mega-menu-item-header-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' ); ?>
		</div>
		<div class="mega-menu-item-meta">
			<?php im_meta(true, true, false, true, false, false);
			/*
			* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
			* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
			* فروش و پشتیبانی تنها در مارکت وردپرس
			*/
			?>
		</div>
	</div>
</article>