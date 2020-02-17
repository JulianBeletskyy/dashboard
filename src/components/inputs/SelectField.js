import React from 'react'
import cn from 'classnames'
import { SelectArrowIcon } from '../icons'

const SelectField = ({options, valueKey = 'id', value, onChange, className}) => {
	const handleChange = ({target: {value}}) => {
		if (onChange) {
			onChange(value)
		}
	}
	return (
		<div className="custom-select-wrapper">
			<select className={cn('custom-select', className)} value={value} onChange={handleChange}>
				{
					options.map((option, i) => {
						return (
							<option key={i} id={option[valueKey]} value={option[valueKey]}>{option.title}</option>
						)
					})
				}
			</select>
			<div className="select-arrows">
				<SelectArrowIcon />
			</div>
		</div>
	)
}

export default SelectField
