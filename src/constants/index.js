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
  threejs,
  // logoreact,
  // fullstack,
  meta,
  // tesla,
  // starbucks
  // portals,
} from "../assets";

import gdsc from "../assets/gdsc.png";
import openai from "../assets/openai.png";
import crypto from "../assets/crypto.png";
import portals from "../assets/portals.png";
import gojo from "../assets/gojo.png";
import github from "../assets/github.png";
import codex1 from "../assets/codex1.png";
import logo1 from "../assets/logo1.png";
import aces from "../assets/aces.png";

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
    id: "Project",
    title: "Project",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Cloud Enthusiast",
    icon: backend,
  },
  {
    title: "Competative Programmer",
    icon: creator,
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
    title: "Web Co-ordinator",
    company_name: "GDSC DYPCOE",
    icon: logo1,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ACES Web Co-ordinator",
    company_name: "ACES",
    icon: aces,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",      
    ],
  },
  {
    title: "Google Cloud Mentor",
    company_name: "Cloud Study Jam",
    icon: github,
    iconBg: "#383E56",
    date: "Sept 2023 - Present",
    points: [
      "Actively exploring Google Cloud technologies as a Study Jam member.",
      "Collaborating with peers to enhance cloud knowledge and practical skills.",
      "Contributing to cloud solution implementations with a focus on scalability and security.",
      "Participating in knowledge-sharing and providing valuable insights during code reviews.",
    ],
  },
  {
    title: "CPMC - Gunner",
    company_name: "Python | Java | C++",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Excelling in competitive programming through algorithm mastery and coding proficiency.",
      "Collaborating within CPMC DYPCOE to foster a competitive and knowledge-sharing environment.",
      "Staying updated on the latest programming trends.",
      ",Actively participating in code reviews and providing constructive feedback to fellow members.",
    ],
  },
];


const projects = [
  {
    name: "GDSC Portfolio",
    description:
      "With sleek and intuitive user interfaces, it presents a curated collection of my projects, embodying my expertise in JavaScript, React.js, and other cutting-edge technologies. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "netlify",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gdsc,
    source_code_link: "https:/dj-portfolio07.netlify.app/",
  },
  {
    name: "DJ AI Tools",
    description:
      "My AI Tools web application, powered by OpenAI's API, offers a glimpse into the world of artificial intelligence, providing users with innovative and efficient solutions for diverse tasks and challenges.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "openAiapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https:/dj-bot07.github.io/DjAI-TOOLS/",
  },
  {
    name: "Portals",
    description:

    "Through my Simple Interactive Metaverse Project Portals, users embark on immersive journeys within a dynamic digital realm, fostering engagement, creativity, and connection.",    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "webgl",
        color: "pink-text-gradient",
      },
    ],
    image: portals,
    source_code_link: "https://portals07.netlify.app/",
  },
  {
    name: "GitHub",
    description:

    "Within my GitHub repository, innovation takes form as code, where collaborative projects unfold, and creativity knows no bounds.",
     tags: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "open-source",
        color: "pink-text-gradient",
      },
    ],
    image: gojo,
    source_code_link: "https://github.com/DJ-BoT07/",
  },
  {
    name: "CryptoMon",
    description:
      "CryptoMon, harnessing the power of the Gecko API, serving as a trusted companion for crypto enthusiasts in their digital asset journey.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "geckoCoin",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https:/dj-bot07.github.io/CryptoMons/",
  },
  {
    name: "FeelFree",
    description:

    "Explore my Mental Assessment Website, your path to self-discovery and well-being through insightful evaluation and personalized guidance.",    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: codex1,
    source_code_link: "/",
  },
];

export { services, technologies, experiences, projects };
