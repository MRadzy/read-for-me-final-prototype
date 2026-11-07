import { S } from '../core/state.js';
import { h } from '../core/dom.js';
import { go, forget } from '../core/router.js';
import { log, toast } from '../core/feedback.js';
import { t } from '../core/i18n.js';
import { checkReading, CHECK_DELAY_MS } from '../services/volunteer.js';

export function connecting() {
  const live = !S.doc;

  setTimeout(() => {
    if (S.current !== 'connecting') return;
    if (live) {
      toast(t('connecting.liveToast'));
      log('Live call simulated');
      go('home', true);
      return;
    }
    S.result = checkReading(S.result, S.doc);
    log('Volunteer checked the unclear line');
    toast(t('connecting.checkedToast'));
    forget('confirm', 'connecting', 'reading');
    go('reading', true);
  }, CHECK_DELAY_MS);

  return {
    title: live ? t('connecting.titleLive') : t('connecting.titleCheck'),
    speech: live ? t('connecting.speechLive') : t('connecting.speechCheck'),
    body: [
      h('div', { class: 'spinner', 'aria-hidden': 'true' }),
      h('p', { style: 'text-align:center;font-weight:700;font-size:1.05rem' }, live ? t('connecting.bodyLive') : t('connecting.bodyCheck')),
      h('p', { class: 'lede', style: 'text-align:center' }, t('connecting.wait')),
    ],
  };
}
