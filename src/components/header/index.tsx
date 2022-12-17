import "./header.css";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import logo from "assets/images/logo.svg";
import searchIcon from "assets/images/search.svg";

export interface HeaderProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

const Header = ({ search, setSearch }: HeaderProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const focusOnInput = () => {
        inputRef?.current?.focus();
    };

    return (
        <header className="header">
            <div className="logo_container">
                <img src={logo} alt="logo" loading="lazy" className="logo" />
            </div>
            <div className="search_container" onClick={focusOnInput}>
                <img src={searchIcon} alt="search" loading="lazy" />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a movie"
                    value={search}
                    onChange={handleChange}
                    ref={inputRef}
                />
            </div>
        </header>
    );
};

export default Header;
