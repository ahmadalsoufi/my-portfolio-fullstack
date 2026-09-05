"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmad Alsoufi | Resume",
  description: "Ahmad Alsoufi | Web developer.",
  authors: {
    name: "Ahmad Alsoufi",
    url: "https://GitHub.com/ahmadalsoufi",
  },
};

const myInfo = [
  {
    label: "linkedin.com/in/ahmadalsoufi",
    href: "https://www.linkedin.com/in/ahmadalsoufi/",
  },
  {
    label: "GitHub.com/ahmadalsoufi",
    href: "https://GitHub.com/ahmadalsoufi",
  },
  {
    label: "ahmad.s.alsoufi@gmail.com",
    href: "mailto:ahmad.s.alsoufi@gmail.com",
  },
];

const coursework = [];

const skills = {
  fullstack: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Postgresql",
    "prisma orm",
  ],
  tools: [
    "Git",
    "GitHub",
    "Strapi (CMS)",
    "Neon (Serverless DB)",
    "cloudinary",
    "vercel",
  ],
};
const languages = ["arabic", "english"];

const projects = [
  {
    title: "Personal Portfolio",
    texts: [
      "Architectured a full stack web application using next.js",
      "Integrated Prisma ORM for content management and Neon for persistent database storage.",
      "Built a contact form using Next.js server actions and Resend to process and store submissions.",
      "Designed smooth animated skeletons for a smoother UX.",
      "Implemented responsive layouts, and appealing designs with Tailwind CSS.",
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Neon",
      "Resend",
    ],
    fullstack: false,
    url: "https://ahmadalsoufi.com",
    github: "https://GitHub.com/ahmadalsoufi/my-portfolio-fullstack",
  },
  {
    title: "Custom Landing Page",
    texts: [
      "Responsive design layouts with HTML and CSS.",
      "Appealing and smooth behavior with features such as custom lazy loading added via Vanilla JavaScript.",
      "Focused on appealing user experience (UX) and user interface (UI).",
    ],
    fullstack: false,
    url: null,
    github: "https://GitHub.com/ahmadalsoufi/landing-page",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

const Resume = () => {
  return (
    <>
      <button
        onClick={() => window.print()}
        className="my-3 cursor-pointer rounded-lg bg-blue-500 px-5 py-1 text-sm font-medium text-slate-100 capitalize underline-offset-2 shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-slate-100 sm:text-lg dark:text-slate-100 print:hidden"
      >
        print resume
      </button>
      <main className="box-border w-[210mm] bg-slate-50 p-[10mm] sm:p-[12mm] text-sm shadow-md sm:rounded-lg print:m-0 print:w-[210mm] print:overflow-hidden print:rounded-none print:p-[12mm] print:shadow-none">
        <div className="mb-5">
          <div className="border-b-md mx-auto mb-2 w-fit py-[1mm] text-center">
            <h1 className="text-3xl/tight font-bold capitalize min-[500px]:text-4xl/tight sm:text-5xl/tight print:text-5xl/tight">
              Ahmad Alsoufi
            </h1>
            <h2 className="text-xl/relaxed font-medium capitalize sm:text-2xl/relaxed print:text-xl/relaxed">
              Web Developer
            </h2>
          </div>

          <ul className="mb-5 flex flex-col items-center justify-center space-y-2 gap-x-2 md:flex-row md:space-y-0 print:flex-row print:space-y-0">
            {myInfo.map((info, index) => (
              <li key={info.label}>
                <a
                  title={info.label}
                  href={info.href}
                  className="text-sm text-blue-500 hover:underline"
                  aria-label={info.label}
                  target={`${info.href.startsWith("mailto") ? "_self" : "_blank"}`}
                >
                  {info.label}
                </a>
                {index < myInfo.length - 1 && (
                  <span className="hidden md:inline print:inline"> - </span>
                )}
              </li>
            ))}
          </ul>

          <p className="text-center text-sm sm:text-start print:text-start">
            I graduated with an associate degree in Computer Programming. I
            specialize in web development with a focus on modern technologies
            such as React and Next.js, I work with Prisma ORM and PostgreSQL for
            relational database development, and use tools including Git,
            GitHub, and Vercel to manage and deploy full stack applications.
          </p>
        </div>

        {/* skills section */}
        <div className="mb-5 text-sm">
          <h2 className="border-b-sm text-3xl/normal font-medium text-blue-500 capitalize">
            Skills
          </h2>

          <div className="grid space-y-1.5">
            {Object.entries(skills).map((skillsPairs) => (
              <div key={skillsPairs[0][0]}>
                <h3 className="mt-1 text-lg/relaxed font-medium capitalize">
                  {skillsPairs[0]}
                </h3>

                <ul className="flex flex-wrap gap-x-2">
                  {skillsPairs[1].map((skill, index) => (
                    <li key={skill} className="text-sm capitalize">
                      {skill}
                      {index < skillsPairs[1].length - 1 ? ", " : "."}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects section */}
        <div className="mb-5 text-sm">
          <h2 className="border-b-sm text-3xl/normal font-medium text-blue-500 capitalize">
            Projects
          </h2>

          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.title}>
                <h3 className="mt-1 text-xl/normal font-medium capitalize flex flex-col sm:flex-row sm:justify-between sm:items-center print:flex-row print:justify-between print:items-center">
                  {project.title}{" "}
                  <div className="text-blue-500 text-base mb-2 sm:mb-0 print:mb-0">
                    {project.url && (
                      <>
                        <a target="_blank" href={project.url}>
                          View live
                        </a>
                        <span className="text-slate-500"> | </span>
                      </>
                    )}
                    <a target="_blank" href={project.github}>
                      GitHub
                    </a>
                  </div>
                </h3>
                <ul className="flex gap-2 text-sm/tight mb-3 flex-wrap">
                  {project.tools.map((tool, i) => (
                    <li key={tool} className="font-medium tracking-wider">
                      {tool}
                      {i + 1 < project.tools.length ? "," : "."}
                    </li>
                  ))}
                </ul>

                {project.fullstack ? (
                  <h4 className="text-sm/normal tracking-wide font-medium capitalize text-slate-500">
                    Full-stack Web Application
                  </h4>
                ) : null}
                <ul>
                  {project.texts.map((text) => (
                    <li key={text} className="ml-5 list-disc text-sm/relaxed">
                      {text}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Education section */}
        <div className="mb-5 text-sm">
          <h2 className="border-b-sm text-3xl/normal font-medium text-blue-500 capitalize">
            Education
          </h2>

          <div>
            <h3 className="mt-1 text-lg/normal font-medium capitalize">
              Associate degree in <span>Computer Programming</span>
            </h3>

            <div>
              <h4 className="text-sm">
                Istanbul Aydin University - Istanbul, Türkiye
              </h4>
              <p className="text-sm">2024-2026</p>
              <p className="text-sm">
                GPA: <span className="font-bold">3.22/4</span>
              </p>
            </div>
          </div>
        </div>

        {/* Languages section */}
        <div className="text-sm">
          <h2 className="border-b-sm text-3xl/normal font-medium text-blue-500 capitalize">
            languages
          </h2>

          <ul className="flex space-x-2">
            {languages.map((language, index) => (
              <li key={language} className="text-sm capitalize">
                {language}
                {index < languages.length - 1 && <span>, </span>}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Resume;
