import { useNavigate } from 'react-router-dom';

type IssueCardProps = {
  title: string;
  id: number;
  state: string;
  number: number;
  createdAt: string;
  url: string;
};

const IssueCard = ({
  title,
  id,
  state,
  number,
  createdAt,
  url,
}: IssueCardProps) => {
  return (
    <div className="w-full py-4 border-b border-zinc-200 curser-pointer">
      <div className="flex items-center">
        <div className="flex items-center px-2.5 py-1 mr-2 text-xs border border-emerald-400 text-emerald-600 rounded-xl">
          {state}
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          <div className="text-lg font-bold text-zinc-600">{title}</div>
        </a>
      </div>

      <div className="flex text-xs mt-1 text-zinc-400">
        <div className="mr-2">{number}</div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
};

export default IssueCard;
