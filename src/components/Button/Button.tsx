import React from "react";
import { Props } from "./props";

const Button: React.FC<Props> = ({ text = "Кнопочка", onClick }) => {
  return (
    <div className="button-contaner">
      <div className="button" onClick={onClick}>
        {text}
      </div>
    </div>
  );
};

export default Button;
