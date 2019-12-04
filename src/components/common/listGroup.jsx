import React from "react";
import "./css/listGroup.css";

const ListGroup = ({
  items,
  valueProperty,
  onItemSelect,
  selectedItem
}) => {

  return (
    <ul className="list-group genres">
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item}
          className={
            item === selectedItem
              ? "list-group-item active genres-field"
              : "list-group-item genres-field"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
