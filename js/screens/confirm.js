import { S } from '../core/state.js';
import { h, btn } from '../core/dom.js';
import { go, goBack } from '../core/router.js';
import { log, toast } from '../core/feedback.js';
import { t } from '../core/i18n.js';

export function confirm() {
  const fromAI = !!S.result;
  return {
    title: t('confirm.title'),
    speech: t('confirm.speech', { ai: fromAI ? t('confirm.speechAI') : '' }),
    body: [
      h('div', { class: 'share' }, h('strong', {}, t('confirm.receive')),
        h('ul', {}, h('li', {}, t('confirm.photo')), fromAI ? h('li', {}, t('confirm.aiText')) : null)),
      h('div', { class: 'share' }, h('strong', {}, t('confirm.notSee')),
        h('ul', {}, h('li', {}, t('confirm.notSee1')), h('li', {}, t('confirm.notSee2')), h('li', {}, t('confirm.notSee3')))),
      btn(t('confirm.send'), t('confirm.sendSub'), () => { log('Approved volunteer sharing'); go('connecting'); }, 'primary'),
      btn(t('confirm.cancel'), t('confirm.cancelSub'), () => { log('Cancelled volunteer sharing'); toast(t('confirm.cancelToast')); goBack(); }, 'quiet'),
    ],
  };
}
