import { ElementStates } from "../../../types/element-states";

export const sortingArr = {
  inArray: [
    { num: 3, state: ElementStates.Default },
    { num: 4, state: ElementStates.Default },
    { num: 1, state: ElementStates.Default },
    { num: 2, state: ElementStates.Default },
  ],
  outArrayUp: [
    { num: 1, state: ElementStates.Modified },
    { num: 2, state: ElementStates.Modified },
    { num: 3, state: ElementStates.Modified },
    { num: 4, state: ElementStates.Modified },
  ],
  outArrayDouwn: [
    { num: 4, state: ElementStates.Modified },
    { num: 3, state: ElementStates.Modified },
    { num: 2, state: ElementStates.Modified },
    { num: 1, state: ElementStates.Modified },
  ]
}