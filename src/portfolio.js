/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Michael Pham's Portfolio",
  logo_name: ":)",
  description:
    "A curious individual who is passionate about technology and logical problem solving and is seeking to create applications that can create positive societal impact.",
  og: {
    title: "Michael Pham'a Portfolio",
    type: "website",
    url: "http://michaelpham.com/",
  },
};

//Home Page
const greeting = {
  title: "Michael Pham",
  logo_name: "Michael Pham",
  subTitle:
    "A curious individual who is passionate about technology and logical problem solving and is seeking to create applications that can create positive societal impact.",
  resumeLink:
    "https://drive.google.com/file/d/1kHjNiRFAHW0pUQCAzwRzFlPmHEEWW4zi/view?usp=sharing",
  githubProfile: "https://github.com/michaelpham995",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/michaelpham995",
  // linkedin: "https://www.linkedin.com/in/michael-pham-545a581a3/",
  // gmail: "michaelpham995@gmail.com",

  {
    name: "Github",
    link: "https://github.com/michaelpham995",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michael-pham-545a581a3/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:michaelpham995@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "SoftwareDevelopment",
      skills: [
        "- Constructed functional web applications utilizing React and C# .NET Core",
        "- Programmed mobile applications utilizing Swift, xCode, FireBase, and other tools",
        "- Experience utilizing and working with APIs to construct optimal products ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#F05138",
          },
        },
        {
          skillName: "Visual Studio",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode:",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://leetcode.com/michaelpham995/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Texas at Austin",
      subtitle:
        "BBA in Management Information Systems and Elements of Computing Certificate",
      logo_path: "UTAustinLogo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019-2023",
      descriptions: [
        "I have studied basic SWE subjects that include data strcutures, algorithms, web development, and app development.",
        "Furthermore, I have experience utilizing RDBMS, cloud, and computing tools such as Azure, Github/Gitlab, MongoDB, AWS, and Salesfoce.",
        "I hold a 3.8 GPA overall and a 4.0 GPA in my computer science courses.",
      ],
      website_link: "https://www.utexas.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python",
      subtitle: "LinkedIn",
      logo_path: "linkedinLogo.png",
      certificate_link:
        "https://www.linkedin.com/skill-assessments/Python%20(Programming%20Language)/report/",
      color_code: "#8C151599",
    },
    {
      title: "Java",
      subtitle: "LinkedIn",
      logo_path: "linkedinLogo.png",
      certificate_link:
        "https://www.linkedin.com/skill-assessments/Java/report/",
      color_code: "#8C151599",
    },
    {
      title: "Swift",
      subtitle: "- LinkedIn",
      logo_path: "linkedinLogo.png",
      certificate_link:
        "https://www.linkedin.com/skill-assessments/Swift%20(Programming%20Language)/report/?channel=FEED_SHOWCASE&practiceModal=&practiceMode=&vanityNameContext=mohanalingam-rajaram-3b343225",
      alt_name: "Google",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work/Internship and Volunteer Activities",
  description:
    "I am currently seeking to work as a software engineer and completed projects utilzing different languages and tools. However; my experience goes beyond that as I have interned in a few industries and volunteered over time.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internships",
      experiences: [
        {
          title: "Technology & Cybersecurity Risk Consultant",
          company: "RSM US LLP",
          logo_path: "rsm.jpg",
          duration: "June 2022 - November 2022",
          location: "Austin, Texas",
          description:
            "During my tenure, I have implemented and constructed bot automation that efficiently and automatically compiles user information and key data. Furthermore, I analyzed and tested cybersecurity measures regarding database and application security, where I was able to utilzie and create SQL queries and scripts for data retrieval. I also was able to utilzie the SDLC framework when completing tasks and projects.",
          color: "#ee3c26",
        },
        {
          title: "Business & Marketing Intern",
          company: "Loan Ranger Capital",
          logo_path: "loanrangercapital.png",
          duration: "April 2021 - June 2022",
          location: "Austin, Texas",
          description:
            "Loan Ranger Capital is a hard money lending company and I oversaw and constructed database systems that stored over $200 million of information and data in loan hard money lending. I also implemented and and helped design the company website and database information and got the opportunity to learn about the real estate industry and evaluated financing and investing activities for the company.",
          color: "#0071C5",
        },
        {
          title: "Screener & Technology Assistant",
          company: "PMC Clinic",
          logo_path: "PMC.png",
          duration: "May 2020 - August 2020",
          location: "Houston, Texas",
          description:
            "At the PMC Clinic I revamped office place technology by facilitating and performing software updates. In addition to this I utilized a database tool, Amazing Charts, for data entry and communication.",
          color: "#ee3c26",
        },
        {
          title: "Swim Coach and Website Developer",
          company: "Escalate Aquatic Team",
          logo_path: "Escalate.jpg",
          duration: "December 2018 - January 2020",
          location: "Houston, Texas",
          description:
            "I coached and trained a variety of swimmers aged 6-16 on a local Gulf Swimming Team and managed/constructed team's social media site and website to help expand team membership.",
          color: "#0071C5",
        },
        {
          title: "Assistant Manager",
          company: "Taco Cabana",
          logo_path: "tacocabana.png",
          duration: "June 2017 - July 2018",
          location: "Houston, Texas",
          description:
            "I secured procurement items and reviewed supplies for branch. Furthermore, I directed operations at both the front of the house and the drive thru of the restaurant and collected customer payments and maintained a clean and safe work environment.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteer Activities",
      experiences: [
        {
          title: "Food Distribution Volunteer",
          company: "Central Texas Food Bank",
          logo_path: "foodbank.png",
          duration: "April 2021 - August 2022",
          location: "Austin, Texas",
          description:
            "Served, distributed, and packaged food for under-served and less priviledged individuals in the Austin community.",
          color: "#0C9D58",
        },
        {
          title: "Data Entry Volunteer",
          company: "St. David's Hosptital",
          logo_path: "hospital.jpg",
          duration: "January 2020 - May 2020",
          location: "Austin, Texas",
          description:
            "I was able to work closelt with nurses and health care analytics departments to find patterns in the effectiveness of different treatments. Here, I was able to utilize and work with the Meditech software to enter patient checkup, morality, and health statistics information.",
          color: "#4285F4",
        },
        {
          title: "Food and Clothing Distribution Volunteer",
          company: "Common Threads",
          logo_path: "commonthreads.png",
          duration: "January 2018 - August 2020",
          location: "Houston, Texas",
          description:
            "I was able to collect, package, and distribute food and clothing for less fortunate members in the Southwest Houston community, and was able to do so durrican Hurrican Harvey.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects come from both academic and personal projects. I like developing applications and solving problems in various languages such as Python & Swift.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactImage.png",
    description:
      "I am available on all of the following contact links and listings! I am open to inquiries and love connecting with new people!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Location:",
    subtitle: "Austin, TX",
    location_map_link: "https://www.google.com/maps/place/Austin,+TX/@30.3079827,-97.895824,11z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
