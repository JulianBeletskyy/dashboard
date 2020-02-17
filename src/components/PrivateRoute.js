import React from 'react'
import PrivateLayout from '../layouts/Private'
import { Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
	const render = props => {
		return (
			<PrivateLayout path={props.match.path}>
				<Component {...props} />
			</PrivateLayout>
		)
	}
	return (
		<Route {...rest} render={render} />
	)
}

export default PrivateRoute
