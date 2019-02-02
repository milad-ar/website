// @flow
import * as React from "react";
import { Link } from "@reach/router";
import "./SubPageHeader.css";

type Props = {
  title: string,
  breadcrumb: Array<{ name: string, link: string }>
};

function SubPageHeader(props: Props) {
  return (
    <div className="as-subpage-header">
      <div className="as-subpage-header__inner">
        <h1 className="as-subpage-header__title">{props.title}</h1>
        <div className="as-subpage-header__breadcrumb">
          <Breadcrumb path={props.breadcrumb} delimiter="/" />
        </div>
      </div>
    </div>
  );
}

function Breadcrumb({ delimiter = "/", path = [] }) {
  return (
    <ul className="as-breadcrumb">
      {path.map((location, index) => {
        return index !== path.length - 1 ? (
          <li key={location.link}>
            <Link to={location.link}>{location.name}</Link>
            <span>{delimiter}</span>
          </li>
        ) : (
          <li key={location.link}>{location.name}</li>
        );
      })}
    </ul>
  );
}

export default SubPageHeader;
