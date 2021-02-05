// слайдер
function initSliderHomepage() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: "<figure class='icon-arr-right'></figure>",
        prevArrow: "<figure class='icon-arr-left'></figure>",
    });
    $('.slider-nav').slick({
        vertical:true,
        verticalSwiping: true,
        slidesToShow: 3,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });
}
function initSliderFooter(){
    $('.slider2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<figure class='icon-arr-right'></figure>",
    prevArrow: "<figure class='icon-arr-left'></figure>",
    })
}

export default function initSliders() {
    initSliderHomepage();
    initSliderFooter();
  }