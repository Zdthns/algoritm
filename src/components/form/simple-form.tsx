import React, { FC } from "react";
import style from "./style.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { TForm } from "./typeForm";

const SimpleForm: FC<TForm> = ({
  filsetInput,
  filsetBtn,
  filsetBtn2,
  filsetBtn3,
  filsetBtn4,
}) => {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <div className={style.input}>
          <Input
            isLimitText={filsetInput.isLimitText}
            max={filsetInput.maxLength}
            maxLength={filsetInput.maxLength}
            placeholder={filsetInput.placeholder}
            onChange={filsetInput.handlerChange}
            type={filsetInput.type}
            value={filsetInput.value}
          />
        </div>
        <Button
          extraClass={style.button}
          text={filsetBtn.text}
          linkedList={filsetBtn.linkedList}
          disabled={filsetBtn.disabled}
          isLoader={filsetBtn.isLoader}
          onClick={filsetBtn.handlerSubmit}
        />
        {filsetBtn2 && (
          <Button
            extraClass={style.button}
            text={filsetBtn2.text}
            linkedList={filsetBtn2.linkedList}
            disabled={filsetBtn2.disabled}
            isLoader={filsetBtn2.isLoader}
            onClick={filsetBtn2.handlerSubmit}
          />
        )}
        {filsetBtn3 && (
          <Button
            extraClass={style.button}
            text={filsetBtn3.text}
            linkedList={filsetBtn3.linkedList}
            disabled={filsetBtn3.disabled}
            isLoader={filsetBtn3.isLoader}
            onClick={filsetBtn3.handlerSubmit}
          />
        )}
        {filsetBtn4 && (
          <Button
            extraClass={style.button}
            text={filsetBtn4.text}
            linkedList={filsetBtn4.linkedList}
            disabled={filsetBtn4.disabled}
            isLoader={filsetBtn4.isLoader}
            onClick={filsetBtn4.handlerSubmit}
          />
        )}
      </form>
    </div>
  );
};

export default SimpleForm;
