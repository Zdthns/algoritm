import React, { useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Column } from "../ui/column/column";
import { ElementStates } from "../../types/element-states";
import {
  SelectionSortDown,
  SelectionSortUp,
  bubbleSortDown,
  bubbleSortUp,
  randomArr,
} from "./sortingUtils";

type TSortingArr = {
  value: number;
  state: ElementStates;
};

export const SortingPage: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [method, setMethod] = useState("choice");
  const newArray = () => {
    setArray(randomArr());
    const lt = () => console.log(array);
    setTimeout(lt, 5000);
  };
  const handleSubmitUp = () => {
    if (method === "choice") {
      console.log("choice up");
      SelectionSortUp(array);
    } else {
      bubbleSortUp(array);
      console.log("bubble  up");
    }
  };
  const handleSubmitDown = () => {
    if (method === "bubble") {
      console.log("bubble down");
      bubbleSortDown(array);
    } else {
      SelectionSortDown(array);
      console.log("choice down");
    }
  };
  return (
    <SolutionLayout title="Сортировка массива">
      <div className={style.wrapper}>
        <form className={style.form}>
          <div className={style.radioButtons}>
            <RadioInput
              label="Выбор"
              name={"sorting"}
              value={"choice"}
              onChange={() => setMethod("choice")}
              defaultChecked
            />
            <RadioInput
              label="Пузырёк"
              value={"bubble"}
              name={"sorting"}
              onChange={() => setMethod("bubble")}
            />
          </div>
          <div className={style.sorting}>
            <Button
              text="По возрастанию"
              extraClass={style.button}
              onClick={() => handleSubmitUp()}
            />
            <Button
              text="По убыванию"
              extraClass={style.button}
              onClick={() => handleSubmitDown()}
            />
          </div>
          <Button
            text="Новый массив"
            extraClass={style.button}
            onClick={() => newArray()}
          />
        </form>
        <div className={style.animationBlock}>
          {/*{array.map((element, index) => {
            return (
              <Column
                index={element.value}
                state={element.state}
                key={index}
                extraClass={style.element}
              />
            );
          })}*/}
        </div>
      </div>
    </SolutionLayout>
  );
};
