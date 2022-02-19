import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import NobelPrizeWinnersService from "../../../services/nobelPrizeWinners.service";

const NobelPrizeWinners = () => {
  const { fetchNoblePrizeWinnersData, loading, prizeWinners, setPrizeWinners } =
    NobelPrizeWinnersService();
  const [option, setOption] = useState<(string | undefined)[]>();
  useEffect(() => {
    fetchNoblePrizeWinnersData();
  }, []);
  const handleChange = () => {
    const unique = prizeWinners
      .map((p) => p.category)
      .filter((cat, index, arr) => arr.indexOf(cat) == index)
      .sort();
    setOption(unique);
  };
  const handleFilter = (option?: string) => {
    console.log(option);
    const filteredValue = prizeWinners.filter((val, index) => {
      return val.category === option;
    });
    setPrizeWinners(filteredValue);
  };

  return (
    <div>
      <h1>Nobel Winners</h1>
      <select onClick={handleChange}>
        {option?.map((opt, index) => {
          return <option onChange={() => handleFilter(opt)}>{opt} </option>;
        })}
      </select>

      <Card />
    </div>
  );
};

export default NobelPrizeWinners;
