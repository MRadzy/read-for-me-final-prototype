import { S } from '../core/state.js';
import { h, btn } from '../core/dom.js';
import { go } from '../core/router.js';
import { log, say } from '../core/feedback.js';
import { t, L } from '../core/i18n.js';
import { DOCUMENTS } from '../data/documents.js';
import { readDocument } from '../services/ai.js';

const STEP_MS = 1500;

export function camera() {
  const d = DOCUMENTS[S.doc] || DOCUMENTS.label;
  const isNote = S.doc === 'note';
  const tilt = isNote ? 'rotate(-3deg) ' : '';
  const noun = L(d.noun);

  const docEl = h('div', { class: 'doc' + (isNote ? ' note' : ''), 'aria-hidden': 'true' },
    d.lines.map(l => h('div', {}, L(l.unsure ? l.blur : l.t))));
  const frame = h('div', { class: 'frame', 'aria-hidden': 'true' });
  const finder = h('div', { class: 'viewfinder', role: 'img', 'aria-label': t('camera.finderAria', { noun }) }, docEl, frame);
  const guide = h('div', { class: 'guide', role: 'status', 'aria-live': 'polite' }, t('camera.hold', { noun }));
  const meter = h('div', { class: 'meter', 'aria-hidden': 'true' }, h('span'), h('span'), h('span'));

  const moves = ['translate(24%,-8%)', 'translate(8%,0)', 'translate(0,0)'];
  const messages = t('camera.steps').map(m => m.replace('{noun}', noun));
  docEl.style.transform = tilt + 'translate(42%,-15%)';

  function capture() {
    if (S.current !== 'camera') return;
    log(`Captured photo of ${L(d.name)}`);
    say(t('camera.taken'));
    if (S.mode === 'ai') S.result = readDocument(S.doc);
    go(S.mode === 'ai' ? 'reading' : 'confirm');
  }

  let i = 0;
  function step() {
    if (S.current !== 'camera') return;
    docEl.style.transform = tilt + moves[i];
    guide.textContent = messages[i];
    say(messages[i]);
    meter.children[i].classList.add('on');
    i += 1;
    if (i < moves.length) setTimeout(step, STEP_MS);
    else { frame.classList.add('ok'); setTimeout(capture, 1300); }
  }
  setTimeout(step, 1000);

  return {
    title: t('camera.title'),
    speech: t('camera.speech', { noun }),
    body: [finder, guide, meter, btn(t('camera.capture'), t('camera.captureSub'), capture, 'primary')],
  };
}
