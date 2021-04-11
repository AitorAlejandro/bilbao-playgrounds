import { NavBar } from "../../components";
import { Footer } from "../../components";

export function Layout({ children }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div>{children}</div>

      <Footer />
    </div>
  );
}
