import { ButtonComponentProps } from "../../types/components/inputs/Button";
import "./../../scss/components/parts/Button.scss";

export const CustomButton: React.FC<ButtonComponentProps> = ({ callback, text }) => {
  const handleClick = () => {
    callback();
  };
  return (
    <button onClick={handleClick} className={`btn`}>
      {text}
    </button>
  );
};
