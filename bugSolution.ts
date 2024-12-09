function printNumber(num: number): void {
  console.log(num);
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

const myNumber: any = 10;
if (isNumber(myNumber)) {
  printNumber(myNumber); // This will work
} else {
  console.error('Invalid input: Not a number');
}

const myString: string = "10";
if (isNumber(myString)) {
  printNumber(myString); // This will not execute the printNumber function
} else {
  console.error('Invalid input: Not a number');
} 