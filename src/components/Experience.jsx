function Experience() {
  const experiences = [
    { role: "Frontend Developer Intern", company: "Tech Company", year: "2024" },
    { role: "Freelance Web Developer", company: "Self-employed", year: "2023 - Present" },
  ];

  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index} data-aos="fade-left" data-aos-delay={index * 200}>
            <strong>{exp.role}</strong> - {exp.company} ({exp.year})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
