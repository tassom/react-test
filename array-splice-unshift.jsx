//REORDER (array splice & unshift)

import { useState }from "react";

export const List = ({ items }) => {
 
  const [orderedItems, setOrderedItems] = useState(items);

  const clickHandler = (index) => {
    const itemToReorder = orderedItems[index];
    orderedItems.splice(index, 1);
    orderedItems.unshift(itemToReorder);

    setOrderedItems([...orderedItems]);
  };

  return (
    <ul>
      {orderedItems.map((item, index) => {
        return (
          <li key={item} onClick={() => clickHandler(index)}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
