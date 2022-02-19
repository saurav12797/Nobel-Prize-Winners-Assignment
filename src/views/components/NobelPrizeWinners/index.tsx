import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import NobelPrizeWinnersService from "../../../services/nobelPrizeWinners.service";

import { Select } from "antd";

const { Option } = Select;

interface Options {
  label: string;
  value: string;
}

const NobelPrizeWinners = () => {
  const {
    fetchNoblePrizeWinnersData,
    loading,
    prizeWinners,
    setPrizeWinners,
    setloading,
  } = NobelPrizeWinnersService();

  const [option, setOption] = useState<(string | undefined)[]>([]);

  useEffect(() => {
    fetchNoblePrizeWinnersData(() => {});
  }, []);
  const handleFilter = () => {
    const uniqueValue = prizeWinners
      .map((p) => p.category)
      .filter((categ, index, arr) => arr.indexOf(categ) == index)
      .sort();

    setOption(uniqueValue);
  };
  const handleChange = (value: any) => {
    console.log(value);
    setloading(true);

    const filter = prizeWinners.filter((prize, index) => {
      return prize.category === value;
    });
    console.log({ filter });
    setPrizeWinners(filter);
    setloading(false);
  };

  return (
    <div>
      <h1>Nobel Winners</h1>
      <Select
        onClick={handleFilter}
        placeholder="select"
        style={{ width: 120 }}
        onChange={handleChange}
        options={option.map((val, index) => {
          return { label: val, value: val };
        })}
      ></Select>
      <Card />
    </div>
  );
};

export default NobelPrizeWinners;
