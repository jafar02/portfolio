function Education() {
  const education = [
    { course: "B.Tech in Computer Science", institution: "ABC University", year: "2021 - 2025" },
    { course: "High School", institution: "XYZ School", year: "2019 - 2021" },
  ];

  return (
    <section id="education" className="education" data-aos="fade-up">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index} data-aos="fade-left" data-aos-delay={index * 200}>
            <strong>{edu.course}</strong> - {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
