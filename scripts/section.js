import { $$, Observer } from './utils.js';

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const anchorsSections = $$('#sections__list > li > [data-section]');
    const sections = $$('.article');
    let currAnchorSelected;
    const observer = Observer(
      (elements) => {
        for (const element of elements) {
          if (element.isIntersecting) {
            const currSection = element.target.getAttribute('id');
            const currAnchor =
              anchorsSections[element.target.getAttribute('data-idx') - 1];
            console.log(currAnchor);
            if (
              !currAnchorSelected &&
              currSection === currAnchor.getAttribute('data-section')
            ) {
              currAnchor.classList.add('current');
              currAnchorSelected = currAnchor;
            } else if (
              currAnchorSelected &&
              currAnchorSelected !== currAnchor
            ) {
              currAnchorSelected.classList.remove('current');
              currAnchor.classList.add('current');
              currAnchorSelected = currAnchor;
            }
          }
        }
      },

      // for (const [idx, element] of elements.entries()) {
      // }
      {
        root: null,
        rootMargin: '30px',
        threshold: 0.6,
      }
    );

    // console.log({ sections:, anchorsSections });
    for (const section of sections) {
      observer.observe(section);
    }
  });
})();
