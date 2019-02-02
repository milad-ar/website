import React from "react";
import SubPageHeader from "../components/subpage-header/SubPageHeader";
import { Nav as TopNav } from "../components/nav";
import { Footer } from "../components/footer";
import { FaNum } from "../components/farsi";
import config from "../configs/config";
import {
  ProjectsTileSection,
  choices
} from "../components/mini-sections/ProjectsShowcase";
import filterHoc from "../HOCs/filter-hoc";

const LOCALE = "fa";
const translations = {
  en: {},
  fa: {
    title: "پروژه‌های ما",
    headerBreadcrumbNavigation: [
      { name: "خانه", link: "/" },
      { name: "پروژه‌های ما", link: "/projects" }
    ]
  }
};

const content = translations[LOCALE];

const ProjectsPage = props => {
  window.scroll(0, 0);
  const MainSection = filterHoc(ProjectsTileSection);
  return (
    <div className="as-page as-page--services">
      <PageHeader
        title={content.title}
        breadcrumb={content.headerBreadcrumbNavigation}
      />

      <div className="as-page__content">
        <section className="section">
          <div className="container">
            <div className="content">
              <MainSection choices={choices} data={config[LOCALE].projects} />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
function ServiceBox({ service, order }) {
  return (
    <div className="card" style={{ marginBottom: "2rem" }}>
      <div className="card-content">
        <h3>
          <FaNum num={order} />. {service.name}
        </h3>
        <p className="is-size-6">{service.description}</p>
        <div
          className="columns is-mobile is-multiline"
          style={{ marginTop: "2rem" }}
        >
          {service.images.map(img => (
            <div
              key={img}
              className="column is-half-mobile is-one-third-tablet is-centered"
            >
              <img
                className="is-centered"
                src={img}
                alt=""
                style={{ display: "block", margin: "0 auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function PageHeader({ title, breadcrumb }) {
  return (
    <div className="as-page-header">
      <TopNav />
      <SubPageHeader title={title} breadcrumb={breadcrumb} />
    </div>
  );
}

export default ProjectsPage;
