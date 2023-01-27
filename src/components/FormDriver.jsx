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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'dayjs/locale/pt-br'
import 'animate.css'

export function FormDriver() {
	const navigate = useNavigate()
	const [value, setValue] = useState(null)
	const [gender, setGender] = useState(20)
	const [category, setCategory] = useState(20)
	const [show, setShow] = useState(false)

	const handleAlert = () => setShow(!show)

	const handleChangeGender = event => {
		setGender(event.target.value)
	}
	const handleChangeCategory = event => {
		setCategory(event.target.value)
	}
	return (
		<Stack
			spacing={3}
			className='animate__animated animate__fadeInLeftBig animate__faster'
		>
			<Card className='p-6'>
				<Typography variant='h4' className='mb-3'>
					Motorista
				</Typography>

				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<TextField fullWidth label='Nome' variant='outlined' size='small' />
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<TextField fullWidth label='CPF' variant='outlined' size='small' />
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<TextField fullWidth label='RG' variant='outlined' size='small' />
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<TextField
							fullWidth
							label='Matrícula'
							variant='outlined'
							size='small'
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={5}>
						<LocalizationProvider
							dateAdapter={AdapterDayjs}
							adapterLocale={'pt-br'}
						>
							<DatePicker
								label='Data de Nascimento'
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
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<FormControl fullWidth size='small'>
							<InputLabel>Genêro</InputLabel>
							<Select
								value={gender}
								label='Genêno'
								onChange={handleChangeGender}
							>
								<MenuItem value={10}>Feminino</MenuItem>
								<MenuItem value={20}>Masculino</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={3}>
						<FormControl fullWidth size='small'>
							<InputLabel>Categoria</InputLabel>
							<Select
								value={category}
								label='Categoria'
								onChange={handleChangeCategory}
							>
								<MenuItem value={10}>A</MenuItem>
								<MenuItem value={20}>AB</MenuItem>
								<MenuItem value={30}>C</MenuItem>
								<MenuItem value={40}>D</MenuItem>
								<MenuItem value={50}>E</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<TextField
							fullWidth
							label='Email'
							variant='outlined'
							size='small'
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<TextField
							fullWidth
							label='Telefone'
							variant='outlined'
							size='small'
						/>
					</Grid>
				</Grid>
			</Card>
			<Card className='p-6'>
				<Typography variant='h4' className='mb-3'>
					Endereço
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<TextField fullWidth label='CEP' variant='outlined' size='small' />
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<TextField fullWidth label='País' variant='outlined' size='small' />
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<TextField
							fullWidth
							label='Estado'
							variant='outlined'
							size='small'
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<TextField
							fullWidth
							label='Cidade'
							variant='outlined'
							size='small'
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<TextField
							fullWidth
							label='Bairro'
							variant='outlined'
							size='small'
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<TextField fullWidth label='Rua' variant='outlined' size='small' />
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={4}>
						<TextField
							fullWidth
							label='Numero'
							variant='outlined'
							size='small'
						/>
					</Grid>
					<Grid item sm={12} md={12} lg={6}></Grid>
				</Grid>
			</Card>
			<div className='flex justify-end gap-3 '>
				<Button onClick={() => navigate('/')} color='gray'>
					Cancelar
				</Button>
				<Button onClick={handleAlert}>Cadastrar</Button>
			</div>
			<Alert
				show={show}
				color='green'
				className='absolute top-10 right-4 w-1/2 z-40 '
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
				<Typography className='font-bold'>Cadastrado com Sucesso!</Typography>
			</Alert>
		</Stack>
	)
}
