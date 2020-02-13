import React from 'react'

const Badge = ({title, level = 'success'}) => {
	return (
		<div className={`badge badge-${level}`}>
			{ title }
		</div>
	)
}

export default Badge
