import React, { useState } from "react";
import { Props } from "./props";

const Input: React.FC<Props> = ({
  label = "Поле",
  value,
  errorText,
  onChange
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);
  const handleChange = (value: string) => onChange(value);

  const fieldCn = `field
    ${isActive ? "active" : ""}
    ${value ? "filled" : ""}
  `;

  return (
    <div className="field-wrapper">
      <div className={fieldCn}>
        <input
          type="text"
          value={value}
          placeholder={label}
          onChange={e => handleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label>{label}</label>
      </div>
      <span className="error">{errorText}</span>
    </div>
  );
};

export default Input;
