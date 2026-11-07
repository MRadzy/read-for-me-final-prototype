import { h } from '../core/dom.js';
import { t } from '../core/i18n.js';

export function renderStartHere(container) {
  container.replaceChildren(h('section', { class: 'card start', 'aria-labelledby': 'start-h' },
    h('h2', { id: 'start-h' }, t('panel.startTitle')),
    h('ol', {}, t('panel.start').map(line => h('li', {}, line))),
    h('p', {}, t('panel.startNote'))));
}
