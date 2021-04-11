import { NavBar } from "../../components";
import { Footer } from "../../components";

export function Layout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>{children}</main>

      <Footer />
    </>
  );
}
