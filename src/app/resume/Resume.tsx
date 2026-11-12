"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmad Alsoufi | Resume",
  description:
    "Ahmad Alsoufi is a Full-Stack Web developer specializing in Next.js, TypeScript, PostgreSQL, and Prisma ORM. Seeking opportunities in Abu Dhabi, UAE",
  authors: {
    name: "Ahmad Alsoufi",
    url: "https://GitHub.com/ahmadalsoufi",
  },
};

const myInfo = [
  {
    text: "Mobile",
    label: "+971 58 126 4691",
    href: "tel:+971581264691",
  },
  {
    text: "Email",
    label: "ahmad.s.alsoufi@gmail.com",
    href: "mailto:ahmad.s.alsoufi@gmail.com",
  },
  {
    text: "linkedIn",
    label: "linkedin.com/in/ahmadalsoufi",
    href: "https://www.linkedin.com/in/ahmadalsoufi/",
  },
];

const coursework = [];

const skills = {
  computer: [
    "General computer literacy",
    "Web development",
    "Programming",
    "Databases",
  ],
  professional: [
    "Problem solving",
    "Communication",
    "organization",
    "Adabtability",
    "Teamwork",
  ],
  languages: ["Arabic (Native)", "English (Fluent)"],
};

const projects = [
  {
    title: "Personal Portfolio",
    texts: [
      "Independently planned, structured, and designed a website that showcases my web development skills.",
      "Managed the project from initial development through deployment.",
      "Implemented SEO best practices for improved search visibility and website discoverability.",
      "Designed and implemented its database structure.",
    ],
  },
  {
    title: "Custom Landing Page",
    texts: [
      "Designed and developed an engaging landing page focused on user experience and customer engagement.",
      "Structured the codebase to make content and design modifications straightforward and maintainable.",
      "Implemented responsive layouts for different screen sizes.",
    ],
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
      <main className="box-border max-w-[210mm] bg-slate-50 p-[10mm] sm:p-[12mm] text-sm shadow-md sm:rounded-lg print:m-0 print:w-[210mm] print:overflow-hidden print:rounded-none print:p-[12mm] print:shadow-none">
        <div className="mb-3">
          <div className="flex items-center justify-center gap-x-7 mb-3">
            {/* <img
              src="/Ahmad Saed Aref Alsoufi.jpg"
              alt=""
              className="w-40 h-40 object-contain object-start rounded-full border-3 border-blue-500 border-solid shadow-lg"
            /> */}

            <div className="">
              <div className="border-b-md mx-auto w-fit py-[1mm] text-center">
                <h1 className="text-3xl/tight font-bold capitalize min-[500px]:text-4xl/tight sm:text-5xl/tight print:text-5xl/tight">
                  Ahmad Alsoufi
                </h1>
                <h2 className="text-xl/relaxed font-semibold capitalize sm:text-2xl/relaxed print:text-2xl/relaxed">
                  Computer programming graduate
                </h2>
                <h3 className="text-base/relaxed font-medium capitalize sm:text-lg/relaxed print:text-lg/relaxed text-slate-600">
                  Abu Dhabi, United Arab Emirates (UAE){" "}
                </h3>
              </div>
            </div>
          </div>

          <p className="text-center text-sm sm:text-start print:text-start mb-2">
            A graduate with a background in web development and an experience to
            plan, build, and manage digital products independently. Adaptable,
            organized, and comfortable working with technology, solving
            problems, and learning new processes. Seeking an opportunity to
            contribute to a professional team and develop practical workplace
            experience.
          </p>

          {/* Contact Section */}
          <h2 className="border-b-sm text-3xl/normal font-medium text-blue-500 capitalize">
            Contact
          </h2>
          <ul className="space-y-1 py-2">
            {myInfo.map((info, index) => (
              <li key={info.label} className="flex space-x-1">
                <p className="text-sm font-medium">{info.text}:</p>
                <a
                  title={info.label}
                  href={info.href}
                  className="text-sm text-blue-500 hover:underline"
                  aria-label={info.label}
                  target={`${info.href.startsWith("mailto") ? "_self" : "_blank"}`}
                >
                  {info.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="capitalize text-sm">
            <span className="text-sm font-medium">Visa & Availability: </span>{" "}
            Abu Dhabi, UAE | Multiple-Entry Visit Visa.
          </p>
        </div>

        {/* skills section */}
        <div className="mb-3 text-sm">
          <h2 className="border-b-sm text-3xl/normal font-medium text-blue-500 capitalize">
            Skills
          </h2>

          <div className="">
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
        <div className="mb-3 text-sm">
          <h2 className="border-b-sm text-3xl/normal font-medium text-blue-500 capitalize">
            Projects
          </h2>

          <ul className="">
            {projects.map((project) => (
              <li key={project.title}>
                <h3 className="mt-1 text-xl/normal font-medium capitalize flex flex-col sm:flex-row sm:justify-between sm:items-center print:flex-row print:justify-between print:items-center">
                  {project.title}{" "}
                </h3>

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
        <div className="mb-3 text-sm">
          <h2 className="border-b-sm text-3xl/normal font-medium text-blue-500 capitalize">
            Education
          </h2>

          <div>
            <h3 className="mt-1 text-lg/normal font-medium capitalize">
              Associate degree in <span>Computer Programming</span>
            </h3>

            <div>
              <p className="text-sm flex justify-between">
                Istanbul Aydin University - Istanbul Türkiye{" "}
                <span>2024-2026</span>
              </p>
              <p className="text-sm">
                GPA: <span className="font-bold">3.22/4</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
