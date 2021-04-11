import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>Bilbao Playground</h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div>{children}</div>

      <footer>
        <p>Copyright 2021 Bilbao Playgrounds :)</p>
      </footer>
    </div>
  );
}
