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

  //remove standart WP img wrap width & height styles
  $(".wp-caption").removeAttr('style');

  //humburger init
  // https://jonsuh.com/hamburgers/  for difrend effects
  // $('.hamburger').click(function() {
  //     $(this).toggleClass('is-active');
  //     return false;
  // });

  $(".hp_s1 .my_btn ").click(function () {
    $('html, body').animate({
      scrollTop: $("#our_courses").offset().top - 0
    }, 1300);
    return false;
  });

  //perfectScrollbar   
  var slide1 = $('nav.scroll').perfectScrollbar({
    wheelPropagation: true,
    swipePropagation: true,
    wheelSpeed: 0.3
  });

  //Lazu YT
  $('.lazyYT').lazyYT();

  //humburger init
  // https://jonsuh.com/hamburgers/  for difrend effects
  $('.hamburger').on("click", function () {
    $(this).toggleClass('is-active');
    $('body').toggleClass('aside_open')
    return false;
  });
  $('.mob_overlay').on("click", function () {
    $('body').removeClass('aside_open');
    $('.hamburger').removeClass('is-active');
    return false;
  });

});