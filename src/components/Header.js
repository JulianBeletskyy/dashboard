import React from 'react'
import Timer from './Timer'
import Avatar from './Avatar'
import DropDown from './DropDown'
import { DropDownIcon } from './icons'

const Header = () => {
	const ProfileMenu = [
		{
			title: 'Edit profile',
			onClick: () => {
				console.log('click')
			},
		}, {
			title: 'Change password',
			onClick: '',
		}, {
			title: 'Log Out',
			onClick: ''
		}
	]
	return (
		<div className="header d-flex align-items-center justify-content-end px-3">
			<div className="mr-4 d-none d-md-block">
				<span className="mr-2">Last Login</span>
				<strong> 03:10 PM</strong>
			</div>
			<div className="mr-4 d-none d-md-block">
				<span className="mr-2">Session Timeout In</span>
				<Timer endTime={new Date("21 December 2019 9:56:00 GMT+01:00")} startTime={true}>
					{
						({minutes, seconds}) => {
							return (
								<strong> {minutes}:{seconds}</strong>
							)
						}
					}
				</Timer>
			</div>
			<div className="mr-4 h-100">
				<div className="divider"></div>
			</div>
			<div>
				<DropDown list={ProfileMenu}>
					<div className="d-flex align-items-center">
						<div className="mr-2 d-flex">
							<Avatar src="" />
						</div>
						<div className="mr-2">John Snow</div>
						<div className="pointer">
					 		<DropDownIcon />
				 		</div>
			 		</div>
				</DropDown>
			</div>
		</div>
	)
}

export default Header
