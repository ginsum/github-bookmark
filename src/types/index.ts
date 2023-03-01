export type RepoInfoType = {
  title: string;
  description: string;
  tag: string[];
  stargazersCount: number;
  license?: string;
  updatedAt: string;
  url?: string;
};

export type IssueInfoType = {
  title: string;
  state: string;
  number: number;
  createdAt: string;
  url: string;
  userName?: string;
};
