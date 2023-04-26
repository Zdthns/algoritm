import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../form/simple-form";
import { TFilsetBtn, TFilsetInput } from "../form/typeForm";
import ListFormIndex from "./listFormIndex";

export const ListPage: React.FC = () => {
  const handlerChange = () => {};
  const handlerSubmit = () => {};

  const filsetInput: TFilsetInput = {
    value: "",
    maxLength: 4,
    isLimitText: true,
    placeholder: "Введите значение",
    handlerChange: handlerChange,
    extraClass: "",
  };
  const filsetBtn: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: false,
    disabled: false,
    text: "Добавить в head",
    linkedList: "small",
  };
  const filsetBtn2: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: false,
    disabled: false,
    text: "Добавить в tail",
    linkedList: "small",
  };
  const filsetBtn3: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: false,
    disabled: false,
    text: "Удалить из head",
    linkedList: "small",
  };
  const filsetBtn4: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: false,
    disabled: false,
    text: "Удалить из tail",
    linkedList: "small",
  };
  return (
    <SolutionLayout title="Связный список">
      <div className={style.wrapper}>
        <SimpleForm
          filsetInput={filsetInput}
          filsetBtn={filsetBtn}
          filsetBtn2={filsetBtn2}
          filsetBtn3={filsetBtn3}
          filsetBtn4={filsetBtn4}
        />
        <div>
          <ListFormIndex />
        </div>
        {/*<form className={style.form}>
          <div className={style.container}>
            <div className={style.input}>
              <Input placeholder="Введите значение" />
            </div>
            <Button text="Добавить в head" />
            <Button text="Добавить в tail" />
            <Button text="Удалить из head" />
            <Button text="Удалить из tail" />
          </div>
          <div className={style.container}>
            <div className={style.input}>
              <Input placeholder="Введите индекс" />
            </div>
            <div className={style.container}>
              <Button text="Добавить по индексу" />
              <Button text="Удалить по индексу" />
            </div>
          </div>
        </form>*/}
        <div className={style.animationBlock}>
          <Circle />
        </div>
      </div>
    </SolutionLayout>
  );
};
