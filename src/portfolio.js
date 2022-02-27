/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Doyeon Baek",
  title: "안녕하세요!",
  subTitle: emoji(
    "열정있는 개발자 백도연입니다. 🚀 저는 자바스크립트, 리액트js, 노드js 그리고 플러터를 다룰 수 있으며, 웹, 앱, 그리고 게임 개발 경험이 있어요."
  ),
  resumeLink: "https://korjarvis.asuscomm.com:9090/sharing/qXWcOb5ql", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dosthcpp",
  linkedin: "",
  gmail: "drakedog19@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/18306159/dbaek",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "나의 프로그래밍 스킬",
  subTitle: "MY PROGRAMMING SKILLS",
  skills: [
    emoji("⚡ 웹 / 모바일 어플리케이션 제작"),
    emoji("⚡ AWS / FIREBASE 인터그레이션"),
    emoji("⚡ 간단한 게임 만들기")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fal fa-laptop-code",
      willUseSVG: true
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "프론트엔드", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "프로그래밍",
      progressPercentage: "80%"
    },
    {
      Stack: "백엔드",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "부산대학교",
      logo: require("./assets/images/pusanUnivLogo.jpg"),
      subHeader: "조경학과 학사(컴퓨터공학과 복수전공)",
      duration: "2013년 3월 ~",
      desc: "GPA 3.33 in average",
      descBullets: []
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "대표이사 겸 프론트엔드 개발자",
      company: "Nodennect",
      companylogo: require("./assets/images/nodennectLogo.png"),
      date: "2021.07 – 현재",
      desc: "딩고 및 보드워크 개발 총괄",
      descBullets: [
        "유치원 비대면 동의서 및 전자업무 서비스 'Dingo!'",
        "운동 메이트 만나기, 'Boardwalk'"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "프로젝트들",
  subtitle: "노드넥트에서 수행했던 프로젝트들",
  projects: [
    {
      image: require("./assets/images/dingoLogo.jpeg"),
      projectName: "Dingo!(딩고!)",
      projectDesc: "유치원 비대면 동의서 및 전자업무 서비스",
      footerLink: [
        {
          name: "사업계획서",
          url: "https://korjarvis.asuscomm.com:9090/sharing/gQQpFP1Bp"
        },
        {
          name: "Windows",
          url: "https://korjarvis.asuscomm.com:9090/sharing/wA8ROlWMc"
        },
        {
          name: "MacOS",
          url: "https://korjarvis.asuscomm.com:9090/sharing/p325BnIJw"
        },
        {
          name: "Android",
          url: "https://korjarvis.asuscomm.com:9090/sharing/QUNNkLjDj"
        },
        {
          name: "View Source(mobile)",
          url: "https://github.com/dosthcpp/dingo_mobileapp_prototype"
        },
        {
          name: "View Source(Web)",
          url: "https://github.com/dosthcpp/dingo_webapp_prototype"
        },
        {
          name: "시연영상",
          url: "https://www.youtube.com/watch?v=34-RZ62ji_Y"
        }
      ]
    },
    {
      image: require("./assets/images/boardwalkLogo.png"),
      projectName: "Boardwalk(보드워크)",
      projectDesc: "나와 함께하는 운동 메이트 만나기",
      footerLink: [
        {
          name: "IR자료",
          url: "https://korjarvis.asuscomm.com:9090/sharing/fPJXYfx3K"
        },
        {
          name: "Android",
          url: "https://korjarvis.asuscomm.com:9090/sharing/PPDa2Sacy"
        },
        {
          name: "View Source",
          url: "https://github.com/dosthcpp/boardwalk"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("인증 🏆 "),
  subtitle: "노드넥트 인증자료",

  achievementsCards: [
    {
      title: "벤처기업인증",
      subtitle:
        "일반 기업에 비교하였을때 기술성이나 성장성이 상대적으로 높은 기업을 세계적인 일류기업으로 육성하기 위한 목표로 창업 · 세제 · 금융 · 입지 · 특허 · 마케팅 등을 지원하는 제도",
      image: require("./assets/images/ventureLogo.jpeg"),
      footerLink: [
        {
          name: "벤처기업인증서",
          url: "https://korjarvis.asuscomm.com:9090/sharing/l9h4312vX"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle:
        "기업 내부에 독립된 연구조직이나 기관을 설립하고 육성하며 일정 요건을 갖춘 기업의 기업부설연구소와 연구전담부서를 한국산업기술진흥협회에 신고하고 인정을 받아 기업부설연구소와 연구전담부서에 대하여 연구개발활동에 필요한 다양한 혜택을 지원하여 기업들의 연구와 개발을 촉진하기 위하여 만들어진 제도",
      image: require("./assets/images/labLogo.png"),
      footerLink: [
        {
          name: "기업부설연구소인증서",
          url: "https://korjarvis.asuscomm.com:9090/sharing/uN5XTtlEx"
        }
      ]
    },
    {
      title: "ISO 인증",
      subtitle:
        "특정 조직의 품질(또는 환경)경영시스템이 국제표준화 기구에서 마련한 국제규격에 적합하게 구축되어 있음을 증명하는 제도",
      image: require("./assets/images/iso.png"),
      footerLink: [
        {
          name: "9001",
          url: "https://korjarvis.asuscomm.com:9090/sharing/9CfD0ixGg"
        },
        {
          name: "20000",
          url: "https://korjarvis.asuscomm.com:9090/sharing/4RpjP5PBi"
        },
        {
          name: "27001",
          url: "https://korjarvis.asuscomm.com:9090/sharing/kxa9jRsoA"
        }
      ]
    },
    {
      title: "한국소프트웨어협회 정회원",
      subtitle:
        "소프트웨어산업의 건전한 발전과 소프트웨어 및 시스템의 이용촉진을 통하여 소프트웨어산업을 진흥함으로써 국민생활의 향상과 국민경제의 건전한 발전에 이바지하기 위해 설립",
      image: require("./assets/images/softwareLogo.jpeg"),
      footerLink: [
        {
          name: "인증자료",
          url: "https://korjarvis.asuscomm.com:9090/sharing/KplRxu8le"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("연락처 ☎️"),
  subtitle: "외주 의뢰를 원한다면 언제든 연락 바랍니다.",
  number: "+82-1026273086",
  email_address: "doyeon.baek@nodennect.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
