import React from "react";
import config from "../../configs/config";
const LOCALE = "fa";

const contentTranslations = {
  en: {},
  fa: {
    tile: {
      area: "زیربنا",
      numberOfFloors: "تعداد طبقات",
      location: "مکان",
      date: "زمان",
      status: "وضعیت"
    }
  }
};

function ProjectsList({ projects }) {
  return (
    <div className="columns is-multiline project-list">
      {projects.map((project, index) => (
        <ProjectTile
          className="column is-half-tablet"
          key={index}
          project={project}
        />
      ))}
    </div>
  );
}

const ProjectTile = ({ className, project }) => {
  const tile = contentTranslations[LOCALE].tile;
  return (
    <div className={className}>
      <div
        className={`as-project-tile`}
        style={{ backgroundImage: `url(${project.bannerImage})` }}
      >
        <ul className="as-project-tile__details">
          <li className="has-text-weight-bold">{project.name}</li>
          <li>
            <span className="has-text-weight-bold">{tile.area}:</span>{" "}
            {project.area}
          </li>
          <li>
            <span className="has-text-weight-bold">{tile.numberOfFloors}:</span>{" "}
            {project.numberOfFloors}
          </li>
          <li>
            <span className="has-text-weight-bold">{tile.location}:</span>{" "}
            {project.location}
          </li>
          <li>
            <span className="has-text-weight-bold">{tile.date}:</span>{" "}
            {project.date}
          </li>
          <li>
            <span className="has-text-weight-bold">{tile.status}:</span>{" "}
            {project.status}
          </li>
        </ul>
      </div>
    </div>
  );
};

ProjectsList.defaultProps = {
  projects: config[LOCALE].projects
};

export default ProjectsList;
