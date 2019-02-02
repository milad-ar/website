// @flow
import * as React from "react";
import cs from "classnames";
import { Link } from "@reach/router";
import { Desktop, Mobile } from "../media-query";
import { toggleHOC } from "../../HOCs";
import "./Nav.css";

const LOCALE = "fa";
const content = {
  en: {
    navList: [
      { text: "home", href: "/", children: [] },
      { text: "about us", href: "/about-us", children: [] },
      { text: "projects", href: "/projects", children: [] },
      { text: "services", href: "/services", children: [] },
      { text: "contact us", href: "/contact-us", children: [] }
    ]
  },
  fa: {
    navList: [
      { text: "صفحه اصلی", href: "/", children: [] },
      { text: "درباره ما", href: "/about-us", children: [] },
      { text: "پروژه‌ها", href: "/projects", children: [] },
      { text: "خدمات ما", href: "/services", children: [] },
      { text: "ارتباط با ما", href: "/contact-us", children: [] }
    ],
    brandName: "عرشیا سازان"
  }
};

function Nav() {
  let MobileMenu = toggleHOC(NavListMobile);
  return (
    <nav className="as-nav as-bg--transparent">
      <div className="as-nav__links">
        <Desktop>
          <NavListDesktop />
        </Desktop>
        <Mobile>
          <MobileMenu />
        </Mobile>
      </div>
      <div className="as-nav__logo">
        <Link to="/">{content[LOCALE].brandName}</Link>
      </div>
    </nav>
  );
}
function NavListDesktop() {
  return (
    <ul className="as-horizontal-list">
      {content[LOCALE].navList.map(item => (
        <li key={item.text} className="as-nav__item">
          <Link className="as-link as-link--inverse" to={item.href}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
function NavListMobile(props) {
  return (
    <div className="as-nav-mobile">
      <button
        onClick={props.toggle}
        style={{
          outline: "none",
          border: "none",
          background: "transparent",
          cursor: "pointer"
        }}
      >
        <span
          className={cs("as-icon--xl", {
            "icon-close": props.on,
            "icon-menu": !props.on
          })}
        />
      </button>
      {props.on && (
        <ul className="as-nav-mobile__list">
          {content[LOCALE].navList.map(item => (
            <li className="as-nav-mobile__item" key={item.text}>
              <Link className="as-link as-link--inverse" to={item.href}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Nav;
