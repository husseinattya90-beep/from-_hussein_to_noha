let screens = document.querySelectorAll(".screen");
let current = 0;

// البداية بعد ثانيتين
setTimeout(() => {
  nextScreen();
}, 2000);

function nextScreen() {
  screens[current].classList.remove("active");
  current++;

  if (current < screens.length) {
    let next = screens[current];
    next.classList.add("active");

    // كل p يظهر واحدة واحدة
    let allTexts = next.querySelectorAll("p");
    allTexts.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add("show");
      }, index * 1200);
    });

    // مدة كل شاشة = عدد الجمل * 1.2 ثانية + buffer 2 ثانية
    let duration = allTexts.length * 1200 + 2000;

    setTimeout(nextScreen, duration);
  }
}