import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
