import Link from "next/link";

export function Playground({ slug, title }) {
  return (
    <div>
      <Link href={slug}>
        <a>{title}</a>
      </Link>
    </div>
  );
}
