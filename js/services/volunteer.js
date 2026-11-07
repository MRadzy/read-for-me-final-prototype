import { readDocument, bilingualLines } from './ai.js';
import { READ_LATER_RESULT } from '../data/documents.js';
import { both } from '../core/i18n.js';

export const CHECK_DELAY_MS = 2500;

export function checkReading(result, docKey) {
  const r = result || readDocument(docKey);
  r.checked = true;
  if (r.ref) { r.ref.status = 'checked'; r.ref.lines = bilingualLines(r); }
  return r;
}

export function createReadLaterRequest({ pages, format, deadline }) {
  return {
    id: 'req_' + Date.now(), status: 'waiting', stage: 1, pages, format, deadline,
    name: both('saved.requestName', { n: pages }), kind: both('saved.requestKind'), when: both('common.today'),
    lines: { en: [], ar: [] },
  };
}

export const STAGE_COUNT = 4;

export function advanceRequest(req) {
  req.stage = Math.min(req.stage + 1, STAGE_COUNT - 1);
  if (req.stage === STAGE_COUNT - 1) { req.status = 'saved'; req.when = both('common.today'); req.lines = structuredClone(READ_LATER_RESULT); }
  return req;
}
