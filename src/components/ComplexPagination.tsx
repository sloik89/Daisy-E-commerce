
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { type OrderResponse } from "../utilis/types";
const ComplexPagination = () => {
    const { meta } = useLoaderData() as OrderResponse;
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
  
    const countPages = meta.pagination.pages;
    const page = meta.pagination.page;
    
    const handlePageChange = (pageNumber: string) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set("page", pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
       
      };
      const addPageButton = ({pageNumber,activeClass}:{pageNumber:number;activeClass:boolean}):JSX.Element=>{

        return (
            <button
            className={`btn btn-xs sm:btn-md join-item ${
              activeClass ? "bg-base-300" : ""
            }`}
            onClick={() => handlePageChange(pageNumber.toString())}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        )
      }
      const renderenPageButtons =()=>{
        const pageButtons:JSX.Element[] = []
        // first btn
        pageButtons.push(addPageButton({pageNumber:1,activeClass:page === 1 }))
        // dots
        if(page>2){

            pageButtons.push(<button key={'btn-dots'} className="join-item btn btn-xs sm:btn-sm">...</button>)
        }
        // active btn
        if(page !== 1 && page !== countPages){

            pageButtons.push(addPageButton({pageNumber:page,activeClass:true }))
        }
        // dots
        if(page < countPages -1){

            pageButtons.push(<button key={'btn-dots'} className="join-item btn btn-xs sm:btn-sm">...</button>)
        }
        // last btn
        pageButtons.push(addPageButton({pageNumber:countPages,activeClass:page === countPages }))
        return  pageButtons
      }
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
        {renderenPageButtons()}
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
  
}

export default ComplexPagination