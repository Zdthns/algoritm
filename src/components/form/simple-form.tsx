import React, { FC } from "react";
import style from "./style.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";

type propsType = {
  placeholder?: string;
  isLimitText: boolean;
  maxLength?: number;
  linkedList?: "big" | "small" | undefined;
  isLoader?: boolean;
  disabled?: boolean;
  handlerChange: React.ChangeEventHandler<HTMLInputElement>;
  handlerSubmit?: React.FormEventHandler<HTMLButtonElement>;
  onClick1?: React.MouseEventHandler<HTMLButtonElement>;
  onClick2?: React.MouseEventHandler<HTMLButtonElement>;
  onClick3?: React.MouseEventHandler<HTMLButtonElement>;
  onClick4?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
  value?: any;
  max?: number;
  min?: number;
  text1: string;
  text2?: string;
  text3?: string;
  text4?: string;
};

const SimpleForm: FC<propsType> = ({
  isLimitText,
  placeholder,
  maxLength,
  linkedList,
  isLoader,
  disabled,
  handlerChange,
  handlerSubmit,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  type,
  value,
  max,
  min,
  text1,
  text2,
  text3,
  text4,
}) => {
  //React.useEffect(() => {
  //  const bcs = (evt: KeyboardEvent) => {
  //    if (evt.key === "Васkspace") {
  //      value = "";
  //    }
  //  };
  //});
  return (
    <div className={style.container}>
      <form className={style.form}>
        <div className={style.input}>
          <Input
            isLimitText={isLimitText}
            max={maxLength}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={handlerChange}
            type={type}
            value={value}
          />
        </div>
        <Button
          extraClass={style.button}
          text={text1}
          linkedList={linkedList}
          disabled={disabled}
          isLoader={isLoader}
          onClick={handlerSubmit}
        />
        {text2 && <Button extraClass={style.button} text={text2} />}
        {text3 && <Button extraClass={style.button} text={text3} />}
        {text4 && <Button extraClass={style.button} text={text4} />}
      </form>
    </div>
  );
};

export default SimpleForm;
