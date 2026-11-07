import { S } from '../core/state.js';
import { h, btn, segmented } from '../core/dom.js';
import { go } from '../core/router.js';
import { log } from '../core/feedback.js';
import { t } from '../core/i18n.js';
import { DOCUMENT_TYPES } from '../data/documents.js';

export function type() {
  const who = segmented(t('type.whoAria'), [
    { value: 'ai', label: t('type.segAI') },
    { value: 'person', label: t('type.segPerson') },
  ], S.mode, v => { S.mode = v; log(`Reader mode: ${v === 'ai' ? 'AI first' : 'Volunteer first'}`); go('type', true); });

  const pick = ({ key, doc }) => btn(t(`type.types.${key}`), null, () => { S.doc = doc; log(`Selected document: ${key}`); go('camera'); });

  return {
    title: t('type.title'),
    speech: t('type.speech', { mode: S.mode === 'ai' ? t('type.modeAI') : t('type.modePerson') }),
    body: [
      h('p', { class: 'label' }, t('type.who'), h('span', { class: 'tag' }, t('common.new'))),
      who,
      h('p', { class: 'lede' }, S.mode === 'ai' ? t('type.ledeAI') : t('type.ledePerson')),
      h('p', { class: 'label' }, t('type.typeLabel')),
      h('div', { class: 'grid2' }, DOCUMENT_TYPES.map(pick)),
      btn(t('type.later'), t('type.laterSub'), () => { log('Chose Read Later'); go('later'); }, 'new'),
    ],
  };
}
