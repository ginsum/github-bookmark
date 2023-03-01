import { useNavigate } from 'react-router-dom';

import useBookmark from '../hooks/useBookmark';
import Card from '../components/RepoCard';

const BookmarkPage = () => {
  const { bookmark, handleBookmark, checkBookmark } = useBookmark();
  const navigate = useNavigate();

  return (
    <>
      {bookmark.length > 0 ? (
        <>
          <div className="flex w-full mt-6 mb-1 px-3 justify-between text-sm text-zinc-500">
            <div className="">
              최대 4개까지 등록 가능합니다. 클릭하면 이슈를 확인할 수 있습니다.
            </div>
            <div>{`${bookmark.length}/4`}</div>
          </div>
          {bookmark?.map(({ title, description }) => (
            <Card
              key={title}
              repoInfo={{ title, description }}
              isBookmark={checkBookmark(title)}
              handleBookmark={handleBookmark}
              isBookmarkPage={true}
              movePage={() => navigate(`/bookmark/${title}`)}
            />
          ))}
        </>
      ) : (
        <div className="text-sm text-zinc-500 mt-6">
          search 탭에서 검색 후, 북마크를 등록해 주세요. 최대 4개까지
          가능합니다.
        </div>
      )}
    </>
  );
};

export default BookmarkPage;
