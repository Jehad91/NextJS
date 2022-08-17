import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Coin.module.css";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const CoinList = ({ coinData }) => {
  return (
    <div className={styles.container}>
      {coinData.coins.map((coin) => {
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
          </div>
        );
      })}
    </div>
  );
};

// getServerSideProps is a function that runs on the server and returns data to the client.
export const getStaticProps = async ({ params }) => {
  // const id = params.id;
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};
export default CoinList;
