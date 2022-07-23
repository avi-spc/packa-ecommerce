import ProductRatings from "./ProductRatings";
import ProductReviewsList from "./ProductReviewsList";

const CustomerReviews = () => {
  return (
    <div className="customer-reviews">
      <div className="primary-heading p-center-text">Customer Reviews</div>
      <div className="reviews-p-ratings">
        <ProductRatings />
        <ProductReviewsList />
      </div>
    </div>
  );
};

export default CustomerReviews;
