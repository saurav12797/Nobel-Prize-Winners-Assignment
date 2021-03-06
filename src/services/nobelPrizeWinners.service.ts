import { ApiRoutes } from "../routes/routeConstants/apiRoutes";
import { useState } from "react";
import { deserialize } from "serializr";
import axios from "axios";
import { PrizeWinnersModel } from "../Models/PrizeWinners/prizeWinners.model";

const NobelPrizeWinnersService = () => {
  const [loading, setloading] = useState(false);
  const [prizeWinners, setPrizeWinners] = useState<PrizeWinnersModel[]>([]);
  const [prizeData, setPrizeData] = useState<PrizeWinnersModel[]>([]);

  const fetchNoblePrizeWinnersData = async (onSuccess: Function) => {
    setloading(true);

    try {
      const response = await axios.get(ApiRoutes.BASE_URL + ApiRoutes.PRIZE);
      if (response.data) {
        const data = deserialize(
          PrizeWinnersModel,
          response.data["prizes"] as PrizeWinnersModel[]
        );
        setPrizeWinners(data);
        setPrizeData(data);

        if (data) onSuccess(data.length);
      }
    } catch (error) {
    } finally {
      setloading(false);
    }
  };
  return {
    prizeWinners,
    fetchNoblePrizeWinnersData,
    setPrizeWinners,

    prizeData,
    loading,
    setloading,
  };
};

export default NobelPrizeWinnersService;
