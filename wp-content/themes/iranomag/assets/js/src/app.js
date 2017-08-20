// Fixed Menu
var header_height = jQuery('.im-header-block').height();
jQuery(window).scroll(function () {
    "use strict";
    if(jQuery(window).scrollTop() > header_height){
        jQuery("#im-header-fixed").slideDown(100);
    }
});
jQuery(window).scroll(function () {
    "use strict";
    if(jQuery(window).scrollTop() < header_height){
        jQuery("#im-header-fixed").slideUp(100);
    }
});
    
// Slide Panel
var slide_btn = '.im-slide-block .slide-btn';
var slide_panel = '.im-slide-panel';
jQuery(slide_btn).hover(
    function () {
        "use strict";
        jQuery(this).find(slide_panel).slideDown(150);
    },
    function () {
        "use strict";
        jQuery(this).find(slide_panel).slideUp(150);
    }
);

// Click Panel
var slide_btn = '.im-click-block .slide-btn > .fa';
var slide_panel = '.im-slide-panel';
jQuery(slide_btn).click(function () {
        "use strict";
        jQuery(this).parent().find(slide_panel).slideToggle(150);
    }
);

// Top Menu
var top_menu = 'ul#top-menu > li.menu-item-has-children';
jQuery(top_menu).find('.sub-menu').parent('li').css('position', 'relative');
jQuery(top_menu).hover(
    function () {
        "use strict";
        jQuery(this).children('.sub-menu').stop().slideDown(200);
    },
    function () {
        "use strict";
        jQuery(this).children('.sub-menu').stop().slideUp(100);
    }
);
    
// Primary Menu
var pri_menu = 'ul#primary-menu > li.menu-item-has-children';
jQuery(pri_menu).find('.im_mega_menu_holder').parent().parent().css('position', 'relative');
jQuery(pri_menu).find('.sub-menu').parent('li').css('position', 'relative');

// Primary Menu style 2
var pri_menu_style2 = '.im-header-2 ul#primary-menu > li.menu-item-has-children';
jQuery(pri_menu_style2).find('.im_mega_menu_holder').parent().parent().css('position', 'static');
jQuery('.im-header-2').find('.im-header-flex').css('position', 'relative');

// Primary Menu style fixed
var pri_menu_fixed = 'ul#primary-menu-fixed > li.menu-item-has-children';
jQuery(pri_menu_fixed).find('.im_mega_menu_holder').parent().parent().parent().parent().parent().parent().css('position', 'relative');
jQuery(pri_menu_fixed).find('.sub-menu').parent('li').css('position', 'relative');
	
// Menu Holder
jQuery(pri_menu).hover(
    function () {
        "use strict";
        jQuery(this).children('.sub-menu').stop().slideDown(200);
    },
    function () {
        "use strict";
        jQuery(this).children('.sub-menu').stop().slideUp(100);
    }
);
jQuery(pri_menu).hover(
    function () {
        "use strict";
        jQuery(this).children('.im_mega_menu_holder').stop().fadeIn(300);
    },
    function () {
        "use strict";
        jQuery(this).children('.im_mega_menu_holder').stop().fadeOut(300);
    }
);
    
// Menu Holder Fixed
jQuery(pri_menu_fixed).hover(
    function () {
        "use strict";
        jQuery(this).children('.sub-menu').stop().slideDown(200);
    },
    function () {
        "use strict";
        jQuery(this).children('.sub-menu').stop().slideUp(100);
    }
);
jQuery(pri_menu_fixed).hover(
    function () {
        "use strict";
        jQuery(this).children('.im_mega_menu_holder').stop().fadeIn(300);
    },
    function () {
        "use strict";
        jQuery(this).children('.im_mega_menu_holder').stop().fadeOut(300);
    }
);

// Mega Menu Holder
jQuery('.menu-item-mega-parent').hover(
    function () {
        "use strict";
        jQuery(this).find('.im_mega_menu_holder > .im_mega_menu > li.menu-item:first-child').addClass('active-tab');
        jQuery(this).find('.im_mega_menu_holder > .category-children > .im_mega_menu_holder_row:first-child').addClass('active-row').css('display', 'block');
    },
    function () {
        "use strict";
        jQuery('.menu-item-mega-parent > .im_mega_menu_holder > .im_mega_menu').find('li.active-tab').removeClass('active-tab');
        jQuery('.menu-item-mega-parent > .im_mega_menu_holder > .category-children').find('.active-row').removeClass('active-row').css('display', '');
    }
);

