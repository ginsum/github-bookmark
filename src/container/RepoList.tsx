import Pagination from '../components/Pagination';
import Skeleton from '../components/Skeleton';
import Card from '../components/RepoCard';
import useBookmark from '../hooks/useBookmark';
import { RepoInfoType } from '../types';

type RepoListProps = {
  page: number;
  totalCount: number;
  setPage: (page: number) => void;
  isLoading: boolean;
  searchList: RepoInfoType[];
  searchText: string;
};

const RepoList = ({
  page,
  totalCount,
  setPage,
  isLoading,
  searchList,
  searchText,
}: RepoListProps) => {
  const { handleBookmark, checkBookmark } = useBookmark();

  const moveGithubRepo = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="text-zinc-500 mb-2">
        * {searchText} 의 검색 결과입니다.
      </div>
      <Pagination page={page} totalCount={totalCount} setPage={setPage} isTop />
      {isLoading ? (
        <Skeleton />
      ) : (
        searchList?.map(
          ({
            id,
            title,
            tag,
            description,
            stargazersCount,
            license,
            updatedAt,
            url = '',
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
              movePage={() => moveGithubRepo(url)}
            />
          )
        )
      )}
      <Pagination page={page} totalCount={totalCount} setPage={setPage} />
    </>
  );
};

export default RepoList;
