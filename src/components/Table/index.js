import React from 'react'
import { isFunction } from '../../utils'
import './Table.scss'

const Table = ({columns, data}) => {
	return (
		<div className="overflow-auto table-container">
			<table className="table border-bottom table-hover">
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
												if (isFunction(column.cell)) {
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
