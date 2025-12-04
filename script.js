document.addEventListener('DOMContentLoaded', () => {
  initSideNavigation();
  initScrollAnimations();
  initTechStackAnimation();
});

// 侧边导航激活状态
function initSideNavigation() {
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('section[id]');
  
  // 点击导航
  navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // 滚动时更新激活状态
  const updateActiveNav = () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navDots.forEach(dot => dot.classList.remove('active'));
        const activeHref = `#${section.id}`;
        const activeDot = document.querySelector(`.nav-dot[href="${activeHref}"]`);
        if (activeDot) activeDot.classList.add('active');
      }
    });
    
    // Hero section 特殊处理
    if (window.scrollY < sections[0]?.offsetTop) {
      navDots.forEach(dot => dot.classList.remove('active'));
      const heroDot = document.querySelector('.nav-dot[href="#hero"]');
      if (heroDot) heroDot.classList.add('active');
    }
  };
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
}

// 滚动动画
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // 时间线项目的延迟动画
        if (entry.target.classList.contains('timeline-item')) {
          const items = document.querySelectorAll('.timeline-item');
          items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.2}s`;
          });
        }
      }
    });
  }, observerOptions);
  
  // 观察元素
  const elementsToAnimate = document.querySelectorAll(
    '.about-card, .timeline-item, .practice-card, .quote-card, .insight-box'
  );
  
  elementsToAnimate.forEach(el => {
    el.classList.add('animate-element');
    observer.observe(el);
  });
  
  // 添加动画样式
  const style = document.createElement('style');
  style.textContent = `
    .animate-element {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .animate-element.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}

// 技术栈进度条动画
function initTechStackAnimation() {
  const techItems = document.querySelectorAll('.tech-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.tech-fill');
        const progress = entry.target.dataset.progress;
        if (fill && progress) {
          fill.style.width = `${progress}%`;
        }
      }
    });
  }, { threshold: 0.5 });
  
  techItems.forEach(item => {
    const fill = item.querySelector('.tech-fill');
    if (fill) fill.style.width = '0';
    observer.observe(item);
  });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
