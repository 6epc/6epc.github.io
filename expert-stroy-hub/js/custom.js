//preloader
jQuery(window).load(function() {
    jQuery('#preloader').fadeOut('slow', function() {
        jQuery(this).remove();
    });
});

jQuery(document).ready(function($) {

    // add class .table for all tables inside .main_text and  wrap table for responsive
    $('.main_text').find('table').addClass('table');
    $('.main_text table ').wrap('<div class="table-responsive"></div>');

    ///Masked Input Plugin http://digitalbush.com/projects/masked-input-plugin/
    $('.tel').mask('+7 (999) - 999 - 99 - 99');

    //remove standart WP img wrap width & height styles
    $(".wp-caption").removeAttr('style');

    win_width = $(window).width();
    if (win_width < 1200) {

        // инициализация mm-menu
        var $menu = $("#site_left_menu").mmenu({
            classes: 'mm-slide',
            "counters": {
                add: true
            },
            "navbar": {
                add: true,
                title: 'Меню сайта',
            },
            "searchfield": {
                "resultsPanel": true,
                "noResults": "Не найдено"
            },

            "dragOpen": {
                open: true
            },
            "extensions": [
                "theme-dark",
                "fx-menu-slide",
                "fx-listitems-slide",
                "pagedim-black"
            ],
            offCanvas: {
                position: 'left'
            }
        });

        $('#site_main_menu').remove(); //убираем десктоп меню при ширине меньше 1200px

        // humburger init
        var $icon = $("#my-icon");
        var API = $menu.data("mmenu");

        API.bind('open:finish', function() {
            setTimeout(function() {
                $icon.addClass("is-active");
            }, 100);
        });
        API.bind("close:finish", function() {
            setTimeout(function() {
                $icon.removeClass("is-active");
            }, 100);
        });
    }
    if (win_width > 1200) {
        $('#site_left_menu, .hamburger').remove(); //убираем моб меню при ширине больше 1200px
    }

    $(window).resize(function() {
        if ((win_width <= 1200 && $(window).width() > 1200) || (win_width > 1200 && $(window).width() <= 1200)) {
            location.reload();
        }
    });

    //HP cat carousel
    var slider1 = $(".cat_list").lightSlider({
        item: 5,
        loop: false,
        controls: false,
        pager: false,
        slideMargin: 0,
        slideMove: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                item: 2,
                controls: true
            }
        }, {
            breakpoint: 670,
            settings: {
                item: 2,
                controls: true
            }
        }, {
            breakpoint: 481,
            settings: {
                item: 1,
                controls: true
            }
        }]
    });

    //HP take_part_carousel
    var slider2 = $(".take_part_carousel").lightSlider({
        item: 4,
        loop: false,
        controls: false,
        pager: false,
        slideMargin: 0,
        slideMove: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                item: 2,
                controls: true
            }
        }, {
            breakpoint: 670,
            settings: {
                item: 2,
                controls: true
            }
        }, {
            breakpoint: 481,
            settings: {
                item: 1,
                controls: true
            }
        }]
    });

    //HP partners_carousel
    var slider3 = $(".partners_carousel").lightSlider({
        item: 4,
        loop: false,
        controls: false,
        pager: false,
        slideMargin: 80,
        slideMove: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                item: 2,
                slideMargin: 20,
                controls: true
            }
        }, {
            breakpoint: 670,
            settings: {
                item: 1,
                slideMargin: 20,
                controls: true
            }
        }, {
            breakpoint: 481,
            settings: {
                item: 1,
                slideMargin: 20,
                controls: true
            }
        }]
    });

    // tabs next & prev active state
    $('#tab1 .next').click(function() {
        $('ul.nav li.disabled').siblings().removeClass('active');
        $('ul.nav li.disabled:nth-child(2)').addClass('active');
    });
    $('#tab2 .next').click(function() {
        $('ul.nav li.disabled').siblings().removeClass('active');
        $('ul.nav li.disabled:nth-child(3)').addClass('active');
    });
    $('#tab2 .prev').click(function() {
        $('ul.nav li.disabled').siblings().removeClass('active');
        $('ul.nav li.disabled:nth-child(1)').addClass('active');
    });
    $('#tab3 .prev').click(function() {
        $('ul.nav li.disabled').siblings().removeClass('active');
        $('ul.nav li.disabled:nth-child(2)').addClass('active');
    });

      $("#rc_cta").click(function () {
        
      });

    // custom input type file
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });

});