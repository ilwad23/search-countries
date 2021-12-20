import React from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useStateValue } from "../../states/StateProvider";
import ToolsStyles from "../../styles/components/Tools.module.scss";

function Tools() {
  const [{ inputValue, filterValue }, dispatch] = useStateValue();
  return (
    <div className={ToolsStyles.tools}>
      <inputContainer className={ToolsStyles.input}>
        <input
          type="text"
          className={ToolsStyles.input__field}
          placeholder="Search for a country"
          value={inputValue}
          onChange={(e) =>
            dispatch({ type: "setInputValue", val: e.target.value })
          }
        />
        <iconContainer className={ToolsStyles.input__icon}>
          <SearchIcon />
        </iconContainer>
      </inputContainer>
      <filter className={ToolsStyles.filter}>
        <selector className={ToolsStyles.selector}>
          <p className={ToolsStyles.selector__para}>
            {filterValue ? filterValue : "Filter by Region"}
          </p>
          <iconContainer className={ToolsStyles.selector__icon}>
            <ChevronDownIcon />
          </iconContainer>
        </selector>
        <ul className={ToolsStyles.list}>
          <li
            className={ToolsStyles.list__para}
            onClick={(e) => dispatch({ type: "setFilterValue", val: "Africa" })}
          >
            Africa
          </li>
          <li
            className={ToolsStyles.list__para}
            onClick={(e) =>
              dispatch({ type: "setFilterValue", val: "America" })
            }
          >
            America
          </li>
          <li
            className={ToolsStyles.list__para}
            onClick={(e) => dispatch({ type: "setFilterValue", val: "Asia" })}
          >
            Asia
          </li>
          <li
            className={ToolsStyles.list__para}
            onClick={(e) => dispatch({ type: "setFilterValue", val: "Europe" })}
          >
            Europe
          </li>
          <li
            className={ToolsStyles.list__para}
            onClick={(e) =>
              dispatch({ type: "setFilterValue", val: "Oceania" })
            }
          >
            Oceania
          </li>
        </ul>
      </filter>
    </div>
  );
}

export default Tools;
