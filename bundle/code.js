const s = new Spee();

function on_text(text) {
  if (text.includes("hello") || text.includes("hi")) {
    let speech = new SpeechSynthesisUtterance("Hello!");
    speech.voice = window.speechSynthesis.getVoices()[3];
    window.speechSynthesis.speak(speech);
  }
}

s.ontext = on_text;
s.start()
