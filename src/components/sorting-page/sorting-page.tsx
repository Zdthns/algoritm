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
import { SelectionSortUp, bubbleSort } from "./sortingUtils";
import { randomArr } from "../../utils/randomArr";

type TSortingArr = {
  value: number;
  state: ElementStates;
};

export const SortingPage: React.FC = () => {
  const [array, setArray] = useState<NumbersArrayType[]>([]);
  const [method, setMethod] = useState("choice");
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
  const [loader, setLoader] = useState({
    Up: false,
    Down: false,
    newArr: false,
  });

  const newArray = async () => {
    setArray(
      (await randomArr(0, 100, 17, 3)).map((num: number) => {
        return {
          num,
          state: ElementStates.Default,
        };
      })
    );
    setLoader({ Up: false, Down: false, newArr: false });
  };

  useEffect(() => {
    newArray();
  }, []);

  const handleSubmit = async (sortType: SortType) => {
    setDisabledBtn(true);
    sortType === SortType.Up
      ? setLoader({ Up: true, Down: false, newArr: false })
      : setLoader({ Up: false, Down: true, newArr: false });
    if (method === "choice") {
      await SelectionSortUp(array, setArray, sortType);
      setLoader({ Up: false, Down: false, newArr: false });
      setDisabledBtn(false);
    } else {
      await bubbleSort(array, setArray, sortType);
      setDisabledBtn(false);
      setLoader({ Up: false, Down: false, newArr: false });
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
              isLoader={loader.Up}
            />
            <Button
              text="По убыванию"
              extraClass={style.button}
              onClick={() => handleSubmit(SortType.Down)}
              disabled={disabledBtn}
              isLoader={loader.Down}
            />
          </div>
          <Button
            text="Новый массив"
            extraClass={style.button}
            disabled={disabledBtn}
            onClick={() => newArray()}
            isLoader={loader.newArr}
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
