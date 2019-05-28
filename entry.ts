import $ from 'jquery';

import 'tooltipster/dist/js/tooltipster.bundle';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';

$('a').tooltipster({
  side: 'bottom',
  content: 'loading ...',
  delay: 200,
  interactive: true,
  trigger: 'custom',
  triggerOpen: {
    mouseenter: true
  },
  functionInit: (instance) => {
    console.log('> functionInit');
    setTimeout(() => {
      instance.content('Hello, tooltipster');
    }, 3000)
  }
})

$(document).on('click', () => {
  console.log('click on document');
  $.tooltipster.instances().forEach(it => it.close());
});
