import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Intel: Data Analysis for Sustainability Project",
    description:
      "Developed SQL queries to investigate problems and make data-driven recommendations to support Intel team decisions for the new data center location. -Tech: SQL, Tableau",
    image: "/intel.png",
    github: "https://github.com/seoyeong643",
    link: "https://docs.google.com/document/d/1rdO3fg9JPfzDVPKcsTu_lKHh7YRVzSzQJMICQzoc7sI/edit?usp=sharing",
  },
  {
    name: "Grammy Awards: Website Audience Analysis",
    description: "Analysis and visualization of performance metrics for the Grammy Awards website in relation to content and audience strategy. -Tech: Python, Pandas, Numpy, Plotly",
    image: "/grammys.png",
    github: "https://github.com/seoyeong643/Grammy-Awards-Website-Audience-Analysis",
    link: "https://github.com/seoyeong643/Grammy-Awards-Website-Audience-Analysis",
  },
  {
    name: "Drive Insight Product Website",
    description:
      "Product dashboard website for Drive Insight that effectively integrates vehicle compatibility features using a RESTful API, ensuring users have immediate access to essential information. - Tech: NextJS, React, TypeScript, Tailwind",
    image: "/driveInsight.png",
    github: "https://github.com/seoyeong643/drive-insight-website",
    link: "https://github.com/seoyeong643/drive-insight-website",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
