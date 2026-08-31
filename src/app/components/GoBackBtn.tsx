import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

const GoBackBtn = ({
  href,
  size = 1,
  buttonStyle = false,
}: {
  href: string;
  size?: number;
  buttonStyle?: boolean;
}) => {
  return (
    <>
      <Link
        href={`${href}`}
        className={`${buttonStyle ? "rounded-lg bg-blue-500 px-5 py-2 text-slate-100 shadow-md hover:bg-blue-600 hover:text-slate-100" : "hover:underline dark:text-slate-100"} ${size === 1 ? "text-md sm:text-lg" : size === 2 ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"} flex items-center justify-center gap-x-3 font-medium underline-offset-2 transition-all duration-300 dark:text-slate-100 print:hidden`}
      >
        <FaLongArrowAltLeft /> Go back
      </Link>
    </>
  );
};

export default GoBackBtn;
