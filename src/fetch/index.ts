import { Octokit } from 'octokit';

type requestType = {
  owner: string;
  repo: string;
  page?: number;
};

const octokit = new Octokit();

export const searchRepo = async ({
  searchText,
  page,
}: {
  searchText: string;
  page: number;
}) => {
  const result = await octokit.request('GET /search/repositories', {
    q: searchText,
    per_page: 10,
    page,
  });
  return { list: result.data.items, totalCount: result.data.total_count };
};

export const getRepo = async ({ owner, repo }: requestType) => {
  const result = await octokit.request('GET /repos/{owner}/{repo}', {
    owner,
    repo,
  });

  return result.data;
};

export const getIssues = async ({ owner, repo, page }: requestType) => {
  const result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner,
    repo,
    per_page: 10,
    page,
  });
  console.log(result, 'resul');
  return result.data;
};
