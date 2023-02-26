import Card from '../components/RepoCard';
import useBookmark from '../hooks/useBookmark';
import { mockList } from '../mockData';

const BookmarkPage = () => {
  const { bookmark, handleBookmark } = useBookmark();
  const filteredList = mockList.filter((el) => bookmark.includes(el.id));

  return (
    <>
      <div className="w-full my-2 text-right">{`${filteredList.length}/4`}</div>
      {filteredList.map(
        ({ id, title, tag, content, stargazersCount, license, updatedAt }) => (
          <Card
            key={id}
            title={title}
            tag={tag}
            content={content}
            id={id}
            stargazersCount={stargazersCount}
            license={license}
            updatedAt={updatedAt}
            isBookmark={bookmark.includes(id)}
            handleBookmark={handleBookmark}
          />
        )
      )}
    </>
  );
};

export default BookmarkPage;
