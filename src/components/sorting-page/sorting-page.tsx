import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Column } from "../ui/column/column";

export const SortingPage: React.FC = () => {
  return (
    <SolutionLayout title="Сортировка массива">
      <div className={style.wrapper}>
        <form className={style.form}>
          <div className={style.radioButtons}>
            <RadioInput label="Выбор" name={"sorting"} defaultChecked />
            <RadioInput label="Пузырёк" value={"bubbleType"} name={"sorting"} />
          </div>
          <div className={style.sorting}>
            <Button text="По возрастанию" extraClass={style.button} />
            <Button text="По убыванию" extraClass={style.button} />
          </div>
          <Button text="Новый массив" extraClass={style.button} />
        </form>
        <div className={style.visualBlock}>
          return (
          <Column extraClass={style.element} index={1} />
          );
        </div>
      </div>
    </SolutionLayout>
  );
};
