import { Dispatch, SetStateAction } from "react";

export type TextareaComponentProps = {
  callback: Dispatch<SetStateAction<string>>;
  label: string;
};
