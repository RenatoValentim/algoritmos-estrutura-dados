package com.algorithms_data_structure.array;

public class ArrayImpl<T> {
  private T[] array;
  private int size;

  public ArrayImpl(T[] array) {
    this.array = array;
    this.size = array.length;
  }

  public T[] getArray() {
    return this.array;
  }

  public int length() {
    return this.size;
  }
}
