function printNumber(num: number): void {
  console.log(num);
}

const myNumber: any = 10;
printNumber(myNumber); // This will work fine

const myString: string = "10";
printNumber(myString); // This will also work fine due to type coercion