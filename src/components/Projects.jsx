function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2 data-aos="fade-up" data-aos-delay="100">Projects</h2>
      <div className="project-list">
        <div className="project-card" data-aos="zoom-in" data-aos-delay="200">
          <h3>Assessment-Driven AR Learning System</h3>
          <p>My personal portfolio built with React and CSS.</p>
          <a href="https://github.com/yourusername/portfolio" target="_blank">GitHub</a>
        </div>
        <div className="project-card" data-aos="zoom-in" data-aos-delay="400">
          <h3>Todo App</h3>
          <p>A simple Todo app with React state management.</p>
          <a href="https://github.com/yourusername/todo" target="_blank">GitHub</a>
        </div>
        <div className="project-card" data-aos="zoom-in" data-aos-delay="600">
          <h3>Weather App</h3>
          <p>Real-time weather app using API and React hooks.</p>
          <a href="https://github.com/yourusername/weather-app" target="_blank">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
