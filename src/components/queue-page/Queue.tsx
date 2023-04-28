import { type } from "os";
import React, { Component } from "react";

type TQueue<T> = {
  enqueue: (item: T) => void;
  dequeue: () => void;
  clear: () => void;
  peak: () => T | null;
  getHead: () => number;
  getTail: () => number;
};
type IQueue<T> = {
  enqueue: (item: T) => void;
  dequeue: () => void;
  peak: () => T | null;
};

export class Queue<T> implements IQueue<T> {
  private container: (T | null)[] = [];
  private head = 0;
  private tail = 0;
  private readonly size: number = 0;
  private length: number = 0;

  constructor(size: number) {
    this.size = size;
    this.container = Array(size);
  }

  enqueue = (value: T) => {
    if (this.length >= this.size) {
      throw new Error("Maximum length exceeded");
    } else {
      this.container[this.tail % this.size] = value;
      this.tail++;
      this.length++;
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error("No elements in the queue");
    } else if (this.head === this.size) {
      this.head = 0;
    } else {
      this.container[this.head % this.size] = null;
      this.head++;
      this.length--;
    }
  };

  peak = (): T | null => {
    if (this.isEmpty()) {
      throw new Error("No elements in the queue");
    }
    if (!this.isEmpty()) {
      return this.container[this.head];
    }
    return null;
  };

  clear = () => {
    this.container = [];
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  };

  getHead() {
    if (this.isEmpty()) {
      throw new Error("No elements in the queue");
    }
    return this.head;
  }

  getTail() {
    if (this.isEmpty()) {
      throw new Error("No elements in the queue");
    }
    return this.tail - 1;
  }

  isEmpty = () => this.length === 0;
  isFull = () => this.tail - 1 === 6;

  get elements() {
    return this.container;
  }

  get qLength() {
    return this.length;
  }

  get qSize() {
    return this.size;
  }
}

//const sizeQueue: number = 7;
//const queue = new Queue<string>(sizeQueue);

//export const QueuePage: React.FC = () => {
//  const initArr: Array<TQueueArr> = Array.from({ length: sizeQueue }, () => ({
//    item: "",
//    state: ElementStates.Default,
//    head: false,
//    tail: false,
//  }));

//  const [input, setInput] = useState<string>("");
//  const [queueArray, setQueueArray] = useState<Array<TQueueArr>>(initArr);
//  const [addBtn, setAddBtn] = useState<boolean>(true);
//  const [clearBtn, setClearBtn] = useState<boolean>(false);

//  const [loader, setLoader] = React.useState({
//    add: false,
//    delete: false,
//    remove: false,
//  });

//  useEffect(() => {
//    !input ? setAddBtn(true) : setAddBtn(false);
//    if (queue.isFull()) {
//      setAddBtn(true);
//    }
//  }, [input]);

//  useEffect(() => {
//    queueArray.some((item) => {
//      return item.item !== "";
//    })
//      ? setClearBtn(false)
//      : setClearBtn(true);
//  }, [queueArray]);

//  const handlerChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
//    setInput(e.currentTarget.value);
//  };

//  const handlerAddItem = async () => {
//    queue.enqueue(input);
//    setLoader({ ...loader, add: true });

//    queueArray[queue.getHead()].head = true;
//    if (queue.getTail() > 0) {
//      queueArray[queue.getTail() - 1].tail = false;
//    }

//    queueArray[queue.getTail()].item = input;
//    queueArray[queue.getTail()].state = ElementStates.Changing;
//    queueArray[queue.getTail()].tail = true;
//    setInput("");
//    await delay(SHORT_DELAY_IN_MS);
//    queueArray[queue.getTail()].state = ElementStates.Default;
//    setQueueArray([...queueArray]);
//    setLoader({ ...loader, add: false });
//  };

//  const handlerRemoveItem = async () => {
//    if (queue.getHead() === queue.getTail()) {
//      setLoader({ ...loader, delete: true });
//      queueArray[queue.getHead()].state = ElementStates.Changing;
//      setQueueArray([...queueArray]);
//      await delay(SHORT_DELAY_IN_MS);
//      queueArray[queue.getHead()].state = ElementStates.Default;

//      handlerClearQueue();
//      setLoader({ ...loader, delete: false });
//    } else {
//      setLoader({ ...loader, delete: true });
//      setQueueArray([...queueArray]);
//      queue.dequeue();
//      queueArray[queue.getHead() - 1].state = ElementStates.Changing;
//      await delay(SHORT_DELAY_IN_MS);

//      queueArray[queue.getHead() - 1].state = ElementStates.Default;

//      if (queue.getHead() > 0) {
//        queueArray[queue.getHead() - 1].head = false;
//        queueArray[queue.getHead() - 1].item = "";
//      }
//      queueArray[queue.getHead()].head = true;
//      setQueueArray([...queueArray]);
//      setLoader({ ...loader, delete: false });
//    }
//  };

//  const handlerClearQueue = async () => {
//    queue.clear();
//    setLoader({ ...loader, remove: true });
//    setQueueArray([...initArr]);
//    setInput("");
//    await delay(SHORT_DELAY_IN_MS);
//    setLoader({ ...loader, remove: false });
//  };

//  return (
//    <SolutionLayout title="Очередь">
//      <div className={style.container}>
//        <div className={style.container_buttons}>
//          <Input
//            extraClass={style.input}
//            onChange={handlerChangeInput}
//            placeholder="Введите текст"
//            maxLength={4}
//            isLimitText
//            value={input}
//          />
//          <Button
//            onClick={handlerAddItem}
//            text={"Добавить"}
//            disabled={addBtn}
//            isLoader={loader.add}
//          />
//          <Button
//            onClick={handlerRemoveItem}
//            text={"Удалить"}
//            disabled={clearBtn}
//            isLoader={loader.delete}
//          />
//        </div>
//        <Button
//          onClick={handlerClearQueue}
//          text={"Очистить"}
//          disabled={clearBtn}
//          isLoader={loader.remove}
//        />
//      </div>
//      <div className={style.container__circle}>
//        {queueArray?.map((item, index) => (
//          <Circle
//            key={index}
//            state={item.state}
//            letter={`${item.item}`}
//            index={index}
//            head={item.head ? "head" : ""}
//            tail={item.tail ? "tail" : ""}
//          />
//        ))}
//      </div>
//    </SolutionLayout>
//  );
//};
