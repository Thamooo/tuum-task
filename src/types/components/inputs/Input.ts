import { Dispatch, SetStateAction } from "react";

export type InputComponentProps = {
  callback: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  required?: boolean;
};
