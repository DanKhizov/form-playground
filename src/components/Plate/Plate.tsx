import React from "react";
import { Props } from "./props";

const Plate: React.FC<Props> = ({ children }) => {
  return <div className="plate">{children}</div>;
};

export default Plate;
