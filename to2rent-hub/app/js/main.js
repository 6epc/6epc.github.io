//preloader
$(window).on("load", function (e) {
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();

  });
});

$(document).ready(function () {

  $('.carousel').slick({
    autoplay: true,
    infinite: true,
    dots: false,
    prevArrow: '<button type="button" class="carousel__btn carousel__btn--prev"><img src="img/prev_icon.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="carousel__btn carousel__btn--next"><img src="img/next_icon.svg" alt="next"></button>',
  })

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    var menu_hight = $("#navi").height();
    if (top > menu_hight) {
      $("body").addClass('scroll_active').css('padding-top', menu_hight);
    } else {
      $("body").removeClass('scroll_active').css('padding-top', '');
    }
  });

});

//active menu state desktop
let menu = document.querySelector('.menu__list');
menu.addEventListener('click', function (event) {
  let li = document.querySelectorAll('.menu__item');
  for (let item of li) {
    item.classList.remove('menu__item--active');
  }
  event.target.closest('.menu__item').classList.add('menu__item--active');
});

//active menu state max-width: 1200px
let mobMenu = document.querySelector('.mob-menu__list');
mobMenu.addEventListener('click', function (event) {
  let li = document.querySelectorAll('.mob-menu__item');
  for (let item of li) {
    item.classList.remove('mob-menu__item--active');
  }
  event.target.closest('.mob-menu__item').classList.add('mob-menu__item--active');
});

document.querySelector('.hamburger').onclick = function () {
  this.classList.add('is-active');
  document.body.classList.add('overflowed');
}

function hideMobMenu(event) {
  const target = event.target;
  if (target.classList.contains('mobile-menu-wrapper')) {
    document.body.classList.remove('overflowed');
    document.querySelector('.hamburger').classList.remove('is-active');
  }
}
document.addEventListener('click', hideMobMenu);