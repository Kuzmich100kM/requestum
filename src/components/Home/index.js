import React from "react"
import SearchBlock from "./SearchBlock"
import ResultsBlock from "./ResultsBlock"

export default function Home() {
	return (
		<div className="home">
			<SearchBlock />
			<ResultsBlock />
		</div>
	)
}
