jQuery(document).ready(function ($) {

  $(".car_select_btn_toggle ").click(function () {
    $('#car_selection_toggle').toggleClass('active');
  });
  $(".close_btn").click(function () {
    $('#car_selection_toggle').removeClass('active');
  });

  //Wow js init
  wow = new WOW({
    mobile: false
  });
  wow.init();

  //HP Media Slider
  var slider = $(".portfolio_carousel").lightSlider({
    item: 4,
    loop: true,
    controls: false,
    pager: false,
    slideWidth: 174,
    slideMargin: 40,
    useCSS: false,
    slideMove: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
          item: 3,
          slideMargin: 20
        }
      },
      {
        breakpoint: 672,
        settings: {
          item: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          item: 1
        }
      }
    ]
  });
  //HP Media Slider next
  $('#portfolio_carousel_next').click(function () {
    slider.goToNextSlide();
  });
  //HP Media Slider prev
  $('#portfolio_carousel_prev').click(function () {
    slider.goToPrevSlide();
  });

  // light Gallery
  $(".portfolio_carousel").lightGallery({
    thumbnail: true,
    animateThumb: false
  });

  //scroll to car selection block homepage
  //    $('.anchor_menu').onePageNav({
  //        scrollSpeed: 1000,
  //        scrollThreshold: 0.5,
  //        scrollOffset: 0
  //    });

  //table class and responsive wrap for table
  $('.main_text').find('table').addClass('table');
  $('.main_text table ').wrap('<div class="table-responsive"></div>');


});