import * as React from "react";
import "./Footer.css";
import Box from "../box";

const LOCALE = "fa";
const content = {
  en: {},
  fa: {
    copyrightFirst: "کلیه حقوق این سایت متعلق به شرکت",
    copyRightSecond: "می‌باشد.",
    brandName: "عرشیا سازان",
    companyInfo:
      "شرکت عرشیا سازان در سال ۱۳۹۲ به عنوان شرکت سهامی خاص به ثبت رسیده و هدف از تاسیس آن طراحی، ساخت و اجرای پروژه‌های شهری بوده است.",
    tel: "",
    contact: {
      address: "آدرس",
      email: "ایمیل",
      fax: "فکس",
      location: "موقعیت",
      tel: "تلفن",
      title: "اطلاعات تماس"
    },
    links: {
      aboutUs: "درباره ما",
      contactUs: "ارتباط با ما",
      services: "خدمات ما",
      projects: "پروژه‌های ما",
      title: "لینک‌های مرتبط"
    }
  }
};
const data = {
  contact: {
    location: "ایران، تهران",
    email: "arshiasazan@hotmail.com",
    fax: "۸۸۷۹۳۱۶۱",
    address: "خيابان سردار جنگل . خيابان حيدري مقدم شرقي . شماره ۷۶ . واحد ۶",
    tel1: "۰۹۱۲-۳۸۹۱۲۷۰",
    tel2: "۰۹۱۲-۳۳۰۵۵۹۱",
    title: "اطلاعات تماس"
  },
  links: {
    aboutUs: "/about-us",
    contactUs: "/contact",
    projects: "/projects",
    services: "/services"
  }
};

export default function Footer(props) {
  const ct = content[LOCALE];

  return (
    <Box className="as-footer__wrapper">
      <section className="as-footer">
        <div className="as-footer__content as-text--mid">
          <div className="as-footer__section">
            <h3 className="as-footer__section__title as-heading--mid">
              {content[LOCALE].brandName}
            </h3>
            <p>{content[LOCALE].companyInfo}</p>
          </div>
          <div className="as-footer__section">
            <h3 className="as-footer__section__title as-heading--mid">
              {ct.contact.title}
            </h3>
            <ul className="as-footer__contactList">
              <li className="as-footer__contactItem">
                <strong>{ct.contact.location}</strong>: {data.contact.location}
              </li>
              <li className="as-footer__contactItem">
                <strong>{ct.contact.address}</strong>: {data.contact.address}
              </li>
              <li className="as-footer__contactItem">
                <strong>{ct.contact.email}</strong>:{" "}
                <span className="as-font--latin">{data.contact.email}</span>
              </li>
              <li className="as-footer__contactItem">
                <strong>{ct.contact.tel}</strong>:{" "}
                <span dir="ltr">
                  {data.contact.tel1} , {data.contact.tel2}
                </span>
              </li>
            </ul>
          </div>
          <div className="as-footer__section">
            <h3 className="as-footer__section__title as-heading--mid">
              {ct.links.title}
            </h3>
            <ul className="as-footer__section__links">
              <li>
                <a href={data.links.services}>{ct.links.services}</a>
              </li>
              <li>
                <a href={data.links.projects}>{ct.links.projects}</a>
              </li>
              <li>
                <a href={data.links.aboutUs}>{ct.links.aboutUs}</a>
              </li>
              <li>
                <a href={data.links.contactUs}>{ct.links.contactUs}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="as-footer__copyright">
          <p>
            © {"۱۳۹۷"} - {content[LOCALE].copyrightFirst}{" "}
            <strong>{content[LOCALE].brandName}</strong>{" "}
            {content[LOCALE].copyRightSecond}
          </p>
        </div>
      </section>
    </Box>
  );
}

Footer.defaultPorps = {
  content: content[LOCALE]
};
