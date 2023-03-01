import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import Card from '../components/RepoCard';
import SearchForm from '../components/SearchForm';
import { searchRepo } from '../fetch';
import useBookmark from '../hooks/useBookmark';

type ListType = {
  title: string;
  description: string;
  tag: string[];
  id: number;
  stargazersCount: number;
  license?: string;
  updatedAt: string;
};

type getListType = {
  id: number;
  topics?: string[];
  description: string | null;
  full_name: string;
  stargazers_count: number;
  license: { name: string } | null;
  updated_at: string;
};

const SearchPage = () => {
  const [searchList, setSearchList] = useState<ListType[] | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  const { handleBookmark, checkBookmark } = useBookmark();

  const getSearchRepo = async (text: string) => {
    const { list, totalCount } = await searchRepo({ searchText: text, page });

    const newList = list.map(
      ({
        id,
        topics,
        description,
        full_name,
        stargazers_count,
        license,
        updated_at,
      }: getListType) => ({
        id,
        title: full_name,
        description: description || '',
        tag: topics?.slice(0, 6) || [],
        stargazersCount: stargazers_count,
        license: license?.name || '',
        updatedAt: updated_at.slice(0, 10),
      })
    );
    setSearchList(newList);
    setTotalCount(totalCount);
  };

  const handleSearch = async (text: string) => {
    setSearchText(text);
    await getSearchRepo(text);
  };

  useEffect(() => {
    if (searchText) {
      getSearchRepo(searchText);
    }
  }, [page]);

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {searchList ? (
        <>
          <div className=" text-zinc-500 mb-2">
            * {searchText} 의 검색 결과입니다.
          </div>
          {searchList?.map(
            ({
              id,
              title,
              tag,
              description,
              stargazersCount,
              license,
              updatedAt,
            }) => (
              <Card
                key={title}
                title={title}
                tag={tag}
                description={description}
                id={id}
                stargazersCount={stargazersCount}
                license={license}
                updatedAt={updatedAt}
                isBookmark={checkBookmark(title)}
                handleBookmark={handleBookmark}
                isBookmarkPage={false}
              />
            )
          )}
          <Pagination page={page} totalCount={totalCount} setPage={setPage} />
        </>
      ) : (
        <div className="text-sm text-zinc-500">검색어를 입력해 주세요</div>
      )}
    </>
  );
};

export default SearchPage;
