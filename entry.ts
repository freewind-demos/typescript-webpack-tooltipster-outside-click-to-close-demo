import 'jquery';
import $ from 'jquery';

import 'tooltipster/dist/js/tooltipster.bundle';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';

$('a').tooltipster({
  side: 'bottom',
  content: 'loading ...',
  contentAsHTML: true,
  delay: 200,
  interactive: true,
  trigger: 'custom',
  triggerOpen: {
    mouseenter: true
  },
  functionInit: (instance) => {
    console.log('> functionInit');
    setTimeout(() => {
      instance.content(`<div>
        <br/><br/><br/><br/>
        Hello, tooltipster
        <br/><br/><br/><br/>
        </div>`);
    }, 3000)
  }
})

function clickedInsideTooltip(event: JQuery.Event): boolean {
  const base = $(event.target).parents('.tooltipster-base')
  return base.length > 0;
}

$(document).on('click', (event) => {
  console.log('click on document:', event.target);

  if (clickedInsideTooltip(event)) {
    console.log('click inside tooltip, skip')
  } else {
    console.log('click outside tooltip, close all tooltips')
    $.tooltipster.instances().forEach(it => {
      it.close()
    });
  }
});
