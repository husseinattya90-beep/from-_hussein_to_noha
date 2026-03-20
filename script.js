// اختيار كل السحب
const clouds = document.querySelectorAll('.cloud');

// إعطاء كل سحابة مدة مختلفة (تم تحسينه للعمق)
clouds.forEach((cloud, index) => {
  const duration = 20 + index * 5; // 20s, 25s, 30s
  cloud.style.animationDuration = duration + 's';
});

// تأثير bounce عند النقر على الشخصية
const character = document.querySelector('.character');

character.addEventListener('click', () => {
  character.classList.add('bounce');
  setTimeout(() => {
    character.classList.remove('bounce');
  }, 500);
});