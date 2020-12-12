export class StackBasedArray<T> {
  items: T[]

  constructor() {
    this.items = [];
  }

  push(value: T): void {
    this.items.push(value);
  }

  pop(): T {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }
}