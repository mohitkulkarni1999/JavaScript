
//variables in js eg
console.log("hi mohit");

fullName = "Mohit kulkarni";

console.log(fullName);

age = 23;

console.log(age);

//height = 6.3;//error

//console.log(height);


//case sensetive
//Variable names are case sensitive.  “a” & “A” is different.;

firstname = "mohit";
FIRSTNAME = "rohit";

console.log(firstname);
console.log(firstname);
console.log(FIRSTNAME);

//Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
//first name = "mohit"; not allowed space
//firstname@ = "Mohit"; not allowed special characters

firstname = "mohit";
console.log(firstname);

//Only a letter, underscore( _ ) or $ should be 1st character.

firstname = "mohit";
_firstname = "mohit";
//$first_name = "mohit";
//123first_name = "mohit";//not allowed

//Reserved words cannot be variable names.
//console = "mohit";//not allowed
//console.log(console);//not allowed
Console = "Mohit";
console.log(console);


//let, const & var

//let : Variable cannot be re-declared but can be updated. A block scope variable.
let lastName = "kulkarni";
console.log(lastName);
let personeAge = 25;
console.log(personeAge);
let height = 6.2;
console.log(height);

//var : Variable can be re-declared & updated. A global scope variable. (not using after 2016)
var lastNamee= "kulkarni";
console.log(lastNamee);
var personeAgee = 25;
console.log(personeAgee);
var heightt = 6.2;
console.log(heightt);

//const : Variable cannot be re-declared or updated. A block scope variable.
const a=10;
console.log(a);




//object
//key:value

const student = {
    fullName : "Mohit Ramesh Kulkarni",
    age: 25,
    cgpa : 6.2,
    isPass:true
}

student["cgpa"] = student["cgpa"]+1;

console.log(student); 
console.log(student["fullName"])
console.log(student["cgpa"]);


const pen = {
    name:"parkar",
    color:"blue",
    price:1200,
    discount:5,
    rating:4   
}

console.log(pen);





