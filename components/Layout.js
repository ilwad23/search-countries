import React from "react";
import Nav from "./Nav";
import { useStateValue } from "../states/StateProvider";
function Layout() {
  const [state, dispatch] = useStateValue();
  return (
    <div
      className={`container ${
      state.toggle   ? "container--light" : "container--dark"
      }`}
    >
      <Nav />
    
    </div>
  );
}

export default Layout;
