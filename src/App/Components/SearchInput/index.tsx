import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import './styles.scss';

export function SearchInput() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center">
            <input
                className="search-input"
                type="search"
                placeholder="Busque aqui seu produto"
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={(e) => {
                    if (search !== "") {
                        (e.key === "Enter" && navigate(`/products/${search}`))
                    }
                }
                }
            />
            <a href={search ?? `/products/${search}`}>
                <button className="btn btn-bg-purple-text-white search-button"><IoSearch /></button>
            </a>
        </div>
    )
}