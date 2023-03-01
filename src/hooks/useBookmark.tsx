import { useState, useEffect } from 'react';

const useBookmark = () => {
  const [bookmark, setBookmark] = useState<
    { title: string; description: string }[]
  >([]);
  const bookmarkList = window.localStorage.getItem('bookmarks') || '[]';

  useEffect(() => {
    const bookmarks = JSON.parse(bookmarkList);
    setBookmark(bookmarks);
  }, []);

  const addBookmark = (title: string, description: string) => {
    if (bookmark?.length < 4) {
      window.localStorage.setItem(
        'bookmarks',
        JSON.stringify([...bookmark, { title, description }])
      );
      setBookmark([...bookmark, { title, description }]);
    } else {
      alert('북마크는 4개 이상 등록할 수 없습니다');
    }
  };

  const removeBookmark = (title: string) => {
    const filterBookmark = bookmark?.filter((el) => el.title !== title);
    window.localStorage.setItem('bookmarks', JSON.stringify(filterBookmark));
    setBookmark(filterBookmark);
  };

  const handleBookmark = (title: string, description: string) => {
    const filterBookmark = bookmark.filter((el) => el.title === title);
    if (filterBookmark.length > 0) {
      removeBookmark(title);
    } else {
      addBookmark(title, description);
    }
  };

  const checkBookmark = (title: string) => {
    const filterBookmark = bookmark.filter((el) => el.title === title);
    return filterBookmark.length > 0;
  };

  return {
    bookmark,
    addBookmark,
    removeBookmark,
    handleBookmark,
    checkBookmark,
  };
};

export default useBookmark;
