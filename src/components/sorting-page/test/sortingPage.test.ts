import { ElementStates, NumbersArrayType, SortType } from "../../../types/element-states";
import { bubbleSort, SelectionSort } from "../sortingUtils";
import { sortingArr } from "./constansTest";

const fnc = jest.fn();
describe("Корректно сортирует bubbleSort", () => {
  it("Пустой массив", async () => {
    let arr: NumbersArrayType[] = [];
    expect(await bubbleSort(arr, () => { }, SortType.Up)).toEqual(arr);
  });
  it("массив из одного элемента", async () => {
    let arr = [{ num: 1, state: ElementStates.Default }];
    expect(await bubbleSort(arr, fnc, SortType.Up)).toEqual(arr);
  });
  it("массив из нескольких элементов.", async () => {
    expect(await bubbleSort(sortingArr.inArray, fnc, SortType.Up)).toEqual(
      sortingArr.outArrayUp
    );
  });
});

describe("Корректно сортирует SelectionSort", () => {
  it("Пустой массив", async () => {
    let arr: NumbersArrayType[] = [];
    expect(await SelectionSort(arr, () => { }, SortType.Up)).toEqual(arr);
  });
  it("массив из одного элемента", async () => {
    let arr = [{ num: 1, state: ElementStates.Default }];
    expect(await SelectionSort(arr, fnc, SortType.Up)).toEqual(arr);
  });
  it("массив из нескольких элементов.", async () => {
    expect(await SelectionSort(sortingArr.inArray, fnc, SortType.Up)).toEqual(
      sortingArr.outArrayUp
    );

  });
});
