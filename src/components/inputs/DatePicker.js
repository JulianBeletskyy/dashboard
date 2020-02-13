import React from 'react'
import TextField from './TextField'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CustomField = React.forwardRef((props, ref) => {
	const newProps = Object.keys(props).sort().reduce((obj, key) => {
		return {
			...obj,
			[key.replace('z-', '')]: props[key]
		}
	}, {})
	return (
		<TextField {...newProps} icon="CalendarIcon" style={{minWidth: 154}} />
	)
})

const CustomDatePicker = props => {
	return (
		<DatePicker {...props} customInput={<CustomField {...props} />} />
	)
}

export default CustomDatePicker
