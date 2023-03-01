import { Routes, Route } from 'react-router-dom';
import BookmarkPage from '../pages/bookmark';
import RepoDetailPage from '../pages/repoDetail';
import SearchPage from '../pages/search';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
      <Route path="/bookmark/:owner/:repo" element={<RepoDetailPage />} />
    </Routes>
  );
};

export default Root;
