import React from "react";
import Meta from "../components/Meta";
import { projects } from "../projectsData";
import Link from "next/link";

const portfolio = () => {
  return (
    <div>
      <Meta
        title={"Portfolio dev, mes projets réalisés"}
        description="Ensemble de mes projets réalisés afin d'avoir un aperçu de mes compétences"
      />
      <h2>Portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href="project/[id]" as={`project/${project.id}`}>
              <a>
                {project.title} <span>➡️</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default portfolio;
