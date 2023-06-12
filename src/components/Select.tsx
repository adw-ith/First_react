import React from "react";
import "../App.css";

interface Props {
  description: string;
  opt: string[];
}

function Select({ opt, description }: Props) {
  return (
    <select
      className={"form-select m-2 col"}
      aria-label="Default select example"
    >
      <option selected>{description}</option>
      {opt.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
}

export default Select;
