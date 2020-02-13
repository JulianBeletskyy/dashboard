import React from 'react'
import * as icons from '../icons'
import cn from 'classnames'

const BtnMain = ({type = 'button', title, onClick, iconRight, iconLeft, variant, disabled, className}) => {
	const IconRight = icons[iconRight]
	const IconLeft = icons[iconLeft]
	return (
		<button
			type={type}
			onClick={onClick}
			className={cn(`btn d-inline-flex align-items-center btn-${variant}`, className)}>
			{ iconLeft ? <IconLeft /> : null }
			{title ? <span className="mx-1">{title}</span> : null}
			{ iconRight ? <IconRight /> : null }
		</button>
	)
}

export default BtnMain
