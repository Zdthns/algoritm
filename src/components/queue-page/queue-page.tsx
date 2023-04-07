import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";

export const QueuePage: React.FC = () => {
  return (
    <SolutionLayout title="Очередь">
      <div className={style.wrapper}>
        <form className={style.form}>
          <Input maxLength={4} />
          <Button text="Добавить" />
          <Button text="Удалить" />
          <Button text="Очистить" />
        </form>
        <div className={style.animationBlock}>
          <Circle />;
        </div>
      </div>
    </SolutionLayout>
  );
};
