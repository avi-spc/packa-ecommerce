import { useEffect, useState } from "react";

import QuantityCounter from "./QuantityCounter";
import PriceTag from "./PriceTag";
import ProductDesc from "./ProductDesc";
import ProductOffers from "./ProductOffers";
import PriamryButton from "../buttons/PrimaryButton";

const ProductDetails = ({ product }) => {
    // const createRatingBar = () => {
    //     let ratingList = [];

    //     for (let i = 1; i <= 5; i++) {
    //         if (i <= Math.round(product.rating))
    //             ratingList.push(
    //                 <span className="material-symbols-outlined positive">
    //                     circle
    //                 </span>
    //             );
    //         else
    //             ratingList.push(
    //                 <span className="material-symbols-outlined negative">
    //                     circle
    //                 </span>
    //             );
    //     }

    //     return ratingList;
    // };

    const [quantity, setQuantity] = useState(0);

    const changeQuantity = (newQuantity) => {
        if (!(newQuantity < 0)) {
            setQuantity(newQuantity);
        }
    };

    useEffect(() => {
        const ratingBar = document.querySelector(".product-details__rating");

        for (let i = 0; i < 5; i++) {
            if (i <= Math.round(product.rating - 1)) {
                ratingBar.children[i].classList.add("positive");
            } else {
                ratingBar.children[i].classList.add("negative");
            }
        }
    });

    return (
        <div className="product-details">
            <div className="product-details__name primary-heading">
                {product.name}
            </div>
            <div className="product-details__brand-name secondary-heading">
                Brand : : {product.brand}
            </div>
            <div className="product-details__rating rating-bar rating-bar__small">
                <span className="material-symbols-outlined">circle</span>
                <span className="material-symbols-outlined">circle</span>
                <span className="material-symbols-outlined">circle</span>
                <span className="material-symbols-outlined">circle</span>
                <span className="material-symbols-outlined">circle</span>
            </div>
            <PriceTag
                variant="product"
                priceValue={product.price}
                discountValue={product.discount}
            />
            <QuantityCounter
                variant="big"
                quantity={quantity}
                changeQuantity={changeQuantity}
            />
            <PriamryButton name="ADD TO CART" />
            <ProductDesc description={product.description} />
            <ProductOffers offers={product.offers} />
        </div>
    );
};

export default ProductDetails;
