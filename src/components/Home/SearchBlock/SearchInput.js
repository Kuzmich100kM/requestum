import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import { getRepoThunk } from "../../../reducers/search.reducer"

export default function SearchInput() {
	const dispatch = useDispatch()

	const onChange = value => {
		dispatch(getRepoThunk(value))
		document.getElementById("sch").value = ""
	}
	const debounceOnChange = useCallback(debounce(onChange), []) // eslint-disable-line react-hooks/exhaustive-deps

	function debounce(func) {
		let timeout
		return (...args) => {
			const context = this
			if (timeout) clearTimeout(timeout)
			timeout = setTimeout(() => {
				timeout = null
				func.apply(context, args)
			}, 1000)
		}
	}

	return <input id="sch" placeholder="search" onChange={e => debounceOnChange(e.target.value)} />
}
