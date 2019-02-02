import React from "react";
import { LocaleContext } from "../../App";
import Page from "../Page";
import getIcon from "../../components/icons";
import translations from "./ContactUsPage.local";
import "./ContactUsPage.sass";

export default function ContactUsPage() {
  return <LocaleContext.Consumer>{renderContactUsPage}</LocaleContext.Consumer>;
}

function renderContactUsPage(locale) {
  const {
    page: {
      header: { title, breadcrumb },
      main
    }
  } = translations[locale];
  return (
    <Page title={title} breadcrumb={breadcrumb}>
      <ContactUs {...main} />
    </Page>
  );
}

function ContactUs({ heading, list }) {
  return (
    <div className="section as-contact-us">
      <div className="container">
        <div className="content">
          <div className="columns">
            <div className="column is-half">
              <ContactUs.Details heading={heading} contactList={list} />
            </div>
            <div className="column is-half">
              <ContactUs.Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactUs.Details = function Details({ contactList, heading }) {
  return (
    <div className="details">
      <h4>{heading}</h4>
      <ul>
        {contactList.map((item, index) => (
          <li key={item.value}>
            {item.label}:&nbsp;
            <span
              className={`item-value ${index !== 0 ? "is-pulled-left" : ""}`}
            >
              {Array.isArray(item.value) ? (
                item.value.map(val => (
                  <span key={val} className="is-block">
                    {val}
                  </span>
                ))
              ) : (
                <span>{item.value}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
ContactUs.Map = function Map(props) {
  return <div className="map" />;
};
