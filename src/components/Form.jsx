import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Form = ({ setCity, setLoader }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setCity(e.target.city.value);
        e.target.city.value = "";
        setLoader(false);
    };
    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                name="city"
                placeholder="Enter City..."
                type="text"
                className="search-bar"
            />
            <button type="submit">
                <AiOutlineSearch fontSize="1.5rem" />
            </button>
        </form>
    );
};

export default Form;
