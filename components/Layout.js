import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loading from "../components/Loading";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { isReady } = useRouter();

  useEffect(() => {
    setLoading(isReady);
  }, [isReady]);

  return !loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
