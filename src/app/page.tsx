'use client'

import AboutMe from "@/components/AboutMe";
import ProjectCard from "@/components/ProjectCard";
import Publication from "@/components/Publication";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

const Home:React.FC = () => {
  return <div className="flex flex-col items-center justify-center my-10 gap-10">
    <AboutMe />
    <section className="w-full flex flex-col items-center md:items-start justify-center gap-4">
      <h2 className="text-2xl font-bold bg-blue-200">Projects</h2>
      <div className="w-full flex flex-col gap-10 items-center">
        {projects.map((project) => (
            <ProjectCard key={project.title} image={project.image} title={project.title} summary={project.summary} link={project.link} />
        ))}
      </div>
    </section>
    <section className="w-full flex flex-col items-center md:items-start justify-center gap-4 prose-h3:font-bold">
      <h2 className="text-2xl font-bold bg-blue-200">Publications</h2>
      <h3 className="text-lg italic">Conference / Journal</h3>
      {publications.filter((publication) => publication.type === "conference" || publication.type === "journal").map((publication) => (
        <Publication key={publication.title} {...publication} />
      ))}
      <h3 className="text-lg italic">Workshop / Poster</h3>
      {publications.filter((publication) => publication.type === "workshop" || publication.type === "poster").map((publication) => (
        <Publication key={publication.title} {...publication} />
      ))}
    </section>
  </div>
}

export default Home;