import React, { useEffect, useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Column } from "../ui/column/column";
import {
  ElementStates,
  NumbersArrayType,
  SortType,
} from "../../types/element-states";
import { SelectionSortUp, bubbleSort, randomArr } from "./sortingUtils";
import { delay, SHORT_DELAY_IN_MS } from "../../constants/delays";

type TSortingArr = {
  value: number;
  state: ElementStates;
};

export const SortingPage: React.FC = () => {
  const [array, setArray] = useState<NumbersArrayType[]>([]);
  const [method, setMethod] = useState("choice");
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
  const [loaderUp, setLoaderUp] = useState(false);
  const [loaderDown, setLoaderDown] = useState(false);

  const newArray = async () => {
    //setDisabledBtn(true);
    setArray(
      (await randomArr()).map((num: number) => {
        return {
          num,
          state: ElementStates.Default,
        };
      })
    );
  };

  useEffect(() => {
    newArray();
  }, []);

  const handleSubmit = async (sortType: SortType) => {
    setDisabledBtn(true);
    sortType === SortType.Up ? setLoaderUp(true) : setLoaderDown(true);
    if (method === "choice") {
      console.log("choice up");
      await SelectionSortUp(array, setArray, sortType);
      console.log(array);
    } else {
      await bubbleSort(array, setArray, sortType);
      console.log("bubble  up");
      console.log(array);
      setDisabledBtn(false);
      setLoaderUp(false);
      setLoaderDown(false);
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
              onClick={() => handleSubmit(SortType.Up)}
              disabled={disabledBtn}
              isLoader={loaderUp}
            />
            <Button
              text="По убыванию"
              extraClass={style.button}
              onClick={() => handleSubmit(SortType.Down)}
              disabled={disabledBtn}
              isLoader={loaderDown}
            />
          </div>
          <Button
            text="Новый массив"
            extraClass={style.button}
            disabled={disabledBtn}
            onClick={() => newArray()}
          />
        </form>
        <div className={style.animationBlock}>
          {array?.map((element, index) => {
            return (
              <Column
                index={element.num}
                state={element.state}
                key={index}
                extraClass={style.element}
              />
            );
          })}
        </div>
      </div>
    </SolutionLayout>
  );
};
