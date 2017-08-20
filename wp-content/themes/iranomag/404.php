<?php header('HTTP/1.0 404 Not Found'); ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="im-404-page">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="description" content="<?php bloginfo( 'name' ); ?> | 404 Page Not Found!!!" />
<?php wp_site_icon(); ?>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>
</head>

<body class="im-404-page">
	
	<div class="im-404-home">
		<div class="im-404-box">
			<h1 class="im-404-title">
				<?php esc_html_e('not found :(', 'iranomag'); ?>
			</h1>
			<p class="im-404-desc">
				<?php esc_html_e('The page you requested was not found! Please check the items below or use the Search section.', 'iranomag'); ?>
			</p>
			<ul>
				<li><?php esc_html_e('Maybe the page you requested not exists.', 'iranomag'); ?></li>
				<li><?php esc_html_e('Please check your page name or address again.', 'iranomag'); ?></li>
				<li><?php esc_html_e('Maybe you have no permission to access this page.', 'iranomag'); ?></li>
				<li><?php esc_html_e('Maybe your requested page is a members only one, Please Register or Sign in.', 'iranomag'); ?></li>
				<li><?php esc_html_e('Your requested page exists? Please contact the site administrator.', 'iranomag'); ?></li>
			</ul>
			<div class="im-404-search hidden-xs">
				<?php get_template_part( 'searchform'); ?>
				<?php wp_nav_menu(
					array(
							'theme_location'     => esc_html('top'),
							'container_class'    => esc_html('top-menu'),
							'menu_id'            => esc_html('top-menu'),
							'depth'              => esc_html('1'),
							'walker'             => new Simple_Walker
						)
					);
				?>
			</div>
		</div>
	</div>
	
	<?php wp_footer(); ?>
</body>
</html>
