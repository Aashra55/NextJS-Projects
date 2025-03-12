'use client';
import { Tabs } from '../../../data/tabs';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const BlogDetail = () => {
  const params = useParams();
  console.log('Params:', params); // Debugging output

  const { tabId, blogIndex } = params || {};

  const selectedTab = Tabs.find((tab) => tab.id === tabId);
  const blog = selectedTab?.content[Number(blogIndex)];

  if (!selectedTab || !blog) {
    return <div className="text-center mt-20">Blog not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
      <span className="text-sm text-gray-500">{blog.date}</span>
      <div className="mt-4">
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded"
        />
      </div>
      <p className="text-gray-700 mt-6">{blog.Description}</p>
    </div>
  );
};

export default BlogDetail;
