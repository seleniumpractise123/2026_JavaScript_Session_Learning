
//mathmateicaloperator

//addition: +
console.log( 1 + 1 ); //2
console.log( "1" + 1); // 11
console.log( "1" + "1"); // 11

//subtraction: - 
console.log( 1 - "1"); // 0
console.log( "5" - 2 ); // 5 - 2 = 3
console.log( "5" - "2" ); // 5 - 2 = 3
console.log( 5 - 'hello' ); // 5 - hello = NaN
console.log( 'hello' - 10 );  //hello - 10 = NaN
console.log( 'hello' - '10' );  //hello - 10 = NaN
console.log( 'hello' - 'hi' ); // hello - hi = NaN

//Multiplication: *
console.log( 1 * "1" ); //1 * 1 = 1
console.log( -1 + "1" * 1); // -1+1*1=0
console.log( 1 + "1" - 2 );  // 9

//Division:
console.log( 10 / "2"); // 10/2 = 5
console.log( "10" / "2" ); // 10/2 = 5
console.log( 10 + "10" / "2" ); //10 + (10/2) 5 = 15
console.log( 10 + "10" + 10 ); // 101010
console.log( 10 - "10" - 10 ); // -10
console.log( 10 + "10" - 10 ); // 1000

//unary plus: +
console.log( +"42" + 5 ); //42+5 = 47
let billAmount = "1000";
console.log(+billAmount + 100 ); // 1000 + 100 = 1100

let billAmount1 = "1000";

//unary negation: -
console.log( -"42" + 5 ); // -37

console.log(Number.parseInt(billAmount) + 100 );

let bmi = "17.88";
console.log(Number.parseFloat(bmi) + 100);//117.88