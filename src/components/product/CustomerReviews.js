import ProductRatings from "./ProductRatings";
import ProductReviews from "./ProductReviews";

const CustomerReviews = () => {
  return (
    <div className="customer-reviews">
      <div className="primary-heading p-center-text">Customer Reviews</div>
      <div className="reviews-ratings">
        <ProductRatings />
        <ProductReviews />
      </div>
    </div>
  );
};

export default CustomerReviews;
