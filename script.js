// Confetti
const confettiContainer = document.querySelector('.confetti');
const colors = ['#ffcc00','#ff4d6d','#1b4332','#4dabf7','#ff7f50'];

for(let i=0;i<30;i++){
  const confetti = document.createElement('div');
  confetti.style.left = Math.random()*100 + 'vw';
  confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  confetti.style.animationDuration = (Math.random()*3 + 2) + 's';
  confetti.style.width = (Math.random()*6+4) + 'px';
  confetti.style.height = confetti.style.width;
  confettiContainer.appendChild(confetti);
}

// Bubble typewriter effect
const bubble = document.querySelector('.bubble');
const textElement = document.querySelector('.bubble .text');
const message = "Kol sana w enti tayba\nHappy Eid";

function typeWriter(text, i = 0) {
  if (i < text.length) {
    textElement.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 100);
  }
}

// إظهار bubble وبدء الكتابة بعد ثانيتين
setTimeout(() => {
  bubble.style.opacity = '1';
  bubble.style.transform = 'scale(1)';
  typeWriter(message);
}, 2000);