import axios from "axios";
import Coin from "../../components/Coin";
import styles from "../../styles/Coin.module.css";

const CoinList = ({ coinData }) => {
  return (
    <div className={styles.container}>
      {coinData.coins.map((coin) => {
        return <Coin key={coin.id} coin={coin} />;
      })}
    </div>
  );
};

export default CoinList;

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
