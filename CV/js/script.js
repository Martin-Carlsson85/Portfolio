$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
  });

  let typed = new Typed(".typed", {
    strings: ["Frontend", "Developer"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});
