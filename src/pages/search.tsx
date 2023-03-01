import { useEffect, useState } from 'react';

import Loading from '../components/Loading';
import SearchForm from '../components/SearchForm';
import RepoList from '../container/RepoList';
import { searchRepo } from '../fetch';
import { RepoInfoType } from '../types';

const SearchPage = () => {
  const [searchList, setSearchList] = useState<RepoInfoType[] | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isListLoading, setIsListLoading] = useState<boolean>(false);
  const [isSearchLoading, setSearchLoading] = useState<boolean>(false);

  const getSearchRepo = async (text: string) => {
    setIsListLoading(true);
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
        html_url,
      }) => ({
        id,
        title: full_name,
        description: description || '',
        tag: topics?.slice(0, 6) || [],
        stargazersCount: stargazers_count,
        license: license?.name || '',
        updatedAt: updated_at.slice(0, 10),
        url: html_url,
      })
    );
    setSearchList(newList);
    if (page === 1) {
      setTotalCount(Math.ceil(totalCount / 10));
    }
    setIsListLoading(false);
  };

  const submitSearch = async (text: string) => {
    setSearchLoading(true);

    setSearchText(text);
    setPage(1);
    await getSearchRepo(text);

    setSearchLoading(false);
  };

  useEffect(() => {
    if (searchText) {
      getSearchRepo(searchText);
    }
  }, [page]);

  return (
    <>
      <SearchForm submitSearch={submitSearch} />
      {searchList ? (
        <>
          {searchList?.length > 0 ? (
            <RepoList
              page={page}
              totalCount={totalCount}
              setPage={setPage}
              isLoading={isListLoading}
              searchList={searchList}
              searchText={searchText}
            />
          ) : (
            <div className="text-sm text-zinc-500">
              {searchText}의 검색 결과가 없습니다.
            </div>
          )}
        </>
      ) : (
        <div className="text-sm text-zinc-500">검색어를 입력해 주세요</div>
      )}
      {isSearchLoading && <Loading />}
    </>
  );
};

export default SearchPage;
