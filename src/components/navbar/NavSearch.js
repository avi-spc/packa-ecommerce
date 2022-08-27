import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ProductsContext } from "../../contexts/productsContext";
import { ProductsStore } from "../../store/productsStore";
import { ProductCategories } from "../../store/productsCategory";

const NavSearch = () => {
	const [searchString, setSearchString] = useState({ subCategory: "", baseCategory: "all" });
	const [suggestedSearchStrings, setSuggestedSearchStrings] = useState([]);
	const [currentSuggestedStringIndex, setCurrentSuggestedStringIndex] = useState(-1);
	const [currentSuggestedStringValue, setCurrentSuggestedStringValue] = useState(null);
	const [hasUserEntered, setHasUserEntered] = useState(false);

	const { fetchSearchedProducts, fetchProductsSearchCategory } = useContext(ProductsContext);

	const [searchQueryParam] = useSearchParams();
	const navigate = useNavigate();
	const suggestedSearchList = useRef();

	useEffect(() => {
		if (searchString.subCategory.length && !hasUserEntered) {
			setSuggestedSearchStrings(
				ProductCategories.filter((category) => {
					return category.subCategory.startsWith(searchString.subCategory.toLowerCase());
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
		if (suggestedSearchList) {
			if (suggestedSearchStrings.length) {
				suggestedSearchList.current.classList.remove("hidden");
			} else {
				suggestedSearchList.current.classList.add("hidden");
			}
		}
	}, [suggestedSearchStrings]);

	useEffect(() => {
		if (hasUserEntered) {
			navigate("/products_search");

			fetchSearchedProducts(
				ProductsStore.filter((product) => {
					return product.category.includes(searchString.subCategory.toLowerCase());
				})
			);

			fetchProductsSearchCategory(searchString.subCategory);
		}
	}, [hasUserEntered]);

	useEffect(() => {
		if (searchQueryParam.get("searchKey")) {
			setSearchString({ subCategory: "", baseCategory: "all" });
		}
	}, [searchQueryParam]);

	const handleSuggestedSearchStringsNavigation = (e) => {
		if (e.code === "ArrowDown" && currentSuggestedStringIndex < suggestedSearchStrings.length - 1) {
			setCurrentSuggestedStringIndex(currentSuggestedStringIndex + 1);
		} else if (e.code === "ArrowUp" && currentSuggestedStringIndex > -1) {
			setCurrentSuggestedStringIndex(currentSuggestedStringIndex - 1);
		}
	};

	const handleSearchStringChange = (e) => {
		setSearchString({ ...searchString, subCategory: e.target.value });
		setCurrentSuggestedStringIndex(-1);
		setCurrentSuggestedStringValue(null);
		setHasUserEntered(false);
	};

	const handleInitiateSearch = (e) => {
		e.preventDefault();

		if (currentSuggestedStringValue != null) {
			setSearchString(currentSuggestedStringValue);
		} else if (
			suggestedSearchStrings.length === 1 &&
			suggestedSearchStrings[0].subCategory.length === searchString.subCategory.length
		) {
			setSearchString({ ...searchString, baseCategory: suggestedSearchStrings[0].baseCategory });
		} else {
			setSearchString({ ...searchString, baseCategory: "all" });
		}

		setHasUserEntered(true);
	};

	return (
		<div className="nav-primary__product-search">
			<div className="product-search__search-category">{searchString.baseCategory}</div>
			<form onSubmit={(e) => handleInitiateSearch(e)}>
				<span className="back-btn" onClick={() => navigate(-1)}>
					&larr;
				</span>
				<input
					className="product-search__search-input"
					type="text"
					value={searchString.subCategory}
					onChange={(e) => handleSearchStringChange(e)}
					onKeyUp={(e) => handleSuggestedSearchStringsNavigation(e)}
					placeholder="Search products here..."
				/>
			</form>
			<ul className="product-search__suggested-searches-list hidden" ref={suggestedSearchList}>
				{suggestedSearchStrings.map((suggestedString, index) => {
					return (
						<li className="suggested-string" key={index}>
							{suggestedString.subCategory}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default NavSearch;
