import { NavLink } from 'react-router-dom';
import profileImage from '@/assets/images/img-profile.svg';
import Logos from '@/assets/logo';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  { label: '자유게시판', to: '/boards' },
  { label: '중고마켓', to: '/items' },
];

const navLinkClassName = ({ isActive }) =>
  cn(
    'transition',
    isActive ? 'text-primary-100' : 'text-gray-600 hover:text-gray-800'
  );

const logoSize = 'h-12.75 w-auto';

export default function Header() {

  return (
    <header className="border-border-100 sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-17.5 w-full max-w-300 items-center justify-between px-4 md:px-6">
        <div className="flex w-auto items-center gap-4 md:gap-11.75">
          <h1>
            <a href="/" aria-label="판다마켓 홈">
              <Logos.TextLogo
                aria-label="판다마켓"
                className={`${logoSize} lg:hidden`}
              />
              <Logos.Logo
                aria-label="판다마켓"
                className={`hidden ${logoSize} lg:block`}
              />
            </a>
          </h1>
          <nav className="text-2lg-semibold flex items-center gap-7.5">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink key={to} className={navLinkClassName} to={to}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <button type="button" aria-label="프로필">
          <img src={profileImage} alt="프로필" className="h-10 w-10" />
        </button>
      </div>
    </header>
  );
}