var tab_index = 0;
jQuery('.im_mega_menu_holder > .im_mega_menu > li.menu-item').hover(
    function () {
        "use strict";
        jQuery('.im_mega_menu_holder > .im_mega_menu > li.active-tab').first().removeClass('active-tab');
        jQuery(this).addClass('active-tab');
        tab_index = jQuery(this).index() + 1;
        jQuery('.im_mega_menu_holder > .category-children').find('.active-row').stop().removeClass('active-row').css('display', '');
        jQuery(this).parent().parent().find('.category-children > .im_mega_menu_holder_row:nth-child(' + tab_index + ')').addClass('active-row').css('display', 'block');
    }
);

// Carousel slider
jQuery(".im_carousel_slider").lightSlider({
    item: 4,
    auto: true,
    autoWidth: false,
    slideMargin: 2,
    loop: true,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 500,
    slideEndAnimation: false,
    pause: 5000,
    keyPress: false,
    controls: true,
    rtl: true,
    enableDrag: false,
    pauseOnHover: true,
    vertical: false,
    thumbItem: 0,
    pager: false,
    responsive : [
        {
            breakpoint:978,
            settings: {
                item:2,
                slideMove:2,
                slideMargin:2,
                }
        },
        {
            breakpoint:754,
            settings: {
                item:1,
                slideMove:1,
                slideMargin:0,
                }
        },
    ]
});
    
// Off-Canvas
jQuery('#off-canvas-on').click(function () {
    "use strict";
    jQuery('#im-header-offconvas').animate({right: '0' }, 200);
});
jQuery('#off-canvas-off').click(function () {
    "use strict";
    jQuery('#im-header-offconvas').animate({ right: '-300px' }, 200);
});
    
jQuery('.mobile-menu > ul > li.menu-item-has-children').append('<button class="mobile-menutoggle" ><i class="fa fa-angle-down">', '</i></button>');
jQuery('.mobile-menu > ul > li.menu-item-has-children > .mobile-menutoggle').click(function () {
    "use strict";
    jQuery(this).parent().find('ul.sub-menu').slideToggle('fast');
});

var fixed_header_height = jQuery('.im-header-fixed').height() + 20;

jQuery('.single-post').find('.content-layout-full').parent().find('.im-top-ad').addClass('hidden');
    
if (jQuery('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            "use strict";
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                jQuery('#back-to-top').addClass('show');
            } else {
                jQuery('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    jQuery(window).on('scroll', function () {
        "use strict";
        backToTop();
    });
    jQuery('#back-to-top').on('click', function (e) {
        "use strict";
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

jQuery('ul.im-widget-tabs').each(function () {
    "use strict";
    var jQueryactive, jQuerycontent, jQuerylinks = jQuery(this).find('a');
    jQueryactive = jQuery(jQuerylinks.filter('[href="' + location.hash + '"]')[0] || jQuerylinks[0]);
    jQueryactive.addClass('active');
    jQuerycontent = jQuery(jQueryactive[0].hash);
    jQuerylinks.not(jQueryactive).each(function () {
        "use strict";
        jQuery(this.hash).hide();
    });
    jQuery(this).on('click', 'a', function (e) {
        "use strict";
        jQueryactive.removeClass('active');
        jQuerycontent.fadeOut().hide();
        jQueryactive = jQuery(this);
        jQuerycontent = jQuery(this.hash);
        jQueryactive.addClass('active');
        jQuerycontent.fadeIn().show();
        e.preventDefault();
    });
});

persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
function traverse(el) {
    "use strict";
    if (el.nodeType == 3) {
        var list = el.data.match(/[0-9]/g);
        if (list != null && list.length != 0) {
            for (var i = 0; i < list.length; i++)
                el.data = el.data.replace(list[i], persian[list[i]]);
        }
    }
    for (var i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i]);
    }
}
traverse(document.body);

jQuery('.im-lightbox-content a').attr('data-lightbox', 'roadtrip');
jQuery('.im-entry-content .gallery .gallery-item a').attr('data-lightbox', 'roadtrip');