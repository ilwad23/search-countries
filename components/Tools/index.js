import React from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
// import { useStateValue } from "../states/StateProvider";
import ToolsStyles from "../../styles/components/Tools.module.scss";

function Tools() {
  return (
    <div className={ToolsStyles.tools}>
      <inputContainer className={ToolsStyles.input}>
        <input
          type="text"
          className={ToolsStyles.input__field}
          placeholder="Search for a country"
        />
        <iconContainer className={ToolsStyles.input__icon}>
          <SearchIcon />
        </iconContainer>
      </inputContainer>
      <filter className={ToolsStyles.filter}>
        <selector className={ToolsStyles.selector}>
          <p className={ToolsStyles.selector__para}>Filter by Region</p>
          <iconContainer className={ToolsStyles.selector__icon}>
            <ChevronDownIcon />
          </iconContainer>
        </selector>
        <ul className={ToolsStyles.list}>
          <li className={ToolsStyles.list__para}>Africa</li>
          <li className={ToolsStyles.list__para}>America</li>
          <li className={ToolsStyles.list__para}>Asia</li>
          <li className={ToolsStyles.list__para}>Europe</li>
          <li className={ToolsStyles.list__para}>Oceania</li>
        </ul>
      </filter>
    </div>
  );
}

export default Tools;
