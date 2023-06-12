import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  btnStyle?:
    | "primary"
    | "dark"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClicks: () => void;
}

function Buttons({ children, btnStyle = "primary", onClicks }: Props) {
  return (
    <button type="button" className={"btn btn-" + btnStyle} onClick={onClicks}>
      {children}
    </button>
  );
}

export default Buttons;
