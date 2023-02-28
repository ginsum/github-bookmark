import { Octokit } from 'octokit';

type requestType = {
  owner: string;
  repo: string;
};

const octokit = new Octokit();

export const searchRepo = async ({ searchText }: { searchText: string }) => {
  const result = await octokit.request('GET /search/repositories', {
    q: searchText,
    per_page: 10,
  });
  return result.data.items;
};

export const getRepo = async ({ owner, repo }: requestType) => {
  const result = await octokit.request('GET /repos/{owner}/{repo}', {
    owner,
    repo,
  });

  return result.data;
};

export const getIssues = async ({ owner, repo }: requestType) => {
  const result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner,
    repo,
    per_page: 10,
  });
  console.log(result, 'resul');
  return result.data;
};
