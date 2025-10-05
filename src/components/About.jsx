function About() {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <h2 data-aos="fade-right" data-aos-delay="100">About Me</h2>
      <p data-aos="fade-right" data-aos-delay="300">
        I’m a passionate developer learning React.js and building web applications.
        I enjoy creating modern, responsive, and interactive websites.
      </p>

      <h3 data-aos="fade-right" data-aos-delay="500">Skills:</h3>
      <div className="skills" data-aos="fade-right" data-aos-delay="600">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React.js</span>
        <span>Node.js</span>
      </div>
    </section>
  );
}

export default About;
