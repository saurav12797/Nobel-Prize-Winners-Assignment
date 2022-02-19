import React, { useState, ChangeEvent } from "react";
import Card1 from "../Card1";
interface Item {
  firstName: string;
  lastName: string;
}

const Prac = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [item, setItem] = useState<Item[]>([]);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleAddItem = () =>
    setItem([...item, { firstName: inputValue, lastName: inputValue }]);

  const handleDeleteItem = (currentKey: number) => {
    setItem((prev) => {
      return prev.filter((newValue, key) => key != currentKey);
    });
  };

  return (
    <div>
      <h1>This is add or remove Items</h1>
      <input type="text" onChange={handleInputValue}></input>
      <span>
        <button onClick={handleAddItem}>Add</button>
      </span>

      {item?.map((data, index) => (
        <Card1
          item={data}
          itemKey={index}
          handleDeleteItem={(key) => handleDeleteItem(key)}
        />
      ))}
    </div>
  );
};

export default Prac;
