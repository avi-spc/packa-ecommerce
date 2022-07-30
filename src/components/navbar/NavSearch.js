import { useContext, useEffect, useState } from "react";

import { ProductsContext } from "../../contexts/productsContext";
import { ProductsStore } from "../../store/productsStore";
import { ProductCategories } from "../../store/productsCategory";

const NavSearch = () => {
    const [searchString, setSearchString] = useState("");
    const [suggestedSearchStrings, setSuggestedSearchStrings] = useState([]);
    const [currentSuggestedStringIndex, setCurrentSuggestedStringIndex] = useState(-1);
    const [currentSuggestedStringValue, setCurrentSuggestedStringValue] = useState(null);
    const [hasUserEntered, setHasUserEntered] = useState(false);

    const { fetchSearchedProducts } = useContext(ProductsContext);

    useEffect(() => {
        if (searchString.length && currentSuggestedStringValue == null) {
            setSuggestedSearchStrings(
                ProductCategories.filter((category) => {
                    return category.includes(searchString.toLowerCase());
                })
            );
        } else {
            setSuggestedSearchStrings([]);
        }
    }, [searchString]);

    useEffect(() => {
        const listItems = Array.from(document.getElementsByClassName("suggested-string"));

        if (currentSuggestedStringIndex > -1) {
            listItems[currentSuggestedStringIndex].classList.add("active-suggested-string");
            setCurrentSuggestedStringValue(suggestedSearchStrings[currentSuggestedStringIndex]);
        }

        if (currentSuggestedStringIndex > 0) {
            listItems[currentSuggestedStringIndex - 1].classList.remove("active-suggested-string");
        }

        if (currentSuggestedStringIndex < suggestedSearchStrings.length - 1) {
            listItems[currentSuggestedStringIndex + 1].classList.remove("active-suggested-string");
        }

        if (currentSuggestedStringIndex === -1) {
            setCurrentSuggestedStringValue(null);
        }
    }, [currentSuggestedStringIndex]);

    useEffect(() => {
        if (suggestedSearchStrings.length) {
            document.querySelector(".product-search__suggested-searches-list").classList.remove("hidden");
        } else {
            document.querySelector(".product-search__suggested-searches-list").classList.add("hidden");
        }
    }, [suggestedSearchStrings]);

    useEffect(() => {
        if (hasUserEntered) {
            fetchSearchedProducts(
                ProductsStore.filter((product) => {
                    return product.category.includes(searchString.toLowerCase());
                })
            );
        }
    }, [hasUserEntered]);

    const handleSuggestedSearchStringsNavigation = (e) => {
        if (e.code === "ArrowDown" && currentSuggestedStringIndex < suggestedSearchStrings.length - 1) {
            setCurrentSuggestedStringIndex(currentSuggestedStringIndex + 1);
        } else if (e.code === "ArrowUp" && currentSuggestedStringIndex > -1) {
            setCurrentSuggestedStringIndex(currentSuggestedStringIndex - 1);
        } else if (e.code === "Enter" || e.code === "NumpadEnter") {
            document.querySelector(".product-search__suggested-searches-list").classList.add("hidden");

            if (currentSuggestedStringValue != null) {
                setSearchString(currentSuggestedStringValue);
            }

            setHasUserEntered(true);
        }
    };

    const handleSearchStringChange = (e) => {
        setSearchString(e.target.value);
        setCurrentSuggestedStringIndex(-1);
        setCurrentSuggestedStringValue(null);
        setHasUserEntered(false);
    };

    return (
        <div className="nav-primary__product-search">
            <div className="product-search__search-category">pantry</div>
            <input
                className="product-search__search-input"
                type="text"
                value={searchString}
                onChange={(e) => handleSearchStringChange(e)}
                onKeyUp={(e) => handleSuggestedSearchStringsNavigation(e)}
            />
            <ul className="product-search__suggested-searches-list hidden">
                {suggestedSearchStrings.map((suggestedString, index) => {
                    return (
                        <li className="suggested-string" key={index}>
                            {suggestedString}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavSearch;
