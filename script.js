let speech = new SpeechSynthesisUtterance();

let voice=[];//blank arrray
let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    // Get all available voices on the device
    voices = window.speechSynthesis.getVoices();

    // Set the voice of the SpeechSynthesisUtterance to the first voice in the list
    speech.voice = voices[0];

    // Populate a dropdown (select) element with the available voices
    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i));
};

voiceSelect.addEventListener("change",() => {
    speech.voice=voices[voiceSelect.value]
});



document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});




