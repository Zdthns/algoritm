import { ItemArray } from "../../../types/element-states";
import { handlerArray } from "../stringUtils";
import { stringArr } from "./constantsTest";



const fnc = jest.fn();
describe("разворачивает строку", () => {
  it("с чётным количеством символов", async () => {

    let inArray = stringArr.evenNum.inArray;
    let outArray = stringArr.evenNum.outArray;
    expect(await handlerArray(inArray, fnc)).toEqual(outArray);
  });

  it("с нечетным количеством символов", async () => {
    let inArray = stringArr.odd.inArray;
    let outArray = stringArr.odd.outArray;
    expect(await handlerArray(inArray, fnc)).toEqual(outArray);
  });

  it("с одним символом.", async () => {
    let inArray = stringArr.one.inArray;
    let outArray = stringArr.one.outArray;
    expect(await handlerArray(inArray, fnc)).toEqual(outArray);
  });

  it("пустую строку", async () => {
    let inArray: ItemArray<string>[] = [];
    let outArray: ItemArray<string>[] = [];
    expect(await handlerArray(inArray, fnc)).toEqual(outArray);
  });
});
