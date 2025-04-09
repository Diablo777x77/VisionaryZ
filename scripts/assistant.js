function talk() {
  const message = new SpeechSynthesisUtterance("Marek, dzisiaj masz dominować. Wszystko działa.");
  message.lang = 'pl-PL';
  speechSynthesis.speak(message);
}
