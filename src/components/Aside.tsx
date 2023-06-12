import React from "react";
import ListGroup from "./ListGroup";
import { useState } from "react";
import "../App.css";

interface Props {
  items: string[];
  heading: string;
  //   onSelectItem: (item: string) => void;
}
function Aside({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const ExCond = () => {
    if (items.length === 0) return <p>Empty</p>;
  };
  return (
    <aside className="rounded mx-4">
      <h3 className="pb-2 genre-head">{heading}</h3>
      {ExCond()}
      <ul className="list-group p-1 asides">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item rounded bg-genre-a m-1 active"
                : "list-group-item rounded bg-genre m-1"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
