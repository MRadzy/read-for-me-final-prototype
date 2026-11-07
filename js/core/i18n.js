import EN from '../i18n/en.js';
import AR from '../i18n/ar.js';

const DICTS = { en: EN, ar: AR };
let lang = 'en';
const listeners = [];

const lookup = (dict, key) => key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), dict);
const fill = (v, vars) => (typeof v === 'string' ? v.replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m)) : v);

export const getLang = () => lang;

export function t(key, vars = {}) {
  const v = lookup(DICTS[lang], key) ?? lookup(EN, key);
  if (v == null) { console.warn('Missing text:', key); return key; }
  return fill(v, vars);
}

export function both(key, vars = {}) {
  return { en: fill(lookup(EN, key), vars), ar: fill(lookup(AR, key) ?? lookup(EN, key), vars) };
}

export function L(v) {
  if (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) return v[lang] ?? v.en;
  return v;
}

export function setLang(next) {
  lang = next === 'ar' ? 'ar' : 'en';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  try { localStorage.setItem('rfm-lang', lang); } catch {}
  listeners.forEach(fn => fn(lang));
}

export function initLang() {
  let start = 'en';
  try { start = new URLSearchParams(location.search).get('lang') || localStorage.getItem('rfm-lang') || 'en'; } catch {}
  setLang(start);
}

export const onLangChange = fn => listeners.push(fn);
