# Student Information

| Name          | Student ID |
|---------------|------------|
| Ndame Sepete  | 2410559    |


# Multilingual Translation Web Application

A web-based translation app built with HTML, CSS and JavaScript that translates text between languages using the MyMemory API.

---

## Project Structure

```
project/
├── index.html
├── style.css
├── script.js
└── icons/
    ├── moon.svg
    ├── sun.svg
    ├── swap.svg
    ├── speaker.svg
    └── copy.svg
```

---

## Setup Instructions

No installations, no terminal commands, no server required.

> **Note:** An internet connection is required for translation to work. All other features (copy, listen, dark mode, swap) work offline.

**Step 1** — Download all the files and keep them in the same folder exactly as shown in the structure above. The `icons/` folder must be inside the same folder as `index.html`.

**Step 2** — Open `index.html` in your browser. You can do this by:
- Double-clicking the file in your file explorer, or
- Right-clicking it and selecting **Open with > Browser**

**Step 3** — The app will load and automatically translate *"Hello, how are you"* from English to French.

---

## How to Use

| Feature | How |
|---|---|
| Translate text | Type in the Input box, click **Translate** |
| Change source language | Use the **English** dropdown on the left |
| Change target language | Use the **French** dropdown on the right |
| Auto-detect language | Select **Detect Language** from the first dropdown |
| Swap languages | Click the swap icon (⇄) between the dropdowns |
| Listen to text | Click **Listen** below either text box |
| Copy text | Click **Copy** below either text box |
| Dark mode | Click the moon icon in the top right corner |

---

## Features

- Translates text between 9 languages
- Auto-detects source language
- Text-to-Speech for both input and output
- Copy to clipboard
- 500 character limit with live counter
- Loading spinner during translation
- Error messages for failed requests
- Dark mode
- Responsive layout for mobile screens

## Supported Languages

English, French, Spanish, German, Italian, Portuguese, Arabic, Chinese (Simplified), Japanese

---

## API Used

**MyMemory Translation API** — free, no API key required.

```
https://api.mymemory.translated.net/get?q=Hello&langpair=en|fr
```

- `q` — the text to translate
- `langpair` — source and target language codes separated by `|`

---

## Browser Support

Works in all modern browsers — Chrome, Firefox, Edge, Safari.  
Text-to-Speech may not work in all browsers. Chrome is recommended.
