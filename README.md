# Read For Me

A medium-fidelity prototype of a reading-help flow for people who are blind or have low vision, made for the CS 6750 (Human-Computer Interaction) individual project at Georgia Tech.

**Live prototype:** https://mradzy.github.io/read-for-me-final-prototype/
**In Arabic:** https://mradzy.github.io/read-for-me-final-prototype/?lang=ar

The prototype redesigns the reading part of a remote-assistance app such as Be My Eyes. A reader can:

- **Read something now.** Choose the type of text, follow spoken camera guidance, and hear an instant AI reading. Lines the AI is unsure of are marked.
- **Check with a person.** Send the same photo to a volunteer in one tap, after a screen that says exactly what the volunteer will and will not see.
- **Keep it.** Save any reading to **My Readings**, search it, and listen again later without a new photo.
- **Read Later.** Photograph a long document page by page, choose audio or typed text and a deadline, and follow the request's progress in My Readings. No live call is needed.

Nothing is real. The camera, the AI and the volunteers are simulated with hardcoded, fictional documents, so the prototype behaves the same for every participant.

## Running it

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Languages

The prototype is in **English and Arabic**. Switch with the language button in the study panel, or open it with `?lang=ar` at the end of the address. The choice is remembered on that browser.

In Arabic:

- **Translation:** every screen, the sample documents, the AI's readings and answers, and the study tasks are in plain Modern Standard Arabic.
- **Layout:** the whole layout runs right to left.
- **Font:** text uses Noto Sans Arabic, since Atkinson Hyperlegible has no Arabic letters.
- **Voice:** spoken audio uses an Arabic voice (`ar-EG`) where the device has one.
- **Saved readings:** they keep both languages, so a label saved in English shows in Arabic after switching. Search finds either word.
- **Activity log:** stays in English for the researcher.

## Accessibility

- Every control is a real, labelled `<button>`, so VoiceOver, TalkBack and NVDA can operate it.
- Each new screen is announced through a live region. **Spoken screen audio** also reads it aloud with the browser's voice.
- Focus moves to the screen title on each new screen.
- Motion is turned off when the system asks for reduced motion.

## Changes after the final evaluation

These came from the final survey and the two moderated sessions.

| Feedback from the final survey | Change |
|---|---|
| "Listen again" was silent unless spoken screen audio was on | "Listen again", "Hear the answer" and saved-reading playback now always speak |
| Three of eleven people could not get started; one said it looked like a "backend screen" | A **Start here** card explains that the phone is the app and how to use the tasks |
| Read Later (T4) was the most-named hardest task; adding pages was unclear | Numbered steps, "Press Add a page once for each page", and a thumbnail for each page |
| No status updates for items sent to volunteers | Read Later requests show a progress timeline in My Readings |
| The task list showed the exact steps, which gave away the path | Steps are now behind "Stuck? Show steps" |
| Emoji in labels were read aloud by screen readers | Emoji removed from labels |
| A session participant could not find saved readings at first | My Readings moved second on Home and names the last saved item |
| A screen-reader user nearly missed "Check with a volunteer" below the other actions | When a line is unclear, that button now comes straight after the warning |
| An older participant found the text too small | A **Larger text** control scales every screen by 25% |
| An Arabic-speaking participant struggled with the English-only text; all six session participants were in Egypt | A full Arabic version, right to left, with an Arabic typeface and voice |
| A session participant was unsure whether a letter belongs in Read Something or Read Later | Read Later's description says it is for long documents that can wait, and points to "Letter or mail" for urgent letters |

