import "./card.scss";
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import "antd/dist/antd.css";

import NobelPrizeWinnersService from "../../../services/nobelPrizeWinners.service";

export const Card = () => {
  const [total, setTotal] = useState<number>();
  const [page, setPage] = useState(1);
  const [prizePerPage, setPrizePerPage] = useState(10);
  const { fetchNoblePrizeWinnersData, loading, prizeWinners } =
    NobelPrizeWinnersService();

  useEffect(() => {
    fetchNoblePrizeWinnersData((data: number) => {
      setTotal(data);
      console.log(data);
    });
  }, []);

  const indexOfLastPage = page * prizePerPage;
  const indexOfFirstPage = indexOfLastPage - prizePerPage;
  const currentPost = prizeWinners?.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <section className="card">
      {currentPost.map((winner, index) => {
        return (
          <>
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
          </>
        );
      })}
      <div className="pagination">
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={prizePerPage}
          total={total}
          current={page}
        />
      </div>
    </section>
  );
};
