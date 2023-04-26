var numstring = "";
var run = new Boolean(false);
var sign = "";
var num1 = "";
var num2 = "";
var total = "";

/* Each button is it's own individual function */
/*Each button functions via adding it's respective number to a string */
function one() {
  numstring = numstring + "1";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}

function two() {
  numstring = numstring + "2";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}

function three() {
  numstring = numstring + "3";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}
  
function four() {
  numstring = numstring + "4";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
} 

function five() {
  numstring = numstring + "5";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}

function six() {
  numstring = numstring + "6";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}

function seven() {
  numstring = numstring + "7";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}
    

function eight() {
  numstring = numstring + "8";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
} 

function nine() {
  numstring = numstring + "9";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}

function zero() {
  numstring = numstring + "0";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}

function dot() {
  numstring = numstring + ".";
  document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
}
/*This ensures the first number is not a zero */
function zeroFix() {
  if(numstring[0] == 0) {    
    document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
  }
}

/*clear function, basically wipes all possible variables and values */
function CE() {
  numstring = "";
  num1 = "";
  num2 = "";
  total = "";
  sign = "";
  run = false;
  document.getElementById("calcTop").innerHTML = "Cleared";
  setTimeout(function() {document.getElementById("calcTop").innerHTML = 0;}, 1000)
}

/*allows you to remove values */
/* The purpose of the if run == true, is to avoid situations where you hit another sign or the same one as this only does single functions at a time*/
function Backspace() {
  numstring = numstring.slice(0, -1);
  if(numstring == "") {  
   document.getElementById("calcTop").innerHTML = num1 + sign + 0;
  }
  else {
    document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
  }
}

/*math functions: They do the individiual calculations*/
function addition()
  {
    if(run == true) {
      document.getElementById("calcTop").innerHTML = "Error: Please use equal sign";
      setTimeout(function() {document.getElementById("calcTop").innerHTML = num1 + sign + numstring;}, 3000)
    }
    else {
    num1 = numstring;
    numstring = "";
    sign = "+";
    run = true;
    document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
    }
  }

function subtraction()
  {
    if(run == true) {
      document.getElementById("calcTop").innerHTML = "Error: Please use equal sign";
      setTimeout(function() {document.getElementById("calcTop").innerHTML = num1 + sign + numstring;}, 3000)
    }
    else {
    num1 = numstring;
    numstring = "";
    sign = "-";
    run = true;
    document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
    }
  }

function multiplication()
  {
    if(run == true) {
      document.getElementById("calcTop").innerHTML = "Error: Please use equal sign";
      setTimeout(function() {document.getElementById("calcTop").innerHTML = num1 + sign + numstring;}, 3000)
    }
    else {
    num1 = numstring;
    numstring = "";
    sign = "*";
    run = true;
    document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
    }
  }

function division ()
  {
    if(run == true) {
      document.getElementById("calcTop").innerHTML = "Error: Please use equal sign";
      setTimeout(function() {document.getElementById("calcTop").innerHTML = num1 + sign + numstring;}, 3000)
    }
    else {
    num1 = numstring;
    numstring = "";
    sign = "/";
    run = true;
    document.getElementById("calcTop").innerHTML = num1 + sign + numstring;
    }
  }

function equal() {
  num1 = num1.toString();
  num2 = numstring;
  num2 = num2.toString();
/*if they hit equal before entering a sign, and then each respective file is the sign they entered earlier */
  if(sign == "") {
    CE();
  }
  else if(sign == "*") {
    total = num1*num2;
    numstring = total.toString();
    document.getElementById("calcTop").innerHTML = total;
  }
  else if (sign == "/") {
    if(num2 == "0") {
      document.getElementById("calcTop").innerHTML = "Error: Cannot Divide by Zero";
      numstring = 0;
setTimeout(function() {document.getElementById("calcTop").innerHTML = "N/A";}, 3000);
    }
    else {
      total = num1/num2;
      numstring = total.toString();
      document.getElementById("calcTop").innerHTML = total;
    }
  }
  else if (sign == "+") {
    total = parseFloat (num1) + parseInt(num2);
    numstring = total.toString();
    document.getElementById("calcTop").innerHTML = total;
  }
  else if (sign == "-") {
    total = num1 - num2;
    numstring = total.toString();
    document.getElementById("calcTop").innerHTML = total;
  }
  /*this clears the function in a similar way, but leaves the remaining total to be used */
  numstring = ""; /*this is here to ensure the slice function works */
  numstring = numstring + total;
  num1 = "";
  num2 = "";
  sign = "";
  total = "";
  run = false;
}



/*Keyboard Input*/

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if(name == '1') {
    one();
  }
  if(name == '2') {
    two();
  }
  if(name == '3') {
    three();
  }
  if(name == '4') {
    four();
  }
  if(name == '5') {
    five();
  }
  if(name == '6') {
    six();
  }
  if(name == '7') {
    seven();
  }
  if(name == '8') {
    eight();
  }
  if(name == '9') {
    nine();
  }
  if(name == '0') {
    zero();
  }
  if(name == '/') {
    division();
  }
  if(name == '+') {
    addition();
  }
  if(name == '-') {
    subtraction();
  }
  if(name == '*') {
    multiplication();
  }
  if(name == '=') {
    equal();
  }
  if(name == 'Enter') {
    equal();
  }
  if(name == 'C') {
    CE();
  }
  if(name == 'c') {
    CE();
  }
  if(name == 'Backspace'){
    Backspace();
  }
  if(name == '.'){
    dot();
  }
  if(name == '_') {
    negative();
  }
  // Alert the key name and key code on keydown
});
