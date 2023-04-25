import { ElementStates } from "../../types/element-states";
//random arr
export function randomArr(min = 0, max = 100) {
  let arr = []
  let lenArr = Math.floor(Math.random() * (17 - 3) + 3);
  for (let i = 0; i < lenArr; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
}


//сортировка выбором
export function SelectionSortUp(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}
export function SelectionSortDown(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[index]) {
        index = j;
      }
    }
    let tmp = array[i];
    array[i] = array[index];
    array[index] = tmp;
  }
  return array;
}
// bubble
export function bubbleSortUp(array: number[]) {
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}
export function bubbleSortDown(array: number[]) {
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}