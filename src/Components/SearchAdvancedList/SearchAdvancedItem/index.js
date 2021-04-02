import React, { useState } from "react";
import "./styles.css";

const SearchAdvancedItem = ({
  title,
  dropdownList,
  handleSelectItem,
  listInitialState,
}) => {
  const [isListOpen, setListOpen] = useState(listInitialState);
  const headerTitle = title;

  const openDropdown = () => setListOpen(!isListOpen);

  return (
    <div className="dd-wrapper">
      <button className="item-button dd-button" onClick={openDropdown}>
        <div className="dd-header">
          <div className="dd-header-title">{headerTitle}</div>
          {isListOpen ? "/\\" : "\\/"}
        </div>
      </button>
      <div className="dd-list">
        {isListOpen
          ? dropdownList
              .sort((a, b) => a.id - b.id)
              .map((item) => (
                <button
                  type="button"
                  className={
                    "dd-list-item" + (item.isSelected ? " filter-selected" : "")
                  }
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                >
                  {item.ddElement}
                </button>
              ))
          : null}
      </div>
    </div>
  );
};

export default SearchAdvancedItem;
