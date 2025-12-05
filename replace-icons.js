// Script to replace Font Awesome icons with inline SVGs
// Run this in browser console after loading the page

(function() {
  // Map of Font Awesome classes to SVG icon IDs
  const iconMap = {
    'fas fa-search': 'icon-search',
    'fas fa-rocket': 'icon-rocket',
    'fas fa-brain': 'icon-brain',
    'fas fa-search-dollar': 'icon-search-dollar',
    'fas fa-chart-bar': 'icon-chart-bar',
    'fas fa-link': 'icon-link',
    'fas fa-key': 'icon-key',
    'fas fa-chart-line': 'icon-chart-line',
    'fas fa-code': 'icon-code',
    'fas fa-robot': 'icon-robot',
    'fas fa-bookmark': 'icon-bookmark',
    'fab fa-google': 'icon-google',
    'fas fa-arrow-right': 'icon-arrow-right',
    'fab fa-microsoft': 'icon-microsoft',
    'fas fa-chart-pie': 'icon-chart-pie',
    'fas fa-tools': 'icon-tools',
    'fas fa-database': 'icon-database',
    'fas fa-spider': 'icon-spider',
    'fas fa-comment-dots': 'icon-comment-dots',
    'fas fa-image': 'icon-image',
    'fas fa-magnifying-glass': 'icon-magnifying-glass',
    'fas fa-graduation-cap': 'icon-graduation-cap',
    'fas fa-book': 'icon-book',
    'fas fa-road': 'icon-road',
    'fas fa-list': 'icon-list'
  };

  // Create SVG container if not exists
  if (!document.querySelector('svg[style*="display: none"]')) {
    const svgContainer = document.createElement('div');
    svgContainer.innerHTML = `
      <svg style="display: none;">
        <!-- fas fa-search -->
        <symbol id="icon-search" viewBox="0 0 512 512">
          <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.8-36.9 49.6-84.1 49.6-135C415 93.1 321.9 0 208 0S0 93.1 0 207s93.1 207 207 207c50.9 0 98.1-17.8 135-49.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM207 368c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z"/>
        </symbol>

        <!-- fas fa-rocket -->
        <symbol id="icon-rocket" viewBox="0 0 512 512">
          <path fill="currentColor" d="M156.4 255.9l-25.3 25.3c-2.9 2.9-2.9 7.7 0 10.6l10.6 10.6c2.9 2.9 7.7 2.9 10.6 0l25.3-25.3 39.8 39.8L191.6 376c-2.9 2.9-2.9 7.7 0 10.6l10.6 10.6c2.9 2.9 7.7 2.9 10.6 0l25.3-25.3 39.8 39.8-25.3 25.3c-2.9 2.9-2.9 7.7 0 10.6l10.6 10.6c2.9 2.9 7.7 2.9 10.6 0l25.3-25.3 39.8 39.8-25.3 25.3c-2.9 2.9-2.9 7.7 0 10.6l10.6 10.6c2.9 2.9 7.7 2.9 10.6 0l25.3-25.3 39.8 39.8-25.3 25.3c-2.9 2.9-2.9 7.7 0 10.6l10.6 10.6c2.9 2.9 7.7 2.9 10.6 0l25.3-25.3 39.8 39.8-25.3 25.3c-2.9 2.9-2.9 7.7 0 10.6l10.6 10.6c2.9 2.9 7.7 2.9 10.6 0l25.3-25.3L416 426.7l25.3-25.3c2.9-2.9 2.9-7.7 0-10.6l-10.6-10.6c-2.9-2.9-7.7-2.9-10.6 0l-25.3 25.3-39.8-39.8 25.3-25.3c2.9-2.9 2.9-7.7 0-10.6l-10.6-10.6c-2.9-2.9-7.7-2.9-10.6 0l-25.3 25.3-39.8-39.8 25.3-25.3c2.9-2.9 2.9-7.7 0-10.6l-10.6-10.6c-2.9-2.9-7.7-2.9-10.6 0l-25.3 25.3-39.8-39.8 25.3-25.3c2.9-2.9 2.9-7.7 0-10.6l-10.6-10.6c-2.9-2.9-7.7-2.9-10.6 0l-25.3 25.3-39.8-39.8 25.3-25.3c2.9-2.9 2.9-7.7 0-10.6l-10.6-10.6c-2.9-2.9-7.7-2.9-10.6 0l-25.3 25.3-39.8-39.8L156.4 255.9zM64 128c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H64zm384 192H64V192h384v128z"/>
        </symbol>

        <!-- Add more icons as needed -->
        <symbol id="icon-brain" viewBox="0 0 512 512">
          <path fill="currentColor" d="M464 0c-26.5 0-48 21.5-48 48v416c0 26.5 21.5 48 48 48s48-21.5 48-48V48c0-26.5-21.5-48-48-48zM48 0C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48s48-21.5 48-48V48c0-26.5-21.5-48-48-48zm192 160c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64s64-28.7 64-64v-96c0-35.3-28.7-64-64-64z"/>
        </symbol>

        <symbol id="icon-chart-bar" viewBox="0 0 512 512">
          <path fill="currentColor" d="M32 32v448h448V32H32zm384 384H96V96h320v320z"/>
          <path fill="currentColor" d="M128 288h64v96h-64zm96-128h64v224h-64zm96 64h64v160h-64z"/>
        </symbol>

        <symbol id="icon-code" viewBox="0 0 512 512">
          <path fill="currentColor" d="M177.8 327.2l-64-160 64-160 30.4 12.2-51.2 128 51.2 128-30.4 11.8zM334.2 327.2l30.4-12.2-51.2-128 51.2-128-30.4-11.8-64 160 64 160z"/>
        </symbol>
      </svg>
    `;
    document.body.insertBefore(svgContainer.firstElementChild, document.body.firstChild);
  }

  // Replace all Font Awesome icons
  const icons = document.querySelectorAll('i[class*="fa-"]');
  let replacedCount = 0;

  icons.forEach(icon => {
    const classes = Array.from(icon.classList);
    const faClass = classes.find(c => c.startsWith('fa-') && !c.includes('fw') && !c.includes('fa-') === false);

    if (faClass) {
      const fullClass = classes.find(c => c.includes('fas') || c.includes('fab')) + ' ' + faClass;
      const iconId = iconMap[fullClass];

      if (iconId) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', icon.className);
        svg.setAttribute('style', 'width: 1em; height: 1em; vertical-align: middle; fill: currentColor;');
        svg.innerHTML = `<use href="#${iconId}"></use>`;
        icon.parentNode.replaceChild(svg, icon);
        replacedCount++;
      }
    }
  });

  console.log(`Replaced ${replacedCount} Font Awesome icons with SVGs`);

  // Remove Font Awesome CSS if it exists
  const fontAwesomeLinks = document.querySelectorAll('link[href*="font-awesome"]');
  fontAwesomeLinks.forEach(link => link.remove());

  return replacedCount;
})();