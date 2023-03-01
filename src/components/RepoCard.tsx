import BookmarkSVG from '../assets/BookmarkSVG';

type RepoCardProps = {
  title: string;
  description: string;
  tag?: string[];
  id?: number;
  stargazersCount?: number;
  license?: string;
  updatedAt?: string;
  isBookmark: boolean;
  isBookmarkPage: boolean;
  handleBookmark: (title: string, description: string) => void;
  movePage?: () => void;
};

const RepoCard = ({
  title,
  tag,
  description,
  id,
  stargazersCount,
  license,
  updatedAt,
  isBookmark,
  handleBookmark,
  isBookmarkPage,
  movePage,
}: RepoCardProps) => {
  return (
    <div className="w-full px-5 py-6 my-2 border border-zinc-200 rounded-2xl shadow">
      <div className="flex justify-between pb-1.5 border-b border-zinc-200">
        <div
          className="text-lg font-bold text-blue-700 cursor-pointer break-all"
          onClick={movePage}
        >
          {title}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleBookmark(title, description)}
        >
          <BookmarkSVG isBookmark={isBookmark} />
        </div>
      </div>
      <div className="mt-3 text-sm text-zinc-500">{description}</div>
      {!isBookmarkPage && (
        <>
          <div className="flex flex-wrap mt-3 ">
            {tag?.map((el) => (
              <div
                key={el}
                className="flex items-center px-2.5 py-1 mr-1 mb-1 text-xs  border border-blue-400 text-blue-600 rounded-xl"
              >
                {el}
              </div>
            ))}
          </div>
          <div className="flex text-xs mt-1 text-zinc-400">
            {!!stargazersCount && (
              <div className="mr-3">{stargazersCount} stars</div>
            )}
            {license && <div className="mr-3">{license}</div>}
            <div>{updatedAt}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default RepoCard;
