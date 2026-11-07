import { S, resetState } from './core/state.js';
import { initFeedback, log, clearLog, toast } from './core/feedback.js';
import { initRouter, go } from './core/router.js';
import { t, initLang, onLangChange } from './core/i18n.js';
import { SCREENS } from './screens/index.js';
import { renderStartHere } from './panel/startHere.js';
import { renderTasks, clearTasks } from './panel/tasks.js';
import { renderControls } from './panel/controls.js';

const $ = id => document.getElementById(id);
let controls;

function applyStaticText() {
  document.title = t('common.appName');
  $('app-name').textContent = t('common.appName');
  $('back').textContent = t('common.back');
  $('back').setAttribute('aria-label', t('common.backAria'));
  $('page-eyebrow').textContent = t('page.eyebrow');
  $('page-title').textContent = t('page.title');
  $('page-intro').textContent = t('page.intro');
}

function onLanguage() {
  applyStaticText();
  renderStartHere($('start-here'));
  renderTasks($('tasks'));
  controls.refresh();

  if (S.current && S.current !== 'camera' && S.current !== 'connecting') go(S.current, true);
}

function onReset() {
  clearLog();
  clearTasks($('tasks'));
  resetState();
  log('Prototype reset');
  go('home', true);
  toast(t('panel.resetToast'));
}

function start() {
  initLang();
  applyStaticText();
  renderStartHere($('start-here'));
  renderTasks($('tasks'));
  controls = renderControls($('controls'), { onReset });

  initFeedback({ announce: $('announce'), toastEl: $('toast'), logEl: controls.logEl });
  initRouter({ view: $('view'), title: $('title'), back: $('back') }, SCREENS);
  onLangChange(onLanguage);

  resetState();
  log('Prototype ready');
  go('home', true);
}

start();
