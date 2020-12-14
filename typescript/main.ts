import { StackBasedObject } from './src/StackBasedObject';
import { StackBasedArray } from './src/StackBasedArray';
import { ArrayImpl } from './src/ArrayImpl';

function decimalToBinary(value: number): string {
  const remnants = new StackBasedObject<number>();

  let remnant: number;
  let binaryString = '';

  while (value > 0) {
    remnant = Math.floor(value % 2);
    remnants.push(remnant);
    value = Math.floor(value / 2);
  }

  while (!remnants.isEmpty()) {
    binaryString += remnants.pop().toString();
  }

  return binaryString;
}

const binaryValue = decimalToBinary(10);
console.log(binaryValue);
