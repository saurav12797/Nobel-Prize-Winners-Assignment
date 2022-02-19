import React from "react";
interface Item {
  firstName: string;
  lastName: string;
}
interface Card1Props {
  item: Item;
  itemKey: number;
  handleDeleteItem: (key: number) => void;
}

function Card1(props: Card1Props) {
  const { item, itemKey, handleDeleteItem } = props;
  return (
    <div className="card1" key={itemKey}>
      {item?.firstName}
      <span>
        <button onClick={() => handleDeleteItem(itemKey)}>Delete Item</button>
      </span>
    </div>
  );
}

export default Card1;
