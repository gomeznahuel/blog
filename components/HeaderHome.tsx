import Link from "next/link";

const HeaderHome = () => {
  return (
    <div className="bg-slate-800 text-gray-100 p-5 font-mono text-center">
      <Link className="text-3xl" href="/">
        Nahuel Gómez
      </Link>

      <nav className='text-center mx-auto'>
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <a href="https://linkedin.com/in/gomeznahuel">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.github.com/gomeznahuel">GitHub</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderHome;
