interface CardProps {
  imgSrc: string;
  title: string;
  body: string;
  buttonText: string;
}

export const blogEntries: CardProps[] = [
  {
    imgSrc: "/images/blogs/blog-1.png",
    title: "My Journey to Mastering Web Development",
    body: "Embarking on my web development journey has been both challenging and rewarding. I started with basic HTML and CSS, gradually moving to JavaScript. The moment I discovered React.js, everything clicked. The component-based architecture allowed me to create dynamic, interactive applications. I've worked on various projects, each enhancing my skills and confidence. Today, I am proficient in React, Next.js, and backend technologies, ready to tackle complex problems and build innovative solutions.",
    buttonText: "Read More",
  },
  {
    imgSrc: "/images/blogs/blog-2.png",
    title: "Transitioning from Windows to Ubuntu",
    body: "Switching my operating system from Windows to Ubuntu was a significant step in my development career. It opened up a world of possibilities, especially in backend development and server management. The experience of installing Ubuntu without additional drives taught me resourcefulness. I've learned command line tools and package management, which have improved my workflow. This transition not only boosted my technical skills but also reinforced my adaptability in a fast-evolving tech landscape.",
    buttonText: "Learn More",
  },
  {
    imgSrc: "/images/blogs/blog-3.png",
    title: "Building a Travel Agency Platform with Next.js",
    body: "Creating a travel agency platform named Alsharqiyaus using Next.js has been one of my most fulfilling projects. I incorporated features like user authentication, booking systems, and a responsive UI using Tailwind CSS. Throughout the process, I faced challenges, especially with token management and API integration. However, overcoming these obstacles enriched my understanding of full-stack development. This project stands as a testament to my growth and the skills I’ve acquired.",
    buttonText: "Discover More",
  },
  {
    imgSrc: "/images/blogs/blog-4.png",
    title: "Improving My English Skills",
    body: "Improving my English skills has been a journey of its own. With a current IELTS level of 5.5, my goal is to reach 7.5. Without a tutor, I focused on self-study, leveraging online resources, language exchange platforms, and consistent practice. This journey has not only enhanced my language proficiency but also my communication skills, which are essential in today's globalized tech environment. I'm committed to continuous learning and excited about the opportunities fluency will bring.",
    buttonText: "Explore More",
  },
];
