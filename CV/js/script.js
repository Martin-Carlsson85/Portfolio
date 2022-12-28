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

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  let skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".percent").text(Math.round(percent));
        },
      });
    }
  });
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(interval / endValue);
  console.log(interval);
  console.log(duration);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
