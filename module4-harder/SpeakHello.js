(function (window) {
	var speakWord = "Hello";
 	var helloSpeaker = {};
  	helloSpeaker.speak = function speak(name) {
  	console.log(speakWord + " " + name);
}

  
function speak(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);