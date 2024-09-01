//Artemetic operators +,-,/,*

// let a = 2;
// let b = 5;
//let ans = a + b;
// console.log(" a ", a, " b " + b)
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);

//Modules
// console.log("a % b =", a % b);

//Exponentiation
// console.log("a ** b =", a ** b);

//Unary Operators increment/decrement
//increment 
//a = a + 1;
// a++;

//decement
// a = a - 1;
// a--;
// console.log(a);


//assignment operators =, +=, -=, *=, %=, **=

// let a = 4;
// let b = 5;
// a += 4; //a = a + 4;
// console.log(" a =", a);//8

// a -= 4; //a = a - 4;
// console.log(" a =", a);//4

// a *= 4;//a = a * 4;
// console.log(" a =", a);

// a %= 4;//a = a % 4;
// console.log(" a =", a);

// a **= 4;// a = a ** 4;
// console.log(" a =", a);



//Comparision operators

// let a = 4;
// let b = "5";

// console.log("a == b", a == b);
// console.log("a == b", a != b);

// let a = 5;
// let b = "5";
// console.log(" a===b ", a === b);
// console.log(" a!==b ", a !== b);

// let a = 5;
// let b = 6;

// console.log(" a < b", a < b);
// console.log(" a > b", a > b);
// console.log(" a >= b", a >= b);
// console.log(" a <= b", a <= b);



//Logical operator

//&& operator
// let a = 4;
// let b = 3;

// let con1 = a > b;
// let con2 = a === 4;

// console.log(" a < b && a===b ", con1 && con2)

//OR operator
// let a = 4;
// let b = 3;

// let con1 = a > b;
// let con2 = a === 4;

// console.log(" a > b || a === b", con1 || con2)



//conditional Statements
//if/else
// let age = 333;

// if (age > 18){
//     console.log("Eligable for voting");
// }else{
//     console.log("not eligable for voting");
// }

// let color = "white";
// let mode;
;
;

// if (mode === "dark-mode") {
//     color = "black";
// }

// if (mode === "light-mode") {
//     color = "white";
// }

// console.log(color)

// let a = 23;

// if(a % 2 === 0){
//     console.log("even no");
// }else{
//     console.log("odd no");
// }


//else-if

// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "light") {
//     color = "white";
// }else{
//     color = "pink"
// }

// console.log(color);


//Ternary operator
//  let age = 19;
// let result = age >= 18 ? "adult " : "not adult"
// console.log(result)

// alert("mohit");

// let myName = prompt ("hello");
// console.log(myName);

//Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number isa multiple of 5 or not.
// let num = prompt("enter no :");

// if (num % 5 === 0) {
//     console.log("no is in 5 multiple");
// } else {
//     console.log("no is not in 5 multiple");
// }

//Qs2. Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let marks = prompt("enter marks");
let grade;
if(marks >=80 && marks <=100){
    grade = 'A';
}else if(marks >=70 && marks<= 89){
    grade = 'B';
} else if(marks >= 60 &&  marks <=69){
    grade = 'C';
}else if(marks >=50 && marks <=59){
    grade ='D';
}else if(marks >=0 && marks <=40){
    grade='F';
}
console.log(grade);





