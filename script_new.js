function start() {

  const girl = document.getElementById("girl");
  const hole = document.getElementById("hole");
  const boy = document.getElementById("boy");
  const speech = document.getElementById("speech");

  // تبدأ الحفر
  girl.classList.add("dig");

  // الحفرة تظهر
  setTimeout(() => {
    hole.classList.add("show");
  }, 1200);

  // الولد يطلع من تحت الأرض
  setTimeout(() => {
    girl.classList.remove("dig");
    boy.classList.add("show");
  }, 2500);

  // الكلام يظهر
  setTimeout(() => {
    speech.classList.add("show");
  }, 3500);
}