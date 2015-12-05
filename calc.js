// Code: ax^2 + bx + c = 0 
var a = 0;
var b = 0;
var c = 0;
// x1 and x2 refer to the two roots 
var x1 = 0;
var x2 = 0;
/* discr is the discriminant */
var discr= 0;
/* The following refer to how the answer is displayed
according to this code:
   d plus or minus e times the square root of discr, all over f
*/
var d = 0;
var e = 1
var f = 0;

function defineValues () {

	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	c = document.getElementById("c").value;
	d = -b;
	f = 2 * a;

}

function findDiscriminant () {

	var discriminant = (b * b) - (4 * a * c);
	return discriminant;

}

function calculateX () {

	x1 = ((-b) + Math.sqrt(discr)) / (2 * a);
	x2 = ((-b) - Math.sqrt(discr)) / (2 * a);
	x1 = x1.toFixed(2);
	x2 = x2.toFixed(2);
}

function simplifyEquation () {

	// Factor the discriminant
	while ( discr % 4 === 0 || discr % 9 === 0 ) {
		if ( discr % 4 === 0 ) {
			e = e * 2;
			discr = discr / 4;
		} else if ( discr % 9 === 0 ) {
			e = e * 3;
			discr = discr / 9;
		}
	}

	// Try to eliminate the bottom value (first must split f into two values)
	var g = f;
	if (e % f === 0) {
		e = e / f;
		f = 1;
	}
	if (d % g === 0) {
		d = d / g;
		g = 1;
	}
}

function displayAnswers() {

	// Check for superfluous one values, and do not display them
	if (e === 1) {
		document.getElementById("e-final").style.display = "none";
	} 
	if (f === 1) {
		document.getElementById("f-final").style.display = "none";
	}
	document.getElementById("answers").style.display= "block";
}

function submit() {

	defineValues();

	// Check to make sure values have been entered
	if (a !== "" && b !== "" && c !== "") {

		discr = findDiscriminant();
		calculateX();
		simplifyEquation();
		document.getElementById("x1").innerHTML = x1;
		document.getElementById("x2").innerHTML = x2;
		document.getElementById("discriminant").innerHTML = discr;
		document.getElementById("d-final").innerHTML = d;
		document.getElementById("e-final").innerHTML = e;
		document.getElementById("discr-final").innerHTML = "&nbsp;" + discr + "&nbsp;";
		document.getElementById("f-final").innerHTML = f;
		displayAnswers();
	
	}
	else {
		alert("Please enter a value in each box!");
	}
}