import { SetStateAction } from "react";

const BlogsDetailsPage = ({
  totalPages,
  curPage,
  setCurPage,
}: {
  totalPages: number;
  curPage: number;
  setCurPage: React.Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div>
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className="flex"
            onClick={() => setCurPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default BlogsDetailsPage;
