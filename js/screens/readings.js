import { S } from '../core/state.js';
import { h } from '../core/dom.js';
import { go } from '../core/router.js';
import { log } from '../core/feedback.js';
import { t, L } from '../core/i18n.js';

function pillFor(r) {
  if (r.status === 'waiting') return h('span', { class: 'pill wait' }, t('saved.stages')[r.stage]);
  if (r.status === 'checked') return h('span', { class: 'pill ok' }, t('readings.checked'));
  return h('span', { class: 'pill' }, L(r.when));
}

const searchText = r => [r.name, r.kind].map(v => (typeof v === 'object' ? `${v.en} ${v.ar}` : v)).join(' ').toLowerCase();

export function readings() {
  const search = h('input', { type: 'search', id: 'search', placeholder: t('readings.search'), 'aria-label': t('readings.searchAria') });
  const list = h('div', { class: 'list' });

  function render() {
    const term = search.value.trim().toLowerCase();
    const items = S.readings.filter(r => !term || searchText(r).includes(term));
    list.replaceChildren(...(items.length ? items.map(r =>
      h('button', { class: 'btn', on: { click: () => { S.open = r; log(`Opened saved reading: ${L(r.name)}`); go('saved'); } } },
        h('span', { class: 'item' }, h('span', {}, L(r.name)), pillFor(r)),
        h('small', {}, `${L(r.kind)} • ${L(r.when)}`)))
      : [h('p', { class: 'lede' }, t('readings.none', { q: search.value }))]));
  }
  search.addEventListener('input', render);
  render();

  const waiting = S.readings.filter(r => r.status === 'waiting').length;
  return {
    title: t('readings.title'),
    speech: t('readings.speech', {
      n: S.readings.length,
      waiting: waiting ? t('readings.speechWaiting', { n: waiting }) : '',
      names: S.readings.map(r => L(r.name)).join('. '),
    }),
    body: [search, list],
  };
}
