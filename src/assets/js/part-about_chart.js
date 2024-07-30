document.addEventListener("DOMContentLoaded", function (event) {
  let circle = document.querySelectorAll(".circle");
  circle.forEach(function (progress) {
    let degree = 0;
    let targetDegree = parseInt(progress.getAttribute("data-degree"));

    let color = progress.getAttribute("data-color");
    let number = progress.querySelector(".circle_number");

    let interval = setInterval(function () {
      degree += 1;

      if (degree > targetDegree) {
        clearInterval(interval);
        return;
      }

      progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
      number.innerHTML = degree + `<span>%</span>`;
      number.style.color = color;
    }, 50);
  });

  let chartLines = document.querySelectorAll(".chart_line");
  chartLines.forEach(function (progress) {
    let degree = 0;
    let targetDegree = parseInt(progress.getAttribute("chart-data-degree"));

    let bar = progress.querySelector(".chart_bar");
    let percent = progress.querySelector(".percent");

    let interval = setInterval(function () {
      degree += 1;

      if (degree > targetDegree) {
        clearInterval(interval);
        return;
      }

      bar.style.setProperty("--progress-width", degree + "%");
      percent.innerHTML = degree + `<span>%</span>`;
    }, 50);
  });
});
