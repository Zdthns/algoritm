//import { useCallback } from "react";
//import { ElementStates, ItemArray } from "../../types/element-states";

import { DELAY_IN_MS, delay } from "../../constants/delays";
import { ElementStates, ItemArray } from "../../types/element-states";

export const handlerArray = async (arr: ItemArray<string>[], setArray: Function,
) => {
  let array = arr

  let start: number = 0;
  let end: number = array.length - 1

  const half = array.length / 2;
  while (start < half) {
    array[start].state = ElementStates.Changing;
    array[end].state = ElementStates.Changing;
    setArray([...array]);

    await delay(DELAY_IN_MS);

    array[start].state = ElementStates.Modified;
    array[end].state = ElementStates.Modified;
    reverseString(array, start, end);
    setArray([...array]);
    await delay(DELAY_IN_MS);
    start++;
    end--;
  }
  return array
}

const reverseString = (str: ItemArray<string>[], index: number, secondIndex: number): void => {
  let reversed = str[index];
  str[index] = str[secondIndex];
  str[secondIndex] = reversed;

}

