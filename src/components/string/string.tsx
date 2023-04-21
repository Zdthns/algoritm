import style from "./style.module.css";
import React, { useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../form/simple-form";
import { ElementStates, ItemArray } from "../../types/element-states";
import { conditionBtn, handlerArray } from "./stringUtils";

export const StringComponent: React.FC = () => {
  const [simbolArr, setSimbolArr] = useState<ItemArray[]>([]);
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
  return (
    <SolutionLayout title="Строка">
      <div className={style.wrapper}>
        <SimpleForm
          isLimitText={true}
          maxLength={11}
          text1="Развернуть"
          handlerSubmit={handlerSubmit}
          handlerChange={handlerChange}
          isLoader={isLoading}
          disabled={disabled}
        />
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
