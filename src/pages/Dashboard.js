import React, { useState } from 'react'
import Card from '../components/Card'
import Link from '../components/buttons/Link'
import Table from '../components/Table'
import SelectField from '../components/inputs/SelectField'
import TextField from '../components/inputs/TextField'
import DatePicker from '../components/inputs/DatePicker'
import Badge from '../components/Badge'
import numeral from 'numeral'
import Pagination from '../components/Pagination'
import RuningString from '../components/RuningString'

const customer = {
	id: '023AD50',
	email: 'johnsmith@xyz.com',
	phone: '+444345672',
	extId: 'RRDT3345S7',
	name: 'John Smith',
	kyc: 'GQDI4455W',
	status: 'Active',
}

const accountsData = [
	{
		acc: '012456',
		accType: 'Savings',
		institution: 'Sterling',
		status: 'Active',
		balance: 300,
	}, {
		acc: '012456',
		accType: 'Savings',
		institution: 'Sterling',
		status: 'Inactive',
		balance: 387769000.00,
	}, {
		acc: '012456',
		accType: 'Savings',
		institution: 'Sterling',
		status: 'Suspended',
		balance: -300,
	},
]

const transactionsData = [
	{
		date: '01/12/19',
		instrument: '442561701',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ...',
		category: 'Purchases',
		amount: 34567.00,
		balance: 482.00,
	}, {
		date: '01/12/19',
		instrument: '442561701',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ...',
		category: 'Reversals',
		amount: 34567.00,
		balance: -34567.00,
	}
]

const notesData = [
	{
		date: '12/01/20',
		type: 'ABC',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque tellus mauris eget felis ...',
		status: 'Active',
	}, {
		date: '12/01/20',
		type: 'XYZ',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque tellus mauris eget felis ...',
		status: 'Active',
	}
]

const devicesData = [
	{
		type: 'Smartphone',
		deviceId: '88925',
		regDate: '10/01/20',
		accessDate: '10/01/20',
		status: 'Active',
	}, {
		type: 'Smartphone',
		deviceId: '88925',
		regDate: '10/01/20',
		accessDate: '10/01/20',
		status: 'Active',
	}
]

const usersData = [
	{
		name: 'John Smith',
		type: 'XYZ',
		role: 'Officer',
		status: 'Active',
	}, {
		name: 'Livia Lipshutz',
		type: 'XYZ',
		role: 'CEO',
		status: 'Active',
	}, {
		name: 'Desirae Vetrovs',
		type: 'XYZ',
		role: 'Officer',
		status: 'Active',
	}, {
		name: 'Roger Lipshutz',
		type: 'XYZ',
		role: 'CEO',
		status: 'Active',
	}, 
]

const dateTransactionOptions = [{id: 1, title: '24.02.2020'}, {id: 2, title: '19.01.2020'}]
const transactionLimitOptions = [{id: 1, title: 'Show 10 days'}, {id: 2, title: 'Show 30 days'}]
const instrumentOptions = [{id: 1, title: 'Show 10 days'}, {id: 2, title: 'Show 30 days'}]
const txTypeOptions = [{id: 1, title: 'Show 10 days'}, {id: 2, title: 'Show 30 days'}]

