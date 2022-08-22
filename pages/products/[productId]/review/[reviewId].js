import { useRouter } from "next/router";

const ReviewDetails = () => {
  const { productId, reviewId } = useRouter().query;

  return (
    <div>
      <h1>
        Produt {productId} Review {reviewId}
      </h1>
    </div>
  );
};
export default ReviewDetails;
