import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/IssueCard';
import Pagination from '../components/Pagination';
import { getIssues, getRepo } from '../fetch';

type RepoInfo = {
  id: number;
  title: string;
  description: string;
  tag: string[];
  stargazersCount: number;
  license: string;
  updatedAt: string;
};

type getListType = {
  id: number;
  title: string;
  number: number;
  state: string;
  created_at: string;
  html_url: string;
};

type IssueListType = {
  id: number;
  title: string;
  state: string;
  number: number;
  createdAt: string;
  url: string;
};

const DetailPage = () => {
  const [issueList, setIssueList] = useState<IssueListType[]>([]);
  const [repoInfo, setRepoInfo] = useState<RepoInfo | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(100);

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
    const list = await getIssues({ owner, repo, page });
    const newList = list.map(
      ({ id, title, number, state, created_at, html_url }: getListType) => ({
        id,
        title,
        number,
        state,
        createdAt: created_at.slice(0, 10),
        url: html_url,
      })
    );

    setIssueList(newList);
  };

  useEffect(() => {
    getRepoInfo();
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [page]);

  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-full mt-3 mb-1 px-3 text-right text-sm text-zinc-500 cursor-pointer"
        onClick={() => navigate('/bookmark')}
      >
        bookmark list로 돌아가기
      </div>

      <div className="text-lg font-bold text-blue-700 mt-8">
        {repoInfo?.title}
      </div>
      <div className="mt-3 text-sm text-zinc-500">{repoInfo?.description}</div>
      <div className="flex flex-wrap mt-3 ">
        {repoInfo?.tag?.map((el) => (
          <div
            key={el}
            className="flex items-center px-2.5 py-1 mr-1 mb-1 text-xs border border-blue-400 text-blue-600 rounded-xl"
          >
            {el}
          </div>
        ))}
      </div>
      <div className="flex text-xs mt-2 mb-8 text-zinc-400">
        <div className="mr-3">{repoInfo?.stargazersCount}</div>
        <div className="mr-3">{repoInfo?.license}</div>
        <div className="mr-3">{repoInfo?.updatedAt}</div>
      </div>
      <div className="w-full py-3 border-b mt-4 mb-2 border-zinc-600 text-sm font-bold text-blue-600">
        Open Issue List
      </div>
      <div>
        {issueList.map(({ id, title, state, number, createdAt, url }) => (
          <Card
            key={id}
            title={title}
            id={id}
            number={number}
            state={state}
            createdAt={createdAt}
            url={url}
          />
        ))}
      </div>
      <Pagination page={page} totalCount={totalCount} setPage={setPage} />
    </>
  );
};

export default DetailPage;
