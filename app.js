// Navbar Toggle (موبايل)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Scroll Animation (Fade-in)
function showOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Animation للكروت عند الظهور
function showCardsOnScroll() {
  document.querySelectorAll('.menu-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      card.classList.add('show');
    }
  });
}
window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll);

// زر ارجع للأعلى
const backToTopBtn = document.getElementById('backToTop');
if(backToTopBtn){
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
  });
}

// Lightbox للصور في المعرض
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:9999;";
    const bigImg = document.createElement('img');
    bigImg.src = img.src;
    bigImg.style = "max-width:88vw;max-height:86vh;border-radius:20px;box-shadow:0 8px 32px #0009;";
    overlay.appendChild(bigImg);
    overlay.onclick = () => document.body.removeChild(overlay);
    document.body.appendChild(overlay);
  });
});

// منع إرسال فورم التواصل (تجريبي)
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("تم إرسال رسالتك! سنتواصل معك قريبًا 👋");
    contactForm.reset();
  });
}