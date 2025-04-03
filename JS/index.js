
if (localStorage.getItem("mode")) {
  const mode = localStorage.getItem("mode");
  console.log(mode);
  mode == "dark" ? darkMode() : lightMode();
}

$(".navbar-nav .nav-link").on("click", function (e) {
  $(".navbar-nav .nav-link").removeClass("active");
  $(e.target).addClass("active");
});

$(".dark-mode").on("click", function () {
  localStorage.setItem("mode", "dark");
  darkMode();
});

$(".light-mode").on("click", function () {
  localStorage.setItem("mode", "light");
  lightMode();
});

function darkMode() {
  $(".dark-mode").addClass("d-none");
  $(".light-mode").removeClass("d-none");
  $(".light-mode").addClass("d-block");
  $("body").addClass("dark");
}

function lightMode() {
  $(".light-mode").addClass("d-none");
  $(".dark-mode").removeClass("d-none");
  $(".dark-mode").addClass("d-block");
  $("body").removeClass("dark");
}
