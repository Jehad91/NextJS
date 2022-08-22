import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const Router = useRouter();

  const handleOnClick = () => {
    Router.push("/products");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS</title>
      </Head>
      <h1 className={styles.heading}>Hello World!</h1>
      <button onClick={handleOnClick}>Place Older</button>
    </div>
  );
}
