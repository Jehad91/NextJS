import React from "react";
import { useRouter } from "next/router";

const Coin = () => {
  const { coinId } = useRouter().query;
  return <div>Coin {coinId}</div>;
};

export default Coin;
