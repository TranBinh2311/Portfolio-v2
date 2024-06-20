import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  blogs,
  twitter,
  tripguide,
  fpt,
  imocha,
  spring,
  aws
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React/Angular Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Spring boot",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full stack Developer",
    companyName: "FPT Software",
    icon: fpt,
    iconBg: "#fff",
    date: "Ocotober 2020 - March 2023",
    points: [
      "Contributed to the development of an online platform providing access to licensed mental health professionals, including psychiatrists, therapists, and counselors, to support and treat various mental health conditions.",
    ],
  },
  {
    title: "Backend Developer < Java >",
    companyName: "FPT Software",
    icon: fpt,
    iconBg: "#fff",
    date: "March 2023 - August 2023",
    points: [
      "A logistics application to manage drug purchases in many regions and countries. This website is used to manage the location of drugs being bought and sold and where they are shipped, managing import and export ports in many countries."
    ],
  },
  {
    title: "Backend Developer < Java / NodeJS >",
    companyName: "Alphaway - Imocha",
    icon: imocha,
    iconBg: "#fff",
    date: "August 2023 - December 2023",
    points: [
      "Building an electronic wallet for a bank in Malaysia. Creating a KYC flow to assist registered users in logging into the system, verified by identifier cards or passports, and enhancing customer experience activities.",
    ],
  },
  {
    title: "Full stack Developer < Spring Boot >",
    companyName: "Alphaway - Imocha",
    icon: imocha,
    iconBg: "#fff",
    date: "Jan 2023 - March 2023",
    points: [
      "Build an eyeglasses insurance website to help users complain about problems encountered when using eyeglasses.",
    ],
  },
  {
    title: "Full stack Developer < Spring Boot >",
    companyName: "Alphaway - Imocha",
    icon: imocha,
    iconBg: "#fff",
    date: "March 2023 - present",
    points: [
      "Building motorbike insurance for Allianz with many rich features creating a great experience for users."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I highly recommend Binh Tran as a full stack NodeJS and React developer based on my experience managing him in a healthcare project. Binh's dedication and commitment to delivering high-quality code were evident in his meticulous attention to detail and his proactive approach to problem-solving.",
    name: "Duong Tran",
    designation: "Solution Architecture & Technical manager",
    company: "FPT Software",
    image: "https://media.licdn.com/dms/image/C5103AQF2_4SlZeBvgw/profile-displayphoto-shrink_800_800/0/1569379188730?e=1724284800&v=beta&t=mYISbfsl1KXWBJwUVW6V2tPC3_fIvQfl58ImyBHLRK8",
  },
  {
    testimonial:
      "I am pleased to write this LinkedIn recommendation for Binh Tran, a highly skilled Full Stack Developer. I had the privilege of working closely with Binh on a complex web development project, and his expertise and dedication were truly exceptional.",
    name: "Tuan Pham",
    designation: "Techinal leader",
    company: "FPT Software",
    image: "https://media.licdn.com/dms/image/D5603AQF3RcouLINwOQ/profile-displayphoto-shrink_800_800/0/1690227310769?e=1724284800&v=beta&t=t5BoaG4gdGK6TqQRhSs1rFtQYVhxA0gIwyZwFzHERDc",
  },
  {
    testimonial:
      "SoonTak and I very happy with working with Robert. I like Robert are pro active and fast delivery.",
    name: "Joseph Tan",
    designation: "Project Manager",
    company: "Imocha",
    image: "https://lh3.googleusercontent.com/a/ACg8ocIAOiwZ7dzjPoiHw_0PtUrEHm5EXblM1c2SgSKr3ZP7-Wj5jQ=s64-w64-h64-c-k-no",
  },
  {
    testimonial:
      "Good that you take initiative. Some of the developer will be like Robert pro active. Some is the other way round passive. Self initiative is important when it come to grow and awareness.",
    name: "Chin Tah",
    designation: "Project Leader",
    company: "Imocha",
    image: "https://pps.whatsapp.net/v/t61.24694-24/56764740_383796378875136_2835476003671769088_n.jpg?ccb=11-4&oh=01_Q5AaIDcEvDjPCTlpD6WFWc0XLRfFl1VksApbLyFvO6KpCJg6&oe=667CD8C3&_nc_sid=e6ed6c&_nc_cat=111",
  },
];

const projects: TProject[] = [
  {
    name: "Personal Blogs",
    description:
      "Personal Blogs provide individuals with a dedicated space to share their thoughts, experiences, and expertise on various topics. These web-based platforms allow users to create, publish, and manage their own content, offering a personalized and engaging way to connect with a global audience.",
      tags: [
      {
        name: "React",
        color: "green-pink-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blogs,
    sourceCodeLink: "https://devthoughts.vercel.app/",
  },
  {
    name: "Twitter stream",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Spring boot",
        color: "green-pink-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "ELK stack",
        color: "pink-text-gradient",
      },
      {
        name: "PostGreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Zipkin",
        color: "orange-text-gradient",
      },
    ],
    image: twitter,
    sourceCodeLink: "https://github.com/TranBinh2311/Spring-boot-twitter-stream",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Nodejs",
        color: "green-pink-gradient",
      },
      {
        name: "Angular",
        color: "blue-text-gradient",      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