const Dashboard = () => {
	const [form, setForm] = useState({dateTransaction: '', transactionLimit: '', instrumentAcc: '', txType: '', txCategory: ''})
	const [startDate, setStartDate] = useState(null)
	const columnsAccounts = [
		{
			title: 'Acc #',
			key: 'acc',
		}, {
			title: 'Acc type',
			key: 'accType',
		}, {
			title: 'Institution name',
			key: 'institution',
		}, {
			title: 'Status',
			key: 'status',
			cell: row => renderStatusCell(row.status),
		}, {
			title: 'Balance',
			key: 'balance',
			cell: row => renderBalanceCell(row.balance),
		}
	]
	const columnsTransaction = [
		{
			title: 'Date',
			key: 'date',
		}, {
			title: 'Instrumen/Account',
			key: 'instrument',
		}, {
			title: 'Transaction Description',
			key: 'description',
		}, {
			title: 'Transaction Category',
			key: 'category',
		}, {
			title: 'Amount',
			key: 'amount',
			cell: row => renderBalanceCell(row.balance),
		}, {
			title: 'Balance',
			key: 'balance',
			cell: row => renderBalanceCell(row.balance),
		},
	]
	const columnsNotes = [
		{
			title: 'Date',
			key: 'date',
		}, {
			title: 'Note type',
			key: 'type',
		}, {
			title: 'Note Description',
			key: 'description',
		}, {
			title: 'Status',
			key: 'status',
			cell: row => renderStatusCell(row.status),
		},
	]
	const columnsDevices = [
		{
			title: 'Device type',
			key: 'type'
		}, {
			title: 'Device ID',
			key: 'deviceId',
		}, {
			title: 'Reg Date',
			key: 'regDate',
		}, {
			title: 'Last Access Date',
			key: 'accessDate',
		}, {
			title: 'Status',
			key: 'status',
			cell: row => renderStatusCell(row.status),
		}
	]
	const columnsUsers = [
		{
			title: 'Name',
			key: 'name'
		}, {
			title: 'Type',
			key: 'type'
		}, {
			title: 'Role',
			key: 'role'
		}, {
			title: 'Status',
			key: 'status',
			cell: row => renderStatusCell(row.status),
		},
	]
	const handleChange = field => value => {
		setForm({...form, [field]: value})
	}
	const handleChangeDate = date => {
		setStartDate(date)
	}
	const renderBalanceCell = num => {
		const numString = `USD ${numeral(num).format('0,0.00')}`
		return num > 0 ? numString : <span className="text-danger">{numString}</span>
	}
	const renderStatusCell = status => {
		switch (status) {
			case 'Inactive':
				return <Badge title={status} level="secondary" />
			case 'Suspended':
				return <Badge title={status} level="danger" />
			default:
				return <Badge title={status} />
		}
	}
	return (
		<div className="h-100 container-fluid pt-3">
			<div className="row">
				<div className="col-12 col-sm-6 col-lg-4 mb-3">
					<Card>
						<h4 className="card-title">Customer Info</h4>
						<div className="card-body font-weight-bold">
							<div className="row mb-3">
								<div className="col-6 text-secondary">Name</div>
								<div className="col-6">{customer.name}</div>
							</div>
							<div className="row  mb-3">
								<div className="col-6 text-secondary">Status</div>
								<div className="col-6"><Badge title={customer.status} /></div>
							</div>
							<div className="row mb-3">
								<div className="col-6 text-secondary">Email ID</div>
								<div className="col-6">{customer.email}</div>
							</div>
							<div className="row mb-3">
								<div className="col-6 text-secondary">MobileNo.</div>
								<div className="col-6">{customer.phone}</div>
							</div>
							<div className="row mb-3">
								<div className="col-6 text-secondary">External Unique ID</div>
								<div className="col-6">{customer.extId}</div>
							</div>
							<div className="row mb-3">
								<div className="col-6 text-secondary">Qolo Cust ID</div>
								<div className="col-6">{customer.id}</div>
							</div>
							<div className="row">
								<div className="col-6 text-secondary">KYC</div>
								<div className="col-6">{customer.kyc}</div>
							</div>
						</div>
						<div className="card-footer">
							<div className="text-center">
								<Link title="More info" icon="ChevronRight" />
							</div>
						</div>
					</Card>
				</div>
				<div className="col-12 col-sm-6 col-lg-8 mb-3">
					<Card className="h-100">
						<h4 className="card-title">Customer Accounts</h4>
						<div>
							<Table columns={columnsAccounts} data={accountsData} />
						</div>
					</Card>
				</div>
				<div className="col-12 mb-3">
					<Card>
						<div className="d-flex align-items-center justify-content-between">
							<div><h4 className="card-title">Aggregated Transactions</h4></div>
							<TextField placeholder="Search" icon="SearchIcon" className="mr-3" />
						</div>
						<div className="overflow-hidden" style={{maxWidth: '100vw'}}>
							<div className="d-flex align-items-center px-3 mb-3 overflow-auto">
								<div className="mr-3">
									<SelectField
										options={[{id: '', title: 'Enter date'}, ...dateTransactionOptions]}
										onChange={handleChange('dateTransaction')}
										value={form.dateTransaction} />
								</div>
								<div className="mr-3">
									<SelectField
										options={[{id: '', title: 'Choose limit'}, ...transactionLimitOptions]}
										onChange={handleChange('transactionLimit')}
										value={form.transactionLimit} />
								</div>
								<div className="mr-3">
									<SelectField
										options={[{id: '', title: 'Instrument Acc'}, ...instrumentOptions]}
										onChange={handleChange('instrumentAcc')}
										value={form.instrumentAcc} />
								</div>
								<div className="mr-3">
									<SelectField
										options={[{id: '', title: 'Tx Category'}, ...txTypeOptions]}
										onChange={handleChange('txCategory')}
										value={form.txCategory} />
								</div>
								<div className="mr-3">
									<SelectField
										options={[{id: '', title: 'Tx Type'}, ...transactionLimitOptions]}
										onChange={handleChange('txType')}
										value={form.txType} />
								</div>
								<div className="ml-auto d-flex align-items-center">
									<div className="mr-1">
										<TextField placeholder="Amount from" />
									</div>
									-
									<div className="ml-1">
										<TextField placeholder="To" />
									</div>
								</div>
							</div>
						</div>
						<div className="mb-3">
							<Table columns={columnsTransaction} data={transactionsData} />
							<div className="px-3 d-none d-md-block">
								<Pagination currentPage={1} totalPages={5} />
							</div>
						</div>
					</Card>
				</div>
				<div className="col-12 mb-3">
					<Card>
						<h4 className="card-title">Notes and Alerts</h4>
						<div className="overflow-hidden" style={{maxWidth: '100vw'}}>
							<div className="d-flex align-items-center px-3 mb-3 overflow-auto">
								<div className="mr-1">
									<DatePicker
										onChange={handleChangeDate}
										selected={startDate}
										z-placeholder="Start date" />
								</div>
								-
								<div className="ml-1 mr-3">
									<DatePicker
										onChange={handleChangeDate}
										selected={startDate}
										z-placeholder="End date" />
								</div>
								<div className="mr-3">
									<SelectField
										options={[{id: '', title: 'None Type'}, ...transactionLimitOptions]}
										onChange={handleChange('txType')}
										value={form.txType} />
								</div>
								<div className="mr-3">
									<SelectField
										options={[{id: '', title: 'View'}, ...transactionLimitOptions]}
										onChange={handleChange('txType')}
										value={form.txType} />
								</div>
								<TextField placeholder="Search" icon="SearchIcon" className="ml-auto" />
							</div>
						</div>
						<div>
							<Table columns={columnsNotes} data={notesData} />
						</div>
						<div className="card-footer">
							<div className="text-center">
								<Link title="Add new" icon="PlusIcon" />
							</div>
						</div>
					</Card>
				</div>
				<div className="col-12 col-md-6 mb-3">
					<Card className="h-100">
						<h4 className="card-title">Devices</h4>
						<div>
							<Table columns={columnsDevices} data={devicesData} />
						</div>
					</Card>
				</div>
				<div className="col-12 col-md-6 mb-3">
					<Card className="h-100">
						<h4 className="card-title">Associated Users</h4>
						<div>
							<Table columns={columnsUsers} data={usersData} />
						</div>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
