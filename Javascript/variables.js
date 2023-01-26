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

console.log("Question 10 comparison operators");

console.log("Is 4 greater than 3 ",4>3);
console.log("Is four greater than or equal to 3 ",4>=3);
console.log("Is 4 less than 3 ",4<3);
console.log("Is 4 less than equal than 3 ",4<=3);
console.log("Is 4 equals to 4(loose check) ",4==4);
console.log("Is 4 equals to 4(strong check) ",4===4);
console.log("Is 4 not equals to 4 ",4!=4);
console.log("Is 4 not equals to 4 ",4!==4);
console.log("Is 4 not equals to string 4 ",4!='4');
console.log("Is 4 equals to 4 string (lose check)",4=='4');
console.log("Is 4 not equals to 4 (strong check)",4==='4');

console.log("Pending last");

console.log("Question 11 All about date objects");

const d= new Date();
 console.log("The the year today is "+d.getFullYear());
 console.log("The the month today as a number is "+d.getMonth()+1);
 console.log("The today's date is ",d.getDate(),"-",d.getMonth()+1,"-",d.getFullYear());
 console.log("The day today as a number is "+d.getDate());
 console.log("The hours now are "+d.getHours());
 console.log("The minutes now are "+d.getMinutes());
//The date in past
 let past = new Date('1970-01-01');
  
//The current date
let now = new Date();
  //This is time in milliseconds
let elapsedSeconds = (now - past);
  
// by dividing by 1000 we will get the time in seconds
console.log("The number of seconds elepsed from 1 Jan 1970 to today is ",elapsedSeconds / 1000);


console.log("Question 12 Human readable date formats");
const currentYear= d.getFullYear();
const currentMonth=d.getMonth()+1;
const currentDay=d.getDate();
const currentHour= d.getHours();
const currentMinutes=d.getMinutes();
YearMonthDayFormat=currentYear + '-' + currentMonth + '-' + currentDay+ ' ' + currentHour+':'+currentMinutes;
DayMonthYearFormat=currentDay + '-' + currentMonth + '-' + currentYear+ ' ' + currentHour+':'+currentMinutes;
DayMonthYearFormat2=currentDay + '/' + currentMonth + '/' + currentYear+ ' ' + currentHour+':'+currentMinutes;

console.log("The YYYY-MM-DD HH:mm format is "+YearMonthDayFormat);
console.log("The DD-MM-YYYY HH:mm format is "+DayMonthYearFormat);
console.log("The DD/MM/YYYY HH:mm format is "+DayMonthYearFormat2);

console.log("Question 13 User input using prompt");
console.log("Pending");

console.log("Question 14 check whether given number is even or odd");
let number=19;
if(number%2==0)
console.log("Even");
else
console.log("Odd");

console.log("Question 15 give the grades based on student marks");
let marks=79;
if(marks>=80 && marks<=100)
console.log("Grade A");
if(marks>=70 && marks<80)
console.log("Grade B");
else if(marks>=60 && marks<70)
console.log("Grade C");
else if(marks>=50 && marks<59)
console.log("Grade D");
else if(marks<50)
console.log("Grade F");

console.log("Question 16 check which season it is based on the month");
let theMonth="August"

switch (theMonth) {
    case "September":
    case "October":
    case "November":
        console.log("Autumn");
        break;
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;

    default:
        console.log("Please enter a valid month");
        break;
}
