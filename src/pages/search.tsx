import { useState } from 'react';
import Pagination from '../components/Pagination';
import Card from '../components/RepoCard';
import SearchForm from '../components/SearchForm';
import useBookmark from '../hooks/useBookmark';

type ListType = {
  title: string;
  content: string;
  tag: string[];
  id: number;
  stargazersCount: string;
  license: string;
  updatedAt: string;
};

const mockList = [
  {
    id: 1,
    title: 'airbnb/javascript',
    tag: ['javascript', 'style-guide'],
    content: 'JavaScript Style Guide',
    stargazersCount: '24.5k',
    license: 'MIT',
    updatedAt: '2012-01-23',
  },
  {
    id: 2,
    title: 'ulid/javascript',
    tag: ['javascript', 'style-guide', 'javascrip', 'style-guid'],
    content: 'Universally Unique Lexicographically Sortable Identifier',
    stargazersCount: '24.5k',
    license: 'MIT',
    updatedAt: '2012-01-23',
  },
];

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
