import LeftArrowSVG from '../assets/LeftArrowSVG';
import RightArrowSVG from '../assets/RightArrow';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
          <LeftArrowSVG />
          <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
        </div>
        <div className="sm:flex hidden">
          {[1, 2, 3, 4, 5].map((page) => (
            <p
              key={page}
              className="text-sm font-medium leading-none cursor-pointer text-gray-600  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2"
            >
              {page}
            </p>
          ))}
        </div>
        <div className="flex items-center pt-3 text-gray-600  hover:text-indigo-700 cursor-pointer">
          <p className="text-sm font-medium leading-none mr-3">Next</p>
          <RightArrowSVG />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
