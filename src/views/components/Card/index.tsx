import "./card.scss";
import React, { useState, useEffect } from "react";
import NobelPrizeWinnersService from "../../../services/nobelPrizeWinners.service";

export const Card = () => {
  const { fetchNoblePrizeWinnersData, loading, prizeWinners } =
    NobelPrizeWinnersService();

  useEffect(() => {
    fetchNoblePrizeWinnersData();
  }, []);

  return (
    <section className="card">
      {prizeWinners.map((winner, index) => {
        return (
          <div className="card__container" key={index}>
            <h2 className="card__container-heading">LAUREATES</h2>
            {winner?.laureates?.map((laureates, index) => {
              return (
                <div className="card__container-content">
                  <p>{index === 0 ? laureates?.motivation : ""}</p>
                  <h3 key={index}>
                    {`${laureates?.firstName} ${laureates?.surName} `}
                  </h3>
                </div>
              );
            })}
            <h2 className="card__container-footer">{`${winner?.category}, ${winner?.year}`}</h2>
          </div>
        );
      })}
    </section>
  );
};
