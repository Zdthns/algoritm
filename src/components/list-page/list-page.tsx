import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { Input } from "../ui/input/input";
import SimpleForm from "../ui/form/simple-form";

export const ListPage: React.FC = () => {
  const handlerChange = () => {};
  const handleSubmit = () => {};
  return (
    <SolutionLayout title="Связный список">
      <div className={style.wrapper}>
        <SimpleForm
          isLimitText={false}
          placeholder="Введите значение"
          text1="Добавить в head"
          text2="Добавить в tail"
          text3="Удалить из head"
          text4="Удалить из tail"
        />
        <div className={style.containerForm}>
          <SimpleForm
            placeholder="Введите индекс"
            isLimitText={false}
            text1="Добавить по индексу"
            text2="Удалить по индексу"
          />
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
