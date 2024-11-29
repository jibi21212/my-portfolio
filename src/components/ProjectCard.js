function ProjectCard({ title, description, link, thumbnail }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        {thumbnail && (
          <img
            src={thumbnail}
            alt={`${title} Thumbnail`}
            className="card-img-top"
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
  );
}
  export default ProjectCard;