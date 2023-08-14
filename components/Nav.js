import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope
} from 'react-icons/hi2'

//  links
const links = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

import Link from 'next/link';
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='
      flex flex-row items-end
      justify-center
      xl:justify-center gap-x-4
      fixed h-max bottom-0 mt-auto
      xl:bottom-[2%] z-50  w-full
      xl:w-full 
    '
    >
      {/* inner */}
      <div className='
      flex w-full xl:flex-row
      items-center justify-between
      xl:justify-center gap-x-10
      px-3 md:px-40 xl:px-0 h-[80px]
      xl:h-max py-4 bg-white/10
      xl:max-w-md
      backdrop-blur-sm text-3xl xl:text-xl
      xl:rounded-full
      '>
        {links.map((link, index) => (
          <Link
            className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
            key={index}
            href={link.path}
          >
            <div className='absolute pr-14 top-[-165%] left-[-65%] hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>
                  {link.name}
                </div>

                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] rotate-90 absolute left-5 -bottom-2'>
                </div>

              </div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav >
  )
};

export default Nav;
