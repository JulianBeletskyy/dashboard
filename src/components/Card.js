import React from 'react'
import cn from 'classnames'

const Card = ({title, children, footer, className}) => {
	return (
		<div className={cn('card', className)}>
			{ children }
		</div>
	)
}

export default Card
