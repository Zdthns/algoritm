import React, { useEffect, useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Circle } from "../ui/circle/circle";
import style from "./style.module.css";
import SimpleForm from "../form/simple-form";
import { ElementStates, ItemArray } from "../../types/element-states";
import { Stack } from "./Stack";
import { delay, SHORT_DELAY_IN_MS } from "../../constants/delays";

type TStackItems = ItemArray<string | null>;

export const StackPage: React.FC = () => {
  const stack = new Stack<string>();
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState<TStackItems[]>([]);
  const [disabledBtn, setDisabledBtn] = React.useState({
    push: false,
    pop: false,
    clear: false,
  });
  const [loader, setLoader] = React.useState({
    push: false,
    pop: false,
    clear: false,
  });

  useEffect(() => {
    !inputValue
      ? setDisabledBtn({ push: true, pop: true, clear: true })
      : setDisabledBtn({ push: false, pop: true, clear: true });
  }, [inputValue]);
  useEffect(() => {
    array.length > 0
      ? setDisabledBtn({ push: true, pop: false, clear: false })
      : setDisabledBtn({ push: true, pop: true, clear: true });
  }, [array]);

  const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.currentTarget.value);
  };

  const handlerSubmitPush = async () => {
    stack.push(inputValue);
    console.log(inputValue);

    //handlerPush(input,array, setArray)

    stack.push(inputValue);
    setLoader({ ...loader, push: true });
    array.push({
      item: stack.peak() ? stack.peak() : "",
      state: ElementStates.Changing,
    });

    setArray([...array]);
    setInputValue("");

    await delay(SHORT_DELAY_IN_MS);

    array[array.length - 1].state = ElementStates.Default;

    setArray([...array]);
    setLoader({ ...loader, push: false });
  };

  const handlerSubmitPop = async () => {
    stack.pop();
    setLoader({ ...loader, pop: true });
    array[array.length - 1].state = ElementStates.Changing;
    setArray([...array]);
    await delay(SHORT_DELAY_IN_MS);
    array.pop();
    setArray([...array]);
    setLoader({ ...loader, pop: false });
  };
  const handlerSubmitClear = async () => {
    stack.clear();
    setLoader({ ...loader, clear: true });
    setArray([]);
    await delay(SHORT_DELAY_IN_MS);
    setLoader({ ...loader, clear: false });
  };
  const filsetInput = {
    value: inputValue,
    maxLength: 4,
    isLimitText: true,
    placeholder: "Введите значение",
    handlerChange: handlerChange,
    styles: style.input,
  };
  const filsetBtn = {
    handlerSubmit: handlerSubmitPush,
    isLoader: loader.push,
    disabled: disabledBtn.push,
    text: "Добавить",
    styles: style.button1,
  };
  const filsetBtn2 = {
    handlerSubmit: handlerSubmitPop,
    isLoader: loader.pop,
    disabled: disabledBtn.pop,
    text: "Удалить",
    styles: style.button2,
  };
  const filsetBtn3 = {
    handlerSubmit: handlerSubmitClear,
    isLoader: loader.clear,
    disabled: disabledBtn.clear,
    text: "Очистить",
    styles: style.button3,
  };

  return (
    <SolutionLayout title="Стек">
      <div className={style.wrapper}>
        <SimpleForm
          filsetInput={filsetInput}
          filsetBtn={filsetBtn}
          filsetBtn2={filsetBtn2}
          filsetBtn3={filsetBtn3}
        />
        <div className={style.animationBlock}>
          {array &&
            array?.map((item, index) => (
              <Circle
                key={index}
                letter={`${item.item}`}
                index={index}
                state={item.state}
                head={array.length - 1 === index ? "top" : ""}
              />
            ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
