import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../form/simple-form";

export const QueuePage: React.FC = () => {
  const handlerChange = () => {};
  const handlerSubmit = () => {};
  return (
    <SolutionLayout title="Очередь">
      <div className={style.wrapper}>
        <SimpleForm
          isLimitText={false}
          maxLength={4}
          handlerSubmit={handlerSubmit}
          handlerChange={handlerChange}
          text1={"Добавить"}
          text2={"Удалить"}
          text3={"Очистить"}
        />
        <div className={style.animationBlock}>
          <Circle />
        </div>
      </div>
    </SolutionLayout>
  );
};
