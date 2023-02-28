import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const isBookmark = pathname.includes('bookmark');

  const linkStyle = 'w-1/2 flex justify-center items-center';
  const activeStyle = 'text-blue-500 font-semibold border-b border-blue-300';

  return (
    <div className="flex w-full h-12 text-zinc-400 text-sm border-b border-zinc-200 mb-5">
      <Link to="/" className={`${linkStyle} ${isBookmark ? '' : activeStyle}`}>
        Search
      </Link>
      <Link
        to="/bookmark"
        className={`${linkStyle} ${isBookmark ? activeStyle : ''}`}
      >
        Bookmark
      </Link>
    </div>
  );
};
export default NavBar;
