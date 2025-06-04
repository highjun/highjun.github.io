'use client'

import AboutMe from "@/components/AboutMe";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Publications from "@/content/publication.mdx";

const Home:React.FC = () => {
  return <div className="flex flex-col items-center justify-center mt-10 gap-10">
    <AboutMe />
    {/* <section className="w-full flex flex-col items-center md:items-start justify-center gap-4">
      <h2 className="text-2xl font-bold bg-blue-200">Projects</h2>
      <div className="w-full flex flex-col gap-10">
        {projects.map((project) => (
            <ProjectCard key={project.title} image={project.image} title={project.title} summary={project.summary} link={project.link} />
        ))}
      </div>
    </section> */}
    <section className="w-full flex flex-col items-center md:items-start justify-center gap-4 prose-h3:font-bold">
      <h2 className="text-2xl font-bold">Publications</h2>
      <Publications components={{
        h3: ({ children }: { children: React.ReactNode }) => <h3 className="text-lg italic">{children}</h3>
      }}/>
    </section>
  </div>
}

export default Home;