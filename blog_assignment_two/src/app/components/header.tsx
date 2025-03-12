'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import logo from '../images/logo image.jpg';

const font = Poppins({
  weight: ['300', '400', '500'],
  subsets: ['latin']
});

export default function Header() {
  const [tab, setTab] = useState('homeTab'); // Default active tab

  useEffect(() => {
    // Update the active tab based on the current URL path
    const path = window.location.pathname;
    switch (path) {
      case '/':
        setTab('homeTab');
        break;
      case '/Team':
        setTab('teamTab');
        break;
      case '/Features':
        setTab('featureTab');
        break;
      case '/Blog':
        setTab('blogTab');
        break;
      case '/About':
        setTab('aboutTab');
        break;
      default:
        setTab('');
    }
  }, []); // Run once on component mount

  useEffect(() => {
    const toggleOpen = document.getElementById("toggleOpen");
    const toggleClose = document.getElementById("toggleClose");
    const collapseMenu = document.getElementById("collapseMenu");

    function handleClick(): void {
      if (collapseMenu) {
        collapseMenu.style.display =
          collapseMenu.style.display === "block" ? "none" : "block";
      }
    }

    if (toggleOpen) {
      toggleOpen.addEventListener("click", handleClick);
    }
    if (toggleClose) {
      toggleClose.addEventListener("click", handleClick);
    }

    return () => {
      if (toggleOpen) toggleOpen.removeEventListener("click", handleClick);
      if (toggleClose) toggleClose.removeEventListener("click", handleClick);
    };
  }, []);

  const Data = [
    { id: 'homeTab', name: 'Home', link: '/' },
    { id: 'teamTab', name: 'Team', link: '/Team' },
    { id: 'featureTab', name: 'Feature', link: '/Features' },
    { id: 'blogTab', name: 'Blog', link: '/Blog' },
    { id: 'aboutTab', name: 'About', link: '/About' }
  ];

  const handleTab = (id: string) => {
    setTab(id);
  };

  return (
    <header className={`flex border-b py-3 px-4 sm:px-10 bg-white ${font.className} min-h-[70px] tracking-wide relative z-50`}>
      <div className="flex flex-wrap items-center gap-5 w-full">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-36" />
        </Link>

        <div id="collapseMenu" className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>

          <ul className="lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <Link href="/">
                <Image src="" alt="logo" className="w-36" />
              </Link>
            </li>
            {Data.map((data) => (
              <li className="max-lg:border-b max-lg:py-3 px-3" key={data.id} id={data.id}>
                <Link href={data.link} onClick={() => handleTab(data.id)} className={`lg:hover:text-[#007bff] block font-semibold text-[15px] ${tab === data.id ? 'text-[#007bff]' : 'text-gray-800'} `}>
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button id="toggleOpen" className="lg:hidden ml-auto">
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex lg:ml-auto max-lg:w-full">
          <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-4 py-3 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all">
            <input type="text" placeholder="Search something..." className="w-full text-sm bg-transparent rounded outline-none pr-2" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
              <path d="M190.707..." />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
