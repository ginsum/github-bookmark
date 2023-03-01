import { IssueInfoType } from '../types';

const IssueCard = ({
  title,
  id,
  state,
  number,
  createdAt,
  url,
  userName,
}: IssueInfoType) => {
  return (
    <div className="w-full py-4 border-b border-zinc-200 curser-pointer">
      <div className="flex items-center">
        <div className="flex items-center px-2.5 py-1 mr-2.5 text-xs border border-emerald-400 text-emerald-600 rounded-xl">
          {state}
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          <div className="whitespace-pre-line break-all text-lg font-bold text-zinc-600">
            {title}
          </div>
        </a>
      </div>

      <div className="flex text-xs mt-1 text-zinc-400">
        <div className="mr-1">#{number} opened on</div>
        <div className="mr-1">{createdAt}</div>
        <div>by {userName}</div>
      </div>
    </div>
  );
};

export default IssueCard;
