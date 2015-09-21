var speech1 = new Object();
speech1.name = "Winston Churchill";
speech1.year = 1940;
speech1.bce = false;

var speech2 = new Object();
speech2.name = "Mahatma Ghandi";
speech2.year = 1942;
speech2.bce = false;

var speech3 = new Object();
speech3.name = "Demosthenes";
speech3.year = 342;
speech3.bce = true;

var splist = ["speech1", "speech2", "speech3"];

var x = speech2.year - speech1.year;

window.onload=function(){
	console.log("Ghandi's speech and Churchill's speech are " + x + " years apart.");
};

document.getElementById('BtnDonate').addEventListener('click', function() {
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + x + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function() {
	//Code in here executes when the user clicks on each of the blue navigation buttons.
	console.log("This speech was written by " + speech1.name + " in " + speech1.year + ". It is " + speech1.bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function() {
  //Code in here executes when the user clicks on each of the blue navigation buttons.
  console.log("This speech was written by " + speech2.name + " in " + speech2.year + ". It is " + speech2.bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function() {
  //Code in here executes when the user clicks on each of the blue navigation buttons.
  console.log("This speech was written by " + speech3.name + " in " + speech3.year + ". It is " + speech3.bce + " that this year is B.C.E.");
});