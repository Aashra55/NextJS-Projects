import { blogs } from '../cards';
import { notFound } from 'next/navigation';
import BlogDetailClient from './BlogDetailClient';

export async function generateStaticParams() {
  return blogs.map((e) => ({
    id: String(e.id),
  }));
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blogId = Number(params.id);
  const blog = blogs.find((e) => e.id === blogId);

  if (!blog) {
    notFound();
  }

  return <BlogDetailClient blog={blog} />;
}
