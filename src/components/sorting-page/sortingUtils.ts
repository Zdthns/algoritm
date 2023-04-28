import { SHORT_DELAY_IN_MS, delay } from "../../constants/delays";
import { ElementStates, NumbersArrayType, SortType } from "../../types/element-states";


const swap = (
  array: NumbersArrayType[],
  firstIndex: number,
  secondIndex: number
): void => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};
//сортировка выбором
export const SelectionSortUp = async (
  array: NumbersArrayType[],
  setArray: Function,
  sortType: SortType
) => {
  for (let i = 0; i < array.length; i++) {
    let index = i;
    array[index].state = ElementStates.Changing;

    for (let j = i + 1; j < array.length; j++) {
      array[j].state = ElementStates.Changing;
      setArray([...array])
      await delay(SHORT_DELAY_IN_MS);

      if ((sortType === SortType.Up ? array[index].num : array[j].num) >
        (sortType === SortType.Up ? array[j].num : array[index].num)) {
        index = j;
        array[j].state = ElementStates.Changing;
        array[index].state = i === index ? ElementStates.Changing : ElementStates.Default;
      }
      if (j !== index) {
        array[j].state = ElementStates.Default;
      }
      setArray([...array])
    }

    swap(array, i, index);
    array[index].state = ElementStates.Default;
    array[i].state = ElementStates.Modified;
    setArray([...array])

    //let tmp = array[i];
    //array[i] = array[index];
    //array[index] = tmp;

    //if (j !== index) {
    //  array[j].state = ElementStates.Default;
    //}
    //setArray([...array]);
  }
}



export const bubbleSort = async (
  array: NumbersArrayType[],
  setArray: Function,
  sortType: SortType
) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      array[j].state = ElementStates.Changing;

      if (array[j + 1]) array[j + 1].state = ElementStates.Changing;
      setArray([...array]);

      await delay(SHORT_DELAY_IN_MS);

      if (
        (sortType === SortType.Up ? array[j].num : array[j + 1].num) >
        (sortType === SortType.Up ? array[j + 1].num : array[j].num)
      ) {
        swap(array, j, j + 1);
      }
      array[j].state = ElementStates.Default;
      if (array[j + 1]) array[j + 1].state = ElementStates.Default;
      setArray([...array]);
    }
    array[array.length - i - 1].state = ElementStates.Modified;
    setArray([...array]);
  }
};
  //
  //сортировка bubble
//  export const bubbleSort = async (array: NumbersArrayType[],
//    setArray: Function) => {
//    for (let j = array.length - 1; j > 0; j--) {
//      for (let i = 0; i < j; i++) {
//        if (array[i] > array[i + 1]) {
//          let temp = array[i];
//          array[i] = array[i + 1];
//          array[i + 1] = temp;
//        }
//      }
//    }
//    return array;
//  }
//  export const bubbleSort = async (array: NumbersArrayType[],
//    setArray: Function) => {
//    for (let j = array.length - 1; j > 0; j--) {
//      for (let i = 0; i < j; i++) {
//        if (array[i] < array[i + 1]) {
//          let temp = array[i];
//          array[i] = array[i + 1];
//          array[i + 1] = temp;
//        }
//      }
//    }
//    return array;
//  }
//}
//export const SelectionSort = async (array: NumbersArrayType[],
//  setArray: Function) => {
//  for (let i = 0; i < array.length; i++) {
//    let index = i;
//    for (let j = i + 1; j < array.length; j++) {
//      if (array[j] > array[index]) {
//        index = j;
//      }
//    }
//    let tmp = array[i];
//    array[i] = array[index];
//    array[index] = tmp;
//  }
//  return array;
//}