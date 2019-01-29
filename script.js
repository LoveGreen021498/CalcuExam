let n = document.getElementById('ndisplay');
let numberHolder;
let optr;
function attachNumber(e){
	n.value +=innerHTML;
}

function addition(){
	optr = "+";
	numberHolder = n.value;
}
function subtraction(){
	optr =	"-";
	numberHolder= n.value;
	n.value=""
}
function multiplication(){
	optr="*";
	numberHolder=n.value;
	n.value=""
}
function division(){
	optr="/";
	numberHolder=n.value;
	n.value=""
}
function modulo(){
	optr="%";
	numberHolder=n.value;
	n.value=""
}
function exponent(){
	optr="^";
	numberHolder=n.value
	n.value=""
}
function equals(){
	switch (optr){
		case "+";
			n.value = numberHolder + parseInt(n.value);break;
		case "-";
			n.value = numberHolder - parseInt(n.value);break;
		case "*";
			n.value = numberHolder * parseInt(n.value);break;
		case "/";
			n.value = numberHolder / parseInt(n.value);break;
		case "%";
			n.value = numberHolder % parseInt(n.value);break;
		case "^";
			n.value = numberHolder ^ parseInt(n.value);break;
		default;
			console.log("operator not found");break;
	}
		
}


}