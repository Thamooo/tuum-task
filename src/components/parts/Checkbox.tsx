import { CheckboxComponentProps } from "../../types/components/inputs/Checkbox";
import "./../../scss/components/parts/Checkbox.scss";

export const CustomCheckbox: React.FC<CheckboxComponentProps> = ({ required = false, Text }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <div className="checkbox__text">
        <Text />
        {required ? "*" : ""}
      </div>
    </label>
  );
};
