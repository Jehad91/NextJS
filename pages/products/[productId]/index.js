import { useRouter } from "next/router";

const Product = () => {
  const { productId } = useRouter().query;

  return (
    <div>
      <h1>Product {productId}</h1>
    </div>
  );
};
export default Product;
