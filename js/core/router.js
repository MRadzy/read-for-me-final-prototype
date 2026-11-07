import { S } from './state.js';
import { say } from './feedback.js';

let screens = {};
let els = {};

export function initRouter({ view, title, back }, registry) {
  els = { view, title, back };
  screens = registry;
  back.addEventListener('click', goBack);
}

export function go(name, replace = false) {
  if (!replace && S.current) S.stack.push(S.current);
  if (name === 'home') { S.stack = []; S.result = null; }
  if (name === 'type') S.result = null;
  S.current = name;

  const sc = screens[name]();
  els.title.textContent = sc.title;
  els.back.hidden = name === 'home';
  els.view.replaceChildren(...sc.body.filter(Boolean));
  els.view.scrollTop = 0;
  if (!replace || name === 'home') els.title.focus({ preventScroll: true });
  say(sc.speech);
}

export function goBack() {
  let prev = S.stack.pop();
  while (prev === 'camera' || prev === 'connecting') prev = S.stack.pop();
  S.current = null;
  go(prev || 'home', true);
  els.title.focus({ preventScroll: true });
}

export function forget(...names) { S.stack = S.stack.filter(s => !names.includes(s)); }
