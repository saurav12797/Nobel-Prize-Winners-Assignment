import "./card.scss";
import React, { useState } from "react";

const demoItems = ["monday", "monday", "monday", "monday", "monday"];

export const Card = () => {
  const [update, setUpdate] = useState([...demoItems]);

  const deleteItem = (id: number) => {
    setUpdate((oldElements) => {
      return oldElements.filter((data, index) => {
        return index !== id;
      });
    });
  };
  console.log({ update });

  return (
    <section className="card">
      {demoItems.map((data, index) => {
        return (
          <div className="card__container" key={index}>
            <div className="card__content">
              <h2>{data}</h2>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
