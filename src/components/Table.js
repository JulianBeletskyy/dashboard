import React from 'react'

const Table = ({columns, data}) => {
	return (
		<div className="overflow-auto table-container">
			<table className="table border-bottom">
				<thead className="thead-light">
					<tr>
						{
							columns.map((column, i) => {
								return (
									<th key={i}>
										{ column.title }
									</th>
								)
							})
						}
					</tr>
				</thead>
				<tbody>
					{
						data.map((row, rowIndex) => {
							return (
								<tr key={rowIndex}>
									{
										columns.map((column, colIndex) => {
											let cell = row[column.key]
											if (column.cell) {
												if (typeof column.cell === 'function') {
													cell = column.cell(row)
												} else {
													cell = column.cell
												}
											}
											return (
												<td key={colIndex}>{ cell }</td>
											)
										})
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default Table
