import { useState, KeyboardEvent } from 'react';
import SearchSVG from '../assets/SearchSVG';

type SearchFormProps = {
  handleSearch: (text: string) => void;
};

const SearchForm = ({ handleSearch }: SearchFormProps) => {
  const [text, setText] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(text);
    }
  };

  return (
    <div className="flex justify-start items-center py-7 relative">
      <input
        className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div
        className="absolute right-3 z-10 cursor-pointer"
        onClick={() => handleSearch(text)}
      >
        <SearchSVG />
      </div>
    </div>
  );
};

export default SearchForm;
