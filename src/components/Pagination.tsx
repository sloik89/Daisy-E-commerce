import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { type ProductsResponse } from "../utilis/types";
const Pagination = () => {
  const { meta } = useLoaderData() as ProductsResponse;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  console.log(pathname, search);
  const countPages = meta.pagination.pages;
  const page = meta.pagination.page;
  const pages = Array.from({ length: countPages }, (_, idx) => {
    return idx + 1;
  });
  console.log(pages);
  const handlePageChange = (pageNumber: string) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
    console.log(searchParams.toString());
  };
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          onClick={() => {
            let prePage = page - 1;
            if (prePage < 1) prePage = countPages;
            handlePageChange(prePage.toString());
          }}
          className={`btn btn-xs join-item sm:btn-md`}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              className={`btn btn-xs sm:btn-md join-item ${
                pageNumber === page ? "bg-base-300" : ""
              }`}
              onClick={() => handlePageChange(pageNumber.toString())}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => {
            let prePage = page + 1;
            if (prePage > countPages) prePage = 1;
            handlePageChange(prePage.toString());
          }}
          className="btn btn-xs join-item sm:btn-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
