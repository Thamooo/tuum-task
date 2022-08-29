import { CustomInput } from "./parts/Input";
import "./../scss/components/Form.scss";
import { Mail } from "./parts/Mail";
import { Emails } from "./Emails";
import { CustomSelect } from "./parts/Select";
import CountryJSON from "./../db/country.json";
import IndustriesJSON from "./../db/industries.json";
import OperatingGeographyJSON from "../db/operating_geography.json";
import { CustomTextArea } from "./parts/Textarea";
import { CustomCheckbox } from "./parts/Checkbox";
import { CustomButton } from "./parts/Button";

const checkboxText1: React.FC = () => (
  <>
    By submitting this form I accept{" "}
    <a target="_blank" href="https://tuumplatform.com/privacy-policy/">
      privacy policy
    </a>{" "}
    and{" "}
    <a target="_blank" href="https://tuumplatform.com/cookie-policy/">
      cookie policy.
    </a>
  </>
);

const checkboxText2: React.FC = () => <>I would like to receive your newsletter.</>;

export const Form: React.FC = () => {
  return (
    <div className="form">
      <div className="form__holder">
        <div className="form__contacts">
          <Emails />
        </div>
        <div className="form__main">
          <h1>Contact us</h1>
          <div className="form__fields">
            <div className="form__fields__grid">
              <CustomInput required={true} callback={console.log} placeholder="First name" />
              <CustomInput callback={console.log} placeholder="Last name" />
              <CustomInput required={true} callback={console.log} placeholder="Email" />
              <CustomInput callback={console.log} placeholder="Job title" />
              <CustomInput required={true} callback={console.log} placeholder="Company name" />
              <CustomSelect required={true} options={IndustriesJSON} callback={console.log} placeholder="Industry" />
              <CustomSelect required={true} options={CountryJSON} callback={console.log} placeholder="Country" />
              <CustomSelect options={OperatingGeographyJSON} callback={console.log} placeholder="Operating geography" />
            </div>
          </div>
          <div className="form__end">
            <CustomTextArea callback={console.log} label={"What would you like to talk about?"} />
            <CustomCheckbox required={true} Text={checkboxText1} />
            <CustomCheckbox Text={checkboxText2} />
            <CustomButton callback={console.log} text="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};
