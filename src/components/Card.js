import React, { memo } from 'react'
import cn from 'classnames'

const Card = ({title, children, footer, className}) => {
	return (
		<div className={cn('card', className)}>
			{ children }
		</div>
	)
}

const isEqual = (prev, next) => {
	console.log(prev, next)
	return true
}

export default memo(Card, isEqual)
