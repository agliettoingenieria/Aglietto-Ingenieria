import { $ } from './utils.js';

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const btnTheme = $('#btn-theme');
    const menuTheme = $('#btn-menu');
    const sectionsList = $('#sections__list');
    const sectionsItems = sectionsList.children;
    let curr;

    const setAnchorRef = (anchor) => {
      if (curr && window.location.href !== anchor.getAttribute('href')) {
        curr.classList.remove('current');
      }
      anchor.classList.add('current');
      if (sectionsList.classList.contains('show')) {
        sectionsList.classList.toggle('show');
        sectionsList.classList.toggle('bg');
        sectionsList.classList.toggle('contrast');
      }
      curr = anchor;
    };

    btnTheme.addEventListener('click', () => {
      const currTheme = document.body.classList[0];
      let theme;
      if (currTheme === 'dark') {
        theme = 'light';
      } else {
        theme = 'dark';
      }
      document.body.classList.replace(currTheme, theme);
      window.localStorage.setItem('config', JSON.stringify({ theme }));
    });
    menuTheme.addEventListener('click', () => {
      sectionsList.classList.toggle('show');
      sectionsList.classList.toggle('bg');
      sectionsList.classList.toggle('contrast');
    });

    for (const sectionItem of sectionsItems) {
      const { firstElementChild: anchor } = sectionItem;
      anchor.addEventListener('click', () => setAnchorRef(anchor));
    }
  });
})();
