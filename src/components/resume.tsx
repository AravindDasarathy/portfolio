import resumeStyles from "../styles/Resume.module.css";

const experienceData = [
  {
    year: 2022,
    title: "Senior Software Engineer",
    company: "Freshworks",
    duration: "7 months",
    description: [
      "<p>Formulated an automation suite covering <em>80%</em> of the SDK codebase leveraging <em>Node.js and Istanbul-js</em>. Created coverage tool to measure and smartly update uncovered code, preserving past coverage maps.</p>",
      "<p>Automated an end-to-end security code scanning as part of the Freshworks App Review employing <em>Jenkins and Shell scripting</em>.</p>",
    ],
  },
  {
    year: 2018,
    title: "Software Engineer",
    company: "Freshworks",
    duration: "3 and 1/2 years",
    description: [
      "<p>Established an app review process in Freshworks by converting the app review flow from serial to parallel fashion using <em>JavaScript and Node.js</em>. Accelerated the end-to-end review time from <em>40 days to 7 days</em>.</p>",
      "<p>Improved the efficiency of the support engineering process by creating a <em>Node.js, Redis, AWS Lambda</em> - based middleware interface to streamline access to production systems. Resulted in a <em>20%</em> reduction in support ticket resolution time.</p>",
      "<p>Automated <em>75%</em> of manual sanity tests for multiple repositories with <em>mocha and super-test</em> NPM modules. Scheduled daily test runs via <em>Jenkins and Cron jobs</em> to monitor the integrity of those repositories.</p>",
      "<p>Conducted performance tests using <em>JMX scripts</em> to support the transition of services (like <em>Kafka consumers</em>) from <em>PM2 to docker</em> setup. Gauged performance metrics, optimized docker parameters, resulting in a <em>5%</em> performance boost.</p>",
    ],
  },
  {
    year: 2018,
    title: "Software Engineering Intern",
    company: "Freshworks",
    duration: "6 months",
    description: [
      "<p>Developed sample apps using <em>HTML, CSS, and JavaScript</em> to gain a thorough understanding of the Freshworks Platform SDK. Contributed to the Freshworks developer community by publishing a sample app in the Freshworks Apps public repository.</p>",
      "<p>Streamlined the app review process by migrating it from a legacy portal to the Freshdesk product, resulting in a <em>15%</em> efficiency increase and seamless experience with automation such as automatic app rejection.</p>",
      "<p>Constructed a metrics dashboard to track key performance indicators of the app review process, providing quantifiable insights into time spent on code review and overall app review time, resulting in better transparency.</p>",
    ],
  },
];

const educationData = [
  {
    year: 2022,
    title: "MS, Computer Software Engineering",
    school: "Northeastern University",
    duration: "Present, 8 months",
    description: [
      "<p>CGPA - 3.6/4.0</p>",
      "<p>Concepts of Object Oriented Design <em>(Java)</em></p>",
      "<p>Web Design and User Experience <em>(HTML, CSS, SCSS, JavaScript, React.js, Next.js, Redux)</em></p>",
      "<p>Program Structures and Algorithms <em>(Java)</em></p>",
      "<p>Enterprise Software Design <em>(Java, Spring MVC, SpringBoot, Hibernate)</em></p>",
    ],
  },
  {
    year: 2018,
    title: "BE, Electronics and Communication Engineering",
    school: "Anna University",
    duration: "4 years",
    description: ["<p>CGPA - 7.99/10</p>"],
  },
];

export default function Resume() {
  return (
    <section
      className="py-5 d-lg-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Career Trajectory</h2>
          </div>

          <div className="col-lg-6 col-12 py-5">
            <h2 className="mb-4">Experience</h2>
            {experienceData.map((experience, index) => (
              <div className={resumeStyles["timeline-wrapper"]} key={index}>
                <div className={resumeStyles["timeline-yr"]}>
                  <span>{experience.year}</span>
                </div>
                <div className={resumeStyles["timeline-info"]}>
                  <h3>
                    <span>{experience.title}</span>
                    <small>
                      {experience.company} ({experience.duration})
                    </small>
                  </h3>
                  {experience.description.map((description, index) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6 col-12 py-5">
            <h2 className="mb-4 mobile-mt-2">Education</h2>
            {educationData.map((education, index) => (
              <div className={resumeStyles["timeline-wrapper"]} key={index}>
                <div className={resumeStyles["timeline-yr"]}>
                  <span>{education.year}</span>
                </div>
                <div className={resumeStyles["timeline-info"]}>
                  <h3>
                    <span>{education.title}</span>
                    <small>
                      {education.school} ({education.duration})
                    </small>
                  </h3>
                  {education.description.map((description, index) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
