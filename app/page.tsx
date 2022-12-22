import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { getBlogs } from "../lib/blogs";


async function getInitialBlogs() {
  const blogs = getBlogs();
  return blogs;
}

const shortify = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

const Page = () => {
  const blogs = use(getInitialBlogs());

  return (
    <>
      <h2 className="sr-only">Blogs</h2>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {blogs.map((blog) => (
          <div>
            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <Image fill src={blog.coverImage} alt={""} className="h-full w-full object-cover object-center group-hover:opacity-75" sizes="(max-width: 640px) 100vw, 640px" priority={true} />
            </div>
            <h3 className="mt-4 text-md font-bold text-gray-700 tracking-wide">{shortify(blog.title, 33)}</h3>
            <p className="mt-1 text-xs  text-gray-900">
              {shortify(blog.description, 70)}            
            </p>

            <div className="flex justify-end">
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}className='font-bold text-center'>
              Read more...
            </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
