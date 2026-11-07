import { S } from '../core/state.js';
import { h, btn } from '../core/dom.js';
import { go } from '../core/router.js';
import { log, toast, say } from '../core/feedback.js';
import { t, L, both } from '../core/i18n.js';
import { readDocument, hasUnsureLine, linesOf, bilingualLines } from '../services/ai.js';

function lineClass(l, r) {
  if (!l.unsure) return 'line';
  return 'line ' + (r.checked ? 'checked' : 'unsure');
}

function save(r) {
  if (r.saved) return;
  r.saved = true;
  const entry = { id: 'r_' + Date.now(), name: r.name, kind: r.kind, when: both('common.today'), status: r.checked ? 'checked' : 'saved', lines: bilingualLines(r) };
  S.readings.unshift(entry);
  r.ref = entry;
  log(`Saved reading: ${L(r.name)}`);
  toast(t('reading.savedToast'));
  say(t('reading.savedToast'));
  go('reading', true);
}

export function reading() {
  const r = S.result || (S.result = readDocument(S.doc));
  const unsure = hasUnsureLine(r);
  const lines = linesOf(r);
  const spoken = lines.join('. ');

  const status = unsure
    ? h('p', { class: 'note-chip' }, t('reading.unsure'))
    : r.checked ? h('p', { class: 'note-chip ok' }, t('reading.checked')) : null;

  const check = r.checked ? null : btn(t('reading.check'), t('reading.checkSub'), () => { log('Requested volunteer check'); go('confirm'); }, 'new');

  return {
    title: L(r.name),
    speech: (r.checked ? t('reading.speechChecked') : '') + spoken + (unsure ? t('reading.speechUnsure') : ''),
    body: [
      h('p', { class: 'lede' }, r.checked ? t('reading.ledeChecked') : t('reading.lede')),
      h('div', { class: 'reading' }, r.lines.map((l, i) => h('div', { class: lineClass(l, r) }, lines[i]))),
      status,
      unsure ? check : null,
      btn(r.saved ? t('reading.saved') : t('reading.save'), r.saved ? t('reading.savedSub') : t('reading.saveSub'), () => save(r), r.saved ? 'quiet' : 'new'),
      btn(t('reading.listen'), t('reading.listenSub'), () => { log('Replayed reading audio'); say(spoken, { force: true }); }),
      btn(t('reading.ask'), S.doc === 'note' ? t('reading.askSubNote') : t('reading.askSubLabel'), () => { log('Opened Ask a question'); go('ask'); }),
      unsure ? null : check,
    ],
  };
}
