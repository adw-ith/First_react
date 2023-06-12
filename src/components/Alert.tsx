import React, { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
  onClicks: () => void;
}
function Alert({ children, onClicks }: Props) {
  return (
    <div className="alert alert-success alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClicks}
      ></button>
    </div>
  );
}

export default Alert;
