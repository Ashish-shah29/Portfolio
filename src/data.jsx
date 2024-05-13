import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGithub,
  FaLinkedinIn 
} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';


import Work1 from './assets/projects/studynotion.png';
import Work2 from './assets/projects/vizuals.png';
import Work3 from './assets/projects/file-system.jpg';
import Work4 from './assets/projects/tent-calculator.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import Html from './assets/skills-logos/html.png'
import TailwindCss from './assets/skills-logos/tailwind-css.png'
import Express from './assets/skills-logos/express.svg'
import Git from './assets/skills-logos/git.png'
import Github from './assets/skills-logos/github.png'
import Java from './assets/skills-logos/java.webp'
import Js from './assets/skills-logos/js.png'
import Mongoose from './assets/skills-logos/mongoose.png'
import Mongodb from './assets/skills-logos/mongodb.png'
import Node from './assets/skills-logos/node.png'
import React from './assets/skills-logos/react.png'
import Redux from './assets/skills-logos/redux.png'

import GithubImg from './assets/profiles/github.png'
import linkedinImg from './assets/profiles/linkedin.png'
import LeetcodeImg from './assets/profiles/leetcode.png'

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ashish',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Shah',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Indore,India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 9109517519',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ashishshah036@gmail.com',
  },

  {
    id: 9,
    title: 'Github : ',
    description:'Ashish-shah29',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Hindi, English',
  },
];

export const interests = [
  {
    id: 1,
    title: 'Travelling',
    description: 'Keeps me alive and curious about everything.',
  },

  {
    id: 2,
    description: `It's an immense source of peace and satisfaction to me.`,
    title: 'Animal Care',
  },

  {
    id: 3,
    title: 'Dairy Writting',
    description: 'Helps evaluating myself and keep growing.',
  },
  {
    id: 4,
    description: 'Cricket is my first choice of enjoyment',
    title: 'Cricket',
  }
];

export const resume = [
  {
    id: 1,
    category: 'profile',
    icon: <FaGithub />,
    title: 'Github',
    desc: GithubImg,
    link:'https://github.com/Ashish-shah29'
  },

  {
    id: 2,
    category: 'profile',
    icon: <SiLeetcode />,
    title: 'Leetcode',
    desc: LeetcodeImg,
    link : 'https://leetcode.com/u/Ashish_shah/'
  },

  {
    id: 3,
    category: 'profile',
    icon: <FaLinkedinIn />,
    title: 'LinkedIn',
    desc:linkedinImg,
    link: 'https://www.linkedin.com/in/ashish-shah-1a8942241/'
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2024',
    title: 'Electronics Engineering <span>RGPV</span>',
    desc: `Madhav Institute of Technology and Science(MITS),Gwalior
     <br/>CGPA : 8.09`,
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2019',
    title: 'Senior Secondary <span>CBSE</span>',
    desc: `Drashti Public School, Sanawad <br/>Percentage : 90.2`,
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016-2017',
    title: 'Secondary <span>CBSE</span>',
    desc:' Drashti Public School, Sanawad <br/>CGPA : 9.6',
  },
];

export const skills = [
  {
    id: 1,
    title: 'React',
    logo: React,
  },

  {
    id: 2,
    title: 'Javascript',
    logo: Js,
  },

  {
    id: 3,
    title: 'Express',
    logo: Express,
  },

  {
    id: 4,
    title: 'MongoDb',
    logo: Mongodb,
  },

  {
    id: 5,
    title: 'Node Js',
    logo: Node,
  },

  {
    id: 6,
    title: 'Redux',
    logo: Redux,
  },

  {
    id: 7,
    title: 'Mongoose',
    logo: Mongoose,
  },
  {
    id: 8,
    title: 'Tailwind Css',
    logo: TailwindCss,
  },
  {
    id: 9,
    title: 'Html',
    logo: Html,
  },
  {
    id: 10,
    title: 'Java',
    logo: Java,
  },

  {
    id: 11,
    title: 'Git',
    logo: Git,
  },
  {
    id: 12,
    title: 'Github',
    logo: Github,
  }
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'StudyNotion-EdTech Platform',
    description:[
      "⭐ Designed and Developed an EdTech Platform using MERN stack where user can create and sell courses (as Instructor) & can buy and access courses (as Student)",
      "⭐ Developed features like instructor dashboard, add to cart,give rating and  review,publish course, enrolled coures, edit profile,contact us,view course progress",
      "⭐ Integrated Payment Gateway Via Razorpay, media management Vai Cloudinary , Mail sending Via nodemailer,state management Via Redux ",
      "⭐ Secured the website using JWT Authentication and Authorization & OTP generation."
    ],
    details: [
      {
        icon: <FaGithub />,
        title: 'Github : ',
        link:'https://github.com/Ashish-shah29/StudyNotion',
        desc:'View Source Code '
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://study-notion-rouge-three.vercel.app/',
        desc:'Visit the website'
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Vizuals-Video Discovery',
    description:[
      "⭐ Designed and Developed a Video Streaming App using REactJs where user can watch their favourite videos.",
      "⭐ Develop a search option where user can search by relavant keywords for the video they want. ",
      "⭐ Used Rapid APIs YT3 API to fetch data. ",
      "⭐ Integrated MUI components to make the UI user friendly."
    ],
    details: [
      {
        icon: <FaGithub />,
        title: 'Github : ',
        link:'https://github.com/Ashish-shah29/vizuals',
        desc:'View Source Code '
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://vizuals.netlify.app/',
        desc:'Visit the website'
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'File System Organizer',
    description:[
      "⭐ Developed a server side application using Node Js to organize files under a particular folder. ",
      "⭐ Sorts files into relavant folders like media,documents,App and so on.  ",
      "⭐ All this happens just using a single line command 'Organize'",
      "⭐ Empower users through the sense of clarity and by solving zumbled files."
    ],
    details: [
      {
        icon: <FaGithub />,
        title: 'Github : ',
        link:'https://github.com/Ashish-shah29/File-System-Organizer',
        desc:'View Source Code '
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://youtu.be/1yIvWbslMaU',
        desc:'View tool working'
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Tent House Calculator',
    description:[
      "⭐ Build a website using Javascript & HTML-CSS to help Tent rental venders and buyers.", 
      "⭐ Developed a calculator that calculates the number of entities required of each type to stich a tent for a particular area.",
      "⭐ Added feature for customer - They can get the cost that they need to pay for a given area.",
      "⭐ Customer can choose from different plans based on their needs."
    ],
    details: [
      {
        icon: <FaGithub />,
        title: 'Github : ',
        link:'https://github.com/Ashish-shah29/Tent-house-project',
        desc:'View Source Code '
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: '#',
        desc:`Can't preview.`
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
