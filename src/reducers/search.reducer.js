import { githubAPI } from "../api"

const SET_REPO = "SET_REPO"
const SET_HISTORY = "SET_HISTORY"
const CHANGE_HISTORY = "CHANGE_HISTORY"
const IS_LOADING = "IS_LOADING"

// repo: [{
//		"id": "40291231",
//		"name": "coolapps",
//		"language": "C++",
//		"description": "Tomas smart home configuration",
//		"html_url": "https://api.github.com/users/abcdefg"
//},, {...}],
// history: ["react", "C++", "angular12", "bootstrap", "react hooks"]

let initialState = {
	repo: [],
	history: [],
	isLoading: false,
}

export default function employeesReducer(state = initialState, action) {
	switch (action.type) {
		case SET_REPO:
			console.log("repo :>> ", action.data)
			return { ...state, repo: action.data }
		case SET_HISTORY:
			return { ...state, history: action.arr }
		case CHANGE_HISTORY:
			let newHistory = [...state.history]
			newHistory.length >= 5 && newHistory.shift()
			newHistory.push(action.term)
			console.log("term :>> ", action.term)
			console.log("newHistory :>> ", newHistory)
			return { ...state, history: newHistory }

		case IS_LOADING:
			return { ...state, isLoading: action.bool }

		default:
			return state
	}
}

const setRepoAction = data => ({ type: SET_REPO, data })
const changeHistoryAction = term => ({ type: CHANGE_HISTORY, term })
const isLoadingAction = bool => ({ type: IS_LOADING, bool })
export const setHistoryAction = arr => ({ type: SET_HISTORY, arr })

export const getRepoThunk = term => async dispatch => {
	try {
		dispatch(changeHistoryAction(term))
		dispatch(isLoadingAction(true))
		let resArr = await githubAPI.getRepo(term)
		let onlyNeed = resArr.data.items.map(({ id, name, language, description, html_url }) => {
			return { id, name, language, description, html_url }
		})
		dispatch(setRepoAction(onlyNeed))
		dispatch(isLoadingAction(false))
	} catch (err) {
		console.error("Failed with API response", err)
	}
}
