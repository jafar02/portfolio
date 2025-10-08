function Education() {
  const education = [
    { course: "B.Tech in Information Technology", institution: "M.A.M Colege of Engineering and Technology", year: "2021 - 2025"
      ,Percentage:":88%"},
    { course: "High School", institution: "New Sanggeeth Metric Hr.Sec School", year: "2019 - 2021" ,Percentage:":91%"},
  ];

  return (
    <section id="education" className="education" data-aos="fade-up">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index} data-aos="fade-left" data-aos-delay={index * 200}>
            <strong>{edu.course}</strong> - {edu.institution} ({edu.year}) - With Percentage{edu.Percentage}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
