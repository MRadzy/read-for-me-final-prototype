import { DOCUMENTS } from '../data/documents.js';
import { ANSWERS } from '../data/answers.js';
import { L } from '../core/i18n.js';

export function readDocument(docKey) {
  const d = DOCUMENTS[docKey] || DOCUMENTS.label;
  return { name: d.name, kind: d.kind, lines: d.lines.map(l => ({ ...l })), checked: false, saved: false, ref: null };
}

export const hasUnsureLine = result => result.lines.some(l => l.unsure) && !result.checked;

export const linesOf = (result, lang) => result.lines.map(l => {
  const v = (result.checked && l.fixed) ? l.fixed : l.t;
  return lang ? (v[lang] ?? v.en) : L(v);
});

export const bilingualLines = result => ({ en: linesOf(result, 'en'), ar: linesOf(result, 'ar') });

export function answerQuestion(docKey) {
  const a = ANSWERS[docKey] || ANSWERS.saved;
  return { q: L(a.q), a: L(a.a) };
}
