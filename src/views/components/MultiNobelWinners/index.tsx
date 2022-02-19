import React, { useEffect, useState } from "react";
import { PrizeWinnersModel } from "../../../Models/PrizeWinners/prizeWinners.model";
import NobelPrizeWinnersService from "../../../services/nobelPrizeWinners.service";
import "./multiNobelWinner.scss";

const MultiNobelWinner = () => {
  const { fetchNoblePrizeWinnersData, prizeWinners, setPrizeWinners } =
    NobelPrizeWinnersService();
  const [multiNovel, setMultiNovel] = useState<PrizeWinnersModel[]>([]);

  useEffect(() => {
    fetchNoblePrizeWinnersData(() => {});
  }, []);
  useEffect(() => {
    handleMultiNovel();
  }, [prizeWinners]);

  const handleMultiNovel = () => {
    console.log({ prizeWinners });
    const filter = prizeWinners.filter(
      (element, index, array) => array.indexOf(element) !== index
    );
    setMultiNovel(filter);
  };
  return (
    <div className="multi-Nobel-Winner card">
      <h1>Multi Novel Winner</h1>
      {multiNovel.filter((data, index) => {
        return (
          <div className="card__container" key={index}>
            <div className="card__content">
              <h2>{data.category ? data.category : "No Multi Winners"}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultiNobelWinner;
