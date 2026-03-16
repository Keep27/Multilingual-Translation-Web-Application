// ── Get Elements ──
const inputText   = document.getElementById('inputText');
const outputText  = document.getElementById('outputText');
const charCount   = document.getElementById('charCount');
const detectLang  = document.getElementById('detectLang');
const sourceLang  = document.getElementById('sourceLang');
const targetLang  = document.getElementById('targetLang');
const swapBtn     = document.getElementById('swapBtn');
const translateBtn = document.getElementById('translateBtn');
const errorMsg    = document.getElementById('errorMsg');
const loader      = document.getElementById('loader');
const themeToggle = document.getElementById('themeToggle');


// ── Translate ──
async function translate() {
    const text = inputText.value.trim();
    if (!text) return;

    // Show loader, disable button
    loader.style.display = 'flex';
    translateBtn.disabled = true;
    outputText.value = '';
    errorMsg.style.display = 'none';

    // Build language pair (use detectLang if set to autodetect)
    const src = detectLang.value === 'autodetect' ? 'autodetect' : sourceLang.value;
    const langpair = src + '|' + targetLang.value;
    const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + langpair;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.responseStatus === 200) {
            outputText.value = data.responseData.translatedText;
        } else {
            errorMsg.textContent = 'Translation failed. Please try again.';
            errorMsg.style.display = 'block';
        }
    } catch (error) {
        errorMsg.textContent = 'Network error. Please check your connection.';
        errorMsg.style.display = 'block';
    }

    // Hide loader, re-enable button
    loader.style.display = 'none';
    translateBtn.disabled = false;
}


// ── Translate Button Click ──
translateBtn.addEventListener('click', translate);


// ── Real-time Translation (debounced) ──
let debounceTimer;
inputText.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(translate, 800);
});

sourceLang.addEventListener('change', translate);
targetLang.addEventListener('change', translate);
detectLang.addEventListener('change', translate);


// ── Character Counter ──
inputText.addEventListener('input', function() {
    charCount.textContent = inputText.value.length + '/500';
});


// ── Swap Languages ──
swapBtn.addEventListener('click', function() {
    // Swap the language values
    const temp = sourceLang.value;
    sourceLang.value = targetLang.value;
    targetLang.value = temp;

    // Swap the text content
    const tempText = inputText.value;
    inputText.value = outputText.value;
    outputText.value = tempText;

    charCount.textContent = inputText.value.length + '/500';
    translate();
});


// ── Copy Text ──
function copyText(id) {
    const text = document.getElementById(id).value;
    if (!text) return;
    navigator.clipboard.writeText(text);
}


// ── Listen (Text-to-Speech) ──
function speak(id) {
    const text = document.getElementById(id).value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = (id === 'outputText') ? targetLang.value : sourceLang.value;
    window.speechSynthesis.speak(utterance);
}


// ── Dark Mode ──
themeToggle.addEventListener('click', function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('iconMoon').style.display = 'block';
        document.getElementById('iconSun').style.display = 'none';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('iconMoon').style.display = 'none';
        document.getElementById('iconSun').style.display = 'block';
    }
});


// ── Translate on Page Load ──
window.addEventListener('DOMContentLoaded', translate);
