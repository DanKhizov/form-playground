import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import {
  validateEmail,
  validateFirstNameAndLastName,
  validatePhoneNumber
} from "../../validations/validations";
import { labels } from "../../constants/labels";

import { Props } from "./props";
import SignupSuccess from "../SignupSuccess";
import Plate from "../Plate";
import InputGroup from "../InputGroup";

const Form: React.FC<Props> = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [fieldValues, setFieldValues] = useState({
    name: "",
    email: "",
    phoneNumbers: [{ value: "" }] as { value: string }[]
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumbers: ""
  });

  useEffect(() => {
    setErrors({
      name: validateFirstNameAndLastName(fieldValues.name),
      email: validateEmail(fieldValues.email),
      phoneNumbers: validatePhoneNumber(fieldValues.phoneNumbers[0].value)
    });
  }, [fieldValues]);

  const changeField = (name: string) => (value: string) => {
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const hasNoErrors = Object.values(errors).every(error => error === "");

    if (hasNoErrors) {
      setIsConfirmed(true);
    } else {
      setIsConfirmed(false);
    }
  };

  if (isConfirmed) {
    return (
      <Plate>
        <SignupSuccess fieldValues={fieldValues} />
      </Plate>
    );
  }

  return (
    <Plate>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <div className="form-field">
          <Input
            label={labels.name}
            value={fieldValues.name}
            onChange={changeField("name")}
            errorText={errors.name}
          />
        </div>
        <div className="form-field">
          <Input
            label={labels.email}
            value={fieldValues.email}
            onChange={changeField("email")}
            errorText={errors.email}
          />
        </div>
        <div className="form-field">
          <InputGroup
            label={labels.phone}
            onChange={changeField("phoneNumbers")}
            validate={validatePhoneNumber}
          />
        </div>
        <div className="form-field">
          <Button text="Сохранить" onClick={handleSubmit} />
        </div>
      </form>
    </Plate>
  );
};

export default Form;
