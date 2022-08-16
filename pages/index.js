import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS</title>
      </Head>
      <h1 className={styles.heading}>Hello World!</h1>
    </div>
  );
}
