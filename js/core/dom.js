export function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === 'on') for (const [ev, fn] of Object.entries(v)) el.addEventListener(ev, fn);
    else if (v != null) el.setAttribute(k, v);
  }
  el.append(...kids.flat().filter(c => c != null && c !== false));
  return el;
}

export function btn(label, sub, onClick, cls = '') {
  return h('button', { class: 'btn ' + cls, on: onClick ? { click: onClick } : undefined }, label, sub ? h('small', {}, sub) : null);
}

export function segmented(ariaLabel, options, current, onPick) {
  return h('div', { class: 'seg', role: 'group', 'aria-label': ariaLabel },
    options.map(o => h('button', { 'aria-pressed': String(o.value === current), on: { click: () => onPick(o.value) } }, o.label)));
}
