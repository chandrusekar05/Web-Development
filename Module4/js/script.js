(function(window) {
	var speakWord = "Hello";
	var hello = function (name) {
		console.log(speakWord + " " + name);
	}

	window.hello = hello;

})
(window);

(function(window) {
	var speakWord = "Goodbye";
	var bye = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.bye = bye;

})
(window);


(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","Johny","Barstel","Jaiswal"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    bye(names[i]);
  }
  else {
    hello(names[i]);
  }
}

})
();
