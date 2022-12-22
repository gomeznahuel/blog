import { NextPage } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { use } from "react";
import { getBlogBySlug, getBlogs } from "../../../lib/blogs";
import BlogHeader from "./BlogHeader";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  params: Params;
};

const getInitialBlog = async (slug: string) => {
  const blog = getBlogBySlug(slug);
  return blog;
};

const BlogDetail: NextPage<Props> = ({ params }) => {
  const blog = use(getInitialBlog(params.slug));

  return (
    <div className="w-2/3 m-auto">
      <BlogHeader blog={blog} />
      <article className="prose lg:prose-xl">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>

      <div className="flex justify-center">
        <Link href="/" className="font-extrabold uppercase text-2xl py-2 px-4 bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default BlogDetail;
