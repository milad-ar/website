import * as React from "react";
import { LocaleContext } from "../../App";
import Page from "../Page";
import getIcon from "../../components/icons";
import translations from "./AboutUs.local";
import "./AboutUs.sass";

export default function AboutUsPage() {
  return <LocaleContext.Consumer>{renderAboutUsPage}</LocaleContext.Consumer>;
}

function renderAboutUsPage(locale) {
  const { title, breadcrumb, portfolio, staff, stats } = translations[locale];
  return (
    <Page title={title} breadcrumb={breadcrumb}>
      <Portfolio {...portfolio} />
      <Stats stats={stats} />
      <Staff staff={staff} />
    </Page>
  );
}

// @Todo: make the button work so user can download the resume
function Portfolio({ button: buttonText, title, subtitle, paragraphs }) {
  return (
    <div className="section as-portfolio">
      <div className="container">
        <div className="content">
          <div className="columns">
            <div className="column is-half">
              <div style={{ padding: "0 1.5rem" }}>
                <h2
                  style={{
                    display: "inline-block",
                    borderBottom: "2px solid #fab915",
                    paddingBottom: "1rem",
                    marginBottom: "2rem",
                    lineHeight: "1.25",
                    color: "black"
                  }}
                >
                  {title}
                </h2>
                <h5 style={{ lineHeight: "1.5", marginBottom: "1.5rem" }}>
                  {subtitle}
                </h5>
                {paragraphs.map(text => (
                  <p key={text}>{text}</p>
                ))}

                <button
                  className="button is-black is-normal is-fullwidth"
                  style={{ marginTop: "3rem" }}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Stats({ stats }) {
  return (
    <div className="as-stats">
      <div className="columns is-mobile is-multiline">
        {stats.map((stat, index) => (
          <div
            className="column is-half-mobile"
            style={{
              opacity: `${(100 - index * 5) / 100}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              background: "black",
              textAlign: "center",
              // width: "100%",
              // height: "80px",
              padding: "80px 0"
            }}
          >
            <h1
              style={{
                color: "#fab915",
                flexBasis: "100%",
                flexShrink: 0,
                fontSize: "4rem",
                marginBottom: "1rem"
              }}
            >
              {stat.value}
            </h1>
            <p style={{ fontWeight: "bold", color: "white" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function Staff({ staff }) {
  let { personnel, linkedinLabel } = staff;
  personnel.sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <section className="section as-staff as-employee-list">
      <div className="container">
        <div className="content">
          <h2
            className="as-staff-heading"
            style={{
              textAlign: "center",
              color: "black",
              marginBottom: "2.4rem"
            }}
          >
            <span
              style={{
                borderBottom: "2px solid #fab915",
                paddingBottom: "0.5rem"
              }}
            >
              {staff.heading}
            </span>
          </h2>
          <h5 className="as-staff-subheading" style={{ textAlign: "center" }}>
            {staff.subHeading}
          </h5>
          <div style={{ marginTop: "3rem" }} className="columns is-multiline">
            {personnel.map(employee => (
              <div className="column is-half-tablet is-one-third-desktop">
                <EmployeeCard
                  employee={employee}
                  labels={{ linkedin: linkedinLabel }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmployeeCard({ employee, labels }) {
  const { contact, img, name, position } = employee;
  return (
    <section className="as-employee-card">
      <EmployeeCard.Image img={img} />
      <EmployeeCard.Details
        name={name}
        position={position}
        contact={contact}
        labels={labels}
      />
    </section>
  );
}

EmployeeCard.Image = function EmployeeCardImage({ img }) {
  return (
    <div className="image">
      <img src={img} />
    </div>
  );
};
EmployeeCard.Details = function EmployeeCardDetails(props) {
  const { contact, name, position, labels } = props;
  const LinkedinIcon = getIcon("linkedin");

  return (
    <div className="details">
      <div className="info">
        <div className="is-size-5">{name}</div>
        <div className="is-size-7">{position}</div>
      </div>
      <div className="contact">
        <div className="has-text-weight-bold">{contact.email}</div>
        <div>
          <a
            className="button is-link is-small"
            href={contact.socials.linkedin}
            rel="noreferrer noopener"
            target="_blank"
            disabled={contact.socials.linkedin === "" ? true : false}
          >
            <LinkedinIcon className="is-size-6" />
            &nbsp;&nbsp;
            {labels.linkedin}
          </a>
        </div>
      </div>
    </div>
  );
};
