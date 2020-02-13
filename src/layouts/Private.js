import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const PrivateLayout = ({children}) => {
	return (
		<div className="private-layout">
			<div className="position-relative d-none d-lg-block">
				<Sidebar />
			</div>
			<div className="flex-fill">
				<Header />
				<div className="page-content">
					{ children }
				</div>
			</div>
		</div>
	)
}

export default PrivateLayout
