const cards = document.querySelectorAll(".card");
const endMessage = document.querySelector(".end-message");

let opened = 0;

cards.forEach(card => {
  card.addEventListener("click", () => {

    const texts = card.querySelector(".texts");

    if (!texts.classList.contains("show")) {
      texts.classList.add("show");

      const lines = texts.querySelectorAll("p");

      lines.forEach((line, index) => {
        setTimeout(() => {
          line.style.opacity = "1";
          line.style.transform = "translateY(0)";
        }, index * 600);
      });

      opened++;

      if (opened === cards.length) {
        setTimeout(() => {
          endMessage.style.display = "block";
        }, 1000);
      }
    }

  });
});