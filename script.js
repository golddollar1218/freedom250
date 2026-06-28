/* copy CA */
document.getElementById('copyBtn')?.addEventListener('click', () => {
  const ca = document.getElementById('ca')?.textContent || '';
  navigator.clipboard.writeText(ca).then(() => {
    const btn = document.getElementById('copyBtn');
    if (btn) {
      btn.textContent = 'COPIED ✅';
      setTimeout(() => { btn.textContent = 'COPY 📋'; }, 2000);
    }
  });
});

/* confetti on buy buttons */
function burstConfetti(x, y) {
  const colors = ['#e8001c', '#ffd700', '#002868', '#fff', '#ff6600'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    el.style.width = (Math.random() * 8 + 6) + 'px';
    el.style.height = (Math.random() * 8 + 6) + 'px';
    el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    el.style.animationDelay = (Math.random() * 0.3) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

document.querySelectorAll('.btn-mega, .btn-buy-sm').forEach(btn => {
  btn.addEventListener('click', (e) => {
    burstConfetti(e.clientX, e.clientY);
  });
});

/* random title shake on hover */
const titleNum = document.querySelector('.title-num');
titleNum?.addEventListener('mouseenter', () => {
  titleNum.style.animation = 'none';
  titleNum.offsetHeight;
  titleNum.style.animation = 'shake 0.5s ease';
});

/* easter egg: click logo 5 times */
let logoClicks = 0;
document.querySelector('.logo')?.addEventListener('click', (e) => {
  e.preventDefault();
  logoClicks++;
  if (logoClicks >= 5) {
    document.body.style.animation = 'rainbow-bg 2s linear';
    burstConfetti(window.innerWidth / 2, window.innerHeight / 2);
    logoClicks = 0;
  }
});

/* inject rainbow bg keyframe */
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbow-bg {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);

/* supply bars animate on scroll */
const bars = document.querySelectorAll('.supply-item .bar');
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.5 });
bars.forEach(b => barObs.observe(b));

/* meme box tilt on mouse */
document.querySelectorAll('.meme-box, .road-step, .squad-card').forEach(box => {
  box.addEventListener('mouseenter', () => {
    const rot = (Math.random() - 0.5) * 4;
    box.style.transform = `rotate(${rot}deg) scale(1.02)`;
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = '';
  });
});
