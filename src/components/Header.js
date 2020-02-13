import React, { useEffect } from 'react'
import Timer from './Timer'

const Header = () => {
	return (
		<div className="header d-flex align-items-center justify-content-end px-3">
			<div className="mr-4">
				<span className="mr-2">Last Login</span>
				<strong> 03:10 PM</strong>
			</div>
			<div>
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
		</div>
	)
}

export default Header
