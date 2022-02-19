import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import NobelPrizeWinnersService from "../../../services/nobelPrizeWinners.service";

import { Select } from "antd";
import { PrizeWinnersModel } from "../../../Models/PrizeWinners/prizeWinners.model";
import "./nobel-prize-winners.scss";

const NobelPrizeWinners = () => {
  const {
    fetchNoblePrizeWinnersData,
    loading,
    prizeWinners,
    setPrizeWinners,
    setloading,
  } = NobelPrizeWinnersService();

  const [prizeData, setPrizeData] = useState<PrizeWinnersModel[]>([]);

  const [option, setOption] = useState<(string | undefined)[]>([]);
  const [year, setYear] = useState<(string | undefined)[]>([]);

  useEffect(() => {
    fetchNoblePrizeWinnersData(() => {});
  }, []);

  useEffect(() => {
    handleFilter();
    setPrizeData(prizeWinners);
  }, [prizeWinners]);

  const handleFilter = () => {
    const uniqueCategory = prizeWinners
      .map((p) => p.category)
      .filter((categ, index, arr) => arr.indexOf(categ) == index)
      .sort();
    const uniqueYear = prizeWinners
      .map((p) => p.year)
      .filter((year, index, arr) => arr.indexOf(year) == index)
      .sort();

    if (option.length === 0) setOption(uniqueCategory);
    if (year.length === 0) setYear(uniqueYear);
  };
  const handleCategoryChange = (value: any) => {
    const category = prizeData.filter((prize, index) => {
      return prize.category === value;
    });

    setPrizeWinners(category);
  };
  const handleYearChange = (value: any) => {
    console.log(value);
    const filter = prizeData.filter((yr, index) => {
      return yr.year == value;
    });

    setPrizeWinners(filter);
  };

  return (
    <div className="nobel-prize-winners">
      <h1>Nobel Winners</h1>
      <div className="nobel-prize-winners__filter">
        <span>Filter By </span>
        <Select
          placeholder="Category"
          style={{ width: 120 }}
          onChange={handleCategoryChange}
          options={option.map((val, index) => {
            return { label: val, value: val };
          })}
        ></Select>
        <Select
          placeholder="Year"
          style={{ width: 120 }}
          onChange={() => handleYearChange}
          options={year.map((val, index) => {
            return { label: val, value: val };
          })}
        ></Select>
      </div>
      <Card prizeWinners={prizeWinners} />
    </div>
  );
};

export default NobelPrizeWinners;
