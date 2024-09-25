import React from 'react'
import Openingcard from './Openingcard'
import ApplyPage from './ApplicationModal';


const Openings = () => {
  const jobListings = [
    {
      title: "Front-End Developer",
      type: "Full-time",
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with back-end developers and designers",
        "Optimize applications for maximum speed and scalability",
        "Stay up-to-date with emerging front-end technologies"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in front-end development",
        "Proficient in HTML, CSS, JavaScript, and modern frameworks (e.g., React, Vue)",
        "Experience with version control systems (e.g., Git)"
      ],
      benefits: [
        "Health insurance",
        "401k plan",
        "Paid time off",
        "Remote work options"
      ],
      skills: [
        "Strong knowledge of front-end technologies",
        "Experience with responsive design",
        "Familiarity with RESTful APIs",
        "Understanding of cross-browser compatibility issues"
      ]
    },
    {
      title: "Python Developer",
      type: "Full-time",
      responsibilities: [
        "Design and implement scalable Python applications",
        "Write clean, testable code and develop automated tests",
        "Integrate user-facing elements with server-side logic",
        "Optimize applications for performance and scalability"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in Python development",
        "Proficiency in Python frameworks (e.g., Django, Flask)",
        "Experience with database technologies (SQL, NoSQL)"
      ],
      benefits: [
        "Competitive salary",
        "Health and dental insurance",
        "Flexible work hours",
        "Professional development budget"
      ],
      skills: [
        "Strong Python programming skills",
        "Knowledge of OOP principles",
        "Familiarity with version control (Git)",
        "Understanding of software development life cycle"
      ]
    },
    {
      title: "Flutter Developer",
      type: "Full-time",
      responsibilities: [
        "Develop cross-platform mobile applications using Flutter",
        "Collaborate with the design team to implement UI/UX",
        "Integrate RESTful APIs and third-party services",
        "Optimize app performance and ensure code quality"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years of experience in mobile app development",
        "Proficiency in Dart and Flutter framework",
        "Experience with state management solutions (e.g., Provider, Bloc)"
      ],
      benefits: [
        "Competitive compensation package",
        "Health insurance and wellness programs",
        "Stock options",
        "Continuous learning opportunities"
      ],
      skills: [
        "Strong knowledge of Flutter and Dart",
        "Experience with mobile app architecture",
        "Familiarity with native Android/iOS development",
        "Understanding of mobile UI/UX principles"
      ]
    }
  ];

  return (
    <div className='w-full h-auto p-2 lg:p-20'>
      <h1 className='text-[3rem] lg:text-[4rem] underline underline-offset-[5px]'>Positions</h1>
      {jobListings.map((job, index) => (
        <Openingcard key={index} jobDetails={job} />
      ))}
    </div>
  )
}

export default Openings