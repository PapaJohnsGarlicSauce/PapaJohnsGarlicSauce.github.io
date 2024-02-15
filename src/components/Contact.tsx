import { ReactElement } from "react";
import { FaCalendarAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contactMe from "../contact_me_squircle.png";

const Contact = (): ReactElement => {
  // Add contact stuff
  return (
    <>
      <img
        src={contactMe}
        alt="Author, Victoria Lang, standing in front of a brick wall"
      />
      <div className="contact-section">
        <h2>Contact</h2>
        <div className="schedule-link">
          <FaCalendarAlt />
          <a
            href="https://calendly.com/victoriamichelelang"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a meeting
          </a>
        </div>
        <div className="schedule-link">
          <MdEmail />
          <a
            href="mailto:victoriamichelelang@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            victoriamichelelang@gmail.com
          </a>
        </div>
        <div className="schedule-link">
          <FaLinkedinIn />
          <a
            href="https://www.linkedin.com/in/victoria-lang-516a1a35/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="schedule-link">
          <FaGithub />
          <a
            href="https://github.com/PapaJohnsGarlicSauce"
            target="_blank"
            rel="noreferrer"
          >
            Github Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
