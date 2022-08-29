import { EmailComponentProps } from "../../types/components/inputs/Mail";
import "./../../scss/components/parts/Mail.scss";

export const Mail: React.FC<EmailComponentProps> = ({ title, mail }) => {
  return (
    <div className="mail">
      <p className="mail__title">{title}:</p>
      <a className="mail__link" href={`mailto:${mail}`}>
        {mail}
      </a>
    </div>
  );
};
