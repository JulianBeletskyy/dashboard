import React, { useState } from 'react'
import cn from 'classnames'
import { isFunction } from '../../utils'
import './DropDown.scss'

const DropDown = ({children, list, dropdownId = 'default-dropdown'}) => {
	const [show, setShow] = useState(false)
	const toggleDropDown = () => {
		setShow(!show)
		if (!show) {
			document.body.addEventListener('click', closeDropDown, {once: true})
		}
	}
	const closeDropDown = e => {
		if (e && e.target.closest(`#${dropdownId}`)) {
			return
		}
		setShow(false)
		document.body.removeEventListener('click', closeDropDown)
	}
	const handleClick = item => e => {
		if (isFunction(item.onClick)) {
			item.onClick()
		}
		closeDropDown()
	}
	return (
		<div className="position-relative" id={dropdownId}>
			<div onClick={toggleDropDown} className="pointer">{ children }</div>
			<div className={cn('dropdown', {active: show})}>
				{
					list.map((item, i) => {
						return (
							<div key={i} className="dorpdown-item" onClick={handleClick(item)}>
								{item.title}
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default DropDown
