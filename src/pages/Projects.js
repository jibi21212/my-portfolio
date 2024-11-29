import ProjectCard from '../components/ProjectCard';
import project2Thumbnail from '../images/image1.png';
import project1Thumbnail from '../images/image2.png';
function Projects() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">My Projects</h1>
      <div className="row">
        <ProjectCard
          title="UFC Full stack website with fighter database"
          description="Full-Stack Web Application for UFC Fighter Data Scraping, Analysis, and Predictive ModelingFull-Stack Web Application for UFC Fighter Data Scraping, Analysis, and Predictive Modeling
Oct 2024 - PresentOct 2024 - Present
This project is a full-stack web application that scrapes comprehensive data on UFC fighters, stores it in a PostgreSQL database, and presents the information through an interactive Django-powered website. It includes fighter statistics like wins, losses, height, weight, and even advanced metrics like significant strikes per minute (SLpM), strike defense, and takedown statistics."
          link="https://github.com/jibi21212/UFC_WEBSITE"
          thumbnail={project1Thumbnail}
        />
        <ProjectCard
          title="Crime-Statistics-in-Canada---Data-Analysis"
          description="This project analyzes crime statistics in Canada using Python. It focuses on data cleaning, statistical analysis, and visualization using Pandas, NumPy, and Matplotlib, providing insights into crime trends through interactive visualizations. Initially developed to refine skills in handling large datasets, this platform efficiently processes and analyzes data."
          link="https://github.com/jibi21212/Crime-Statistics-in-Canada---Data-Analysis"
          thumbnail={project2Thumbnail}
        />
      </div>
    </div>
  );
}

export default Projects;
