import { STARTER_READINGS } from '../data/readings.js';

export const S = {
  stack: [], current: null, mode: 'ai', doc: null, result: null,
  readings: [], open: null, pages: 0, format: 'audio', deadline: 1, speak: false,
};

export function resetState() {
  Object.assign(S, {
    stack: [], current: null, mode: 'ai', doc: null, result: null,
    readings: structuredClone(STARTER_READINGS), open: null,
    pages: 0, format: 'audio', deadline: 1,
  });
}
