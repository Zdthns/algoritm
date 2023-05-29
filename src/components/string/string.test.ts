import { handlerArray } from "./stringUtils";
import { stringArr } from "./constansTest";

const fnc = jest.fn();
describe("Корректно разворачивает строку", () => {
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
    let array: any[] = [];
    expect(await handlerArray(array, fnc)).toEqual(array);
  });
});
