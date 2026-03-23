
const ExperienceDescriptionConstants = {
  2016: 'I graduated from Pamantasan ng Lungsod ng Maynila and began my professional journey at Accenture. After three months, I decided to pursue opportunities more closely aligned with my goal of becoming a developer. This led me to join a startup company, PCCW Solutions, where I continued to grow and develop my skills in software development.',
  2018: 'I joined Indra Philippines and began specializing in frontend development using Angular. During my time there, I primarily worked on projects in the airline industry, contributing to applications such as flight booking systems, airline e-commerce platforms, and call center tools used for managing flight reservations and customer support.',
  2020: 'I continued to pursue my path in Angular development and joined Prosource Global. During my time there, I worked on an insurance comparison and recommendation platform that helped users evaluate and select suitable insurance options. After a few months, I transitioned to IBM Solutions Inc. to continue expanding my experience in frontend development.',
  2021: 'I am still employed under IBM Solutions as an Angular developer and have been working on projects related to U.S. tax filing systems. My first project focused on a tax advisory application designed to keep users informed about tax law updates and filing deadlines. I later worked on a property tax management platform that handles various aspects of property taxation, including asset management, tax bills, returns, and other related processes.',
  2024: 'I transitioned to another project within IBM Solutions as a React Developer, working on systems related to U.S. veteran insurance policies. My role involves contributing to multiple features, including automatic insurance payments, manual bill payment processing, and fund transfer capabilities.'
};

const ExperienceDetailsConstants = {
  '2016': {
    'Accenture': {
      imageUrl:'accenture.jpg',
      duration: 'Apr 2016 - Aug 2016',
      description: 'I graduated from Pamantasan ng Lungsod ng Maynila with a Bachelor of Science in Computer Studies, majoring in Computer Science. I began my software engineering career at Accenture, where I completed a month-long bootcamp focused on C++. However, I decided to leave the company after the project assignment I received did not align with my career goals in software development.'
    },
    'PCCW Solutions': {
      imageUrl:'pccw.jpg',
      duration: 'Sep 2016 - Jul 2018',
      description: 'After my time at Accenture, I joined an IT startup in the Philippines, PCCW Solutions, where I further developed my skills as a full-stack developer. I worked extensively with Java EE, MySQL, HTML, CSS, VueJS and Angular contributing to both front-end and back-end development. During my tenure, I was involved in two key projects: the development of an internal timesheet system for PCCW employees and a project supporting the migration of Hong Kong ID cards.'
    }
  },
  '2018': {
    'Indra Philippines': {
      imageUrl:'indra.jpg',
      duration: 'Jul 2018 - Mar 2020',
      description: 'I then moved on to Indra Philippines, where I worked as a full-fledged Frontend Developer specializing in Angular. In this role, I was part of the airline industry, contributing to projects for various airline clients. My work focused on developing and enhancing applications related to flight booking systems, airline e-commerce platforms, and call center solutions.'
    }
  },
  '2020': {
    'Prosource Global': {
      imageUrl:'prosource.png',
      duration: 'Apr 2020 - Jun 2020',
      description: 'Although I was not actively seeking a new opportunity, I was approached by Prosource Global with a compelling offer that I decided to pursue. I was assigned to a client in the insurance domain, where I continued working as a Frontend Developer using Angular, contributing to an insurance advisory application. However, my tenure lasted only three months due to the impact of the pandemic, which led to budget reductions. As one of the newest members of the team, I was among those affected by the workforce adjustments.'
    },
    'IBM Solutions Inc.': {
      imageUrl:'ibm.png',
      duration: 'Oct 2020 - Jun 2021',
      description: 'After losing my job during the pandemic, I took a few months to explore opportunities outside the corporate environment. Eventually, I was approached by IBM for a Frontend Developer role specializing in Angular. At IBM, I was assigned to the media industry; however, the projects I worked on were primarily focused on taxation. I contributed to a tax advisory platform designed to keep users informed about tax regulations, updates, and filing processes, along with other related initiatives.'
    }
  },
  '2021': {
    'IBM Solutions Inc.': {
      imageUrl:'ibm.png',
      duration: 'Jun 2021 - Dec 2024',
      description: 'I am currently still with IBM, where I transitioned to a different project under the same client. This project focuses on property tax management, covering areas such as asset management, tax billing, and tax return processing. I continue to work as a Frontend Developer using Angular, and this has been the longest project I have been involved in, spanning nearly four years.'
    }
  },
  'Present': {
    'IBM Solutions Inc.': {
      imageUrl:'ibm.png',
      duration: 'Jan 2025 - Present',
      description: 'After successfully delivering the property tax management project, I was assigned to a new project focused on U.S. veterans’ life insurance, which is my current role. In this project, I transitioned to working as a Frontend Developer using ReactJS—a new technology for me, as my prior experience had been primarily with Angular. Despite this, I was able to adapt quickly and continue making meaningful contributions and a strong impact within the team.'
    }
  }
}

const ExperienceSkillsConstants = {
  '2016': ['C++', 'Java', 'MySQL', 'HTML5', 'CSS3', 'VueJS', 'Angular', 'Bootstrap'],
  '2018': ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Materialize'],
  '2020': ['Angular','HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap'],
  '2021': ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap'],
  'Present': ['ReactJS', 'JavaScript', 'HTML5', 'CSS3']
}

export { ExperienceDescriptionConstants, ExperienceDetailsConstants, ExperienceSkillsConstants };