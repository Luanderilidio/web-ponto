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
import { Autocomplete, Container, Dialog, Grid, TextField } from '@mui/material'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { faker } from '@faker-js/faker'
import { CheckCircle, FilePdf } from 'phosphor-react'
import { HeaderGrid } from './HeaderGrid'
import { Register } from './Register'
import { DaysOfMonth } from '../utils/DaysOfMonth'
import { Transition } from '../utils/Transition'
import { RegisterPdf } from './RegisterPdf'
import jsPDF from 'jspdf'

export function FormRegister() {
	const [yearMonth, setYearMonth] = useState(dayjs())
	const [days, setDays] = useState([])
	const [generate, setGenerate] = useState(false)
	const [openDialogPdf, setOpenDialogPdf] = useState(false)
	const [show, setShow] = useState(false)

	const handleDialogPdf = () => setOpenDialogPdf(!openDialogPdf)

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
		setGenerate(!generate)
		setDays(DaysOfMonth(yearMonth))
		setGenerate(!generate)
	}

	const GeneratePdf = () => {
		setOpenDialogPdf(true)
		var originalContents = document.body.innerHTML
		var printContents = document.getElementById('pdf').innerHTML
		document.body.innerHTML = printContents
		window.print()
		document.body.innerHTML = originalContents
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
								toggleClickButton()
							}}
							fullWidth
							variant='contained'
						>
							Pesquisar
						</Button>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={2}>
						<Tooltip content='Gerar Relatório'>
							<IconButton onClick={handleDialogPdf} color='green'>
								<FilePdf
									size={25}
									weight='regular'
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
				icon={<CheckCircle size={32} />}
			>
				<Typography className='font-bold'>Registrado com Sucesso!</Typography>
			</Alert>
			<Dialog
				fullScreen
				open={openDialogPdf}
				onClose={handleDialogPdf}
				TransitionComponent={Transition}
			>
				<Container maxWidth='md'>
					<div className='p-10 flex flex-col justify-center items-center gap-5'>
						<div className='w-full flex gap-3'>
							<Button fullWidth onClick={handleDialogPdf} color='red'>
								Close
							</Button>
							<Button fullWidth onClick={GeneratePdf}>
								Imprimir
							</Button>
						</div>

						<div id='pdf'>
							<RegisterPdf />
						</div>
					</div>
				</Container>
			</Dialog>
		</>
	)
}
