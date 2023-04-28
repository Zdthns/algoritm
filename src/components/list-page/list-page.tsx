import React, { useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import style from "./style.module.css";
import { Circle } from "../ui/circle/circle";
import SimpleForm from "../form/simple-form";
import { TFilsetBtn, TFilsetInput } from "../form/typeForm";

import { ElementStates, ItemArray } from "../../types/element-states";
import { LinkedList } from "./List";
import { delay, DELAY_IN_MS } from "../../constants/delays";
import { ArrowIcon } from "../ui/icons/arrow-icon";
import { randomArr } from "../../utils/randomArr";

export type TListElement = ItemArray<string> & {
  head?: boolean;
  tail?: boolean;
  isAdded?: boolean;
  isRemoved?: boolean;
  newCircle?: {
    item: string;
  } | null;
};

const startArray = [0, 100, 6, 4];

const linkedList = new LinkedList<string | number>(startArray);

export const ListPage: React.FC = () => {
  const inicialArray: Array<TListElement> = startArray.map(
    (item, index, array) => ({
      item: `${item}`,
      state: ElementStates.Default,
      head: index === 0 ? true : false,
      tail: index === array.length - 1 ? true : false,
      isAdded: false,
      isRemoved: false,
      newCircle: null,
    })
  );

  const [inputValue, setInputValue] = useState<string>("");
  const [inputIndex, setInputIndex] = useState<number>(0);

  const [array, setArray] = useState<Array<TListElement>>(inicialArray);

  const [addHead, setAddHead] = useState<boolean>(false);
  const [addTail, setAddTail] = useState<boolean>(false);
  const [removeHead, setRemoveHead] = useState<boolean>(false);
  const [removeTail, setRemoveTail] = useState<boolean>(false);
  const [addByIndex, setAddByIndex] = useState<boolean>(false);
  const [removeByIndex, setRemoveByIndex] = useState<boolean>(false);

  const handlerChange = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    if (evt.currentTarget.type === "text") {
      setInputValue(evt.currentTarget.value);
    } else {
      setInputIndex(+evt.currentTarget.value);
    }
  };

  const handlerAddHead = async () => {
    setAddHead(true);
    linkedList.prepend(inputValue);

    if (linkedList.getSize() > 1) {
      array[0] = {
        ...array[0],
        isAdded: true,
        head: false,
        newCircle: { item: inputValue },
        state: ElementStates.Changing,
      };
    } else {
      array[0] = {
        item: inputValue,
        isAdded: true,
        head: true,
        newCircle: null,
        state: ElementStates.Changing,
      };
    }
    setArray([...array]);

    await delay(DELAY_IN_MS);

    if (linkedList.getSize() > 1) {
      array[0] = {
        ...array[0],
        isAdded: false,
        head: false,
        newCircle: null,
        state: ElementStates.Default,
      };
    } else {
      array[0] = {
        item: inputValue,
        isAdded: false,
        head: true,
        tail: true,
        newCircle: null,
        state: ElementStates.Default,
      };
    }
    setArray([...array]);

    await delay(DELAY_IN_MS);

    if (linkedList.getSize() > 1) {
      array.unshift({ item: inputValue, state: ElementStates.Modified });
      setArray([...array]);
      await delay(DELAY_IN_MS);
    }

    array[0] = {
      ...array[0],
      state: ElementStates.Default,
      head: true,
    };
    setArray([...array]);
    setInputValue("");
    setAddHead(false);
  };

  const handlerAddTail = async () => {
    setAddTail(true);
    linkedList.append(inputValue);

    if (linkedList.getSize() > 0) {
      array[array.length - 1] = {
        ...array[array.length - 1],
        tail: false,
        isAdded: true,
        newCircle: { item: inputValue },
        state: ElementStates.Changing,
      };
    } else {
      array[0] = {
        item: inputValue,
        head: true,
        tail: true,
        isAdded: true,
        newCircle: null,
        state: ElementStates.Changing,
      };
    }
    setArray([...array]);

    await delay(DELAY_IN_MS);

    if (linkedList.getSize() > 0) {
      array[array.length - 1] = {
        ...array[array.length - 1],
        tail: false,
        isAdded: false,
        newCircle: null,
        state: ElementStates.Default,
      };
    } else {
      array[0] = {
        item: inputValue,
        head: true,
        tail: true,
        isAdded: false,
        newCircle: null,
        state: ElementStates.Default,
      };
    }

    setArray([...array]);

    await delay(DELAY_IN_MS);

    if (linkedList.getSize() > 0) {
      array.push({ item: inputValue, state: ElementStates.Modified });
      setArray([...array]);
      await delay(DELAY_IN_MS);
    }

    array[array.length - 1] = {
      ...array[array.length - 1],
      tail: true,
      state: ElementStates.Default,
    };
    array[array.length - 2] = {
      ...array[array.length - 2],
      tail: false,
    };
    setArray([...array]);
    setInputValue("");
    setAddTail(false);
  };

  const handlerRemoveHead = async () => {
    setRemoveHead(true);
    linkedList.deleteHead();
    if (linkedList.getSize() > 0) {
      array[0] = {
        ...array[0],
        head: false,
        state: ElementStates.Changing,
        item: "",
        isRemoved: true,
        newCircle: { item: array[0].item },
      };
    } else {
      array[0] = {
        ...array[0],
        head: false,
        tail: false,
        state: ElementStates.Changing,
        item: "",
        isRemoved: true,
        newCircle: { item: array[0].item },
      };
    }
    setArray([...array]);

    await delay(DELAY_IN_MS);

    array[0].state = ElementStates.Modified;
    array.shift();
    setArray([...array]);

    await delay(DELAY_IN_MS);
    if (linkedList.getSize() > 0) {
      array[0] = {
        ...array[0],
        state: ElementStates.Default,
        head: true,
      };
      setArray([...array]);
    }
    setInputValue("");
    setRemoveHead(false);
  };

  const handlerRemoveTail = async () => {
    setRemoveTail(true);
    linkedList.deleteTail();
    array[array.length - 1] = {
      ...array[array.length - 1],
      tail: false,
      state: ElementStates.Changing,
      item: "",
      isRemoved: true,
      newCircle: { item: array[array.length - 1].item },
    };
    setArray([...array]);
    await delay(DELAY_IN_MS);

    if (linkedList.getSize() > 0) {
      array.pop();
      array[array.length - 1].state = ElementStates.Modified;
      setArray([...array]);

      await delay(DELAY_IN_MS);

      array[array.length - 1].state = ElementStates.Default;
      array[array.length - 1].tail = true;
    } else {
      array.pop();
    }

    setArray([...array]);
    setInputValue("");
    setRemoveTail(false);
  };

  const handlerAddByIndex = async () => {
    setAddByIndex(true);
    linkedList.insertAt(inputValue, inputIndex);
    for (let i = 0; i <= inputIndex; i++) {
      array[i] = {
        ...array[i],
        state: ElementStates.Changing,
        isAdded: true,
        newCircle: { item: inputValue },
      };
      if (i > 0) {
        array[i - 1] = {
          ...array[i - 1],
          state: ElementStates.Changing,
          isAdded: false,
          newCircle: null,
        };
      }
      setArray([...array]);

      await delay(DELAY_IN_MS);
    }
    array[inputIndex] = {
      ...array[inputIndex!],
      isAdded: false,
      newCircle: null,
    };
    array.splice(inputIndex, 0, {
      item: inputValue,
      state: ElementStates.Modified,
    });
    setArray([...array]);

    await delay(DELAY_IN_MS);

    array.forEach((item) => (item.state = ElementStates.Default));
    setArray([...array]);
    array[1].head = false;
    array[0].head = true;
    setArray([...array]);
    setInputValue("");
    setInputIndex(0);
    setAddByIndex(false);
  };

  const handlerRemoveByIndex = async () => {
    setRemoveByIndex(true);
    for (let i = 0; i <= inputIndex; i++) {
      array[i].state = ElementStates.Changing;
      setArray([...array]);

      await delay(DELAY_IN_MS);
    }
    array[inputIndex] = {
      ...array[inputIndex],
      item: "",
      isRemoved: true,
      newCircle: { item: array[inputIndex].item },
    };
    setArray([...array]);

    await delay(DELAY_IN_MS);

    array.splice(inputIndex, 1);
    setArray([...array]);

    await delay(DELAY_IN_MS);

    array.forEach((item) => (item.state = ElementStates.Default));
    setArray([...array]);

    array[array.length - 1].tail = true;
    array[0].head = true;
    setArray([...array]);
    setInputValue("");
    setInputIndex(0);
    setRemoveByIndex(false);
  };

  const isDisabledBtnAdd = inputValue === "" || array.length > 5;
  const isDisabledBtnRemove = array.length < 1;

  const filsetInput: TFilsetInput = {
    value: inputValue,
    type: "text",
    maxLength: 4,
    isLimitText: true,
    placeholder: "Введите значение",
    handlerChange: handlerChange,
    extraClass: "",
    disabled: array.length > 5,
    styles: style.input,
  };
  const filsetBtn: TFilsetBtn = {
    handlerSubmit: handlerAddHead,
    isLoader: addHead,
    text: "Добавить в head",
    linkedList: "small",
    disabled:
      addTail ||
      removeHead ||
      removeTail ||
      addByIndex ||
      removeByIndex ||
      isDisabledBtnAdd,
    styles: style.button1,
  };
  const filsetBtn2: TFilsetBtn = {
    handlerSubmit: handlerAddTail,
    isLoader: addTail,
    text: "Добавить в tail",
    linkedList: "small",
    disabled:
      addHead ||
      removeHead ||
      removeTail ||
      addByIndex ||
      removeByIndex ||
      isDisabledBtnAdd,
    styles: style.button1,
  };
  const filsetBtn3: TFilsetBtn = {
    handlerSubmit: handlerRemoveHead,
    isLoader: removeHead,
    disabled:
      addHead ||
      addTail ||
      removeTail ||
      addByIndex ||
      removeByIndex ||
      isDisabledBtnRemove,
    text: "Удалить из head",
    linkedList: "small",
    styles: style.button1,
  };
  const filsetBtn4: TFilsetBtn = {
    handlerSubmit: handlerRemoveTail,
    isLoader: removeTail,
    disabled:
      addHead ||
      addTail ||
      removeHead ||
      addByIndex ||
      removeByIndex ||
      isDisabledBtnRemove,
    text: "Удалить из tail",
    linkedList: "small",
    styles: style.button1,
  };
  ////

  const filsetInputIndex: TFilsetInput = {
    value: inputIndex,
    type: "number",
    maxLength: 4,
    isLimitText: false,
    max: array.length - 1,
    min: 0,
    placeholder: "Введите индекс",
    handlerChange: handlerChange,
    styles: style.input,
  };
  const filsetBtnIndex: TFilsetBtn = {
    handlerSubmit: handlerAddByIndex,
    isLoader: addByIndex,
    disabled:
      addHead ||
      addTail ||
      removeHead ||
      removeTail ||
      removeByIndex ||
      (inputIndex !== 0 && inputValue === "") ||
      !inputIndex ||
      array.length >= 8 ||
      +inputIndex > array.length - 1,
    text: "Добавить по индексу",
    linkedList: "small",
    styles: style.button2,
  };
  const filsetBtnIndex2: TFilsetBtn = {
    handlerSubmit: handlerRemoveByIndex,
    isLoader: removeByIndex,
    disabled:
      addHead ||
      addTail ||
      removeHead ||
      removeTail ||
      addByIndex ||
      array.length <= 1 ||
      !inputIndex ||
      +inputIndex > array.length - 1,
    text: "Удалить по индексу",
    linkedList: "small",
    styles: style.button2,
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
          <SimpleForm
            filsetInput={filsetInputIndex}
            filsetBtn={filsetBtnIndex}
            filsetBtn2={filsetBtnIndex2}
          />
        </div>
        <div className={style.animationBlock}>
          {array.map((item, index) => (
            <div className={style.circle} key={index}>
              <Circle
                key={index}
                index={index}
                letter={"" + item.item}
                head={item.head ? "head" : ""}
                tail={item.tail ? "tail" : ""}
                state={item.state}
              />
              {index < array.length - 1 && (
                <ArrowIcon
                  fill={
                    item.state === ElementStates.Changing
                      ? "#d252e1"
                      : "#0032ff"
                  }
                />
              )}

              {item.isAdded && item.newCircle?.item !== undefined && (
                <Circle
                  isSmall={true}
                  state={ElementStates.Changing}
                  letter={"" + item.newCircle.item}
                  extraClass={style.circle__add}
                />
              )}

              {item.isRemoved && item.newCircle?.item !== null && (
                <Circle
                  isSmall={true}
                  state={ElementStates.Changing}
                  letter={"" + item.newCircle?.item}
                  extraClass={style.circle__remove}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
