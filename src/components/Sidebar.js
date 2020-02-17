import React from 'react'
import * as icons from './icons'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { NAV_LIST } from '../config'

const Sidebar = ({path}) => {
	return (
		<div className="sidebar text-center">
			<div className="navigation">
				{
					NAV_LIST.map((nav, i) => {
						const Icon = icons[nav.icon]
						const active = path === nav.url
						return (
							<div key={i} className={cn('navigation-item', {active})}>
								<Link to={nav.url}>
									<Icon fill={active ? '#009EE8' : '#002550'} />
								</Link>
							</div>
						)
					})
				}
				<div className="divider"></div>
				<div>
					<Link to={'/'}>
						<icons.RightNav fill="#002550" />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
