import Link from "next/link";
import { PiHandWavingBold } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div className="dark:slate-50 bg-slate-50 px-5 py-10 shadow-sm sm:py-20 dark:bg-slate-800">
        <div className="mx-auto max-w-5xl space-y-1">
          <h1 className="mb-2 flex justify-center gap-x-3 text-3xl font-medium capitalize sm:text-4xl">
            Hey, I'm Ahmad
            <PiHandWavingBold />
          </h1>

          <p className="text-paragraph mx-auto mb-6 max-w-2xl text-sm sm:text-xl dark:text-slate-300">
            I specialize in{" "}
            <span className="font-bold tracking-wide text-slate-700 dark:text-slate-50">
              web development,
            </span>{" "}
            and I like to build fully custom websites with modern technologies.
          </p>

          <Link
            className="hover:bg-b inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-slate-50 shadow-md transition-colors duration-200 hover:bg-blue-600 hover:text-slate-100 sm:text-lg"
            href="/about"
          >
            More about me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
