import * as React from 'react'
import { Grid, TextField, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import { IconButton, Tooltip } from '@material-tailwind/react'
import { Check, PencilSimpleLine } from 'phosphor-react'
import { getWeekDay } from '../utils/DayOfWeek'
import { useState } from 'react'

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export function Register(props) {
	const [value1, setValue1] = useState(dayjs().hour(0).minute(0).second(0))
	const [value2, setValue2] = useState(dayjs().hour(0).minute(0).second(0))
	const [value3, setValue3] = useState(dayjs().hour(0).minute(0).second(0))
	const [value4, setValue4] = useState(dayjs().hour(0).minute(0).second(0))

	const [disabled, setDisabled] = useState({ confirm: false, edit: true })

	const [open, setOpen] = useState(false)

	const handleClickAlert = () => {
		setOpen(true)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	return (
		<>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<div className='grid grid-cols-12  gap-2'>
					<div className='col-span-1 flex items-center justify-around gap-1 '>
						<p className='font-semibold'>{dayjs(props.date).format('DD')}</p>
						<p className='font-semibold'>
							{getWeekDay(dayjs(props.date).day())}
						</p>
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
					<div className='col-span-1 flex items-center justify-center gap-3 '>
						<Tooltip
							content='Registrar'
							animate={{
								mount: { scale: 1, y: 0 },
								unmount: { scale: 0, y: 25 }
							}}
						>
							<IconButton
								disabled={disabled.confirm}
								onClick={() => {
									setDisabled({ confirm: true, edit: false })
									handleClickAlert()
								}}
								color='green'
							>
								<Check
									size={25}
									weight='bold'
									className='transition-all ease-in-out text-white hover:scale-105'
								/>
							</IconButton>
						</Tooltip>
						<Tooltip
							content='Editar'
							animate={{
								mount: { scale: 1, y: 0 },
								unmount: { scale: 0, y: 25 }
							}}
						>
							<IconButton
								onClick={() => setDisabled({ confirm: false, edit: true })}
								disabled={disabled.edit}
							>
								<PencilSimpleLine
									size={25}
									weight='bold'
									className='transition-all ease-in-out text-white hover:scale-105'
								/>
							</IconButton>
						</Tooltip>
					</div>
				</div>
			</Grid>
			<Snackbar
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
					Registro Cadastrado!
				</Alert>
			</Snackbar>
		</>
	)
}
