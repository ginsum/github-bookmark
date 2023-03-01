import { useState, KeyboardEvent } from 'react';
import SearchSVG from '../assets/SearchSVG';

type SearchFormProps = {
  submitSearch: (text: string) => void;
};

const SearchForm = ({ submitSearch }: SearchFormProps) => {
  const [text, setText] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitSearch(text);
      setText('');
    }
  };

  const onClickSearchIcon = () => {
    submitSearch(text);
    setText('');
  };

  return (
    <div className="flex justify-start items-center pt-8 pb-4 relative">
      <input
        className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
        type="text"
        placeholder="Github 레포지토리 검색"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div
        className="absolute right-3 z-10 cursor-pointer"
        onClick={onClickSearchIcon}
      >
        <SearchSVG />
      </div>
    </div>
  );
};

export default SearchForm;
