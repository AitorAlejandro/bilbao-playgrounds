import Link from "next/link";

export function Playground({ slug, title }) {
  return (
    <Link href={`/${slug}`}>
      <a className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-64 object-cover object-center"
            src="https://via.placeholder.com/300"
            alt=""
          />
          <div className="flex items-center justify-between leading-tight p-2 md:p-4">
            <p className="text-lg">{title}</p>
          </div>
        </article>
      </a>
    </Link>
  );
}
