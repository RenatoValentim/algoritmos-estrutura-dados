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

function baseConvert(value: number, baseConvert: number) {
  const remnants = new StackBasedObject<number>();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let remnant: number;
  let baseString = '';
  
  if (!(baseConvert >= 2 && baseConvert <= 36)) {
    return '';
  }

  while (value > 0) {
    remnant = Math.floor(value % baseConvert);
    remnants.push(remnant);
    value = Math.floor(value / baseConvert);
  }

  while (!remnants.isEmpty()) {
    baseString += digits[remnants.pop().toString()];
  }

  return baseString;
}

const valueAfterConverted = baseConvert(10, 16);
console.log(valueAfterConverted);

const binaryValue = decimalToBinary(10);
console.log(binaryValue);
