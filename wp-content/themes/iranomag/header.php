<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="theme-color" content="<?php echo esc_attr(ot_get_option( 'accent_color' )); ?>" />
<meta name="fontiran.com:license" content="P9REM">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta property="og:type" content="article" /> 
<meta property="og:description" content="" /> 
<meta property="og:site_name" content="Utabit" /> 
<meta property="og:locale" content="" /> 
<meta property="og:article:author" content="utabit.info" /> 
<meta property="og:title" content="Content provider in the area of blockchain" /> 
<meta property="og:article:section" content="" /> 
<meta property="og:image" content="http://utabit.info/wp-content/uploads/2016/08/8.png" /> 
<meta property="og:url" content="http://www.utabit.info/" /> 
<meta property="og:updated_time" content="2017-06-15 13:52:15">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@utabit_info">
<meta name="twitter:title" content="Content provider in the area of blockchain">
<meta name="twitter:description" content="Blockchain technology ">
<meta name="twitter:creator" content="@utabit_info">
<meta name="twitter:domain" content="www.utabit.info">
<meta name="twitter:image" content="http://utabit.info/wp-content/uploads/2016/08/8.png">
<meta name="twitter:image:alt" content="Content provider in the area of blockchain">
<meta name="google-site-verification" content="jQRZ2ObQkwWwBbZJMHVDAFnjEPVtYgAm1vS2eh3L6uE" />
	<?php wp_site_icon(); ?>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>

</head>

<body <?php esc_html(body_class()); ?>>

<h1 class="non-display-name"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?> <?php if(bloginfo( 'description' ) != null) { bloginfo( 'description' );} ?></a></h1>

<div class="hidden visible-sm visible-xs">
<?php get_template_part( 'template-parts/header/header', 'mobile' ); ?>
</div>

<div class="hidden visible-sm visible-xs">
<?php get_template_part( 'template-parts/header/header', 'offcanvas' ); ?>
</div>

<div class="hidden-sm hidden-xs">
<?php header_style(ot_get_option('header_style')); ?>
</div>

<div class="hidden-sm hidden-xs">
<?php get_template_part( 'template-parts/header/header', 'fixed' ); ?>
</div>

<?php if(esc_html(ot_get_option('top_ad')) != null) { ?>
<div class="im-top-ad container">
	<div class="col-md-12">
		<?php echo ot_get_option("top_ad"); ?>
	</div>
</div>
<?php }
/*
* IranoMag 2 Designed by Mohammad Ebrahim Ramazankhani (Ebiram), IranoWeb.ir
* ایرانومگ 2 بوسیله محمد ابراهیم رمضانخانی (Ebiram), در ایرانووب.ir طراحی شده است.
* فروش و پشتیبانی تنها در مارکت وردپرس
*/
?>

<div class="im-content container">
	<div class="im-main-row clearfix">
