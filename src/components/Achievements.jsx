function Achievements() {
  const achievements = [
    "Winner of College Coding Hackathon 2025",
    "Top 10 in National Level Programming Contest",
    "Published article on Web Development in Medium",
  ];

  return (
    <section id="achievements" className="achievements" data-aos="fade-up">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((item, index) => (
          <li key={index} data-aos="fade-left" data-aos-delay={index * 200}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
