import IndividiualOffer from "./IndividiualOffer";

const ProductOffers = () => {
    return (
        <div className="product-offers">
            <div className="secondary-heading">Other Offers</div>
            <div className="product-offers__list">
                <IndividiualOffer />
                <IndividiualOffer />
            </div>
        </div>
    );
};

export default ProductOffers;
