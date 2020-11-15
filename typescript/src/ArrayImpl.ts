export class ArrayImpl<T> {
  private array: T[];
  
  constructor(array: T[]) {
    this.array = array;
  }

  /**
   * 
   * This method get the array values.
   */
  get getArray(): T[] {
    return this.array;
  }

  /**
   * 
   * This method adda a value at the end of the array.
   * @param value - value that will be added to the end of the array
   */
  pushImpl(...value: T[]): T[] {
    for (let index = 0; index < value.length; index++) {
      this.array[this.array.length] = value[index];
    }

    return this.array;
  }

  /**
   * 
   * This method adda a value at the start of the array.
   * @param value - value that will be added to the start of the array
   */
  unshiftImpl(...value: T[]): T[] {
    for (let valueIndex = value.length - 1; valueIndex >= 0; valueIndex--) {
      for (let arrayIndex = this.array.length; arrayIndex >= 0; arrayIndex--) {
        this.array[arrayIndex] = this.array[arrayIndex - 1]
        
        if (this.array[arrayIndex] === undefined) {
          this.array[arrayIndex] = value[valueIndex];
        }
      }
    }
    
    return this.array;
  }

  /**
   * 
   * This method remove the value of the end at the array.
   */
  popImpl(): T[] {
    for (let index = this.array.length - 1; index >= 0; index--) {
      this.array[index] = this.array[index - 1];
    }
    
    return this.reIndex(this.array);
  }

  /**
   * 
   * This method remove the value of the start at the array.
   */
  shiftImpl(): T[] {
    for (let index = 0; index < this.array.length; index++) {
      this.array[index] = this.array[index + 1];
    }

    return this.reIndex(this.array);
  }

  spliceImpl(index: number, quantityToDelete: number): T[] {

    return this.array;
  }

  /**
   * 
   * This method will be re index the array.
   * @param array - Array to be re indexed.
   */
  private reIndex(array: T[]): T[] {
    this.array = [];
    const newArray: T[] = [];

    for (let index = 0; index < array.length; index++) {
      if (array[index] !== undefined) {
        newArray.push(array[index]);
      }
    }

    this.array = newArray;
    return this.array;
  }
}
