function startDig() {

  const girl = document.querySelector(".girl");
  const hole = document.querySelector(".hole");
  const boy = document.querySelector(".boy");
  const message = document.querySelector(".message");

  // تبدأ تحفر
  girl.classList.add("dig");

  // تظهر الحفرة
  setTimeout(() => {
    hole.classList.add("show");
  }, 1500);

  // يطلع الولد
  setTimeout(() => {
    girl.classList.remove("dig");
    boy.classList.add("show");
  }, 3000);

  // تظهر الرسالة
  setTimeout(() => {
    message.classList.add("show");
  }, 4000);
}