import { FaLongArrowAltLeft } from "react-icons/fa";
import GoBackBtn from "./components/GoBackBtn";

const NotFoundPage = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-1 text-center text-6xl font-bold text-blue-500">
          404
        </h1>
        <h2 className="mb-3 text-3xl font-bold capitalize dark:text-slate-50">
          Page Not found
        </h2>
        <p className="mb-3 max-w-200 text-center text-xl text-slate-500 dark:text-slate-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <GoBackBtn href="/" size={1} buttonStyle={true} />
      </main>
    </>
  );
};

export default NotFoundPage;
