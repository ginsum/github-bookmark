import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const isBookmark = pathname.includes('bookmark');

  const linkStyle = 'w-1/2 flex justify-center items-center';
  const activeStyle = 'text-blue-500 font-semibold border-b-2 border-blue-300';

  const getLinkStyle = (isActive: boolean) => {
    if (isActive) {
      return `${linkStyle} ${activeStyle}`;
    }
    return linkStyle;
  };

  return (
    <div className="flex w-full h-12 text-zinc-400 text-sm border-b border-zinc-200 mb-2">
      <Link to="/" className={getLinkStyle(!isBookmark)}>
        Search
      </Link>
      <Link to="/bookmark" className={getLinkStyle(isBookmark)}>
        Bookmark
      </Link>
    </div>
  );
};
export default NavBar;
