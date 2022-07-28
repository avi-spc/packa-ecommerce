import { useEffect, useState } from "react";

const NavSearch = () => {
    const [searchString, setSearchString] = useState("");
    const [mappedStrings, setMappedStrings] = useState([]);
    const [strings] = useState(["mobiles", "appliances", "mojin", "pantry", "match"]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [activeValue, setActiveValue] = useState(null);

    useEffect(() => {
        if (searchString.length && activeValue == null) {
            setMappedStrings(
                strings.filter((str) => {
                    return str.includes(searchString);
                })
            );
        } else {
            setMappedStrings([]);
        }
    }, [searchString]);

    useEffect(() => {
        const listItems = Array.from(document.getElementsByClassName("ssr"));
        if (activeIndex > -1) {
            listItems[activeIndex].classList.add("active-ssr");
            setActiveValue(mappedStrings[activeIndex]);
        }

        if (activeIndex > 0) {
            listItems[activeIndex - 1].classList.remove("active-ssr");
        }

        if (activeIndex < mappedStrings.length - 1) {
            listItems[activeIndex + 1].classList.remove("active-ssr");
        }

        if (activeIndex === -1) {
            setActiveValue(null);
        }
    }, [activeIndex]);

    useEffect(() => {
        if (mappedStrings.length) {
            document.querySelector(".product-search__string-list").classList.remove("hide");
        } else {
            document.querySelector(".product-search__string-list").classList.add("hide");
        }
    }, [mappedStrings]);

    const handleChange = (e) => {
        if (e.code === "ArrowDown" && activeIndex < mappedStrings.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else if (e.code === "ArrowUp" && activeIndex > -1) {
            setActiveIndex(activeIndex - 1);
        } else if ((e.code === "Enter" || e.code === "NumpadEnter") && activeValue != null) {
            setSearchString(activeValue);
            document.querySelector(".product-search__string-list").classList.add("hide");
        } else if ((e.code === "Enter" || e.code === "NumpadEnter") && activeValue == null) {
            document.querySelector(".product-search__string-list").classList.add("hide");
        }
    };

    return (
        <div className="nav-primary__product-search">
            <div className="product-search__search-category">pantry</div>
            <input
                className="product-search__search-input"
                type="text"
                value={searchString}
                onChange={(e) => {
                    setSearchString(e.target.value);
                    setActiveIndex(-1);
                    setActiveValue(null);
                }}
                onKeyUp={(e) => handleChange(e)}
            />
            <ul className="product-search__string-list hide">
                {mappedStrings.map((str, index) => {
                    return (
                        <li className="ssr" key={index}>
                            {str}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavSearch;
