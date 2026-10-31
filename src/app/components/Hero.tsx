import Link from "next/link";
import { PiHandWavingBold } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div className="dark:slate-50 bg-slate-50 px-5 py-10 shadow-sm sm:py-20 dark:bg-slate-800">
        <div className="mx-auto max-w-5xl space-y-1">
          <h1 className="mb-1 flex justify-center items-center flex-col gap-x-3 text-3xl font-bold capitalize sm:text-4xl text-slate-700 dark:text-slate-300">
            <span className="flex gap-x-2 text-2xl font-medium sm:text-3xl">
              Hey <PiHandWavingBold />
            </span>

            <span className="text-slate-800 dark:text-slate-200">
              I'm Ahmad Alsoufi
            </span>
          </h1>

          <h2 className="font-semibold text-xl sm:text-2xl text-slate-800 dark:text-slate-200">
            Full-Stack Web Developer
          </h2>

          <p className="mx-auto mb-2 max-w-2xl text-base sm:text-lg dark:text-slate-400">
            I'm a{" "}
            <span className="font-medium tracking-wide text-slate-700 dark:text-slate-300">
              computer programming
            </span>{" "}
            graduate. I specialize in{" "}
            <span className="font-medium tracking-wide text-slate-700 dark:text-slate-300">
              Next.js, Prisma ORM, TypeScript, JavaScript, and TailwindCSS.
            </span>{" "}
          </p>

          <p className="mb-6 sm:text-sm text-[12px] tracking-widest font-medium text-slate-500 dark:text-slate-400">
            I'm currently looking to join development teams in{" "}
            <span className="text-slate-600 font-semibold dark:text-slate-300">
              Abu Dhabi, United Arab Emirates (UAE)
            </span>
            .
          </p>

          <div className="flex gap-x-2 sm:gap-x-3 justify-center">
            <Link
              className="hover:bg-b inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-slate-50 shadow-md transition-colors duration-200 hover:bg-blue-600 hover:text-slate-100 sm:text-lg"
              href="/about"
            >
              More about me
            </Link>

            <Link
              className="hover:bg-b inline-block rounded-lg text-slate-700 border-blue-500 border-2 border-solid px-5 py-2 text-sm font-medium dark:text-slate-50 shadow-md transition-colors duration-200 hover:bg-blue-500 hover:text-slate-100 sm:text-lg"
              href="/resume"
            >
              Resume | CV
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
