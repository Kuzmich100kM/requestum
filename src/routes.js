import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Page404 from "./components/Page404"

export default function AllRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="*" component={Page404} />
		</Switch>
	)
}
