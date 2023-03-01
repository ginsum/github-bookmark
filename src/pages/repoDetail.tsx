import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/IssueCard';
import Pagination from '../components/Pagination';
import Skeleton from '../components/Skeleton';
import { getIssues, getRepo } from '../fetch';
import { IssueInfoType, RepoInfoType } from '../types';

const RepoDetailPage = () => {
  const [issueList, setIssueList] = useState<IssueInfoType[]>([]);
  const [repoInfo, setRepoInfo] = useState<RepoInfoType | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { owner = '', repo = '' } = useParams();

  const getRepoInfo = async () => {
    const {
      id,
      topics,
      description,
      full_name,
      stargazers_count,
      license,
      updated_at,
      open_issues,
    } = await getRepo({ owner, repo });

    const info = {
      id,
      title: full_name,
      description: description || '',
      tag: topics?.slice(0, 6) || [],
      stargazersCount: stargazers_count,
      license: license?.name || '',
      updatedAt: updated_at.slice(0, 10),
    };
    setRepoInfo(info);
    setTotalCount(open_issues);
  };

  const fetchIssues = async () => {
    setIsLoading(true);

    const list = await getIssues({ owner, repo, page });
    const newList = list.map(
      ({ id, title, number, state, created_at, html_url, user }) => ({
        id,
        title,
        number,
        state,
        createdAt: created_at.slice(0, 10),
        url: html_url,
        userName: user?.login,
      })
    );

    setIssueList(newList);
    setIsLoading(false);
  };

  useEffect(() => {
    getRepoInfo();
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [page]);

  const navigate = useNavigate();

  const { title, description, tag, stargazersCount, license, updatedAt } =
    repoInfo || {};

  return (
    <>
      <div
        className="w-full mb-1 px-3 text-right text-sm text-zinc-500 cursor-pointer"
        onClick={() => navigate('/bookmark')}
      >
        bookmark list로 돌아가기
      </div>

      <div className="text-lg font-bold text-blue-700 mt-8">{title}</div>
      <div className="mt-3 text-sm text-zinc-500">{description}</div>
      <div className="flex flex-wrap mt-3 ">
        {tag?.map((el) => (
          <div
            key={el}
            className="flex items-center px-2.5 py-1 mr-1 mb-1 text-xs border border-blue-400 text-blue-600 rounded-xl"
          >
            {el}
          </div>
        ))}
      </div>
      <div className="flex text-xs mt-2 mb-8 text-zinc-400">
        {!!stargazersCount && (
          <div className="mr-3">{stargazersCount} stars</div>
        )}
        {license && <div className="mr-3">{license}</div>}
        <div className="mr-3">{updatedAt}</div>
      </div>
      <div className="w-full py-3 border-b mt-4 border-zinc-600 text-sm font-bold text-blue-600">
        Open Issue List
      </div>
      {issueList.length > 0 ? (
        <>
          <Pagination
            page={page}
            totalCount={totalCount}
            setPage={setPage}
            isTop
          />
          {isLoading ? (
            <Skeleton />
          ) : (
            <div>
              {issueList.map(
                ({ id, title, state, number, createdAt, url, userName }) => (
                  <Card
                    key={id}
                    title={title}
                    id={id}
                    number={number}
                    state={state}
                    createdAt={createdAt}
                    url={url}
                    userName={userName}
                  />
                )
              )}
            </div>
          )}
          <Pagination page={page} totalCount={totalCount} setPage={setPage} />
        </>
      ) : (
        <div className="text-sm text-zinc-400">
          open 상태의 issue가 없습니다.
        </div>
      )}
    </>
  );
};

export default RepoDetailPage;
