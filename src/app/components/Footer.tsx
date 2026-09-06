import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const myInfo = [
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/ahmadalsoufi/",
      icon: <BsLinkedin />,
      color: "hover:text-[#0A66C2]",
    },
    {
      label: "github",
      href: "https://github.com/ahmadalsoufi",
      icon: <FaGithub />,
      color: "hover:text-[#000]",
    },
    {
      label: "email",
      href: "mailto:ahmad.s.alsoufi@gmail.com",
      icon: <MdEmail />,
      color: "hover:text-[#EA4335]",
    },
  ];

  return (
    <>
      <div className="text-slate-50 print:hidden">
        <div className="bg-slate-300 py-[1vh] inset-shadow-sm dark:bg-slate-400"></div>
        <div className="bg-slate-400 py-[2vh] inset-shadow-sm dark:bg-slate-500"></div>
        <div className="bg-slate-500 py-[3vh] inset-shadow-sm dark:bg-slate-600"></div>

        <div className="bg-slate-700">
          <div className="mx-auto flex max-w-5xl flex-col items-center py-10">
            <ul className="flex gap-x-10 sm:gap-x-14">
              {myInfo.map((info) => (
                <li key={info.label}>
                  <a
                    title={info.label}
                    href={info.href}
                    aria-label={info.label}
                    className={`text-3xl transition-colors duration-200 ${info.color} sm:text-4xl`}
                    target={`${info.href.startsWith("mailto") ? "_self" : "_blank"}`}
                  >
                    {info.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="bg-slate-800 p-5 text-center text-sm font-medium text-slate-300">
          &copy; {new Date().getFullYear()} by{" "}
          <span>
            <a
              href={myInfo[0].href}
              target="_blank"
              className="font-bold text-slate-100 hover:underline"
            >
              Ahmad Alsoufi
            </a>
          </span>
          , All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
