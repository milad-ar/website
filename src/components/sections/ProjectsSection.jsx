import * as React from "react";
import "./GetInTouchSection.sass";
import config from "../../configs/config";

const LOCALE = "fa";
const trs = {
  en: {},
  fa: {
    header: {
      title: "پروژه‌های ما",
      tags: ["همه", "بتنی", "فلزی"]
    },
    highlight: {
      status: "وضعیت",
      location: "مکان",
      area: "زیربنا",
      frameStructure: "اسکلت",
      time: "زمان"
    }
  }
};

function ProjectsSection({ tag }) {
  const { header } = trs[LOCALE];
  let { projects } = config[LOCALE];
  projects.sort((a, b) => {
    return a.order < b.order ? -1 : 0;
  });
  // @TODO: sort projects

  return (
    <section className="section as-projectsSection">
      <div className="container">
        <div className="content">
          {/*header*/}
          <div>
            <h2 className="title is-3 is-spaced has-text-centered">
              {header.title}
            </h2>
            <p className="subtitle is-6 has-text-centered has-text-grey">
              <span className="tags is-centered">
                {header.tags.map(tag => (
                  <span key={tag} className="tag is-medium">
                    {tag}
                  </span>
                ))}
              </span>
            </p>
          </div>

          {/*content*/}
          <div className="as-projectsSection__content">
            <div className="columns is-multiline">
              {projects.map(prj => (
                <div key={prj.order} className="column is-half">
                  <ProjectHighlight project={prj} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectHighlight({ project }) {
  const {
    area,
    bannerImage,
    date,
    frameStructure,
    location,
    name,
    status
  } = project;
  const { highlight } = trs[LOCALE];
  return (
    <div
      className="as-project-highlight"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="as-project-highlight__content">
        <h3 className="title is-6 has-text-white is-spaced">
          <span>{name}</span>
        </h3>
        <p className="subtitle is-7">
          {highlight.time}: {date}
        </p>
        <p className="subtitle is-7">
          {highlight.status}: {status}
        </p>
        <p className="subtitle is-7">
          {highlight.area}: {area}
        </p>
        <p className="subtitle is-7">
          {highlight.location}: {location}
        </p>
        <p className="subtitle is-7">
          {highlight.frameStructure}: {frameStructure}
        </p>
      </div>
    </div>
  );
}

export default ProjectsSection;
