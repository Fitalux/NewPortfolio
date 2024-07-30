document.addEventListener("DOMContentLoaded", () => {
  const colorBoxes = document.querySelectorAll(".color__box");

  colorBoxes.forEach((box) => {
    const card = box.querySelector(".card");
    box.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});
