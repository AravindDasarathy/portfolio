import aboutStyles from '../styles/About.module.css';
import Image from 'next/image';

const aboutData = ['Aravind', 'Software Engineer', 'Full Stack Developer'];

const whatAmI =
  "I find joy in solving problems, whether it is working through a chess puzzle or crafting an algorithm to do the same.";

export default function About() {
  return (
    <section
      className={`about ${aboutStyles['full-screen']} d-lg-flex justify-content-center align-items-center"`}
      id="about"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className={aboutStyles['about-text']}>
              <h1
                className={`${aboutStyles.animated} ${aboutStyles['animated-text']}`}
              >
                <span className="me-3 d-inline-block">I'm</span>
                <div className={aboutStyles['animated-info']}>
                  {aboutData.map((item, index) => (
                    <span className={aboutStyles['animated-item']} key={index}>
                      {item}
                    </span>
                  ))}
                </div>
              </h1>

              <p>{whatAmI}</p>
            </div>
          </div>

          <div className="col-lg-auto col-md-12 col-12">
            <div className={aboutStyles['about-image']}>
              <Image
                src="/images/coder.svg"
                className="img-fluid"
                alt="svg image"
                width={200}
                height={200}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
