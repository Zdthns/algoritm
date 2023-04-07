import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { Input } from "../ui/input/input";

export const ListPage: React.FC = () => {
  return (
    <SolutionLayout title="Связный список">
      <div className={style.wrapper}>
        <form className={style.form}>
          <div className={style.container}>
            <div className={style.input}>
              <Input placeholder="Введите значение" />
            </div>
            <Button text="Добавить в head" />
            <Button text="Добавить в tail" />
            <Button text="Удалить из head" />
            <Button text="Удалить из tail" />
          </div>
          <div className={style.container}>
            <div className={style.input}>
              <Input placeholder="Введите индекс" />
            </div>
            <div className={style.container}>
              <Button text="Добавить по индексу" />
              <Button text="Удалить по индексу" />
            </div>
          </div>
        </form>
        <div className={style.animationBlock}>
          <Circle />
        </div>
      </div>
    </SolutionLayout>
  );
};
