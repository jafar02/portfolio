function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      <h2 data-aos="zoom-in" data-aos-delay="100">
        Hi, I’m <span className="highlight">Jafar</span> 👋
      </h2>
      <p data-aos="fade-up" data-aos-delay="300">
        Full Stack Developer | Learner | Creator
      </p>
      <a href="#projects" className="btn" data-aos="flip-left" data-aos-delay="500">
        See My Work
      </a>
      <div className="social-links" data-aos="fade-up" data-aos-delay="700">
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
      </div>
    </section>
  );
}

export default Hero;
