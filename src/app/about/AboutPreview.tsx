import Link from "next/link";

const AboutPreview = ({ detailed = false }: { detailed: boolean }) => {
  return (
    <>
      <div
        className={`${detailed ? "px-5 py-10 sm:m-5 sm:p-15" : "mt-5 px-2 py-4 sm:p-7"} max-w-5xl rounded-lg bg-slate-50 p-5 shadow-md dark:bg-slate-800`}
      >
        <div className="flex flex-col items-center text-center sm:text-start">
          <div
            className={`${detailed && "mb-5"} flex flex-col items-center gap-x-10 sm:flex-row`}
          >
            <img
              src="profile.jpeg"
              alt="Ahmad Saed"
              className={`bg-slate-600 ${detailed ? "h-54 w-54 sm:h-55 sm:w-55" : "h-45 w-45 sm:h-50 sm:w-50"} mb-3 shrink-0 rounded-full border-4 border-blue-600 object-cover shadow-md`}
            />

            <div className="">
              <h1 className="text-2xl/relaxed font-medium sm:text-3xl/relaxed dark:text-slate-100">
                Ahmad Alsoufi
              </h1>

              <p className="text-paragraph mb-5 text-sm sm:text-base dark:text-slate-400">
                I graduated from a Computer Programming major. I specialize in
                web development, and I'm expanding my knowledge in the field.
              </p>

              <div className="flex flex-col items-center justify-center gap-x-5 gap-y-2 sm:flex-row sm:justify-start">
                {!detailed && (
                  <Link
                    href="/about"
                    className="text-start text-blue-700 underline-offset-2 hover:underline"
                  >
                    more about me
                  </Link>
                )}

                <Link
                  href="/resume"
                  className="text-start text-blue-700 underline-offset-2 hover:underline"
                >
                  resume
                </Link>
              </div>
            </div>
          </div>

          {detailed && (
            <div>
              <div>
                <h2 className="text-xl/relaxed font-medium capitalize sm:text-2xl/relaxed dark:text-slate-100">
                  My next step
                </h2>
                <p className="text-paragraph mb-10 text-sm sm:text-base dark:text-slate-400">
                  Over the past two years in university, I've built a solid web
                  development foundation through hands-on projects. My next step
                  is joining a team of developers, ship real-world applications,
                  and learn more from more experienced developers.
                </p>
              </div>

              <h2 className="mb-2 text-xl/relaxed font-medium sm:text-2xl/relaxed dark:text-slate-100">
                Tools and technologies I use
              </h2>
              <ul className="mb-10 flex flex-wrap justify-center gap-2 sm:justify-start">
                {[
                  "HTML",
                  "CSS",
                  "TAILWIND CSS",
                  "JavaScript",
                  "TypeScript",
                  "REACT",
                  "NEXT.JS",
                  "Postgresql",
                  "PRISMA ORM",
                  "RESTful",
                  "STRAPI (CMS)",
                  "NEON (serverless db)",
                  "GIT",
                  "GITHUB",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-slate-700 px-3 py-2 text-sm font-medium tracking-wide text-slate-100 shadow-md"
                  >
                    {item.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutPreview;
