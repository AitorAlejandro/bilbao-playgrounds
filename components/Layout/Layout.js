import Link from "next/link";
import { Footer } from "../../components";

export function Layout({ children }) {
  return (
    <div>
      <header>
        <Link href="/">
          <a>
            <h1>Bilbao Playground</h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div>{children}</div>

      <Footer />
    </div>
  );
}
