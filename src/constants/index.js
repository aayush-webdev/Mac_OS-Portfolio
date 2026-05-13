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
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Oct 27, 2025",
    title:
      "Weather App: Building a Real-Time Weather Application with React.js",
    image: "/images/blog1.png",
    link: "https://weatherayush.netlify.app/",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Amazon clone",
    image: "/images/blog2.png",
    link: "https://github.com/aayush-webdev/amazon_clone_using-Html-Css3",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "Calculator",
    image: "/images/blog3.png",
    link: "https://github.com/aayush-webdev/calculatorV2",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "GSAP",],
  },
  // {
  //   category: "Mobile",
  //   items: ["React Native", "Expo"],
  // },
  {
    category: "Styling",
    items: ["Tailwind CSS", "BS5", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PHP"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/aayush-webdev",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://instagram.com/aayush.devs",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/meayush_sharma",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/aayushsharma-dev",
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
    img: "/images/project-1.png",
    category: "work",
  },
  {
    id: 2,
    img: "/images/project-2.png",
    category: "work",
  },
  {
    id: 3,
    img: "/images/project-3.png",
    category: "work",
  },
  {
    id: 4,
    img: "/images/Me.jpg",
    category: "people",
  },
  // {
  //   id: 5,
  //   img: "/images/blog1.png",
  //   category: "work",
  // },
  // {
  //   id: 6,
  //   img: "/images/blog2.png",
  //   category: "work",
  // },
  // {
  //   id: 7,
  //   img: "/images/blog3.png",
  //   category: "work",
  // },
  // {
  //   id: 8,
  //   img: "/images/wallpaper.png",
  //   category: "memories",
  // },
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
    // ▶ Project 1
    {
      id: 5,
      name: "Velvet Pour",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Velvet Pour.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Velvet Pour is a premium cocktail bar brand website with a bold, cinematic design.",
            "Built with React.js, Tailwind CSS, and GSAP for smooth scroll animations and transitions.",
            "Features an immersive dark UI with large typography, cocktail menu, and brand storytelling.",
            "Focused on delivering a high-end visual experience that feels like a real luxury brand.",
          ],
        },
        {
          id: 2,
          name: "Velvet Pour.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cocktail-aayushdev.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Velvet Pour.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/coctails.png",
        },
        {
          id: 5,
          name: "Github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aayush-webdev/cocktails-main",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Magic Studio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Magic Studio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
            description: [
        "Magic is a premium digital agency landing page built with React.js and Tailwind CSS.",
        "Features glassmorphism UI, bold editorial typography, and a striking dark color palette with orange accents.",
        "Sections include About, Services, Showcase and Contact — structured like a real agency site.",
        "Focused on delivering a high-impact brand experience through clean layout and modern design.",
          ],
        },
        {
          id: 2,
          name: "Magic Studio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://magic-aayushdev.netlify.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Magic Studio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/magic.png",
        },
        {
          id: 5,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aayush-webdev/Magic.",
          position: "top-60 right-70",
        },

      ],
    },

    // ▶ Project 3
    // {
    //   id: 7,
    //   name: "Calculator App",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-80",
    //   windowPosition: "top-[33vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "Calculator Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "Built using HTML, CSS, and JavaScript with a clean and responsive layout.",
    //         "Performs all basic arithmetic operations with smooth button interactions.",
    //         "Improved my understanding of DOM manipulation and event handling.",
    //         "Simple, efficient, and perfect for practicing core JavaScript logic.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "Calculator.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://github.com/aayush-webdev/calculatorV2",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "Calculator.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-3.png",
    //     },

    //   ],
    // },
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
      imageUrl: "/images/Me.jpg",
    },
    {
      id: 2,
      name: "coder's joke.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/joke-1.jpg",
    },
    {
      id: 3,
      name: "coder's meme.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/joke-2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Me.jpg",
      description: [
        "Hey! I’m Aayush 👋, a web developer who loves building clean, fast, and interactive websites that actually feel good to use.",
        "I specialize in HTML, CSS, JavaScript, React, Tailwind CSS and Vite and I'm always experimenting, fixing bugs, and making UIs smoother then my morning cold bath😅✨.",
        "I’m big on clean UI, readable code, and problem-solving especially those annoying import bugs I somehow always manage to fix on my own.",
        "Outside of dev work, you'll find me tweaking layouts late at night, sipping overpriced coffee, or learning new tools and improving my skills.😅",
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
      href: "/files/resume-2.pdf",
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
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };