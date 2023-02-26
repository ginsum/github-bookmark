import { useState, useEffect } from 'react';

const useBookmark = () => {
  const [bookmark, setBookmark] = useState<number[]>([]);
  const bookmarkIdList = window.localStorage.getItem('bookmarkIds');

  useEffect(() => {
    const bookmarkIds = bookmarkIdList ? JSON.parse(bookmarkIdList) : [];
    setBookmark(bookmarkIds);
  }, []);

  const addBookmark = (id: number) => {
    if (bookmark?.length < 4) {
      window.localStorage.setItem(
        'bookmarkIds',
        JSON.stringify([...bookmark, id])
      );
      setBookmark([...bookmark, id]);
    } else {
      alert('북마크는 4개 이상 등록할 수 없습니다');
    }
  };

  const removeBookmark = (id: number) => {
    const newBookmark = bookmark?.filter((el: number) => el !== id);
    window.localStorage.setItem('bookmarkIds', JSON.stringify(newBookmark));
    setBookmark(newBookmark);
  };

  const handleBookmark = (id: number) => {
    if (bookmark?.includes(id)) {
      removeBookmark(id);
    } else {
      addBookmark(id);
    }
  };

  return {
    bookmark,
    addBookmark,
    removeBookmark,
    handleBookmark,
  };
};

export default useBookmark;
