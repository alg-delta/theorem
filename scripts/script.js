let openModal = document.querySelectorAll(".banner-btn-explore");

// кнопка закриття модалки - "хрестик"
let closeModal = document.querySelector(".close-modal");

// модалка - сірий фон
let modalWrapper = document.querySelector(".modal-wrapper");

// відкритя модалки
for (item of openModal) {
  item.addEventListener("click", function () {
    modalWrapper.style.display = "flex";
  });
}

// закриття модалки по кнопці-хрестику
closeModal.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});


// закриття модалки по кліку на сірому фоні
modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modalWrapper.style.display = "none";
  }
});

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
