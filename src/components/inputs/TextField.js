import React from 'react'
import cn from 'classnames'
import * as icons from '../icons'

const TextField = ({value, onChange, type = 'text', className, placeholder, icon, ...rest}) => {
	// console.log(onFocus)
	const handleChange = ({target: {value}}) => {
		if (onChange) {
			onChange(value)
		}
	}
	const Icon = icons[icon]
	return (
		<div className={cn('w-100 position-relative input-wrapper', className)}>
			<input
				{...rest}
				className={cn('form-control')}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={handleChange} />
			{icon ? <span className="input-icon"><Icon /></span> : null}
		</div>
	)
}

export default TextField
