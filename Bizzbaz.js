// loop of number from 1 - 100
// if the number % 3 == 0 print Fizz
// if the number % 5 == 0 print Buzz
//  if the number &&

/* -* side note *- i make an result var as extra
 challenge to log all the result in one line */
 
let result = "";
for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    result += "FizzBuzz";
  } else if (i % 3 == 0) {
    result += "Fizz";
  } else if (i % 5 == 0) {
    result += "Buzz";
  } else {
    result += i;
  }
}
console.log(result);
