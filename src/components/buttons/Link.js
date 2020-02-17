import React from 'react'
import { Link } from 'react-router-dom'
import * as icons from '../icons'

const Href = ({title, href = '/', icon, onClick}) => {
	const handleClick = e => {
		if (onClick) {
			e.preventDefault()
			onClick()
		}
	}
	
	const IconComp = icons[icon]
	return (
		<Link to={href} className="d-inline-flex align-items-center link" onClick={handleClick}>
			<span className="mr-1">{ title }</span>
			{ icon && <IconComp /> }
		</Link>
	)
}

export default Href
