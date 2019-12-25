//preloader
jQuery(window).load(function () {
  jQuery('#preloader').fadeOut('slow', function () {
    jQuery(this).remove();

  });
});

jQuery(document).ready(function ($) {

  // add class .table for all tables inside .main_text and  wrap table for responsive
  $('.main_text').find('table').addClass('table');
  $('.main_text table ').wrap('<div class="table-responsive"></div>');

  ///Masked Input Plugin http://digitalbush.com/projects/masked-input-plugin/
  $('#tel').mask('+38 (999) 999-9999');

  //remove standart WP img wrap width & height styles
  $(".wp-caption").removeAttr('style');

  win_width = $(window).width();

  if (win_width < 1201) {

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

    var $icon = $("#my-icon");
    var API = $menu.data("mmenu");

    $icon.on("click", function () {
      API.open();
    });

    API.bind('open:finish', function () {
      setTimeout(function () {
        $icon.addClass("is-active");
      }, 100);
    });
    API.bind("close:finish", function () {
      setTimeout(function () {
        $icon.removeClass("is-active");
      }, 100);
    });

    $('#site_main_menu').remove(); //убираем десктоп меню при ширине меньше 1200px
  }
  if (win_width > 1201) {
    $('#site_left_menu').remove(); //убираем ьщишду меню при ширине больше 1200px
    $('.hamburger').remove();
  }

  $(window).resize(function () {
    if ((win_width <= 1200 && $(window).width() > 1200) || (win_width > 1200 && $(window).width() <= 1200)) {
      location.reload();
    }
  });

  //HP fw carousel
  var slider1 = $(".hp_fw_carousel").lightSlider({
    item: 1,
    loop: true,
    auto: true,
    pause: 3000,
    pauseOnHover: true,
    mode: 'fade',
    speed: 1500,
    controls: false,
    pager: true,
    slideMargin: 0,
    slideMove: 1,
    responsive: [{
      breakpoint: 991,
      settings: {
        item: 1,
        slideMargin: 20
      }
    }, {
      breakpoint: 672,
      settings: {
        mode: 'slide'
      }
    }, {
      breakpoint: 481,
      settings: {
        mode: 'slide',
        adaptiveHeight: true
      }
    }]
  });

  //HP interests carousel
  $(".interests_carousel").lightSlider({
    item: 3,
    loop: true,
    controls: false,
    pager: true,
    slideMargin: 30,
    slideMove: 3,
    responsive: [{
      breakpoint: 991,
      settings: {
        item: 2,
        slideMargin: 20
      }
    }, {
      breakpoint: 672,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 481,
      settings: {
        item: 1
      }
    }]
  });


  //HP replay carousel
  $(".replay_carousel").lightSlider({
    item: 2,
    loop: true,
    controls: false,
    pager: true,
    slideMargin: 30,
    slideMove: 2,
    responsive: [{
      breakpoint: 672,
      settings: {
        item: 1,
        slideMove: 1
      }
    }]
  });

  //HP feedback carousel 
  $(".feedback_carousel").lightSlider({
    item: 1,
    loop: true,
    controls: false,
    pager: true,
    slideMargin: 30,
    slideMove: 1,
    adaptiveHeight: true
  });


  $(".single .tours_carousel, .page .tours_carousel").lightSlider({
    item: 2,
    loop: true,
    controls: false,
    auto: true,
    pause: 4000,
    speed: 800,
    pager: true,
    slideMargin: 20,
    slideMove: 1,
    responsive: [{
      breakpoint: 991,
      settings: {
        item: 2,
        slideMargin: 20
      }
    }, {
      breakpoint: 672,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 481,
      settings: {
        item: 1
      }
    }]
  });

  $(".archive .tours_carousel").lightSlider({
    item: 3,
    loop: true,
    controls: false,
    auto: true,
    pause: 4000,
    speed: 800,
    pager: true,
    slideMargin: 20,
    slideMove: 1,
    responsive: [{
      breakpoint: 991,
      settings: {
        item: 3,
        slideMargin: 20
      }
    }, {
      breakpoint: 672,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 481,
      settings: {
        item: 1
      }
    }]
  });


  //bootstrap tabs to accordion @media (max-width:768)
  $('.nav.nav-tabs').tabCollapse();

});