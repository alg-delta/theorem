$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $(".upButton").fadeIn(500);
    } else {
      $(".upButton").fadeOut(500);
    }
  });

  $(".upButton").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
