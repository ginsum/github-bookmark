import { useState } from 'react';
import Pagination from '../components/Pagination';
import Card from '../components/RepoCard';
import SearchForm from '../components/SearchForm';
import useBookmark from '../hooks/useBookmark';
import { mockList } from '../mockData';

type ListType = {
  title: string;
  content: string;
  tag: string[];
  id: number;
  stargazersCount: string;
  license: string;
  updatedAt: string;
};

const SearchPage = () => {
  const [searchList, setSearchList] = useState<ListType[] | null>(null);

  const { bookmark, handleBookmark } = useBookmark();

  const handleSearch = (text: string) => {
    if (text) {
      setSearchList(mockList);
    }
  };

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {searchList ? (
        <>
          {searchList?.map(
            ({
              id,
              title,
              tag,
              content,
              stargazersCount,
              license,
              updatedAt,
            }) => (
              <Card
                key={title}
                title={title}
                tag={tag}
                content={content}
                id={id}
                stargazersCount={stargazersCount}
                license={license}
                updatedAt={updatedAt}
                isBookmark={bookmark?.includes(id)}
                handleBookmark={handleBookmark}
              />
            )
          )}
          <Pagination />
        </>
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

export default SearchPage;
