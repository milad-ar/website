import * as React from "react";
import cs from "classnames";
import "./Box.css";

export default function Box({ children, className = "", innerClassName = "" }) {
  return (
    <section className={cs("as-box", className)}>
      <div className={cs("as-box__inner", innerClassName)}>{children}</div>
    </section>
  );
}
