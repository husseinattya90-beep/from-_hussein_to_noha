const cards = document.querySelectorAll(".card");
const endMessage = document.querySelector(".end-message");

let opened = 0;

cards.forEach(card => {
  card.addEventListener("click", () => {

    const texts = card.querySelector(".texts");

    if (texts.style.display !== "block") {
      texts.style.display = "block";
      opened++;

      if (opened === cards.length) {
        endMessage.style.display = "block";
      }
    }

  });
});