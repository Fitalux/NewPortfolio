document.addEventListener("DOMContentLoaded", function () {
  const openModalButtons = document.querySelectorAll(".btn_modal");
  const closeModalButtons = document.querySelectorAll(".close_btn");
  const body = document.body;

  function openModal(modal) {
    if (!modal) {
      console.warn("Modal element is null in openModal");
      return;
    }

    body.classList.add("modal-open");
    modal.style.display = "block";
    modal.scrollTo(0, 0);

    gsap.to(modal, { opacity: 1, duration: 0.3 });
    animateChart(modal);
  }

  function closeModal(modal) {
    if (!modal) {
      console.warn("Modal element is null in closeModal");
      return;
    }
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        modal.style.display = "none";
        body.classList.remove("modal-open");
      },
    });
  }

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalID = button.getAttribute("data-modal-id");
      const modal = document.getElementById(modalID);
      openModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal_blue");
      closeModal(modal);
    });
  });

  //parallax setup
  let sections = gsap.utils.toArray(".display_box");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#parallax",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => document.querySelector("#parallax").offsetWidth,
    },
  });

  // 차트 애니메이션 함수
  function animateChart(modal) {
    if (!modal) {
      console.warn("Modal element is null in animateChart");
      return;
    }
    const charts = modal.querySelectorAll(".modal-chart_line");

    charts.forEach((chart) => {
      let degree = 0;
      const targetDegree = parseInt(chart.getAttribute("modal-data-degree"));
      const bar = chart.querySelector(".modal-chart_bar");
      const percent = chart.querySelector(".percent-number");

      const interval = setInterval(() => {
        degree += 1;

        if (degree > targetDegree) {
          clearInterval(interval);
          return;
        }

        bar.style.setProperty("--progress-width", degree + "%");
        percent.innerHTML = degree + "<span>%</span>";
      }, 70);
    });
  }
});
