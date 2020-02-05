// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const button1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The Elephant", "The cat"];
const button2 = [" sat on", " ate", " danced with", " saw", " doesnt like", " kissed"];
const button3 = [" a funny", " a  scary", " a goofy", " a slimy", " a barking", " a fat"];
const button4 = [" goat", " monkey", " fish", " cow", " frog", " bug", " worm"]
const button5 = [" on the moon.", " on the chair.", " in my spaghetti.", " in my soup.", " in the grass.", " in my shoe."]

function randomValueFromArray(array){
	return array[Math.floor(Math.random() * array.length)];
}
var item1 = randomValueFromArray(button1);
var item2 = randomValueFromArray(button2);
var item3 = randomValueFromArray(button3);
var item4 = randomValueFromArray(button4);
var item5 = randomValueFromArray(button5);

console.log(item1);

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = item1 + item2 + item3 + item4 + item5;
var speakButton = document.querySelector('#finalButton');
var finalText = document.querySelector('#textOutput');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
	finalText.textContent = item1 + item2 + item3 + item4 + item5;
}
