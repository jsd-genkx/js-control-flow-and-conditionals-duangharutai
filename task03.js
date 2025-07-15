"use strict";

// TODO: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass123";

if (password.length < 6) {
    console.log("Too short");
} else if (password.length <=10) {
    console.log("Moderate");
} else if(password.length >=11) {
    console.log("Strong");
} 

// task03 solution
// console.log(password.length);
// if (password.length >= 11) {
//     console.log("Strong");
// } else if (password.length >= 6) {
//     console.log("Moderate");
// } else {
//     console.log("Too short");
// };

// or
// const password = "1221333333233";
//     // console.log(password.length);
// if (password.length < 6) {
//     // Code to execute if condition is true
//     console.log("Too short");
// } else if (password.length >= 6 && password.length <= 10) {
//     // Code to execute if anotherCondition is true
//     console.log("Moderate");

// } else {
//     // Code to execute if all conditions are false
//     console.log("Strong");

// }
