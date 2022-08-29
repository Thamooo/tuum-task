import ReactSelect from "react-select";
import { SelectComponentProps } from "../../types/components/inputs/Select";
import "./../../scss/components/parts/Select.scss";

export const CustomSelect: React.FC<SelectComponentProps> = ({ callback, required = false, options, className = "select", classNamePrefix = "select", placeholder }) => {
  //Needed to erase all of the initial styles
  const styleProxy = new Proxy(
    {},
    {
      get: (target, propKey) => () => {},
    }
  );

  return (
    <ReactSelect
      onChange={(change) => {
        callback(change);
      }}
      placeholder={`${placeholder}${required ? "*" : ""}`}
      styles={styleProxy}
      classNamePrefix={classNamePrefix}
      className={className}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      options={options}
      captureMenuScroll={false}
    />
  );
};
