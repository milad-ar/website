// @flow
import * as React from "react";
import cs from "classnames";
import "./Text.css";

type Props = {
  children: React.Node,
  size: "s" | "m" | "l" | "xl",
  style: Object,
};

export default function AsText(props: Props) {
  return (
    <span className={cs("as-text", `as-text--${props.size}`)} style={props.style}>
      {props.children}
    </span>
  );
}

AsText.defaultProps = {
  size: "m",
  style: {}
};
