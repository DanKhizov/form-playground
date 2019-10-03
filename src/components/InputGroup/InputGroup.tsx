import React, { useState, useEffect } from "react";
import { Props } from "./props";
import Input from "../Input";

const InputGroup: React.FC<Props> = ({
  label = "Поле",
  validate,
  onChange
}) => {
  const [fields, setFields] = useState([{ value: "" }]);
  useEffect(() => {
    onChange(fields);
    // eslint-disable-next-line
  }, [fields]);

  const handleChange = (i: number, value: string) => {
    const values = [...fields];
    values[i].value = value;
    setFields(values);
  };

  const handleAdd = () => {
    const values = [...fields];
    values.push({ value: "" });
    setFields(values);
  };

  return (
    <div className="input-group">
      <button type="button" onClick={handleAdd}>
        +
      </button>
      {fields.map((field, i) => {
        return (
          <Input
            key={`${field}-${i}`}
            label={label}
            value={fields[i].value}
            onChange={value => handleChange(i, value)}
            errorText={validate ? validate(fields[i].value) : ""}
          />
        );
      })}
    </div>
  );
};

export default InputGroup;
