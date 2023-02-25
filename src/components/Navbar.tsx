import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const isBookmark = pathname.includes('bookmark');
  const linkStyle = 'w-1/2 flex justify-center items-center';
  const activeStyle = 'bg-zinc-100';

  return (
    <div className="flex w-full h-12 text-zinc-400 text-sm border-b border-zinc-200">
      <Link to="/" className={`${linkStyle} ${isBookmark ? '' : activeStyle}`}>
        <div className="">Search</div>
      </Link>
      <Link
        to="/bookmark"
        className={`${linkStyle} ${isBookmark ? activeStyle : ''}`}
      >
        <div className="">Bookmark</div>
      </Link>
    </div>
  );
};
export default NavBar;
