export enum ElementStates {
  Default = "default",
  Changing = "changing",
  Modified = "modified",
}

export type ItemArray = {
  item: string | number;
  state: ElementStates;
};