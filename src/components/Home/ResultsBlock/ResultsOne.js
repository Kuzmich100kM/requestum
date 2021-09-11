import React from "react"

export default function ResultsOne({ data }) {
	let { name, language, description, html_url } = data

	return (
		<a href={html_url}>
			<div className="results-one">
				<div className="name">{name}</div>
				<div>
					Language: <b>{language}</b>
				</div>
				<div>
					Description: <b>{description}</b>
				</div>
			</div>
		</a>
	)
}
