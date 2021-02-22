import React, { useRef } from "react";
import "../Styles/Search.sass";

const Search: React.FunctionComponent = () => {
	const searchRef = useRef<HTMLInputElement>(null!);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert(searchRef.current.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="search" placeholder="search" ref={searchRef} />
			<button type="submit">Icon</button>
		</form>
	);
};

export default Search;
