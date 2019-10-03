import React from "react";
import { labels } from "../../constants/labels";

import { Props } from "./props";

const SignupSuccess: React.FC<Props> = ({ fieldValues }) => {
  const fieldsList = Object.entries(fieldValues).map(([key, value]) => {
    if (!Array.isArray(value)) {
      return (
        <div className="field" key={key}>
          <span>{labels[key]}</span>
          <span>{value}</span>
        </div>
      );
    }

    return (
      <div className="field" key={key}>
        <span>{labels[key]}</span>
        <ul className="list-items">
          {value.map((item, i) => (
            <li key={`${item}-${i}`}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div className="signed-up">
      <h3 className="title">Вы зарегистрированы</h3>
      <div className="fields">{fieldsList}</div>
    </div>
  );
};

export default SignupSuccess;
