import { Routes, Route } from 'react-router-dom';
import BookmarkPage from '../pages/bookmark';
import DetailPage from '../pages/detail';
import SearchPage from '../pages/search';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  );
};

export default Root;
