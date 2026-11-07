import { h } from '../core/dom.js';
import { log } from '../core/feedback.js';
import { t } from '../core/i18n.js';

const done = new Set();

export function renderTasks(container) {
  const rows = t('panel.tasks').map((task, i) => {
    const id = `t${i + 1}`;
    const check = h('input', { type: 'checkbox', class: 'task-check', id: `${id}-done`, 'aria-label': t('panel.finishedAria', { title: task.title }) });
    check.checked = done.has(id);
    const row = h('li', { class: 'task-row' + (check.checked ? ' done' : '') }, check,
      h('div', { class: 'task-txt' },
        h('strong', {}, task.title), h('span', {}, task.text),
        h('details', {}, h('summary', {}, t('panel.stuck')), h('p', {}, task.steps))));
    check.addEventListener('change', () => {
      row.classList.toggle('done', check.checked);
      if (check.checked) { done.add(id); log(`Finished task ${i + 1}`); } else done.delete(id);
    });
    return row;
  });
  container.replaceChildren(h('section', { class: 'card', 'aria-labelledby': 'tasks-h' },
    h('h2', { id: 'tasks-h' }, t('panel.tasksTitle')), h('ul', { class: 'tasks' }, rows)));
}

export function clearTasks(container) {
  done.clear();
  renderTasks(container);
}
