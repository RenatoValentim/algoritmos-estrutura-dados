package com.algorithms_data_structure.array;

public class ArrayImpl<T> {
  private T[] array;
  private int size;

  public ArrayImpl(T[] array) {
    this.array = array;
    this.assignSize(this.array);
  }
  
  private void assignSize(T[] array) {
    this.size = array.length;
  }

  public T[] getArray() {
    return this.array;
  }

  public int getLength() {
    return this.size;
  }

  public T[] pushImpl(T value) {
    this.array[this.size] = value;
    this.assignSize(this.array);

    return this.array;
  }
}
