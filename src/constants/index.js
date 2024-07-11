import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Moffit Cancer Center",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2020 - November 2020",
    points: [
      "Assisted in the development of a Backend caregiver web application for Moffit Cancer Center, using Node.JS and Express.",
      "Developed REST APIs to authenticate and update over 7,000 users.",
      "Built 3 regressions to understand the relationship between depression and rate of increase of cancer stages.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Recover Athletics",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - May 2021",
    points: [
      "Developed backend systems using Node.js to correlate soreness data with running mileage with the CTO.",
      "Built API webhooks to notify over 500 users daily to recover after a workout.",
      "Developed JWT authentication framework for sub-applications to enhance privacy of users.",
    ],
  },
  {
    title: "Intermediate Software Engineer",
    company_name: "MITRE",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2021 - Present",
    points: [
      "Developed a user interface for Soldiers to help find the correlation between blast pressure and its effects on human health using C#, Visual Studio, and the WPF Framework.",
      "Developed a user interface to update and manage information that users can convert into a PowerPoint for ease of visibility.",
      "Developed a React and Node.JS application for Users to manage financials for their organization for different fiscal years.",
      "Integrated Datahub as a service to manage metadata for over 100 .sql terrain files.",
      "Led a Scrum/Agile team of 15 people and acted as the Scrum master, developer, and tester utilizing Jira to track Epics and Stories.",
      "Developed engineering products, white papers, briefings, and delivered presentations to sponsors that summarize research.",
      "Setup and got fellow Co-Workers up to speed with Confluence and Agile Methodologies.",
    ],
  },
];


const projects = [
  {
    name: "User Management System",
    description:
      "Full Stack User management system using React, Node.js, Express.js, and MySQL. You just create a user and then you can view the details that you entered for that user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Node.JS",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/FadiE1998",
  },
  {
    name: "Python Blocks Game",
    description:
      "Created a game where you can move a block up, down, left, and right using PyGame library.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyGame",
        color: "green-text-gradient",
      },
      {
        name: "VS-Code",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/FadiE1998",
  },
  {
    name: "Portfolio Website",
    description:
      "This portfolio website, that showcases my abilities. Techonlogies used include: React, Three.JS, and Tailwind Css.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/FadiE1998",
  },
];

export { technologies, experiences, projects };
