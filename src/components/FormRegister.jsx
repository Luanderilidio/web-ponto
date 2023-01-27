import { Alert, Button, Card, Typography } from '@material-tailwind/react'
import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField
} from '@mui/material'
import {
	LocalizationProvider,
	MobileDatePicker,
	MobileTimePicker
} from '@mui/x-date-pickers'
import 'dayjs/locale/pt-br'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

export function FormRegister() {
	const navigate = useNavigate()

	const [value, setValue] = useState(dayjs())
	const [gender, setGender] = useState(20)
	const [show, setShow] = useState(false)

	const handleAlert = () => setShow(!show)

	const handleChangeGender = event => {
		setGender(event.target.value)
	}

	return (
		<>
			<Card className='p-6 animate__animated animate__fadeInLeftBig animate__faster'>
				<Typography variant='h4' className='mb-3'>
					Registrar
				</Typography>

				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<TextField fullWidth label='Nome' variant='outlined' size='small' />
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<FormControl fullWidth size='small'>
							<InputLabel>Registro</InputLabel>
							<Select
								value={gender}
								label='Registro'
								onChange={handleChangeGender}
							>
								<MenuItem value={10}>Ponto</MenuItem>
								<MenuItem value={20}>Folga</MenuItem>
								<MenuItem value={30}>Compensação</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<LocalizationProvider
							dateAdapter={AdapterDayjs}
							adapterLocale={'pt-br'}
						>
							<MobileDatePicker
								label='Data'
								value={value}
								onChange={newValue => {
									setValue(newValue)
								}}
								renderInput={params => (
									<TextField size='small' fullWidth {...params} />
								)}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<Stack spacing={3}>
							<Typography className='text-center'>1 Turno</Typography>
							<Stack direction='row' spacing={2}>
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
									adapterLocale={'pt-br'}
								>
									<MobileTimePicker
										label='Entrada'
										value={value}
										onChange={newValue => {
											setValue(newValue)
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
										label='Saída'
										value={value}
										onChange={newValue => {
											setValue(newValue)
										}}
										renderInput={params => (
											<TextField size='small' fullWidth {...params} />
										)}
									/>
								</LocalizationProvider>
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<Stack spacing={3}>
							<Typography className='text-center'>2 Turno</Typography>

							<Stack direction='row' spacing={2}>
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
									adapterLocale={'pt-br'}
								>
									<MobileTimePicker
										label='Entrada'
										value={value}
										onChange={newValue => {
											setValue(newValue)
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
										label='Saída'
										value={value}
										onChange={newValue => {
											setValue(newValue)
										}}
										renderInput={params => (
											<TextField size='small' fullWidth {...params} />
										)}
									/>
								</LocalizationProvider>
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<div className='flex justify-center sm:justify-end gap-3 '>
							<Button onClick={() => navigate('/')} color='gray'>
								Cancelar
							</Button>
							<Button onClick={handleAlert}>Cadastrar</Button>
						</div>
					</Grid>
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
