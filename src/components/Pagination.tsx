import LeftArrowSVG from '../assets/LeftArrowSVG';
import RightArrowSVG from '../assets/RightArrowSVG';

type PaginationProps = {
  page: number;
  totalCount: number;
  isTop?: boolean;
  setPage: (page: number) => void;
};

const Pagination = ({ page, totalCount, setPage, isTop }: PaginationProps) => {
  const handlePreviousPage = () => {
    if (page >= 2) {
      setPage(page - 1);
      window.scroll(0, 0);
    } else {
      alert('첫 페이지입니다.');
      return;
    }
  };

  const handleNextPage = () => {
    if (page < totalCount) {
      setPage(page + 1);
      window.scroll(0, 0);
    } else {
      alert('마지막 페이지입니다.');
      return;
    }
  };

  const wrapperStyle = `flex items-center justify-between py-4 px-1 text-sm font-medium leading-none ${
    isTop ? 'border-b' : 'border-t'
  }`;

  return (
    <div className={wrapperStyle}>
      <div
        className="flex items-center text-zinc-400 hover:text-indigo-700 cursor-pointer"
        onClick={handlePreviousPage}
      >
        <LeftArrowSVG />
        <p className="ml-1">Previous</p>
      </div>
      <div className="flex items-center mr-2">
        <div className="px-1 text-indigo-700">{page}</div>
        <div className="mx-1 text-zinc-400">/</div>
        <div className="px-1 text-zinc-400">{totalCount}</div>
      </div>
      <div
        className="flex items-center text-zinc-400 hover:text-indigo-700 cursor-pointer"
        onClick={handleNextPage}
      >
        <p className="mr-1">Next</p>
        <RightArrowSVG />
      </div>
    </div>
  );
};

export default Pagination;
