import style from "./style.module.css";
import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";

export const FibonacciPage: React.FC = () => {
  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <div className={style.wrapper}>
        <form className={style.form}>
          <Input isLimitText={true} maxLength={19} />
          <Button extraClass={style.button} text="Рассчитать" />
        </form>
        <div className={style.animationBlock}>
          <Circle />
        </div>
      </div>
    </SolutionLayout>
  );
};
