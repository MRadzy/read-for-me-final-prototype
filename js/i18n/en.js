export default {
  common: { appName: 'Read For Me', back: '← Back', backAria: 'Go back', today: 'Today', new: 'New' },

  page: {
    eyebrow: 'CS 6750 Individual Project · mrady3',
    title: 'Read For Me',
    intro: 'A reading companion for people who are blind or have low vision. It pairs instant AI reading with a one-tap volunteer check, clear privacy boundaries, and multi-page reading that does not need a live call.',
  },

  home: {
    title: 'Home',
    speech: 'Home. What can I read for you? Options: Read something, My Readings, Call a volunteer, Be My AI, or Trusted Group.',
    read: 'Read something', readSub: 'Labels, mail, documents, handwriting',
    readings: 'My Readings', readingsLast: 'Last saved: {name}', readingsNone: 'Nothing saved yet',
    call: 'Call a volunteer', callSub: 'Live video call with a volunteer',
    ai: 'Be My AI', aiSub: 'Describe your surroundings and objects', aiToast: 'Available in the full app', aiSay: 'Be My AI describes objects, scenes, and colors.',
    trusted: 'Trusted Group', trustedSub: 'Call friends and family you know', trustedToast: 'Connects to your personal contacts', trustedSay: 'Trusted Group connects to friends and family.',
  },

  type: {
    title: 'What are you reading?',
    speech: 'What are you reading? Currently set to {mode}. Choose a type of text, or Read Later for several pages.',
    who: 'Who reads it first?', whoAria: 'Who reads it first',
    modeAI: 'AI first', modePerson: 'Volunteer first', segAI: 'AI first (instant)', segPerson: 'Volunteer first',
    ledeAI: 'AI reads it right away. A volunteer is one tap away if anything is unclear.',
    ledePerson: 'Your photo goes straight to a volunteer. No live camera feed is opened.',
    typeLabel: 'Type of text',
    types: { medication: 'Medication label', letter: 'Letter or mail', form: 'Form or bill', handwriting: 'Handwriting', food: 'Food package', other: 'Something else' },
    later: 'Read Later (several pages)',
    laterSub: 'For long documents that can wait. Need a letter read now? Choose “Letter or mail” above.',
  },

  camera: {
    title: 'Point your camera',
    speech: 'Camera on. Hold the phone over the {noun}. I will tell you when it is in view.',
    hold: 'Hold your phone over the {noun}.',
    steps: ['Move the phone a little to the left.', 'Almost there. Hold still.', 'Got it. The whole {noun} is in view.'],
    taken: 'Photo taken.',
    finderAria: 'Camera view of the {noun}',
    capture: 'Take photo now', captureSub: 'Or hold still and it takes the photo for you',
  },

  reading: {
    unsure: 'One line is hard to read.', checked: 'Checked by a volunteer',
    lede: 'Read by AI • 1 photo', ledeChecked: 'Read by AI • Checked by a volunteer',
    speechChecked: 'Checked by a volunteer. ',
    speechUnsure: '. One line was unclear. The next button checks it with a volunteer.',
    save: 'Save to My Readings', saveSub: 'So you can listen again without a new photo',
    saved: 'Saved to My Readings ✓', savedSub: 'You can find it in My Readings any time', savedToast: 'Saved to My Readings',
    listen: 'Listen again', listenSub: 'Plays the reading aloud',
    ask: 'Ask a question', askSubLabel: 'For example: “How many tablets a day?”', askSubNote: 'For example: “What time is dinner?”',
    check: 'Check with a volunteer', checkSub: 'You will see what they receive before anything is sent',
  },

  ask: {
    title: 'Ask a question', speech: 'You asked: {q} Answer: {a}', asked: 'You asked: “{q}”',
    lede: 'In the real app you would ask out loud. This prototype shows one example answer.',
    hear: 'Hear the answer', back: 'Back to the reading',
  },

  confirm: {
    title: 'Send to a volunteer?',
    speech: 'Send to a volunteer? They will receive only this one photo{ai}. They will not see your other readings, your contacts, your location, or your camera after this photo. Send to volunteer, or cancel.',
    speechAI: ', and what the AI read, with the unclear line marked',
    receive: 'The volunteer will receive:', photo: 'Only this 1 photo', aiText: 'What the AI read, with the unclear line marked',
    notSee: 'They will not see:', notSee1: 'Your other saved readings', notSee2: 'Your contacts or location', notSee3: 'Your camera after this photo',
    send: 'Send to volunteer', sendSub: 'The next free volunteer checks it',
    cancel: 'Cancel', cancelSub: 'Nothing is sent', cancelToast: 'Cancelled. Nothing was sent.',
  },

  connecting: {
    titleLive: 'Calling a volunteer', titleCheck: 'Finding a volunteer',
    speechLive: 'Calling a volunteer for live help.', speechCheck: 'Photo sent. Finding a volunteer who is free to read it.',
    bodyLive: 'Connecting you to the first free volunteer…', bodyCheck: 'A volunteer is reading your photo…',
    wait: 'Usually under a minute. You can leave this screen; you will get a notification.',
    liveToast: 'In the full app, this opens a live video call.', checkedToast: 'A volunteer checked your reading',
  },

  readings: {
    title: 'My Readings', search: 'Search, e.g. “medication”', searchAria: 'Search My Readings',
    none: 'Nothing matches “{q}”.', checked: 'Checked',
    speech: 'My Readings. {n} items{waiting}. {names}', speechWaiting: ', {n} waiting for a volunteer',
  },

  saved: {
    requestName: 'Letter ({n} pages)', requestKind: 'Read Later request',
    requestTitle: 'Read Later request • {n} pages', requestInfo: 'Coming back as: {format}. Needed by: {due}.',
    progress: 'Progress', stages: ['Request sent', 'Waiting for a volunteer', 'A volunteer is reading', 'Reading ready'],
    simulate: 'Simulate: next update', simulateSub: 'Shows what the next notification would be',
    ready: 'Your reading is ready to listen to.', update: 'Update: {stage}.',
    listen: 'Listen again', listenSub: 'Plays the reading aloud',
    ask: 'Ask a question', askSub: 'Ask about something in this reading',
    del: 'Delete', delSub: 'Removes it from My Readings', delToast: 'Deleted from My Readings',
    speechWaiting: '{name}. Read Later request. Status: {stage}. Needed by {due}.',
    speechReady: '{name}. {text}. Options: listen again, ask a question, delete.',
  },

  later: {
    title: 'Read Later',
    speech: 'Read Later. Step {step} of 3. {n} pages added. Press Add a page once for each page. Format: {format}. Needed by {due}.',
    steps: ['1. Add pages', '2. Choose format', '3. Send'], stepAria: 'Step {n} of 3',
    lede: 'Press “Add a page” once for each page, then choose how you want it back. No live call is needed.',
    add: '+ Add a page', addFirst: 'Photograph page 1', addNext: 'Photograph the next page',
    added: 'Page {n} added. Add the next page, or choose a format.',
    pageAdded: 'page added', pagesAdded: 'pages added', pagesAria: '{n} pages added', thumb: 'p.{n}',
    formatLabel: 'How do you want it back?', formatAria: 'How do you want it back',
    formats: { audio: 'Audio recording', text: 'Typed text' },
    deadlineLabel: 'When do you need it?', deadlines: ['Within 2 hours', 'Tonight (by 9:00 PM)', 'Tomorrow morning'],
    receive: 'The volunteer will receive:', onlyPages: 'Only these {n} page photos', onlyAdded: 'Only the page photos you add',
    send: 'Send to volunteers', sendReady: 'You can close the app. We will tell you when it is ready.', sendEmpty: 'Add at least one page first',
    sentToast: 'Request sent. Track it in My Readings.', sentSay: 'Request sent to volunteers. You can follow its progress in My Readings.',
  },

  panel: {
    startTitle: 'Start here',
    start: [
      'The dark phone on the left is the app. Click the buttons inside it.',
      'Work through the four tasks below in order. Tick each one when you finish.',
      'Turn on “Spoken screen audio” to hear the app the way a blind user would.',
    ],
    startNote: 'Nothing is real: the camera, the AI and the volunteers are simulated with made-up documents, so you cannot break anything. Use “Reset prototype” to start over.',
    tasksTitle: 'Tasks to try', stuck: 'Stuck? Show steps', finishedAria: '{title} finished',
    tasks: [
      { title: '1. Read a medication label', text: 'Check the dosage directions now, and keep them so you do not need to take another photo tomorrow.', steps: 'Read something → Medication label → wait for the photo → Save to My Readings.' },
      { title: '2. Check messy handwriting', text: 'The AI reads a handwritten reminder, but one line is unclear. Have a volunteer check it.', steps: 'Read something → Handwriting → Check with a volunteer → Send to volunteer.' },
      { title: '3. Listen to the saved label', text: 'It is the next morning. Find the medication directions you saved and listen to them.', steps: 'Home → My Readings → Medication Label → Listen again.' },
      { title: '4. Send a three-page letter (Read Later)', text: 'Send a three-page letter to volunteers so they can read it when free, without a live call.', steps: 'Read something → Read Later → Add a page three times → Send to volunteers. Then check its progress in My Readings.' },
    ],
    controlsTitle: 'Prototype controls', on: 'ON', off: 'OFF',
    speak: 'Spoken screen audio: {state}', larger: 'Larger text: {state}', reset: 'Reset prototype', resetToast: 'Prototype reset',
    language: 'العربية', languageAria: 'Switch to Arabic',
    hint: '“Spoken screen audio” reads every new screen aloud with your browser’s voice. “Listen again” always speaks. Your own screen reader also works: every control is a real, labelled button.',
    log: 'Activity log',
    speakOn: 'Spoken screen audio on. I will read each screen aloud.',
  },
};
