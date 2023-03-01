import LeftArrowSVG from '../assets/LeftArrowSVG';
import RightArrowSVG from '../assets/RightArrow';

type PaginationProps = {
  page: number;
  totalCount: number;
  setPage: (page: number) => void;
};

const Pagination = ({ page, totalCount, setPage }: PaginationProps) => {
  const handlePreviousPage = () => {
    if (page >= 2) {
      setPage(page - 1);
      window.scroll(0, 0);
    } else {
      return;
    }
  };

  const handleNextPage = () => {
    if (page < totalCount) {
      setPage(page + 1);
      window.scroll(0, 0);
    } else {
      return;
    }
  };
  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
        <div
          className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
          onClick={handlePreviousPage}
        >
          <LeftArrowSVG />
          <p className="text-sm ml-1 font-medium leading-none">Previous</p>
        </div>
        <div className="flex items-center mt-2 mr-2">
          <div
            key={page}
            className="text-sm font-medium leading-none text-indigo-700 px-1"
          >
            {page}
          </div>
          <div className="mx-1">/</div>
          <div className="text-sm font-medium leading-none text-gray-600 px-1">
            {totalCount}
          </div>
        </div>
        <div
          className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
          onClick={handleNextPage}
        >
          <p className="text-sm font-medium leading-none mr-1">Next</p>
          <RightArrowSVG />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
