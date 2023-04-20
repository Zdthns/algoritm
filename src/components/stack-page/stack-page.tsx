import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Circle } from "../ui/circle/circle";
import style from "./style.module.css";
import { Button } from "../ui/button/button";
import SimpleForm from "../ui/form/simple-form";

export const StackPage: React.FC = () => {
  const handlerChange = () => {};
  const handleSubmit = () => {};
  return (
    <SolutionLayout title="Стек">
      <div className={style.wrapper}>
        <SimpleForm
          maxLength={4}
          isLimitText={true}
          placeholder="Введите значение"
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
