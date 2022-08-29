import { Mail } from "./parts/Mail";
import "./../scss/components/Mails.scss";

export const Emails: React.FC = () => {
  return (
    <div className="mails">
      <Mail title="Media enquiries" mail="press@tuumplatform.com" />
      <Mail title="Career questions" mail="careers@tuumplatform.com" />
    </div>
  );
};
