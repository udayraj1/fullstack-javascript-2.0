console.log("Question 1 display value of variable and it's datatype");

let food = "burger";
let flag = true;
let unknown;
let unknownTwo=null;

console.log("The value of variable is "+food+" And the type of variable is "+typeof(food));
console.log("The value of variable is "+flag+" And the type of variable is "+typeof(flag));
console.log("The value of variable is "+unknown+" And the type of variable is "+typeof(unknown));
console.log("The value of variable is "+unknownTwo+" And the type of variable is "+typeof(unknownTwo));

console.log("Question 2 Display using interpolation");

var firstName = "Udayraj";
var lastName = "Sawant";
var maritalStatus ="unmarried";
var country = "India"
var age = 21

console.log(`My firstname is ${firstName}`);
console.log(`My lastname is ${lastName}`);
console.log(`My marital status is ${maritalStatus}`);
console.log(`My country is ${country}`);
console.log(`My age is ${age}`);

console.log("question 3 convert the string to uppercase");
let lowerLetter = "please convert me to uppercase";
console.log("The uppercase string is "+lowerLetter.toUpperCase());

console.log("Question 4 check if string contains specific word");

let stringData= "javascript";
let stringData2="java"
console.log(stringData.includes("script"));
console.log(stringData2.includes("script"));

console.log("Question 5 convert string to array");
let stringToArray="this is string converted to array";
let theArray=stringToArray.split(" ");
console.log(theArray);

console.log("Question 6 convert string to array with split at comma");
let stringToArray2="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let theArray2=stringToArray2.split(",");
console.log(theArray2);

console.log("Question 7 convert string to array with split at comma");

let theArray3=["pw skills","the","great","escape","pw skills","hello","hi"]
console.log(theArray3.lastIndexOf("pw skills"));

console.log("Question 8 remove the empty spaces at the start and end of the string");
let emptyDataString="   IHaveSpacesAtStartAndEnd    "
console.log(emptyDataString);
console.log(emptyDataString.trim(" "));

console.log("Question 9 all about booleans");
let isLoggedIn = "Yes"
let flag1;
let flag2;
let flag3;
let whichCountry = "Yes"
let Access = "Yes"

if(isLoggedIn=="Yes")
flag1=true;
if(whichCountry=="Yes")
flag2=true;
if(Access=="Yes")
flag3=true;

console.log(flag1);
console.log(flag2);
console.log(flag3);

let flag4;
let flag6;
let flag5;
let burger="unAvailable"
let pizza="unAvailable"
let coffee="unAvailable"
if(burger=="unAvailable")
flag4=false;
if(coffee=="unAvailable")
flag5=false;
if(coffee=="unAvailable")
flag6=false;
console.log(flag4);
console.log(flag5);
console.log(flag6);

console.log("Question 10 all about booleans");
