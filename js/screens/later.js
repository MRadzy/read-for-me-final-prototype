import { S } from '../core/state.js';
import { h, btn, segmented } from '../core/dom.js';
import { go } from '../core/router.js';
import { log, toast, say } from '../core/feedback.js';
import { t } from '../core/i18n.js';
import { createReadLaterRequest } from '../services/volunteer.js';

export function later() {
  const step = S.pages === 0 ? 0 : 1;
  const steps = h('ol', { class: 'steps', 'aria-label': t('later.stepAria', { n: step + 1 }) },
    t('later.steps').map((s, i) => h('li', { class: i <= step ? 'on' : '' }, s)));

  const counter = h('div', { class: 'counter' },
    btn(t('later.add'), S.pages ? t('later.addNext') : t('later.addFirst'), () => {
      S.pages += 1; log(`Added page ${S.pages} to Read Later`); say(t('later.added', { n: S.pages })); go('later', true);
    }, 'new'),
    h('div', { class: 'count' },
      h('strong', { 'aria-live': 'polite' }, String(S.pages)),
      h('span', {}, S.pages === 1 ? t('later.pageAdded') : t('later.pagesAdded'))));

  const thumbs = S.pages ? h('ul', { class: 'pages', 'aria-label': t('later.pagesAria', { n: S.pages }) },
    Array.from({ length: S.pages }, (_, i) => h('li', {}, t('later.thumb', { n: i + 1 })))) : null;

  const format = segmented(t('later.formatAria'), [
    { value: 'audio', label: t('later.formats.audio') },
    { value: 'text', label: t('later.formats.text') },
  ], S.format, v => { S.format = v; go('later', true); });

  const deadline = h('select', { id: 'deadline', 'aria-label': t('later.deadlineLabel') },
    t('later.deadlines').map((o, i) => h('option', { value: String(i), selected: i === S.deadline ? 'selected' : null }, o)));
  deadline.addEventListener('change', () => { S.deadline = Number(deadline.value); });

  const send = h('button', {
    class: 'btn ' + (S.pages ? 'primary' : 'quiet'), disabled: S.pages ? null : 'disabled',
    on: { click: () => {
      S.readings.unshift(createReadLaterRequest({ pages: S.pages, format: S.format, deadline: S.deadline }));
      log(`Sent Read Later request: ${S.pages} pages, ${S.format}, deadline ${S.deadline}`);
      toast(t('later.sentToast'));
      say(t('later.sentSay'));
      S.pages = 0; go('home', true);
    } },
  }, t('later.send'), h('small', {}, S.pages ? t('later.sendReady') : t('later.sendEmpty')));

  return {
    title: t('later.title'),
    speech: t('later.speech', { step: step + 1, n: S.pages, format: t(`later.formats.${S.format}`), due: t('later.deadlines')[S.deadline] }),
    body: [
      steps,
      h('p', { class: 'lede' }, t('later.lede')),
      counter, thumbs,
      h('p', { class: 'label' }, t('later.formatLabel')), format,
      h('p', { class: 'label' }, t('later.deadlineLabel')), deadline,
      h('div', { class: 'share' }, h('strong', {}, t('later.receive')),
        h('ul', {}, h('li', {}, S.pages ? t('later.onlyPages', { n: S.pages }) : t('later.onlyAdded')))),
      send,
    ],
  };
}
