import React from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useStateValue } from "../../states/StateProvider";
import ToolsStyles from "../../styles/components/home/Tools.module.scss";

function Tools() {  
  return (
    <div className={ToolsStyles.tools}>
      {Input()}
      {Filter(["Africa", "America", "Asia", "Europe", "Oceania"])}
    </div>
  );
}
function Input() {
  const [{ inputValue }, dispatch] = useStateValue();
  return (
    <div className={ToolsStyles.input}>
      <input
        type="text"
        className={ToolsStyles.input__field}
        placeholder="Search for a country"
        value={inputValue}
        onChange={(e) =>
          dispatch({ type: "setInputValue", val: e.target.value })
        }
      />
      <div className={ToolsStyles.input__icon}>
        <SearchIcon />
      </div>
    </div>
  );
}
function Filter(regions) {
  const [{filterValue }, dispatch] = useStateValue();
  return (
    <div className={ToolsStyles.filter}>
      <div className={ToolsStyles.selector}>
        <p className={ToolsStyles.selector__para}>
          {filterValue ? filterValue : "Filter by Region"}
        </p>
        <div className={ToolsStyles.selector__icon}>
          <ChevronDownIcon />
        </div>
      </div>
      <ul className={ToolsStyles.list}>
        {regions.map((region) => (
          <li
            key={region}
            className={ToolsStyles.list__para}
            onClick={() =>
              dispatch({ type: "setFilterValue", val: `${ region }` })
            }
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tools;
