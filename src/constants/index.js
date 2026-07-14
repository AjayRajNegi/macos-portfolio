const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  // {
  //   id: "safari",
  //   name: "Articles",
  //   icon: "safari.png",
  //   canOpen: true,
  // },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "Rust", "Python"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "React Native",
      "Three.js",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & DB",
    items: ["Node.js", "Laravel", "MySQL", "MongoDB", "Prisma ORM", "SQL"],
  },
  {
    category: "DevOps",
    items: ["AWS (EC2/S3)", "Firebase", "Docker", "Linux", "Git", "CI/CD"],
  },
  {
    category: "AI",
    items: ["Langchain", "LangGraph", "n8n"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/AjayRajNegi",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ajay-raj-negi-a3713a262/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/AjayRajNegi1608",
  },
  {
    id: 4,
    text: "Resume",
    icon: "/icons/file.svg",
    bg: "#4bcb63",
    link: "https://resume.ajayhtml.online",
  },
  {
    id: 5,
    text: "Portfolio",
    icon: "/icons/atom.svg",
    bg: "#a855f7",
    link: "https://portfolio.ajayhtml.online",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpeg",
  },
  {
    id: 2,
    img: "/images/gal2.jpeg",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Vartex: Online Learning Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Vartex.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "VarTex - Full-Stack LMS Demo",
            "Tech Stack: Next.js 16, React 19, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Razorpay, AWS S3, Docker",
            "• Engineered a production-grade Learning Management System using Next.js App Router, React Server Components, Server Actions, nested layouts, route handlers, and streaming.",
            "• Built a type-safe backend with Prisma ORM and PostgreSQL, designing scalable relational schemas for courses, enrolments, payments, and user management.",
            "• Integrated Razorpay for secure payment processing and AWS S3 for reliable media and course asset storage with server-side upload workflows.",
            "• Optimised performance through SSR, selective client components, efficient data fetching, caching, and code splitting.",
          ],
        },
        {
          id: 2,
          name: "vartex.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://vartex-theta.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "vartex.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    {
      id: 6,
      name: "Gaiaspace",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Gaiaspace.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Gaiaspace - 3D Web Experience",
            "Tech Stack: React-Three-Fiber, Next.js, GSAP",
            "• Engineered a high-performance 3D interactive website.",
            "• Delivered smooth animations with GSAP and collaborated with the client for UI/UX alignment.",
          ],
        },
        {
          id: 2,
          name: "gaiaspace.co.in",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://gaiaspace.co.in",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "gaiaspace.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Easy Lease",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-20 left-80",
      windowPosition: "top-[33vh] left-37",
      children: [
        {
          id: 1,
          name: "Easy Lease.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Easylease – Full-Stack Real Estate Platform",
            "Tech Stack: React 19, TypeScript, Laravel 12, Vite, Tailwind CSS, MySQL",
            "• Developed a production-ready full-stack real estate platform enabling users to discover, list, and manage properties with advanced search and map-based visualisation.",
            "• Implemented secure authentication and role-based access, supporting property owners, agents, and administrators.",
            "• Built real-time chat functionality with Pusher, allowing seamless communication between buyers and agents.",
          ],
        },
        {
          id: 2,
          name: "easylease.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://easelease.services",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "easylease.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Full-Stack Developer · DevOps & Cloud Engineer · 3D Web Specialist",
      image: "/images/gal4.jpeg",
      description: [
        "Hey! I'm Ajay Raj Pratap Singh, a results-driven Full-Stack Developer and DevOps Engineer with 2+ years of freelancing experience building and shipping production-grade web applications.",
        "I'm proficient in TypeScript, React, Node.js, and cloud infrastructure (AWS, Docker, Kubernetes). I lead end-to-end product development — from UI/UX design through API architecture, database modelling, CI/CD pipeline setup, and containerised deployment.",
        "Based in Dehradun, India. B.Tech in Computer Science (CSE) at Uttaranchal University — CGPA 8.5/10, graduating May 2026.",
      ],
    },
    {
      id: 5,
      name: "experience.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-32 left-40",
      subtitle: "Internships & Experience",
      description: [
        "Software Developer — REDSAN | Jan 2024 – March 2025",
        "• Independently designed, developed, and deployed 5+ client websites, web apps, and mobile apps end-to-end, owning the full development lifecycle from architecture to deployment.",
        "• Delivered production-ready client projects including gaiaspace.co.in, grihya.in, maxpowerservices.com, and seahawkadventures.com.",
        "",
        "Web Developer — Elite Estate's | Sep 2025 – December 2025",
        "• Built and deployed a full-stack real-estate web platform (Easylease) connecting tenants, property owners, and brokers with property listings, inquiries, and role-based access.",
        "• Led end-to-end development for airportporterservice.ca including UI/UX design, backend APIs, and database integration — improving platform usability and reducing manual coordination by ~40%.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/files/resume.pdf",
    },
    {
      id: 2,
      name: "resume.ajayhtml.online",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://resume.ajayhtml.online",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
