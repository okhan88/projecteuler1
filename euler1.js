/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumOfMultiples(n) {
  let sum = 2;
  // Osama does stuff here

  /* 
  simplified version of solving problem
  step 1- list out the numbers starting with number 1 up to 1000
  step 2- circle all multiples of 3 and add them up
  step 3- circle all multiples of 5 (except the ones that overlap with 3) and add them up
  step 4- add the sum of step 2 and step 3 to get answer


  step 0- start with the variable sum = 0
  step 1- start with the number 1
  step 2- take the first number (in this case 1), divide by 3. If answer is a whole number, add it to the sum equation and move to step 4
  step 3- take the same number and divide by 5. If answer is whole number, add it to the sum.
  step 4- go to the next number and repeat steps 3 and 4 until 999 is reached
  step 5- final answer is in sum equation
  

  */

  // Osama ends stuff here
  return sum;
}

console.log(sumOfMultiples(1000));