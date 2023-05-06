import style from "./style.module.css";
import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../form/simple-form";
import { fibIterative } from "./fibonacciUtils";
import { TFilsetBtn, TFilsetInput } from "../form/typeForm";

export const FibonacciPage: React.FC = () => {
  const [valueInput, setValueInput] = useState(0);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loaderBtn, setLoaderBtn] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    let input = Number(evt.target.value);
    if (isNaN(input)) {
      input = 0;
    }
    if (input <= 19 && input >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setValueInput(input);
  };

  const handlerSubmit: React.FormEventHandler<HTMLButtonElement> = async (
    evt
  ) => {
    evt.preventDefault();
    setLoaderBtn(true);
    let input = Number(valueInput);
    console.log(valueInput);
    await fibIterative(input + 1, setNumbers);
    setLoaderBtn(false);
  };
  const filsetInput: TFilsetInput = {
    value: valueInput,
    maxLength: 19,
    isLimitText: true,
    placeholder: "Введите число",
    handlerChange: handlerChange,
    min: 1,
    type: "numbers",
    styles: style.input,
  };
  const filsetBtn: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: loaderBtn,
    disabled: disabled,
    text: "Рассчитать",
    linkedList: "small",
    styles: style.button,
  };
  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <div className={style.wrapper}>
        <SimpleForm filsetInput={filsetInput} filsetBtn={filsetBtn} />
        <div className={style.animationBlock}>
          {numbers?.map((number, index) => (
            <Circle letter={`${number}`} key={index} index={index} />
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
