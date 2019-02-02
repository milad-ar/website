//@flow
import * as React from "react";
import getIcon from "../icons";
import "./IconBox.css";

type Props = {
  icon: string,
  title: string,
  subtitle: string
};

export default function IconBox(props: Props) {
  const Icon = getIcon(props.icon);
  return (
    <article className="as-iconBox" >
      <div className="as-iconBox__piece as-iconBox__icon">
        <Icon />
      </div>
      <h3 className="as-iconBox__piece as-iconBox__title">{props.title}</h3>
      <p className="as-iconBox__piece as-iconBox__subtitle">{props.subtitle}</p>
    </article>
  );
}
