import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "geo.api.gouv.fr";

export const getCity = async () => {
  const [cityList, setCityList] = useState(null);
  const festivalList: Array<string> = [];
  useEffect(() => {
    axios.get("https://geo.api.gouv.fr/communes").then((response) => {
      const data = response.data;
      setCityList(response.data);
    });
  }, []);
};
