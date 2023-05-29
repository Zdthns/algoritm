import renderer from "react-test-renderer";
import { ElementStates } from "../../../types/element-states";
import { Circle } from "./circle";

//Проверяем при помощи снэпшотов корректную отрисовку элемента:
describe("Circle", () => {
  //без буквы;
  it("без буквы", () => {
    const circle = renderer.create(<Circle />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  //с буквами;
  it("с буквами", () => {
    const circle = renderer.create(<Circle letter="symbol" />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  //с head;
  it("c head", () => {
    const circle = renderer.create(<Circle head="head" />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  //с react-элементом в head;
  it("c react-element в head", () => {
    const circle = renderer.create(<Circle head={<Circle />} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  //с tail;
  it("с tail", () => {
    const circle = renderer.create(<Circle tail="tail" />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  //с react-элементом в tail;
  it("с react-element в tail", () => {
    const circle = renderer.create(<Circle tail={<Circle />} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  //с index;
  it("с index", () => {
    const circle = renderer.create(<Circle index={1} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  //с пропом isSmall ===  true;
  it("с пропом  isSmall === true", () => {
    const circle = renderer.create(<Circle isSmall />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  //в состоянии default;
  it("в состоянии default", () => {
    const circle = renderer
      .create(<Circle state={ElementStates.Default} />)
      .toJSON();
    expect(circle).toMatchSnapshot();
  });
  //в состоянии changing;
  it("в состоянии changing", () => {
    const circle = renderer
      .create(<Circle state={ElementStates.Changing} />)
      .toJSON();
    expect(circle).toMatchSnapshot();
  });
  //в состоянии modified.
  it("в состоянии modifiend", () => {
    const circle = renderer
      .create(<Circle state={ElementStates.Modified} />)
      .toJSON();
    expect(circle).toMatchSnapshot();
  });
});
