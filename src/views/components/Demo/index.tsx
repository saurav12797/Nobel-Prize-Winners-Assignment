import React, { useState, useEffect } from "react";

import "./demo.scss";
const Demo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState<string[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const addItem = () => {
    if (input.length !== 0) setItem((prev: string[]) => [...prev, input]);
    setIsModal(true);
  };

  const handleDelete = (id: number) => {
    setItem((prev) => prev.filter((data, index) => index !== id));
  };
  console.log(item);

  return (
    <div className="demo">
      <input onChange={handleChange} />
      <span>
        <button className="" onClick={addItem}>
          Add
        </button>
        {item.map((item, key) => (
          <div key={key} className="items">
            <span>{item}</span>
            <span>
              <button onClick={() => handleDelete(key)}>Delete</button>
            </span>
          </div>
        ))}
      </span>
      {isModal && (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              {" "}
              Hello saurav
              <button onClick={() => setIsModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
