import { ElementStates } from "../../../types/element-states";

export const stringArr = {
  evenNum: {
    inArray: [
      { item: "a", state: ElementStates.Default },
      { item: "s", state: ElementStates.Default },
      { item: "d", state: ElementStates.Default },
      { item: "f", state: ElementStates.Default },
    ],
    outArray: [
      { item: "f", state: ElementStates.Modified },
      { item: "d", state: ElementStates.Modified },
      { item: "s", state: ElementStates.Modified },
      { item: "a", state: ElementStates.Modified },
    ]
  },
  odd: {
    inArray: [
      { item: "a", state: ElementStates.Default },
      { item: "s", state: ElementStates.Default },
      { item: "d", state: ElementStates.Default },
    ],
    outArray: [
      { item: "d", state: ElementStates.Modified },
      { item: "s", state: ElementStates.Modified },
      { item: "a", state: ElementStates.Modified },
    ]
  },
  one: {
    inArray: [{ item: "a", state: ElementStates.Default }],
    outArray: [{ item: "a", state: ElementStates.Modified }]
  }

}