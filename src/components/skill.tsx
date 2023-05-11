import skillStyles from '../styles/Skill.module.css';

const skillData = [
  {
    title: 'Programming Languages',
    data: [
      {
        name: 'JavaScript',
        percentage: '85%',
        value: 85
      },
      {
        name: 'HTML/CSS',
        percentage: '80%',
        value: 80
      },
      {
        name: 'Java',
        percentage: '70%',
        value: 70
      },
      {
        name: 'TypeScript',
        percentage: '60%',
        value: 60
      },
      {
        name: 'C++',
        percentage: '50%',
        value: 50
      }
    ]
  },
  {
    title: 'Frameworks',
    data: [
      {
        name: 'Node.js',
        percentage: '80%',
        value: 80
      },
      {
        name: 'React.js',
        percentage: '75%',
        value: 75
      },
      {
        name: 'Next.js',
        percentage: '70%',
        value: 70
      },
      {
        name: 'Spring Boot',
        percentage: '60%',
        value: 60
      },
      {
        name: 'Material UI',
        percentage: '50%',
        value: 50
      }
    ]
  },
  {
    title: 'DevOps Tools',
    data: [
      {
        name: 'Git',
        percentage: '90%',
        value: 90
      },
      {
        name: 'AWS',
        percentage: '75%',
        value: 75
      },
      {
        name: 'Jenkins',
        percentage: '70%',
        value: 70
      },
      {
        name: 'Docker',
        percentage: '65%',
        value: 65
      },
      {
        name: 'Chef Infra',
        percentage: '50%',
        value: 50
      }
    ]
  },
  {
    title: 'Databases',
    data: [
      {
        name: 'MySQL',
        percentage: '80%',
        value: 80
      },
      {
        name: 'MongoDB',
        percentage: '75%',
        value: 75
      },
      {
        name: 'Redis',
        percentage: '70%',
        value: 70
      },
      {
        name: 'AWS DynamoDB',
        percentage: '65%',
        value: 65
      }
    ]
  }
];


export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center py-5">
            <h2>Bag of Tricks</h2>
          </div>

          {skillData.map((skill, index) => (
            <div key={index} className="col-lg-6 col-12 py-3">
              <h3 className="mb-4 text-center">{skill.title}</h3>

              {skill.data.map((data, index) => (
                <div key={index} className={`progress ${skillStyles.progress}`}>
                  <div
                    className={`progress-bar ${skillStyles["progress-bar"]}`}
                    role="progressbar"
                    style={{ width: data.percentage }}
                    aria-valuenow={data.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className={skillStyles["progress-bar-title"]}>
                      {data.name}
                    </span>
                    <span className={skillStyles["progress-bar-number"]}>
                      {data.percentage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
