import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const PrivateLayout = ({children, path}) => {
	return (
		<div className="private-layout">
			<Header />
			<div className="d-flex">
				<div className="position-relative d-none d-lg-block">
					<Sidebar path={path} />
				</div>
				<div className="flex-fill overflow-hidden">
					<div className="page-content">
					{ children }
					</div>
				</div>
			</div>
		</div>
	)
}

export default PrivateLayout
