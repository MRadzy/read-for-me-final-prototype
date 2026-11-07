import { S } from '../core/state.js';
import { h, btn } from '../core/dom.js';
import { goBack } from '../core/router.js';
import { say } from '../core/feedback.js';
import { t } from '../core/i18n.js';
import { answerQuestion } from '../services/ai.js';

export function ask() {

  const { q, a } = answerQuestion(S.result ? S.doc : 'saved');
  return {
    title: t('ask.title'),
    speech: t('ask.speech', { q, a }),
    body: [
      h('div', { class: 'qa' }, h('p', {}, t('ask.asked', { q })), h('p', {}, a)),
      h('p', { class: 'lede' }, t('ask.lede')),
      btn(t('ask.hear'), null, () => say(a, { force: true })),
      btn(t('ask.back'), null, goBack),
    ],
  };
}
