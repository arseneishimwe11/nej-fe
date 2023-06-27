import React from "react";

const Backdrop = (props) =>
  props.show ? (
    <div
      onClick={props.onHandleClose}
      className="w-full h-full fixed z-40  top-0 left-0"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    ></div>
  ) : null;
export default Backdrop;
