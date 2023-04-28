type IStack<T> = {
  push: (item: T) => void;
  pop: () => void;
  clear: () => void;
};

export class Stack<T> implements IStack<T> {
  private container: T[] = [];

  push = (item: T): void => { // добавляет элементы в конец,
    this.container.push(item);
  };

  pop = (): void => { // извлекает элемент из конца
    if (this.size > 1) {
      this.container.pop();
    } else {
      return;
    }
  };

  peak = () => {
    if (this.size !== 0) {
      return this.container[this.size - 1];
    };
    return undefined;
  };

  clear = (): void => {
    this.container = []; // очищает
  };

  get size() {
    return this.container.length;
  };

  get elements() {
    return this.container;
  };
};