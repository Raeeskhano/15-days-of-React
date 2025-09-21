//custom hook for getting currency info from api

import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://hexarate.paikama.co/api/rates/latest/${currency}?target=GBP`)
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
  }, [currency]);
  console.log(data);
  return data;
};

export default useCurrencyInfo;
