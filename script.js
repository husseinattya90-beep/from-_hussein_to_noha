const cards = document.querySelectorAll(".card");
const endMessage = document.querySelector(".end-message");

let opened = 0;

cards.forEach(card => {
  card.addEventListener("click", () => {

    if (!card.classList.contains("open")) {

      card.classList.remove("locked");
      card.classList.add("open");

      const texts = card.querySelector(".texts");
      texts.classList.add("show");

      // Fade in each paragraph line by line
      const lines = texts.querySelectorAll("p");
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.style.opacity = 1;
          line.style.transform = "translateY(0)";
        }, index * 400);
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