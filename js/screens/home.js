import { S } from '../core/state.js';
import { btn } from '../core/dom.js';
import { go } from '../core/router.js';
import { log, toast, say } from '../core/feedback.js';
import { t, L } from '../core/i18n.js';

export function home() {
  return {
    title: t('home.title'),
    speech: t('home.speech'),
    body: [
      btn(t('home.read'), t('home.readSub'), () => { log('Selected Read something'); go('type'); }, 'new'),
      btn(t('home.readings'), S.readings.length ? t('home.readingsLast', { name: L(S.readings[0].name) }) : t('home.readingsNone'),
        () => { log('Opened My Readings'); go('readings'); }, 'new'),
      btn(t('home.call'), t('home.callSub'), () => { log('Requested live volunteer call'); S.doc = null; go('connecting'); }),
      btn(t('home.ai'), t('home.aiSub'), () => { log('Selected Be My AI'); toast(t('home.aiToast')); say(t('home.aiSay')); }),
      btn(t('home.trusted'), t('home.trustedSub'), () => { log('Selected Trusted Group'); toast(t('home.trustedToast')); say(t('home.trustedSay')); }),
    ],
  };
}
