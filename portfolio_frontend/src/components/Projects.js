import React from 'react';
import "../assets/styles/Projects.css";

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
        </div>
      </div>
      <div className="project-description">
        {description}
      </div>
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="project-technology-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
        title: "High Court of Australia Project",
        description: "A comprehensive case management system developed for the High Court of Australia. Project highlights:" +
        "\n• Designed JSON-based case templates, enhancing processing efficiency by 30%" +
        "\n• Developed court resource allocation logic" +
        "\n• Engineered custom PowerApps Component Framework with React.JS" +
        "\n• Led CRM to SQL data migration using Azure Data Factory" +
        "\n• Implemented automated workflows with Power Automate Flow",
        technologies: ["C#", "PowerApps", "React.JS", "Microsoft CRM", "Azure Data Factory", "Power Automate"],
        githubLink: null  // Add GitHub link if available
      },
    {
      title: "Real Engineering Platform",
      description: "An interactive eCommerce-like platform developed using Django and React.JS. Key features include:" +
      "\n• 40% improvement in product management effectiveness" +
      "\n• Reduced CRUD operation time for inventory updates" +
      "\n• JWT-based authentication for enhanced access control" +
      "\n• WhatsApp API integration for real-time service requests" +
      "\n• Google API implementation for Gmail sign-in and seamless session handling",
      technologies: ["Django", "React.JS", "JWT", "WhatsApp API", "Google APIs", "MySQL"],
      githubLink: "https://github.com/Karthick-candy/real-engineering-main-/tree/master"
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-section-title">Professional Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;