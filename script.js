document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initScrollAnimations();
  initNavHighlight();
});

// 平滑滚动
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
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
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // 添加动画效果
  const elements = document.querySelectorAll(
    '.about-item, .wealth-card, .daily-card, .quote-item, .insight-box'
  );
  
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

// 导航高亮
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item[href^="#"]');
  
  const updateNav = () => {
    const scrollPos = window.scrollY + 200;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.style.background = 'rgba(255, 255, 255, 0.1)';
          item.style.borderColor = 'rgba(74, 55, 40, 0.2)';
          
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.style.background = 'rgba(255, 255, 255, 0.2)';
            item.style.borderColor = '#c53d43';
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', updateNav);
  updateNav();
}
