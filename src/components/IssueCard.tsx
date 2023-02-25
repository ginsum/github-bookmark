import { useNavigate } from 'react-router-dom';

const IssueCard = ({
  title,
  tag,
  id,
  stargazersCount,
  license,
  updatedAt,
}: {
  title: string;
  tag: string[];
  id: string;
  stargazersCount: string;
  license: string;
  updatedAt: string;
}) => {
  let navigate = useNavigate();

  return (
    <div
      className="w-full p-5 my-2 border-b border-zinc-200 "
      onClick={() => navigate(id)}
    >
      <div className="flex items-center">
        <div className="text-lg font-bold">{title}</div>
        <div className="flex ml-2">
          {tag.map((el) => (
            <div className="flex items-center h-5 px-1.5 mr-1 text-xs border border-red-400 text-red-600 rounded-xl">
              {el}
            </div>
          ))}
        </div>
      </div>

      <div className="flex text-xs mt-1">
        <div>{stargazersCount}</div>
        <div>{license}</div>
        <div>{updatedAt}</div>
      </div>
    </div>
  );
};

export default IssueCard;
