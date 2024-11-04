'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CgGhostCharacter } from 'react-icons/cg';
import ToggleThemeButton from './UI/ToggleThemeButton';
import { RxHamburgerMenu } from 'react-icons/rx'; 
import { useParams } from 'next/navigation'; 
import useSyncedSlug from '@/utility/hooks/useSyncedSlug';

const NavLinks = [
  {
    link: '/home',
    text: 'Home',
  },
  {
    link: '/blog',
    text: 'Blog',
  },
  {
    link: '/portfolio',
    text: 'Portfolio',
  },
  {
    link: '/about',
    text: 'About',
  },
  {
    link: '/portfolio',
    text: 'Projects',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const slug = useSyncedSlug();

  const links = () => {
    return (
      <>
        {NavLinks.map((navlink) => (
          <li key={`link-${navlink.text}`}>
            <Link href={`${navlink.link}${slug ? `/${slug}` : ''}`} onClick={() => setIsOpen(false)}>
              {navlink.text}
            </Link>
          </li>
        ))}
        <li key="button">
          <ToggleThemeButton />
        </li>
      </>
    );
  };

  return (
    <nav className="my-4 flex flex-row items-center w-full justify-between">
      <div className="flex flex-row justify-center items-center max-w-fit gap-2">
        <CgGhostCharacter fontSize={26} />
        <span className="text-2xl">Shivam</span>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-4 md:gap-8">{links()}</ul>
      </div>
      <div className="block md:hidden">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <RxHamburgerMenu fontSize={26} />
        </button>
      </div>
      <div
        className={`absolute w-full left-0 top-[100px] md:hidden transition-all duration-300 ${
          isOpen ? 'block h-auto' : 'hidden h-0'
        }`}
      >
        <ul className="flex flex-col justify-center items-center w-full gap-2">{links()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
