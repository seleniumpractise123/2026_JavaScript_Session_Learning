
//data types: type of data:
//number, boolean, string

//var, let, const

//1. var: used in old JavaScript -- never use it in modern JS/tools/PW

var x = 10;
var x = 20;
var x = 30;
console.log(x);

//Reassignment:
var y = 100;
y = 200;
y = 300;
console.log(y);

//3. Hoisting:
console.log(t); //undefined
var t = 90;
console.log(t);

//2. let:
//Declaration: Re-Decaration not allowed
let p = 10;
console.log(p);

let a;
console.log(a);//undefined

//Reassignment:
let total = 900;
total = 970;
total = 1000;
console.log(total);

//3.Hoisting: bur with error at RT
//console.log(h); //cannot access 'h' before initialization
let h = 25

//3. const:
const PI = 3.14;
//PI = 90.99;
const LOGIN_TITLE = 'LoginPage';
const DAYS_IN_WEEK = 7;
//title, url, days, month, PI, logo, ase URL

const days = 7;
//days = 10;
let salary = 100 * days;
console.log(salary);