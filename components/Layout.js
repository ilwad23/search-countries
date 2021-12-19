import React from "react";
import Nav from "./Nav";
import { useStateValue } from "../states/StateProvider";
function Layout({ children }) {
  const [state, dispatch] = useStateValue();
  return (
    <div
      className={`container ${
        state.toggle ? "container--light" : "container--dark"
      }`}
    >
      <Nav />
      <div className="main">{children}</div>
    </div>
  );
}

export default Layout;
