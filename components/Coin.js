import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Coin.module.css";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Coin = ({ coin }) => {
  return (
    <div key={coin.id} className={styles.coinBox}>
      <h1>{coin.name}</h1>
      <Image
        loader={myLoader}
        src={coin.icon}
        alt="coin"
        width={50}
        height={50}
      />
      <p>{coin.price}</p>
      <Link href={`/coins/${coin.rank}`}>Coin Details</Link>
    </div>
  );
};

export default Coin;
