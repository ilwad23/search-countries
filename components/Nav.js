import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useStateValue } from "../states/StateProvider";
import NavStyles from "../styles/components/Nav.module.scss";
function Nav() {
  const [{ toggle }, dispatch] = useStateValue();
  return (
    <div className={NavStyles["nav"]}>
      <h1 className={NavStyles["nav__strong"]}>Where in the world?</h1>
      <div
        className={NavStyles["nav__toggleContainer"]}
        onClick={() => dispatch({ type: "toggle" })}
      >
        <div className={NavStyles["nav__icon"]}>
          {toggle ? <MoonIcon /> : <SunIcon />}
        </div>
        <p className={NavStyles["nav__light"]}>Dark Mode</p>
      </div>
    </div>
  );
}

export default Nav;
