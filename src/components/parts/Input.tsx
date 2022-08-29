import { InputComponentProps } from "../../types/components/inputs/Input";
import "./../../scss/components/parts/Input.scss";

export const CustomInput: React.FC<InputComponentProps> = ({ placeholder = "", callback, required = false }) => {
  return (
    <input
      className="input"
      onChange={(e) => {
        callback(e.target.value);
      }}
      placeholder={`${placeholder}${required ? "*" : ""}`}
    ></input>
  );
};
