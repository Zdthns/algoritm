import style from "./style.module.css";
import React, { useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../ui/form/simple-form";

export const StringComponent: React.FC = () => {
  const [value, setValue] = useState("");
  const [simbol, setSimbol] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {};
  return (
    <SolutionLayout title="Строка">
      <div className={style.wrapper}>
        <SimpleForm isLimitText={true} maxLength={11} text1="Развернуть" />
        {/*<form className={style.form}>
          <Input isLimitText={true} maxLength={11} />
          <Button extraClass={style.button} text="Развернуть" />
        </form>*/}
        <div className={style.animationBlock}>
          <Circle />
        </div>
      </div>
    </SolutionLayout>
  );
};
