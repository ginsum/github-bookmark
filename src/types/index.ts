export type RepoInfoType = {
  title: string;
  description: string;
  tag: string[];
  id: number;
  stargazersCount: number;
  license?: string;
  updatedAt: string;
  url?: string;
};

export type IssueInfoType = {
  id: number;
  title: string;
  state: string;
  number: number;
  createdAt: string;
  url: string;
  userName?: string;
};
