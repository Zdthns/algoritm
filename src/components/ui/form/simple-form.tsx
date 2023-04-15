import React, { FC } from "react";
import style from "./style.module.css";
import { Input } from "../input/input";
import { Button } from "../button/button";

type propsType = {
  placeholder?: string;
  isLimitText: boolean;
  maxLength?: number;
  text1: string;
  text2?: string;
  text3?: string;
  text4?: string;
};

const SimpleForm: FC<propsType> = ({
  isLimitText,
  placeholder,
  maxLength,
  text1,
  text2,
  text3,
  text4,
}) => {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <div className={style.input}>
          <Input
            isLimitText={isLimitText}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </div>
        <Button extraClass={style.button} text={text1} />
        {text2 && <Button extraClass={style.button} text={text2} />}
        {text3 && <Button extraClass={style.button} text={text3} />}
        {text4 && <Button extraClass={style.button} text={text4} />}
      </form>
    </div>
  );
};

export default SimpleForm;
