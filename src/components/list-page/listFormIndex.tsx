import React from "react";
import SimpleForm from "../form/simple-form";
import { TFilsetInput, TFilsetBtn } from "../form/typeForm";
import style from "./style.module.css";

function ListFormIndex() {
  const handlerChange = () => {};
  const handlerSubmit = () => {};

  const filsetInput: TFilsetInput = {
    value: "",
    maxLength: 4,
    isLimitText: false,
    placeholder: "Введите индекс",
    handlerChange: handlerChange,
    extraClass: "",
  };
  const filsetBtn: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: false,
    disabled: false,
    text: "Добавить по индексу",
    linkedList: "small",
  };
  const filsetBtn2: TFilsetBtn = {
    handlerSubmit: handlerSubmit,
    isLoader: false,
    disabled: false,
    text: "Удалить по индексуl",
    linkedList: "small",
  };
  return (
    <div className={style.containerForm}>
      <SimpleForm
        filsetInput={filsetInput}
        filsetBtn={filsetBtn}
        filsetBtn2={filsetBtn2}
      />
    </div>
  );
}

export default ListFormIndex;
