"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/projects";

export function ProjectGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((p) => p.category === active), [active]);

  return <>
    <div className="filter-row" role="group" aria-label="Project categories">
      {projectCategories.map((category) => <button key={category} className={active === category ? "filter-chip active" : "filter-chip"} onClick={() => setActive(category)}>{category}</button>)}
    </div>
    <div className="projects-grid">
      {filtered.map((project) => <article className="project-card" key={project.slug}>
        <div className="project-image">
          <div className="project-chrome"><span /><span /><span /></div>
          <div className="project-art"><strong>{project.visualLabel}</strong><small>{project.title}</small></div>
          <span className="project-category">{project.category}</span>
          {project.status !== "production" && <span className={`project-status ${project.status}`}>{project.status.replace("-", " ")}</span>}
        </div>
        <div className="project-content">
          {project.organisation && <small className="org-label">@ {project.organisation}</small>}
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.highlight && <div className="project-highlight"><span>⚡</span>{project.highlight}</div>}
          <div className="chips project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-links">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit Live ↗</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
          </div>
        </div>
      </article>)}
    </div>
    {filtered.length === 0 && <div className="empty-state">No projects in this category yet.</div>}
  </>;
}
