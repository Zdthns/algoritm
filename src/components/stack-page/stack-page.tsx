import React, { useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Circle } from "../ui/circle/circle";
import style from "./style.module.css";
import { Button } from "../ui/button/button";
import SimpleForm from "../form/simple-form";

export const StackPage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const handlerChange = () => {};
  const handlerSubmitPush = () => {};
  const handlerSubmitPop = () => {};
  const handlerSubmitClear = () => {};

  return (
    <SolutionLayout title="Стек">
      <div className={style.wrapper}>
        <SimpleForm
          maxLength={4}
          isLimitText={true}
          placeholder="Введите значение"
          onClick1={handlerSubmitPush}
          onClick2={handlerSubmitPop}
          onClick3={handlerSubmitClear}
          handlerChange={handlerChange}
          text1="Добавить"
          text2="Удалить"
          text3="Очистить"
        />

        <div className={style.animationBlock}>
          <Circle index={1} />
        </div>
      </div>
    </SolutionLayout>
  );
};
