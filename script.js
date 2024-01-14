// Create a new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Create an empty array to store available voices
let voices = [];

// Select the dropdown element with the tag "select"
let voiceSelect = document.querySelector("select");

// Event listener for when the available voices change
window.speechSynthesis.onvoiceschanged = () => {
    // Get all available voices on the device
    voices = window.speechSynthesis.getVoices();

    // Set the voice of the SpeechSynthesisUtterance to the first voice in the list
    speech.voice = voices[0];

    // Populate the dropdown (select) element with the available voices
    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i));
};

// Event listener for when the user selects a different voice from the dropdown
voiceSelect.addEventListener("change", () => {
    // Set the voice of the SpeechSynthesisUtterance to the selected voice
    speech.voice = voices[voiceSelect.value];
});

// Event listener for when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    // Set the text of the SpeechSynthesisUtterance to the content of the textarea
    speech.text = document.querySelector("textarea").value;

    // Speak the text using the speech synthesis API
    window.speechSynthesis.speak(speech);
});
