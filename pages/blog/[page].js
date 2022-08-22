import { useRouter } from "next/router";

const Blog = () => {
  const { page } = useRouter().query;
  return <div>{page} Blog Page</div>;
};

export default Blog;
