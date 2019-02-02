import React from "react";
import { Link } from "@reach/router";
import config from "../../configs/config";
import filterHoc from "../../HOCs/filter-hoc";
import ChoiceList from "./ChoiceList";
import ProjectsList from "./projectsList";

const LOCALE = "fa";

const contentTranslations = {
  en: {},
  fa: {
    header: {
      title: "برخی از پروژه‌های ما",
      tags: ["همه", "بتنی", "فولادی"],
      button: "مشاهده همه کارهای ما"
    }
  }
};

export function ProjectsTileSection(props) {
  const { choices, data, onChoiceClick, showButton } = props;
  const { header } = contentTranslations[LOCALE];
  return (
    <section className="section" style={{ backgroundColor: "#eee" }}>
      <div className="container">
        <div className="content">
          <h2 className="title is-3 is-spaced has-text-centered is-centered">
            {header.title}
          </h2>
          <ChoiceList choices={choices} onClick={onChoiceClick} />
          <ProjectsList projects={data} />

          {showButton && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem 0 0 0"
              }}
            >
              <Link to="/projects" className="button as-button">
                {header.button}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export const choices = [
  {
    id: 0,
    label: contentTranslations[LOCALE].header.tags[0],
    selected: true,
    match() {
      return true;
    }
  },
  {
    id: 1,
    label: contentTranslations[LOCALE].header.tags[1],
    match: matchLabel
  },
  {
    id: 2,
    label: contentTranslations[LOCALE].header.tags[2],
    match: matchLabel
  }
];

function matchLabel(obj) {
  return obj.frameStructure === this.label;
}

const Section = () => {
  const Component = filterHoc(ProjectsTileSection);
  return (
    <Component
      choices={choices}
      data={config[LOCALE].projects.slice(5)}
      showButton={true}
    />
  );
};

export default Section;
