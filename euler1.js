/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumOfMultiples(n) {
  let sum = 0;
  // Osama does stuff here

  /* 

  step 0- start with the variable sum = 0
  step 1- start with the number 1
  step 2- take the first number (in this case 1), divide by 3. If answer is a whole number, add it to the sum equation or else move to step 3
  step 3- take the same number and divide by 5. If answer is whole number, add it to the sum.
  step 4- go to the next number and repeat steps 3 and 4 until 999 is reached
  step 5- final answer is in sum equation
  

  */


  for(let i = 1; i < n; i++) {
    let a = i / 3;
    let b = i / 5;
    if (Number.isInteger(a) || Number.isInteger(b)) {
      sum = sum + i;
    }
  
  
  }


  // Osama ends stuff here

  // problem is solved

  
  return sum;
}

console.log(sumOfMultiples(1000));