import React from "react"
import { useSelector } from "react-redux"
import ResultsOne from "./ResultsOne"
import { Preloader } from "./../../common/Preloader/Preloader"

export default function ResultBlock() {
	const repo = useSelector(state => state.search.repo)
	const isLoading = useSelector(state => state.search.isLoading)
	const hist = useSelector(state => state.search.history)

	let listItems = repo.map(el => <ResultsOne data={el} key={el.id} />)

	let element =
		repo.length > 0 ? (
			<div className="list">{listItems}</div>
		) : isLoading ? (
			<Preloader />
		) : !hist.length > 0 ? (
			<div className="empty">
				<b>&#129044;</b> &nbsp;&nbsp;Start search here
			</div>
		) : (
			<div className="empty">
				<b>&#129044;</b> &nbsp;&nbsp;Let's search!
			</div>
		)

	return <div className="results-block"> {element}</div>
}
