package com.algorithms_data_structure;

import com.algorithms_data_structure.array.ArrayImpl;

public final class App {
    public static void main(String[] args) {
        String[] letters = { "a", "b", "c" };

        ArrayImpl<String> array = new ArrayImpl<>(letters);
        array.pushImpl("d");

        for (int index = 0; index < array.getLength(); index++) {
            System.out.println(array.getArray()[index]);
        }
    }
}
