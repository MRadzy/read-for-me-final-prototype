import { S } from '../core/state.js';
import { h, btn } from '../core/dom.js';
import { go, goBack } from '../core/router.js';
import { log, toast, say } from '../core/feedback.js';
import { t, L } from '../core/i18n.js';
import { advanceRequest } from '../services/volunteer.js';

function timeline(stage) {
  return h('ol', { class: 'timeline', 'aria-label': t('saved.progress') },
    t('saved.stages').map((s, i) => h('li', { class: i < stage ? 'done' : i === stage ? 'now' : '' }, s)));
}

function waitingView(r) {
  return [
    h('div', { class: 'reading' },
      h('strong', {}, t('saved.requestTitle', { n: r.pages })),
      h('p', { class: 'lede' }, t('saved.requestInfo', { format: t(`later.formats.${r.format}`), due: t('later.deadlines')[r.deadline] }))),
    timeline(r.stage),
    btn(t('saved.simulate'), t('saved.simulateSub'), () => {
      advanceRequest(r);
      const stage = t('saved.stages')[r.stage];
      const msg = r.status === 'saved' ? t('saved.ready') : t('saved.update', { stage });
      log(`Read Later update for ${L(r.name)}: stage ${r.stage}`);
      toast(msg); say(msg);
      go('saved', true);
    }, 'quiet'),
  ];
}

function readyView(r) {
  const lines = L(r.lines);
  const text = lines.join('. ');
  return [
    h('div', { class: 'reading' }, lines.map(line => h('div', { class: 'line' }, line))),
    btn(t('saved.listen'), t('saved.listenSub'), () => { log(`Played saved reading: ${L(r.name)}`); say(text, { force: true }); }, 'primary'),
    btn(t('saved.ask'), t('saved.askSub'), () => { log('Ask a question about a saved reading'); go('ask'); }),
    btn(t('saved.del'), t('saved.delSub'), () => {
      S.readings = S.readings.filter(x => x !== r);
      log(`Deleted saved reading: ${L(r.name)}`);
      toast(t('saved.delToast'));
      goBack();
    }, 'quiet'),
  ];
}

export function saved() {
  const r = S.open;
  const waiting = r.status === 'waiting';
  const name = L(r.name);
  return {
    title: name,
    speech: waiting
      ? t('saved.speechWaiting', { name, stage: t('saved.stages')[r.stage], due: t('later.deadlines')[r.deadline] })
      : t('saved.speechReady', { name, text: L(r.lines).join('. ') }),
    body: waiting ? waitingView(r) : readyView(r),
  };
}
