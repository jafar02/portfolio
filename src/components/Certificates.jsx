import { useState } from "react";

function Certificates() {
  const certificates = [
    { title: "React.js Developer", image: "/certificates/react.jpg" },
    { title: "Full Stack Web Development", image: "/certificates/fullstack.jpg" },
    { title: "JavaScript Advanced", image: "/certificates/javascript.jpg" },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="certificates" data-aos="fade-up">
      <h2>Certificates</h2>
      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div
            className="certificate-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <h3>{cert.title}</h3>
            <button onClick={() => setSelectedCert(cert.image)} className="view-btn">
              View
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="modal fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <img
            src={selectedCert}
            alt="Certificate"
            className="max-w-[90%] max-h-[90%] rounded-lg border-2 border-white"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
          <span
            className="absolute top-5 right-8 text-white text-3xl cursor-pointer"
            onClick={() => setSelectedCert(null)}
          >
            &times;
          </span>
        </div>
      )}
    </section>
  );
}

export default Certificates;
