'use client';
import React, { useState } from 'react';
import { Tabs } from '../data/tabs';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
const font = Poppins({
  weight:['400','500','600','700','800','900'],
  subsets:['latin']
})
const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('homeTab');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="font-sans p-4">
      {/* Tabs - Aligned Horizontally on the Left */}
      <div className="flex">
        <ul className="flex lg:space-x-4 flex-wrap space-x-1 lg:w-[100vw] justify-center">
          {Tabs.map((tab) => (
            <li
              key={tab.id}
              id={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`tab text-base text-center lg:py-3 md:py-3 lg:px-6 md:px-6 py-1 px-2 border-b-2 cursor-pointer transition-all lg:text-[16px] md:text-[16px] text-[12px] ${
                activeTab === tab.id
                  ? 'text-blue-600 font-bold bg-gray-50 border-blue-600'
                  : 'text-gray-600 font-semibold'
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="mt-8">
        {Tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="tab-content">
                <h4 className={`lg:text-[42px] md:text-[42px] text-lg font-bold text-blue-600 text-center lg:mt-[1.5%] lg:mb-[1.5%] ${font.className}`}>{tab.label}</h4>
                <div className="bg-white font-sans p-4">
                  <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <h2 className="text-3xl font-extrabold text-gray-800 inline-block text-center">
                      LATEST BLOGS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                      {tab.content.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300"
                        >
                          <div className="h-64 w-full">
                            <Image
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            <span className="text-sm block text-gray-400 mt-2">{item.date}</span>
                            <p className="text-sm text-gray-500 mt-4">{item.Description.slice(0,100)+'...'}</p>
                            <Link
                               href={`/Blog/${activeTab}/${index}`}key={index}
                              className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Blog;
