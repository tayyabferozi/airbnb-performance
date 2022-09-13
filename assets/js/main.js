var media = window.matchMedia("(max-width: 739px)");

$(".left-menu-toggle").click(function () {
  if (media.matches) {
    $(".sidebar").toggleClass("open");
  } else {
    $(".sidebar").animate({ width: "toggle" }, 400);
  }
});

$(".sidebar .close").click(function () {
  $(".sidebar").toggleClass("open");
});

$("#navbar .options .menu").click(function () {
  $(".navbar-sm").toggleClass("active");
  if ($(this).attr("src") === "./assets/vectors/hamburger.svg") {
    $(this).attr("src", "./assets/vectors/close.svg");
  } else {
    $(this).attr("src", "./assets/vectors/hamburger.svg");
  }
});
