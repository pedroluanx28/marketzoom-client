import { IoSearch } from "react-icons/io5";

import './styles.scss';

export function SearchInput() {
    return (
        <div className="d-flex align-items-center">
            <input className="search-input" type="text" placeholder="Busque aqui seu produto" />
            <button className="btn btn-bg-purple-text-white search-button"><IoSearch /></button>
        </div>
    )
}