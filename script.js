document.addEventListener('DOMContentLoaded', () => {
  initAuroraBackground();
  initAnimateOnScroll();
  initNavigationState();
  initSmoothScroll();
  createBackToTop();
});

function initAuroraBackground() {
  const container = document.getElementById('particles-js');
  if (!container) return;
  container.innerHTML = '';

  const orbCount = 7;
  const palette = [
    'rgba(103, 232, 249, 0.5)',
    'rgba(129, 140, 248, 0.5)',
    'rgba(192, 132, 252, 0.55)',
    'rgba(248, 113, 113, 0.45)'
  ];

  for (let i = 0; i < orbCount; i++) {
    const orb = document.createElement('span');
    orb.className = 'aurora-orb';
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.animationDelay = `${Math.random() * 10}s`;
    orb.style.background = `radial-gradient(circle, ${palette[i % palette.length]}, transparent 65%)`;
    container.appendChild(orb);
  }
}

function initAnimateOnScroll() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.add('animate-on-scroll'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible', 'beam-effect');
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach(section => observer.observe(section));
}

function initNavigationState() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const activateLink = id => {
    navLinks.forEach(link => {
      const target = link.getAttribute('href')?.replace('#', '');
      if (!target) return;
      link.classList.toggle('active-link', target === id);
    });
  };

  const onScroll = () => {
    const scrollPos = window.scrollY + 150;
    let currentId = sections[0]?.id ?? '';

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        currentId = section.id;
      }
    });

    activateLink(currentId);
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
}

function initSmoothScroll() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function createBackToTop() {
  const button = document.createElement('button');
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = 'back-to-top';
  button.style.cssText = `
    position: fixed;
    right: 24px;
    bottom: 24px;
    width: 54px;
    height: 54px;
    opacity: 0;
    z-index: 40;
  `;
  document.body.appendChild(button);

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const toggleVisibility = () => {
    button.style.opacity = window.scrollY > 360 ? '1' : '0';
  };

  window.addEventListener('scroll', toggleVisibility);
  toggleVisibility();
}