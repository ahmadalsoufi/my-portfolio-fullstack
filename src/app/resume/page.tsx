import GoBackBtn from "../components/GoBackBtn";
import Resume from "./Resume";

const ResumePage = () => {
  return (
    <>
      <div className="flex flex-col items-center print:block">
        <Resume />
        <div className="my-5 print:hidden">
          <GoBackBtn href="/about" />
        </div>
      </div>
    </>
  );
};

export default ResumePage;
