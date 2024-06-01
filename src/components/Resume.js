import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Science",
    academy: "MAN 2 Tangerang",
    dec: "I underwent 3 years of normal education and graduated on time at MAN 2 Tangerang, with several experiences that I have participated in. (Experience can be seen on my Linkedin)",
    startYear: "2019",
    endYear: "2022",
  },
  {
    id: 2,
    title: "Informatics Study Program",
    academy: "University of Muhammadiyah Malang",
    dec: "I am currently pursuing my undergraduate degree in Informatics Study Program, currently in my 4th semester.",
    startYear: "2022",
    endYear: false,
  },

];

const experienceData = [
  {
    id: 1,
    title: "Codingin Aja",
    company: "Founder",
    dec: "CodinginAja started in May 2023 with simple classes designed to teach coding skills in an easy-to-understand and interactive approach.",
    startYear: "2023",
    endYear: false,
    company1: "Front-end Developer",
    dec1: "Develop and maintain user interfaces for the Codingin Aja platform using React Js and using Sass styles. Collaborate with the design team to translate UI/UX designs into working code. Optimize website performance for optimal speed and accessibility.",
    startYear1: "2023",
    endYear1: false,
    company2: "Back-end Developer",
    dec2: "Lead a team of backend developers, providing mentorship and conducting code reviews to ensure high-quality standards using Firebase technologies.",
    startYear2: "November",
    endYear2: false,
  },
  {
    id: 2,
    title: "Academy Sherpa",
    company: "Full Stack Developer",
    dec: "My expertise in UI/UX design ensures that every website developed is not only functional but also visually appealing and intuitive to use. As a front-end developer, I combine technical expertise and creativity to realize designs into responsive and interactive web applications. In the deployment stage, I ensure that the website can be accessed by users smoothly and securely, and perform regular maintenance to optimize performance and security.",
    startYear: "Feb 2024",
    endYear: "Mei 2024",
    company1: "UI/UX Designer",
    dec1: "Create UI Design and UX experience and analyze User/UX, and create landing page website for client.",
    startYear1: "Jan 2024",
    endYear1: "Feb 2024",
  },
  {
    id: 3,
    title: "Informatika UMM",
    company: "UMM Informatics Program Content Creator",
    dec: "Create advertising videos, visual effects, 3D motion, opening logos using several tools namely Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve. Portfolio can be viewed at Portfolio.",
    startYear: "Mei 2023",
    endYear: "Feb 2024",
    company1: "Informatika Welcoming Week (IWW) 2023",
    dec1: "Operate the OBS Studio to broadcast various events and sessions during Informatics Week.",
    startYear1: "Aug",
    endYear1: "Sep 2023",
    company2: "AIP Publishing || International Conference on Technology, Informatics and Engineering 2023",
    dec2: "AV Editing and Motion Graphic Designer 3rd International Conference on Technology, Informatics and Engineering 2023",
    startYear2: "September",
    endYear2: "2023",
    company3: "Metaverse Moot Court of the Constitutional Court - A Solution to the Lack of Moot Court Space in the Digital Age",
    dec3: "AV Editing and Motion Graphic Designer Metaverse Moot Court of the Constitutional Court - A Solution to the Lack of Moot Court Space in the Digital Age",
    startYear3: "November",
    endYear3: "2023",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                        {" "}
                          {education.startYear} -{" "}
                          {education.endYear ? (
                            education.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                      {experience.company1 && (
                        <>
                          <div className="subname">
                            <span> {experience.company1} </span>
                          </div>
                          <div className="date lui-subtitle">
                            <span>
                              {" "}
                              {experience.startYear1} -{" "}
                              {experience.endYear1 ? (
                                experience.endYear1
                              ) : (
                                <b>Present</b>
                              )}
                            </span>
                          </div>
                          <div className="text">
                            <div>
                              <p>{experience.dec1}</p>
                            </div>
                          </div>
                        </>
                      )}
                      {experience.company2 && (
                        <>
                          <div className="subname">
                            <span> {experience.company2} </span>
                          </div>
                          <div className="date lui-subtitle">
                            <span>
                              {" "}
                              {experience.startYear2} -{" "}
                              {experience.endYear2 ? (
                                experience.endYear2
                              ) : (
                                <b>Present</b>
                              )}
                            </span>
                          </div>
                          <div className="text">
                            <div>
                              <p>{experience.dec2}</p>
                            </div>
                          </div>
                        </>
                      )}
                      {experience.company3 && (
                        <>
                          <div className="subname">
                            <span> {experience.company3} </span>
                          </div>
                          <div className="date lui-subtitle">
                            <span>
                              {" "}
                              {experience.startYear3} -{" "}
                              {experience.endYear3 ? (
                                experience.endYear3
                              ) : (
                                <b>Present</b>
                              )}
                            </span>
                          </div>
                          <div className="text">
                            <div>
                              <p>{experience.dec3}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
