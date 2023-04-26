import style from "./style.module.css";
import React, { useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../form/simple-form";
import { ElementStates, ItemArray } from "../../types/element-states";
import { conditionBtn, handlerArray } from "./stringUtils";
import { TFilsetBtn, TFilsetInput } from "../form/typeForm";

export const StringComponent: React.FC = () => {
  const [value, setValue] = useState("");
  const [simbolArr, setSimbolArr] = useState<ItemArray<string>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(conditionBtn(evt.currentTarget.value));
    setSimbolArr(
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
    await handlerArray(simbolArr, setSimbolArr);
    setDisabled(false);
  };

  const filsetInput: TFilsetInput = {
    value: value,
    maxLength: 11,
    isLimitText: true,
    placeholder: "Введите число",
    handlerChange: handlerChange,
    min: 1,
  };
  const filsetBtn: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: isLoading,
    disabled: disabled,
    text: "Развернуть",
    linkedList: "small",
  };
  return (
    <SolutionLayout title="Строка">
      <div className={style.wrapper}>
        <SimpleForm filsetInput={filsetInput} filsetBtn={filsetBtn} />
        <div className={style.animationBlock}>
          {simbolArr?.map((simbol, index) => (
            <Circle
              state={simbol.state}
              letter={`${simbol.item}`}
              key={index}
            />
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
