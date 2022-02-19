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
  const { fetchNoblePrizeWinnersData, loading, prizeWinners, setPrizeWinners } =
    NobelPrizeWinnersService();
  const [option, setOption] = useState<Options[]>([]);
  useEffect(() => {
    fetchNoblePrizeWinnersData(() => {});
  }, []);
  const handleChange = () => {
    // const options = prizeWinners
    //   .map(({ category }) => ({
    //     label: category,
    //     key: category,
    //     value: category,
    //   }))
    //   .filter((cat, index, arr) => arr.indexOf(cat) == index)
    //   .sort();

    const unique = prizeWinners
      .map((p) => p.category)
      .filter((categ, index, arr) => arr.indexOf(categ) == index)
      .sort();
    const opt = unique.map((val, index) => [
      ...option,
      { label: val, value: index },
    ]);
    // setOption(opt);
  };
  const handleFilter = (option?: string) => {
    console.log(option);
    const filteredValue = prizeWinners.filter((val, index) => {
      return val.category === option;
    });
    console.log({ filteredValue });
    setPrizeWinners(filteredValue);
  };

  return (
    <div>
      <h1>Nobel Winners</h1>
      {/* <select value={option} onClick={handleChange} placeholder="Select">
        {option?.map((opt, index) => {
          return <option onChange={() => handleFilter(opt)}>{opt} </option>;
        })}
      </select> */}
      <Select
        onClick={handleChange}
        placeholder="select"
        style={{ width: 120 }}
        onChange={handleChange}
        options={option}
      ></Select>

      <Card />
    </div>
  );
};

export default NobelPrizeWinners;
