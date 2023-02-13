import { useState } from 'react'
import {
	Alert,
	Card,
	Button,
	Tooltip,
	Typography,
	IconButton
} from '@material-tailwind/react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Autocomplete, Grid, TextField } from '@mui/material'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { faker } from '@faker-js/faker'
import { FilePdf } from 'phosphor-react'
import { HeaderGrid } from './HeaderGrid'
import { Register } from './Register'
import { DaysOfMonth } from '../utils/DaysOfMonth'

export function FormRegister() {
	const [yearMonth, setYearMonth] = useState(dayjs())
	const [days, setDays] = useState([])
	const [generate, setGenerate] = useState(false)

	const [show, setShow] = useState(false)

	const randonNames = [
		{
			label: faker.name.fullName()
		},
		{
			label: faker.name.fullName()
		},
		{
			label: faker.name.fullName()
		},
		{
			label: faker.name.fullName()
		},
		{
			label: faker.name.fullName()
		}
	]

	const toggleClickButton = () => {
		setGenerate(true)
		let days = DaysOfMonth(yearMonth)
		setDays(days)
		setGenerate(false)
	}

	return (
		<>
			<Card className='p-6 animate__animated animate__fadeInLeftBig animate__faster'>
				<Typography variant='h4' className='mb-3'>
					Registrar
				</Typography>

				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={12} lg={3}>
						<Autocomplete
							size='small'
							disablePortal
							options={randonNames}
							fullWidth
							renderInput={params => <TextField {...params} label='Nome' />}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={3}>
						<LocalizationProvider
							dateAdapter={AdapterDayjs}
							adapterLocale={'pt-br'}
						>
							<DatePicker
								views={['year', 'month']}
								label='Ano e Mês'
								minDate={dayjs('2020-01-01')}
								maxDate={dayjs('2023-12-01')}
								value={yearMonth}
								onChange={newValue => {
									setYearMonth(newValue)
								}}
								renderInput={params => (
									<TextField
										fullWidth
										size='small'
										{...params}
										helperText={null}
									/>
								)}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={2}>
						<Button
							onClick={() => {
								setGenerate(false)
								toggleClickButton()
							}}
							fullWidth
							variant='contained'
						>
							Pesquisar
						</Button>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={2}>
						<Tooltip
							content='Gerar Relatório'
							animate={{
								mount: { scale: 1, y: 0 },
								unmount: { scale: 0, y: 25 }
							}}
						>
							<IconButton color='green'>
								<FilePdf
									size={25}
									weight='bold'
									className='transition-all ease-in-out text-white hover:scale-105'
								/>
							</IconButton>
						</Tooltip>
					</Grid>
					<HeaderGrid />
					{days.map((date, index) => {
						return <Register date={date} key={index} />
					})}
				</Grid>
			</Card>
			<Alert
				show={show}
				color='green'
				className='absolute top-10 right-4 w-1/2 z-10 shadow-lg'
				dismissible={{
					onClose: () => setShow(false)
				}}
				icon={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				}
			>
				<Typography className='font-bold'>Registrado com Sucesso!</Typography>
			</Alert>
		</>
	)
}
