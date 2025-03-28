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
    vinsuite,
    offrs,
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Senior Software Developer",
      company_name: "vinSUITE",
      icon: vinsuite,
      iconBg: "#383E56",
      date: "November 2023 - Present",
      points: [
        "Fixed bugs, added features, and optimized performance, security, and input validation.",
        "Developed and maintained web applications using ColdFusion, HTML, CSS, and JavaScript.",
        "Worked with PHP, ColdFusion, Databases, Google API, and Payment Gateways.",
      ],
    },
    {
      title: "Senior Software Developer",
      company_name: "Offrs",
      icon: offrs,
      iconBg: "#E6DEDD",
      date: "November 2019 - October 2023",
      points: [
        "Developed and maintained responsive websites using HTML, CSS, JavaScript, ColdFusion, and PHP.",
        "Built marketing applications (Direct Mail Pro, Email Pro) for realtors, integrating LOB.com API for automated direct mail campaigns.",
        "Automated workflows with scripts and cron jobs, streamlining campaign creation.",
        "Developed and optimized backend functionalities using PHP, improving application performance and scalability.",
        "Contributed to significant revenue growth by enhancing client engagement and operational efficiency.",
      ],
    },
    {
      title: "Software Engineer (PHP Developer)",
      company_name: "PureLogics",
      icon: shopify,
      iconBg: "#383E56",
      date: "November 2018 - September 2019",
      points: [
        "Developed web applications and Shopify stores.",
        "Migrated stores to Shopify, handling products, variants, and images.",
        "Built Laravel-based reporting tools using HubSpot APIs.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Techleadz IT Solutions",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "December 2016 - November 2018",
      points: [
        "Built and deployed web applications.",
        "Led code reviews, UI/UX, and project planning.",
        "Worked with PHP, Laravel, ColdFusion, Python (Pandas, NumPy), and Databases.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Direct Mail Pro & Email Pro",
      description:
        "Real estate campaign applications built using ColdFusion and PHP, integrated with LOB.com API for automated direct mail and email campaigns. Features include automated campaign creation, process automation via scripts, and enhanced client engagement tools.",
      tags: [
        {
          name: "coldfusion",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "lob-api",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Lead and Deal Reporting System",
      description:
        "A comprehensive reporting system built with Laravel and MySQL, integrating HubSpot API to fetch and analyze leads and deals data. Features include automated data synchronization, customizable reporting periods, and business insights generation.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "hubspot-api",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Shopify Store Migration",
      description:
        "Successfully migrated an e-commerce store from MSSQL Server to Shopify, handling complex data transfer including categories, products, variants, and attributes. Ensured data integrity and delivered a fully functional Shopify store.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "liquid",
          color: "green-text-gradient",
        },
        {
          name: "data-migration",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "ATG Travels Web Application",
      description:
        "Support and development of a global travel web application, working with multiple technologies including Python for data processing, ColdFusion and PHP for web development, and complex SQL Server database operations.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "coldfusion",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "PropertyLog",
      description:
        "A real estate management platform built with Laravel, MySQL, and JavaScript, enabling secure property history management for multiple users. Focuses on data security, privacy, and user-friendly interface design.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };