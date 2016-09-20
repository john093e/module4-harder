(function (){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var str = names[i];
  var res = str.charAt(0);
  var res = res.toLowerCase();
  if (res === "j") {
    console.log(byeSpeaker.speak(names[i]));
  } 
  else {
    console.log(helloSpeaker.speak(names[i]));
  }
}
})();