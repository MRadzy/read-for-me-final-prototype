import { S } from './state.js';
import { getLang } from './i18n.js';

let els = {};
export function initFeedback({ announce, toastEl, logEl }) { els = { announce, toastEl, logEl }; }

export function say(text, { force = false } = {}) {
  if (!text) return;
  els.announce.textContent = '';
  setTimeout(() => { els.announce.textContent = text; }, 40);
  if ((S.speak || force) && 'speechSynthesis' in window) {
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1.05;
      u.lang = getLang() === 'ar' ? 'ar-EG' : 'en-US';
      speechSynthesis.speak(u);
    } catch {}
  }
}

export function stopSpeaking() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }

export function toast(msg) {
  els.toastEl.textContent = msg;
  els.toastEl.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => els.toastEl.classList.remove('show'), 2500);
}

export function log(msg) {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const li = document.createElement('li');
  li.textContent = `[${time}] ${msg}`;
  els.logEl.appendChild(li);
  els.logEl.scrollTop = els.logEl.scrollHeight;
}

export function clearLog() { els.logEl.innerHTML = ''; }
