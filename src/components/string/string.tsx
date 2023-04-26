import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../form/simple-form";
import { ElementStates, ItemArray } from "../../types/element-states";
import { handlerArray } from "./stringUtils";
import { TFilsetBtn, TFilsetInput } from "../form/typeForm";

export const StringComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState();
  const [array, setArray] = useState<ItemArray<string>[]>([]);
  //const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.currentTarget.value.length > 0 ? setDisabled(false) : setDisabled(true);
    console.log(evt.target.value);
    setArray(
      evt.target.value.split("").map((item: string) => {
        return {
          item,
          state: ElementStates.Default,
        };
      })
    );
  };

  const handlerSubmit: React.FormEventHandler<HTMLButtonElement> = async (
    evt
  ) => {
    evt.preventDefault();
    setDisabled(true);
    await handlerArray(array, setArray);
    setDisabled(false);
  };

  const filsetInput: TFilsetInput = {
    value: inputValue,
    maxLength: 11,
    isLimitText: true,
    placeholder: "Введите число",
    handlerChange: handlerChange,
    min: 1,
    max: 11,
  };
  const filsetBtn: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: false,
    disabled: disabled,
    text: "Развернуть",
    linkedList: "small",
  };
  return (
    <SolutionLayout title="Строка">
      <div className={style.wrapper}>
        <SimpleForm filsetInput={filsetInput} filsetBtn={filsetBtn} />
        <div className={style.animationBlock}>
          {array.map((item, index) => (
            <Circle state={item.state} letter={`${item.item}`} key={index} />
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
