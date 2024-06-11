// Number 1 :

var userInput = prompt("Enter Your City Name");
 if(userInput === "karachi"){
    document.write("Welcome to city of lights" , "</br>");
}


// Number 2 :


var gender = prompt("Enter Your Gender Here");

 if(gender==="male"){
    document.write("Good Morning Sir");
}
if(gender==="female"){
    document.write("Good Morning Mam" , "</br>");
 }


// Number 3 :

var Red = prompt("Enter a traffic signal color : 1");
var Yellow = prompt("Enter a traffic signal color : 2");
var Green = prompt("Enter a traffic signal color : 3");

document.write(
    "<table border = 2px >" + "<tr>" + "<th>" + "Signal Color" + "</th>" +
     "<th>" + "Message" + "</th>" + "</tr>" + "<tr>" + "<td>" + 
    Red + "</td>" + "<td>" + "Must Stop" + "</td>" + "</tr>" + "<tr>"  + "<td>" +
     Yellow + "</td>" + "<td>" + "Ready to move" + "</td>" + "</tr>" + "<tr>" + "<td>" + 
     Green + "</td>" + "<td>" + "Move now" + "</td>" + "</tr>" + "</table>");


// Number 4 :


 var carfuel = prompt("Please enter remaining car fuel in liters");

if(carfuel === "0.25liters"){
    alert("“Please refill the fuel in your car”");
 }


// Number 5 :


// a.
 var a = 4;
if (++a === 5)  {
    alert("given condition for variable a is true"); //true
}

// b.
 var b = 82;
 if (b++ === 83){
alert("given condition for variable b is true");
 } 

// c.
 var c = 12;
 if (c++ === 13){
alert("condition 1 is true");
}
 if (c === 13){
alert("condition 2 is true");
}
 if (++c < 14){
 alert("condition 3 is true");
} 
 if(c === 14){
 alert("condition 4 is true");
 } 

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} 

// e.
if (true){
alert("True");
} //true
if (false){
alert("False")
};

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}

// Number 6 :

document.write("<h1>" +"Mark Sheet" +"</h1>")

var obtainedMark1 = +prompt("Ontained Mark in Subject 1");
var obtainedMark2 = +prompt("Ontained Mark in Subject 2");
var obtainedMark3 = +prompt("Ontained Mark in Subject 3");
var totalMarkObtained = (obtainedMark1 + obtainedMark2 + obtainedMark3);

var percantage = (totalMarkObtained / 300 * 100);

if (percantage >= 70) {
    document.write("Total marks : 300" + "<br>" + "Mark Obtained : " + totalMarkObtained + "<br>" + "Percantage : " + percantage + "%" + "<br>" + "Grade : A-one" + "<br>" + "Remarks : Exellent");
} else if (percantage >= 60) {
    document.write("Total marks : 300" + "<br>" + "Mark Obtained : " + totalMarkObtained + "<br>" + "Percantage : " + percantage + "%" + "<br>" + "Grade : A" + "<br>" + "Remarks : Good");
} else if (percantage >= 50) {
    document.write("Total marks : 300" + "<br>" + "Mark Obtained : " + totalMarkObtained + "<br>" + "Percantage : " + percantage + "%" + "<br>" + "Grade : B" + "<br>" + "Remarks : You need to improve")
} else {(percantage < 40)
    "Total marks : 300" + "<br>" + "Mark Obtained : Less than 60" + "<br>" + "Percantage : " + percantage + "%" + "<br>" + "Grade : Fail" + "<br>" + "Remarks : Sorry"
}

document.write(
"<table border = '5px'>" + "<tr>" + "<th>" + "Percantage %" + "</th>" + 
"<th>" + "Grade" + "</th>" + "<th>" + "Remarks" + "</th>" + "</tr>" + "<tr>" + 
"<td>" + "Greater than or equal to 80" +  "</td>" +"<td>" + "A-one" + "</td>" + 
"<td>" + "Exellent" + "</td>" + "</table>")


// Number 7 :

var num = 5;
var guess = +prompt("Please Guess Any Number");

if(num === guess){
    document.write("Bingo! Correct answer");
}
if(num===guess +1){
    document.write("Close enough to the correct answer")
}


// Number 8 :


var num = +prompt("Please Enter a any number");
var divisibleby = num%3 == 0
if(divisibleby){
    document.write("The number is divisible by 3");
}


// Number 9 :


var userInput = +prompt("Enter a number");

var num = userInput % 2 == 0;
if (num) {
    document.write("Number is Even");
}
else {
    document.write("Number is Odd");
}



// Number 10 :


var inputTemp = +prompt("Enter a temperature");
if (inputTemp > 40) {
    document.write("It is too hot outside");
}else if (inputTemp > 30){
    document.write("The Weather today is Normal");
}else if (inputTemp > 20){
    document.write("Today’s Weather is cool");
}
else {
    document.write("OMG! Today's weather is cool");
}



// Number 11 :


var num1 = +prompt("Enter a first number");
var num2 = +prompt("Enter a second number");
var choice = prompt("Enter any calculation of +,-,*,/,&,%")
var Add = num1 + num2;
var Sub = num1 - num2;
var Mul = num1 * num2;
var Div = num1 / num2;
var mod = num1 % num2;

if (choice === "+") {
    document.write("Addition is: " + Add);
} else if (choice === "-") {
    document.write("Subtraction is: " + Sub);
}
else if (choice === "*") {
    document.write("Multiplication is: " + Mul);
}
else if (choice === "/") {
    document.write("Division is: " + Div);
}
else if (choice === "%") {
    documen.writet("Modulus is: " + mod);
}

