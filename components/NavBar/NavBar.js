import Link from "next/link";

export function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>
          <h1>Bilbao Playground</h1>
        </a>
      </Link>
    </nav>
  );
}
