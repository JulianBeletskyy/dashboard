import React from 'react'
import Avatar from './Avatar'
import * as icons from './icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const NAV_LIST = [
	{
		icon: 'CaseIcon',
		url: '/',
	}, {
		icon: 'RatesIcon',
		url: '/profile',
	}
]

const Sidebar = () => {
	console.log('render')
	return (
		<div className="sidebar text-center">
			<div className="profile-info">
				<div>
					<Avatar src="" />
				</div>
				<div className="text-center">
					<strong>John S</strong>
				</div>
			</div>
			<div className="navigation">
				{
					NAV_LIST.map((nav, i) => {
						const fill = window.location.pathname === nav.url ? '#009EE8' : '#002550'
						const Icon = icons[nav.icon]
						return (
							<div key={i} className="mb-4">
								<Link to={nav.url}><Icon fill={fill} /></Link>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default connect()(Sidebar)
