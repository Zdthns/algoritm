import style from "./style.module.css";
import React, { useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";

export const StringComponent: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <SolutionLayout title="Строка">
      <div className={style.wrapper}>
        <form className={style.form}>
          <Input isLimitText={true} maxLength={11} />
          <Button extraClass={style.button} text="Развернуть" />
        </form>
        <div className={style.animationBlock}>
          <Circle />
        </div>
      </div>
    </SolutionLayout>
  );
};
