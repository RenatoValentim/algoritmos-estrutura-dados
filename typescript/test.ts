import { StackBasedObject } from './src/StackBasedObject';
import { StackBasedArray } from './src/StackBasedArray';
import { ArrayImpl } from './src/ArrayImpl';

const arrayImpl = new ArrayImpl();
console.log(arrayImpl);

const stackBasedArray = new StackBasedArray();
console.log(stackBasedArray);

const stackBasedObject = new StackBasedObject();
console.log(stackBasedObject);
