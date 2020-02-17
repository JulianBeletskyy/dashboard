import React from 'react'
import TextField from './TextField'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { ChevronLeft, ChevronRight } from '../icons'

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

const getDayStyle = date => {
	return 'calendar-day'
}

const renderHeader = ({increaseMonth, decreaseMonth, date}) => {
	return (
		<div className="calendar-header">
			<div className="pointer" onClick={decreaseMonth}>
				<ChevronLeft />
			</div>
			<div className="title">{moment(date).format('MMMM YYYY')}</div>
			<div className="pointer" onClick={increaseMonth}>
				<ChevronRight />
			</div>
		</div>
	)
}

const CustomDatePicker = props => {
	return (
		<DatePicker
			{...props}
			calendarClassName="custom-calendar"
			renderCustomHeader={renderHeader}
			dayClassName={getDayStyle}
			customInput={<CustomField {...props} />} />
	)
}

export default CustomDatePicker
