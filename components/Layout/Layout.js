import PropTypes from "prop-types";

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
