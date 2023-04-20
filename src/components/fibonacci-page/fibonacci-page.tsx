import style from "./style.module.css";
import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../ui/form/simple-form";
import { fib } from "./fibonacciUtils";

export const FibonacciPage: React.FC = () => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loaderBtn, setLoaderBtn] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handlerChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    if (parseInt(evt.target.value) <= 19 && parseInt(evt.target.value) >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let number = Number(value); // string -> number
    setLoaderBtn(true);
    const valueArr: number[] = [];
    let counter: number = 0;
    const fibArr = fib(number);
    setValue(""); // clear input
    setDisabled(true);
    const interval = setInterval(() => {
      valueArr.push(fibArr[counter]);
      setNumbers([...valueArr]);

      counter++;
      if (fibArr.length - 1 === valueArr.length - 1) {
        clearInterval(interval);
        setLoaderBtn(false);
      }
    }, 500);
  };

  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <div className={style.wrapper}>
        <SimpleForm isLimitText={true} maxLength={19} text1={"Рассчитать"} />
        <div className={style.animationBlock}>
          <Circle />
        </div>
      </div>
    </SolutionLayout>
  );
};
