import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Form = ({ setCity }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(e.target.city.value);
        e.target.value = "";
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
