import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ProductsContext } from "../../contexts/productsContext";
import { ProductCategories } from "../../store/productsCategory";
import { ProductsStore } from "../../store/productsStore";

const CategoryNabvar = () => {
	const [subCategories, setSubCategories] = useState([]);
	const [searchQueryParam, setSearchQueryParam] = useSearchParams();

	const { productsSearchCategory, fetchSearchedProducts, fetchProductsSearchCategory } = useContext(ProductsContext);

	const subCategoryList = useRef();
	const navigate = useNavigate();

	const showSubCategories = (e) => {
		const subCategories = ProductCategories.filter((categories) => {
			return categories.baseCategory === e.target.textContent;
		});

		setSubCategories(subCategories);

		subCategoryList.current.style.top = `${e.target.offsetTop + 25}px`;
		subCategoryList.current.style.left = `${e.target.offsetLeft}px`;
	};

	const searchProducts = (e) => {
		setSearchQueryParam({ searchKey: e.target.textContent });

		fetchSearchedProducts(
			ProductsStore.filter((product) => {
				return product.category.includes(e.target.textContent.toLowerCase());
			})
		);

		fetchProductsSearchCategory(e.target.textContent);
	};

	useEffect(() => {
		if (productsSearchCategory !== "") {
			navigate("/products_search");
		}
	}, [productsSearchCategory]);

	return (
		<nav className="nav-secondary__products-category" onMouseLeave={() => setSubCategories([])}>
			<ul className="products-category__base-categories">
				<li onMouseEnter={(e) => showSubCategories(e)}>electronics</li>
				<li onMouseEnter={(e) => showSubCategories(e)}>pantry</li>
				<li onMouseEnter={(e) => showSubCategories(e)}>clothing</li>
			</ul>
			{subCategories.length > 0 && (
				<ul className="products-category__sub-categories" ref={subCategoryList}>
					{subCategories.map((categories) => {
						return (
							<li key={categories.subCategory} onClick={(e) => searchProducts(e)}>
								{categories.subCategory}
							</li>
						);
					})}
				</ul>
			)}
		</nav>
	);
};

export default CategoryNabvar;
