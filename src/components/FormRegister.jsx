import { Alert, Card, Typography } from '@material-tailwind/react'
import { Grid, Button, TextField } from '@mui/material'
import {
	DatePicker,
	LocalizationProvider,
	MobileTimePicker
} from '@mui/x-date-pickers'
import 'dayjs/locale/pt-br'
import { faker } from '@faker-js/faker'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { MagnifyingGlass } from 'phosphor-react'

export function FormRegister() {
	const navigate = useNavigate()

	const [yearMonth, setYearMonth] = useState(dayjs())
	const [value1, setValue1] = useState(dayjs().hour(0).minute(0).second(0))
	const [value2, setValue2] = useState(dayjs().hour(0).minute(0).second(0))
	const [value3, setValue3] = useState(dayjs().hour(0).minute(0).second(0))
	const [value4, setValue4] = useState(dayjs().hour(0).minute(0).second(0))
	const [gender, setGender] = useState(20)
	const [show, setShow] = useState(false)

	const handleAlert = () => setShow(!show)

	const handleChangeGender = event => {
		setGender(event.target.value)
	}

	var isoWeek = require('dayjs/plugin/isoWeek')
	const randomDates = faker.date.betweens(
		'2023-01-01T00:00:00.000Z',
		'2023-01-30T00:00:00.000Z',
		20
	)

	dayjs.extend(isoWeek)

	function getWeekDay(day) {
		switch (day) {
			case 0:
				return 'DOM'
			case 1:
				return 'SEG'
			case 2:
				return 'TER'
			case 3:
				return 'QUA'
			case 4:
				return 'QUI'
			case 5:
				return 'SEX'
			case 6:
				return 'SAB'
			default:
				break
		}
	}

	return (
		<>
			<Card className='p-6 animate__animated animate__fadeInLeftBig animate__faster'>
				<Typography variant='h4' className='mb-3'>
					Registrar
				</Typography>

				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={12} lg={5}>
						<TextField fullWidth label='Nome' variant='outlined' size='small' />
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
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
					<Grid item xs={12} sm={12} md={12} lg={3}>
						<Button variant='contained' endIcon={<MagnifyingGlass size={20} />}>
							Pesquisar
						</Button>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<div className='grid grid-cols-12  font-semibold gap-2'>
							<div className='col-span-1 flex flex-col gap-1'>
								<p className='text-center border-2 rounded-md border-gray-500'>
									Data
								</p>
								<div className='flex items-center justify-around gap-1'>
									<p className='w-full text-center border-2 rounded-md border-gray-500'>
										Dia
									</p>
									<p className='w-full text-center border-2 rounded-md border-gray-500'>
										Sem
									</p>
								</div>
							</div>
							<div className='col-span-2 flex flex-col gap-1'>
								<p className='text-center border-2 rounded-md border-gray-500'>
									Matutino
								</p>
								<div className='flex items-center justify-around gap-1'>
									<p className='w-full text-center border-2 rounded-md border-gray-500'>
										Entrada
									</p>
									<p className='w-full text-center border-2 rounded-md border-gray-500'>
										Saída
									</p>
								</div>
							</div>
							<div className='col-span-2 flex flex-col gap-1'>
								<p className='text-center border-2 rounded-md border-gray-500'>
									Vespertino
								</p>
								<div className='flex items-center justify-around gap-1'>
									<p className='w-full text-center border-2 rounded-md border-gray-500'>
										Entrada
									</p>
									<p className='w-full text-center border-2 rounded-md border-gray-500'>
										Saída
									</p>
								</div>
							</div>

							<div className='col-span-1 flex items-center justify-center border-2 rounded-md border-gray-500 '>
								<p className='text-center'>
									Horas <br /> Totais
								</p>
							</div>

							<div className='col-span-1 flex items-center justify-center border-2 rounded-md border-gray-500 '>
								<p className='text-center'>Horas Extras</p>
							</div>
							<div className='col-span-1 flex items-center justify-center border-2 rounded-md border-gray-500 '>
								<p className='text-center'>Horas Negativas</p>
							</div>

							<div className='col-span-1 flex items-center justify-center border-2 rounded-md border-gray-500 '>
								<p className='text-center'>Sábado</p>
							</div>
							<div className='col-span-1 flex items-center justify-center border-2 rounded-md border-gray-500 '>
								<p className='text-center'>Domingo</p>
							</div>
							<div className='col-span-1 flex items-center justify-center border-2 rounded-md border-gray-500 '>
								<p className='text-center'>Feriado</p>
							</div>
						</div>
					</Grid>

					{randomDates.map((date, index) => {
						return (
							<Grid key={index} item xs={12} sm={12} md={12} lg={12}>
								<div className='grid grid-cols-12  gap-2'>
									<div className='col-span-1 flex items-center justify-center gap-1 '>
										<TextField
											disabled
											size='small'
											fullWidth
											value={dayjs(date).format('DD')}
										/>
										<TextField
											disabled
											size='small'
											fullWidth
											value={getWeekDay(dayjs(date).day())}
										/>
									</div>

									<div className='col-span-2 flex items-center justify-around gap-1 '>
										<LocalizationProvider
											dateAdapter={AdapterDayjs}
											adapterLocale={'pt-br'}
										>
											<MobileTimePicker
												value={value1}
												onChange={newValue => {
													setValue1(newValue)
												}}
												renderInput={params => (
													<TextField size='small' fullWidth {...params} />
												)}
											/>
										</LocalizationProvider>
										<LocalizationProvider
											dateAdapter={AdapterDayjs}
											adapterLocale={'pt-br'}
										>
											<MobileTimePicker
												value={value2}
												onChange={newValue => {
													setValue2(newValue)
												}}
												renderInput={params => (
													<TextField size='small' fullWidth {...params} />
												)}
											/>
										</LocalizationProvider>
									</div>
									<div className='col-span-2 flex items-center justify-around gap-1 '>
										<LocalizationProvider
											dateAdapter={AdapterDayjs}
											adapterLocale={'pt-br'}
										>
											<MobileTimePicker
												value={value3}
												onChange={newValue => {
													setValue3(newValue)
												}}
												renderInput={params => (
													<TextField size='small' fullWidth {...params} />
												)}
											/>
										</LocalizationProvider>
										<LocalizationProvider
											dateAdapter={AdapterDayjs}
											adapterLocale={'pt-br'}
										>
											<MobileTimePicker
												value={value4}
												onChange={newValue => {
													setValue4(newValue)
												}}
												renderInput={params => (
													<TextField size='small' fullWidth {...params} />
												)}
											/>
										</LocalizationProvider>
									</div>

									<div className='col-span-1 flex items-center justify-center  '>
										<TextField disabled size='small' fullWidth />
									</div>

									<div className='col-span-1 flex items-center justify-center'>
										<TextField disabled size='small' fullWidth />
									</div>
									<div className='col-span-1 flex items-center justify-center '>
										<TextField disabled size='small' fullWidth />
									</div>
									<div className='col-span-1 flex items-center justify-center '>
										<TextField disabled size='small' fullWidth />
									</div>
									<div className='col-span-1 flex items-center justify-center  '>
										<TextField disabled size='small' fullWidth />
									</div>
									<div className='col-span-1 flex items-center justify-center  '>
										<TextField disabled size='small' fullWidth />
									</div>
									<div className='col-span-1 flex items-center justify-center '>
										<Button variant='contained'>Registrar</Button>
									</div>
								</div>
							</Grid>
						)
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
