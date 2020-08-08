import React from 'react';
const ProjectSummary = ({project}) => {
  return(
    <div className="card z-depth-0 project-summary">
      <div className="card-content">
        <span className="card-title">
          {project.title}
        </span>
        <p>
          {project.content}
        </p>
        <p className="grey-text">
          6th aug, 7pm
        </p>
      </div>
    </div>
  )
}

export default ProjectSummary;