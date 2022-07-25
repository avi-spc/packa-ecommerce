import IndividiualOffer from "./IndividiualOffer";

const ProductOffers = ({ offers }) => {
    return (
        <div className="product-offers">
            <div className="secondary-heading">Other Offers</div>
            <div className="product-offers__list">
                {offers.map((offer) => {
                    return <IndividiualOffer offer={offer} key={offer.id} />;
                })}
            </div>
        </div>
    );
};

export default ProductOffers;
