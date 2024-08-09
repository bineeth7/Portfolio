import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/pro2.jpg";
import pro3 from "../../assets/pro3.jpg";
import pro4 from "../../assets/pro4.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
        src={pro1}
        link="https://bineeth7.github.io/CristianoRonaldo/"
        h3="Personal Website"
        p="Bootstrap"
        />
          <ProjectCard
          src={pro2}
          link="https://github.com/bineeth7/MovieApp.git"
          h3="Movie Application"
          p="Laravel"
          />
          <ProjectCard
          src={pro3}
          link="https://github.com/bineeth7/ReatJS-Netflix.git"
          h3="Portfolio"
          p="ReactJS Responsive"
          />
          <ProjectCard
          src={pro4}
          link="https://www.jetir.org/papers/JETIR2207309.pdf"
          h3="LandSlider"
          p="College Project"
          />
      </div>
    </section>
  );
}

export default Projects;
