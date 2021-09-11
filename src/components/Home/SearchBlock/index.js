import React from "react"
import SearchInput from "./SearchInput"
import SearchHistory from "./SearchHistory"

export default function SearchBlock() {
	return (
		<div className="search-block">
			<SearchInput />
			<SearchHistory />
		</div>
	)
}
