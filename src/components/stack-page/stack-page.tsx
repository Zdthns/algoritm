import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Circle } from "../ui/circle/circle";
import style from "./style.module.css";
import { Button } from "../ui/button/button";

export const StackPage: React.FC = () => {
  return (
    <SolutionLayout title="Стек">
      <div className={style.wrapper}>
        <form className={style.form}>
          <Input
            maxLength={4}
            isLimitText={true}
            placeholder="Введите значение"
          />
          <Button text="Добавить" />
          <Button text="Удалить" />
          <Button text="Очистить" />
        </form>
        <div className={style.animationBlock}>
          <Circle index={1} />;
        </div>
      </div>
    </SolutionLayout>
  );
};
