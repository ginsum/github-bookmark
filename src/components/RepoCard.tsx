import { useNavigate } from 'react-router-dom';
import BookmarkSVG from '../assets/BookmarkSVG';

const RepoCard = ({
  title,
  tag,
  content,
  id,
  stargazersCount,
  license,
  updatedAt,
}: {
  title: string;
  content: string;
  tag: string[];
  id: string;
  stargazersCount: string;
  license: string;
  updatedAt: string;
}) => {
  let navigate = useNavigate();

  return (
    <div
      className="w-full p-5 my-2 border border-zinc-200 rounded-2xl shadow"
      onClick={() => navigate(id)}
    >
      <div className="flex justify-between pb-1.5 border-b border-zinc-300">
        <div className="text-lg font-bold text-blue-900">{title}</div>
        <BookmarkSVG />
      </div>
      <div className="mt-3 text-sm text-zinc-500">{content}</div>
      <div className="flex mt-3">
        {tag.map((el) => (
          <div className="flex items-center px-2.5 py-1 mr-1 mb-2 md:mb-0 text-xs bg-blue-400 text-white rounded-xl">
            {el}
          </div>
        ))}
      </div>
      <div className="flex text-xs mt-1">
        <div>{stargazersCount}</div>
        <div>{license}</div>
        <div>{updatedAt}</div>
      </div>
    </div>
  );
};

export default RepoCard;
