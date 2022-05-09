import Image from "next/image";
import Link from "next/link";
import React from "react";
import { path } from "../../config";
import { projects } from "../../projectsData";

const project = ({ project }) => {
  return (
    <div className="project">
      <h1>{project.title}</h1>
      <span>{project.date}</span>
      <p>{project.infos}</p>
      <Image
        src={path + project.img}
        width={400}
        height={250}
        alt={"Image de " + project.title}
      ></Image>
      <Link href="/portfolio">
        <a>Revenir au portfolio</a>
      </Link>
    </div>
  );
};

export default project;

export const getStaticProps = (context) => {
  const filtered = projects.filter(
    (project) => project.id == context.params.id
  );

  if (filtered.length > 0) {
    return {
      props: {
        project: filtered[0],
      },
    };
  }
};

export const getStaticPaths = () => {
  //préparer les id dans un object Path{id:1,id:2,id:3}
  const ids = projects.map((project) => project.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
