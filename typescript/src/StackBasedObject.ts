export class StackBasedObject<T> {
  private items: { [key: string]: T };
  private length: number;

  constructor() {
    this.items = {};
    this.length = 0;
  }

  /**
   * This method add a value at the last position of the stack.
   * @param value - Value to add at the last position of the stack.
   */
  push(value: T): void {
    this.items[this.length] = value;
    this.length++;
  }

  /**
   * This method remove the last value from the stack
   * and return this value.
   */
  pop(): T {
    if (this.isEmpty()) {
      return undefined;
    }

    const indexLastValue = --this.length;

    const lastValue = this.items[indexLastValue];
    delete this.items[indexLastValue];

    return lastValue;
  }

  /**
   * This method return the value at the last position
   * into the stack.
   */
  peek(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    
    return this.items[this.length - 1];
  }

  /**
   * This function  verify if the stack is empty.
   */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * This method return the stack to the beginning condition.
   */
  clear(): void {
    this.items = {};
    this.length = 0;
  }

  /**
   * This method return the stack size.
   */
  size(): number {
    return this.length;
  }

  /**
   * This method return the values into the stack as string.
   */
  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objectString = `${this.items[0]}`;
    for (let index = 1; index < this.length; index++) {
      objectString = `${objectString}, ${this.items[index]}`;
    }

    return objectString;
  }
}