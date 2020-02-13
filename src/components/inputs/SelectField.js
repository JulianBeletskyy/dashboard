import React from 'react'
import cn from 'classnames'

const SelectField = ({options, valueKey = 'id', value, onChange, className}) => {
	const handleChange = ({target: {value}}) => {
		if (onChange) {
			onChange(value)
		}
	}
	return (
		<select className={cn('custom-select', className)} value={value} onChange={handleChange}>
			{
				options.map((option, i) => {
					return (
						<option key={i} id={option[valueKey]} value={option[valueKey]}>{option.title}</option>
					)
				})
			}
		</select>
	)
}

export default SelectField
