import SearchSVG from '../assets/SearchSVG';

const SearchForm = () => {
  return (
    <div className="flex justify-start items-center py-7 relative">
      <input
        className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
        type="text"
        placeholder="Search"
      />
      <SearchSVG />
    </div>
  );
};

export default SearchForm;
