import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useStateValue } from "../states/StateProvider";
import NavStyles from "../styles/components/Nav.module.scss";
import Link from "next/link";
function Nav() {
  const [{ toggle }, dispatch] = useStateValue();
  return (
    <div className={NavStyles["nav"]}>
      <Link href='/'>
        <h1 className={NavStyles["nav__strongText"]}>Where in the world?</h1>
      </Link>
      <div
        className={NavStyles["nav__toggleContainer"]}
        onClick={() => dispatch({ type: "toggle" })}
      >
        <div className={NavStyles["nav__icon"]}>
          {toggle ? <MoonIcon /> : <SunIcon />}
        </div>
        <p className={NavStyles["nav__lightText"]}>
          {toggle ? "Dark" : "Light"} Mode
        </p>
      </div>
    </div>
  );
}

export default Nav;
