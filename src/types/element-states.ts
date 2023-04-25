export enum ElementStates {
  Default = "default",
  Changing = "changing",
  Modified = "modified",
}

export type ItemArray = {
  item: string | number;
  state: ElementStates;
};

export type NumbersArrayType = {
  num: number;
  state?: ElementStates;
};

export enum SortType {
  Up = "Up",
  Down = "Down",
}

export enum SortMethod {
  Choise = "Choise",
  Bubble = "Bubble",
}