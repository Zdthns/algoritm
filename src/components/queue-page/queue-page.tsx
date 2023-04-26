import React, { useEffect, useMemo, useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../form/simple-form";
import { TFilsetInput, TFilsetBtn } from "../form/typeForm";

import { Queue } from "./Queue";
import { delay, SHORT_DELAY_IN_MS } from "../../constants/delays";
import { ElementStates, ItemArray } from "../../types/element-states";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";

export type TQueueArr = ItemArray<string | null> & {
  head?: boolean;
  tail?: boolean;
};
const sizeQueue: number = 7;
const queue = new Queue<string>(sizeQueue);

export const QueuePage: React.FC = () => {
  //const sizeQueue: number = 7;
  //const queue = useMemo(() => new Queue<string>(sizeQueue), []);

  const initialArr: Array<TQueueArr> = Array.from(
    { length: sizeQueue },
    () => ({
      item: "",
      state: ElementStates.Default,
      head: false,
      tail: false,
    })
  );

  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState<TQueueArr[]>(initialArr);

  const [disabledBtn, setDisabledBtn] = React.useState({
    push: false,
    pop: false,
    clear: false,
  });
  const [loader, setLoader] = React.useState({
    push: false,
    pop: false,
    clear: false,
  });
  useEffect(() => {
    !inputValue
      ? setDisabledBtn({ push: true, pop: true, clear: true })
      : setDisabledBtn({ push: false, pop: true, clear: true });
  }, [inputValue]);
  useEffect(() => {
    array.some((item) => {
      return item.item !== "";
    })
      ? setDisabledBtn({ push: true, pop: false, clear: false })
      : setDisabledBtn({ push: true, pop: true, clear: true });
  }, [array]);

  /////////

  const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(evt.currentTarget.value);
    setInputValue(evt.currentTarget.value);
  };

  const handlerSubmitPush = async () => {
    if (queue.qLength >= queue.qSize) {
      setDisabledBtn({ ...disabledBtn, push: true });
      return;
    }
    queue.enqueue(inputValue);
    setLoader({ ...loader, push: true });

    array[queue.getHead()].head = true;
    if (queue.getTail() > 0) {
      array[queue.getTail() - 1].tail = false;
    }
    array[queue.getTail()].tail = true;
    array[queue.getTail()].item = inputValue;
    array[queue.getTail()].state = ElementStates.Changing;

    setInputValue("");
    await delay(SHORT_DELAY_IN_MS);
    array[queue.getTail()].state = ElementStates.Default;
    setArray([...array]);

    await delay(SHORT_DELAY_IN_MS);
    setArray([...array]);
    array[queue.getTail()].state = ElementStates.Default;
    setArray([...array]);
    setLoader({ ...loader, push: false });
    setDisabledBtn({ push: true, pop: false, clear: false });
  };
  const handlerSubmitPop = async () => {
    if (queue.getHead() === queue.getTail()) {
      setLoader({ ...loader, pop: true });

      array[queue.getHead()].state = ElementStates.Changing;
      setArray([...array]);
      await delay(SHORT_DELAY_IN_MS);
      array[queue.getHead()].state = ElementStates.Default;

      handlerSubmitClear();
      setLoader({ ...loader, pop: false });
    } else {
      setLoader({ ...loader, pop: true });
      setArray([...array]);
      queue.dequeue();
      array[queue.getHead() - 1].state = ElementStates.Changing;
      await delay(SHORT_DELAY_IN_MS);

      array[queue.getHead() - 1].state = ElementStates.Default;

      if (queue.getHead() > 0) {
        array[queue.getHead() - 1].head = false;
        array[queue.getHead() - 1].item = "";
      }
      array[queue.getHead()].head = true;
      setArray([...array]);
      setLoader({ ...loader, pop: false });
    }
  };
  const handlerSubmitClear = async () => {
    queue.clear();
    setLoader({ ...loader, clear: true });
    setArray([...initialArr]);
    setInputValue("");
    await delay(SHORT_DELAY_IN_MS);
    setLoader({ ...loader, clear: false });
  };
  const filsetInput: TFilsetInput = {
    value: inputValue,
    maxLength: 4,
    isLimitText: false,
    placeholder: "Введите значение",
    handlerChange: handlerChange,
    extraClass: "",
  };
  const filsetBtn: TFilsetBtn = {
    handlerSubmit: handlerSubmitPush,
    isLoader: loader.push,
    disabled: disabledBtn.push,
    text: "Добавить",
    linkedList: "small",
  };
  const filsetBtn2: TFilsetBtn = {
    handlerSubmit: handlerSubmitPop,
    isLoader: loader.pop,
    disabled: disabledBtn.pop,
    text: "Удалить",
    linkedList: "small",
  };
  const filsetBtn3: TFilsetBtn = {
    handlerSubmit: handlerSubmitClear,
    isLoader: loader.clear,
    disabled: disabledBtn.clear,
    text: "Очистить",
    linkedList: "small",
  };
  return (
    <SolutionLayout title="Очередь">
      <div className={style.wrapper}>
        <SimpleForm
          filsetInput={filsetInput}
          filsetBtn={filsetBtn}
          filsetBtn2={filsetBtn2}
          filsetBtn3={filsetBtn3}
        />
        <div className={style.animationBlock}>
          {array?.map((item, index) => (
            <Circle
              key={index}
              state={item.state}
              letter={`${item.item}`}
              index={index}
              head={item.head ? "head" : ""}
              tail={item.tail ? "tail" : ""}
            />
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
