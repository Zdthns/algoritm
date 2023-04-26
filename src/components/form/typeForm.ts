export type TFilsetInput = {
  value: any;
  maxLength?: number;
  isLimitText: boolean;
  placeholder?: string;
  handlerChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  max?: number;
  min?: number;
  extraClass?: string
}

export type TFilsetBtn = {
  handlerSubmit: React.FormEventHandler<HTMLButtonElement>;
  isLoader?: boolean;
  disabled?: boolean;
  text: string;
  linkedList?: "big" | "small" | undefined;
  extraClass?: string
}

export type TForm = {
  filsetInput: TFilsetInput
  filsetBtn: TFilsetBtn
  filsetBtn2?: TFilsetBtn
  filsetBtn3?: TFilsetBtn
  filsetBtn4?: TFilsetBtn
}