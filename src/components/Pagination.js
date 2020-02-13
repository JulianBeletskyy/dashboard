import React from 'react'
import BtnMain from './buttons/BtnMain'

const Pagination = ({totalPages = 0, currentPage = 0}) => {
	const handleChange = ({target: {value}}) => {

	}
	return (
		<div className="d-flex justify-content-between">
			<div>
				<BtnMain
					title="Previous 90 days"
					iconLeft="DoubleChevronLeft"
					variant="outline-secondary"
					className="mr-3" />
				<BtnMain
					title="Next 90 days"
					iconRight="DoubleChevronRight"
					variant="outline-secondary" />
			</div>
			<div className="d-flex align-items-center">
				<BtnMain iconLeft="LeftArrow" variant="outline-secondary" className="mr-2" />
				<input type="text" className="form-control paginate-input text-center mr-3" value={currentPage} onChange={handleChange} />
				<span className="mr-3">of</span>
				<span className="mr-3">{totalPages}</span>
				<BtnMain iconLeft="RightArrow" variant="outline-secondary" />
			</div>
		</div>
	)
}

export default Pagination
