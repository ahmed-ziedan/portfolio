export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  {
    name: "CV",
    link: "https://drive.google.com/file/d/15V8-4dwvfeImiCcOLTSaZllUGodwXF2A/view",
    target: "_blank",
  },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to remote opportunities worldwide",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },

  {
    id: 6,
    title: "My experience, all in one place.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 4,
    title: "E-Commerce Bookstore Web Application",
    des: "A full-featured e-commerce bookstore with role-based authorization, admin dashboard, and Stripe payment integration.",
    img: "/bulky.png",
    iconLists: [
      "/csharp.png",
      "/dotnet.svg",
      "/ef.svg",
      "/bootstrap.png",
      "/sql.svg",
    ],
    link: "https://github.com/ahmed-ziedan/Bulky-BookStore",
    live: "https://github.com/ahmed-ziedan/Bulky-BookStore",
  },
  {
    id: 5,
    title: "RESTful Web API — Clean Architecture",
    des: "A production-ready REST API with JWT authentication, role-based access control, and Swagger documentation.",
    img: "/webapi.png",
    iconLists: [
      "/csharp.png",
      "/dotnet.svg",
      "/ef.svg",
      "/swagger.svg",
      "/sql.svg",
    ],
    link: "https://github.com/ahmed-ziedan/Clean-Architecture-WebAPI",
    live: "https://github.com/ahmed-ziedan/Clean-Architecture-WebAPI",
  },
  {
    id: 6,
    title: "Al Mahmoud — Agricultural Export Platform",
    des: "A professional web platform for an Egyptian agricultural import/export company, built with Angular.",
    img: "/almahmoud.png",
    iconLists: [
      "/angular.svg",
      "/ts.svg",
      "/tail.svg",
      "/html.svg",
      "/css.svg",
    ],
    link: "https://github.com/ahmed-ziedan/almahmoud",
    live: "https://almahmoud.vercel.app/",
  },
  {
    id: 7,
    title: "Wathba — Software Solutions",
    des: "Agency that build professional websites in days — fixed price, no surprises.",
    img: "/wathba.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/ahmed-ziedan/wathba",
    live: "https://wathba.tech/",
  },
  {
    id: 8,
    title: "HMR Care Australia — Conversion-Focused Healthcare Website",
    des: "A healthcare website built for HMR Care Australia to generate GP referrals, educate patients, and onboard pharmacists.",
    img: "/hmr.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/ahmed-ziedan/hmr_care",
    live: "https://hmrcareaustralia.com.au/",
  },
];

export const testimonials = [
  {
    quote:
      "ما شاء الله، الأستاذ أحمد شخصًا محترفًا جدًا، يتمتع بقدرة عالية على التنفيذ، كما أن مقترحاته مفيدة وفعّالة، وتسهم في توجيه العمل نحو مسارات أفضل وأكثر تطورًا",
    name: "Islam Azazy",
    title: "Accountant & Operational Excellence",
  },
  {
    quote:
      "I had the pleasure of working with Ahmed and was consistently impressed by his dedication, professionalism, and attention to detail. He brings both creativity and commitment to everything he does, and his work always stands out for its quality and impact. Ahmed is not only skilled at what he does, but he’s also reliable and a great team player. I highly recommend him for any opportunity — he’s truly an asset to any team.",
    name: "Eman Salem",
    title: "L&D Specialist | Employment Coach",
  },
  {
    quote:
      "شكرا جزيلا لحضرتك تواصل و متابعة و تنفيذ و دقة احترافية فوق الممتاز و تسليم قبل الموعد المحدد",
    name: "Nader ElKasas",
    title: "Sales Manager at Mannor Jewelry",
  },
  {
    quote:
      "Ahmed is very talented and extremely helpful would 100% recommend working with him.",
    name: "Adam Elnagdy",
    title: "Enterpreneur & Freelancer",
  },
  {
    quote:
      "بصراحة أ أحمد من الناس المبدعه والنشيطة جداً ومريت معاها بتجربة رائعة وهو كان المبادر واللى بيفكر وبيبدع فى افكار جديدة مكنتش عندى دا غير سرعة الانجاز طبعا. فعلا تستاهل كل خير ومبسوط انى اتعاملت معاك",
    name: "Ramy Mahmoud",
    title: "Engineer & Founder",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/dotnet-color.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - Freelance",
    desc: "Delivered responsive web applications for clients using Angular and modern JavaScript technologies via Khamsat.com.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "MEAN Stack Developer Intern",
    desc: "Gained hands-on experience building full-stack web applications using MongoDB, Express.js, Angular, and Node.js at NTI.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ahmed-ziedan",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "https://x.com/ahmedziedan_"
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ahmedziedan/",
  },
];
