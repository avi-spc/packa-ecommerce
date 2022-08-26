import { useState, useRef } from "react";

import { ProductCategories } from "../../store/productsCategory";

const CategoryNabvar = () => {
	const [subCategories, setSubCategories] = useState([]);
	const subCategoryList = useRef();

	const showSubCategories = (e) => {
		const subCategories = ProductCategories.filter((categories) => {
			return categories.baseCategory === e.target.textContent;
		});

		setSubCategories(subCategories);

		subCategoryList.current.style.top = `${e.target.offsetTop + 25}px`;
		subCategoryList.current.style.left = `${e.target.offsetLeft}px`;
	};

	return (
		<nav
			className="nav-secondary__products-category"
			onMouseLeave={() => setSubCategories([])}
		>
			<ul className="products-category__base-categories">
				<li onMouseEnter={(e) => showSubCategories(e)}>electronics</li>
				<li onMouseEnter={(e) => showSubCategories(e)}>pantry</li>
				<li onMouseEnter={(e) => showSubCategories(e)}>clothing</li>
			</ul>
			{subCategories.length > 0 && (
				<ul className="products-category__sub-categories" ref={subCategoryList}>
					{subCategories.map((categories) => {
						return (
							<li key={categories.subCategory}>{categories.subCategory}</li>
						);
					})}
				</ul>
			)}
		</nav>
	);
};

export default CategoryNabvar;
