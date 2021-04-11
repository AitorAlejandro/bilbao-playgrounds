import Link from "next/link";

export function NavBar() {
  return (
    <nav className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <div className="flex flex-col items-center justify-center pt-20 text-center">
        <Link href="/">
          <a className="font-bold text-3xl text-gray-900">
            <h1>Bilbao Playgrounds</h1>
          </a>
        </Link>
        <p className="font-base text-base text-gray-600">
          A collections of every playground in Bilbao to go with kids.
        </p>
      </div>
      <div className="pt-6">
        <div className="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
          <div className="outline-none focus:outline-none" aria-hidden="true">
            <svg
              className="w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            name=""
            id=""
            placeholder="search for playgrounds"
            x-model="q"
            className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          />
        </div>
      </div>
    </nav>
  );
}
