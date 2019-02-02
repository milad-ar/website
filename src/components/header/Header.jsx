// @flow
import * as React from "react";
import cs from "classnames";
import { Desktop, Mobile } from "../media-query";
import "./Header.css";

const LOCALE = "fa";
const content = {
  en: {
    navList: [
      { text: "home", href: "/", children: [] },
      { text: "about us", href: "/about-us", children: [] },
      { text: "projects", href: "/projects", children: [] },
      { text: "departments", href: "/departments", children: [] },
      { text: "contact us", href: "/contact-us", children: [] }
    ]
  },
  fa: {
    navList: [
      { text: "صفحه اصلی", href: "/", children: [] },
      { text: "درباره ما", href: "/about-us", children: [] },
      { text: "پروژه‌ها", href: "/projects", children: [] },
      { text: "دپارتمانها", href: "/departments", children: [] },
      { text: "ارتباط با ما", href: "/contact-us", children: [] }
    ],
    brandName: "عرشیا سازان"
  }
};

function NavListDesktop() {
  return (
    <ul className="as-nav__list">
      {content[LOCALE].navList.map(item => (
        <li key={item.text} className="as-nav__item">
          <a className="as-nav__itemLink" href={item.href}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavListMobile(props) {
  return (
    <div className="as-menu--mobile">
      <button className="as-menu--mobile__button" onClick={props.toggle}>
        <span
          className={cs("as-menu--mobile__icon", {
            "icon-close": props.on,
            "icon-menu": !props.on
          })}
        />
      </button>
      {props.on && (
        <ul className="as-menu--mobile__list">
          {content[LOCALE].navList.map(item => (
            <li className="as-menu--mobile__item" key={item.text}>
              <a className="as-menu--mobile__itemLink" href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  let MobileMenu = toggleHOC(NavListMobile);
  return (
    <header className="as-header">
      <nav className="as-nav">
        <Desktop>
          <NavListDesktop />
        </Desktop>
        <Mobile>
          <MobileMenu />
        </Mobile>
      </nav>
      <div className="as-logo">
        <a href="/">{content[LOCALE].brandName}</a>
      </div>
    </header>
  );
}

const toggleHOC = Component =>
  class extends React.Component<Object, { on: boolean }> {
    state = { on: false };

    toggle = () => this.setState(prevState => ({ on: !prevState.on }));

    render() {
      return (
        <Component {...this.props} on={this.state.on} toggle={this.toggle} />
      );
    }
  };
