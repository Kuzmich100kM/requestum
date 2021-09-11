import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setHistoryAction } from "../../../reducers/search.reducer"
import { v4 as uuidv4 } from "uuid"

export default function SearchHistory() {
	const hist = useSelector(state => state.search.history)
	const dispatch = useDispatch()

	useEffect(() => {
		let storedHistory = JSON.parse(localStorage.getItem("history"))
		storedHistory && dispatch(setHistoryAction(storedHistory))
	}, [dispatch])

	useEffect(() => localStorage.setItem("history", JSON.stringify(hist)), [hist])

	let listItems = hist.map(el => <div key={uuidv4()}>{el}</div>)

	return (
		<>
			{hist.length > 0 && (
				<div className="history">
					<div className="title">SearchHistory:</div>
					<div className="list">{listItems}</div>
				</div>
			)}
		</>
	)
}
