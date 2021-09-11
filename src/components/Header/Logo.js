import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/img/logo.png"

export default function Logo() {
	return (
		<div className="logo">
			<NavLink to="/">
				<img src={logo} alt="requestum logo" />
			</NavLink>
		</div>
	)
}
