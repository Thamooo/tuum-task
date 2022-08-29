import { TextareaComponentProps } from "../../types/components/inputs/Textarea";
import "../../scss/components/parts/Textarea.scss";

export const CustomTextArea: React.FC<TextareaComponentProps> = ({ label = "", callback }) => {
  return (
    <label className="textarea">
      <label>{label}</label>
      <textarea
        onChange={(e) => {
          callback(e.target.value);
        }}
      ></textarea>
    </label>
  );
};
