//import { useCallback } from "react";
//import { ElementStates, ItemArray } from "../../types/element-states";

import { DELAY_IN_MS, delay } from "../../constants/delays";
import { ElementStates, ItemArray } from "../../types/element-states";

export const handlerArray = async (simbol: ItemArray[], setSimbol: Function,
) => {
  let start: number = 0;
  let end: number = simbol.length - 1

  const half = simbol.length / 2;
  while (start < half) {
    simbol[start].state = ElementStates.Changing;
    simbol[end].state = ElementStates.Changing;
    setSimbol([...simbol]);

    await delay(DELAY_IN_MS);

    simbol[start].state = ElementStates.Modified;
    simbol[end].state = ElementStates.Modified;
    reverseString(simbol, start, end);
    console.log(simbol)
    setSimbol([...simbol]);

    await delay(DELAY_IN_MS);

    start++;
    end--;
  }
}

const reverseString = (str: ItemArray[], index: number, secondIndex: number): void => {
  let reversed = str[index];
  str[index] = str[secondIndex];
  str[secondIndex] = reversed;

}


export const conditionBtn = (ev: string) => {
  if (ev.length > 0) {
    return false
  }
  return true
}