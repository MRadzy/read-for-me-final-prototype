import { h } from '../core/dom.js';
import { S } from '../core/state.js';
import { say, stopSpeaking, log } from '../core/feedback.js';
import { t, getLang, setLang } from '../core/i18n.js';

export function renderControls(container, { onReset }) {
  const state = on => t(on ? 'panel.on' : 'panel.off');

  const lang = h('button', { class: 'tool', id: 'language' });
  lang.addEventListener('click', () => {
    setLang(getLang() === 'ar' ? 'en' : 'ar');
    log(`Switched language to ${getLang() === 'ar' ? 'Arabic' : 'English'}`);
  });

  const speak = h('button', { class: 'tool', id: 'speak', 'aria-pressed': 'false' });
  speak.addEventListener('click', () => {
    S.speak = !S.speak; refresh();
    if (!S.speak) stopSpeaking();
    log(S.speak ? 'Turned on spoken screen audio' : 'Turned off spoken screen audio');
    if (S.speak) say(t('panel.speakOn'));
  });

  const big = h('button', { class: 'tool', id: 'text-size', 'aria-pressed': 'false' });
  big.addEventListener('click', () => {
    const on = !document.documentElement.classList.contains('large-text');
    document.documentElement.classList.toggle('large-text', on);
    refresh();
    log(on ? 'Turned on larger text' : 'Turned off larger text');
  });

  const reset = h('button', { class: 'tool', id: 'reset' });
  reset.addEventListener('click', onReset);

  const title = h('h2', { id: 'controls-h' });
  const hint = h('p', { class: 'hint' });
  const logTitle = h('h3', { class: 'log-title' });
  const logEl = h('ol', { class: 'log', id: 'log', dir: 'ltr', lang: 'en' });

  function refresh() {
    const large = document.documentElement.classList.contains('large-text');
    lang.textContent = t('panel.language');
    lang.setAttribute('aria-label', t('panel.languageAria'));
    lang.setAttribute('lang', getLang() === 'ar' ? 'en' : 'ar');
    speak.textContent = t('panel.speak', { state: state(S.speak) });
    speak.setAttribute('aria-pressed', String(S.speak));
    big.textContent = t('panel.larger', { state: state(large) });
    big.setAttribute('aria-pressed', String(large));
    reset.textContent = t('panel.reset');
    title.textContent = t('panel.controlsTitle');
    hint.textContent = t('panel.hint');
    logTitle.textContent = t('panel.log');
  }
  refresh();

  container.replaceChildren(h('section', { class: 'card', 'aria-labelledby': 'controls-h' },
    title, h('div', { class: 'row' }, lang, speak, big, reset), hint, logTitle, logEl));
  return { logEl, refresh };
}
