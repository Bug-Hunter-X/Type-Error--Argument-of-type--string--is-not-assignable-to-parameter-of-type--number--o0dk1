function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(5, 10); 
console.log(result1); //Correct

let result2 = 5;
let numStr = '10';

if (isNumber(numStr)) {
    result2 = add(5, parseInt(numStr));
    console.log(result2); //Correct use of type guard
} else {
    console.log("Not a number"); //handle error
}

let result3 = add(5, parseInt(numStr as string)); //Type assertion.  Use with caution!
console.log(result3); //Correct use of type assertion