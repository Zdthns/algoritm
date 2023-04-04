import style from "./style.module.css";
import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";

export const StringComponent: React.FC = () => {
  return (
    <SolutionLayout title="Строка">
      <div className={style.body}>
        <div className={style.wrapper}>
          <div>
            <Input />
            <span className={style.caption}>Максимум — 11 символов</span>
          </div>

          <Button text="Развернуть" />
        </div>
      </div>
    </SolutionLayout>
  );
};
