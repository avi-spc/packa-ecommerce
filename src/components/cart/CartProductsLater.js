import SavedForLaterCard from "./SavedForLaterCard";
import { ProductsStore } from "../../store/productsStore";

const CartProductsLater = ({ productsSavedForLater }) => {
    return (
        <section className="section-products-later">
            <div className="primary-heading">Items saved for later</div>
            <div className="products-later__items">
                {productsSavedForLater.map((product) => {
                    return (
                        <SavedForLaterCard
                            product={ProductsStore.find((prod) => {
                                return prod.id === product.productID;
                            })}
                            key={product.productID}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default CartProductsLater;
