import { IconButton } from '@mui/material'
import {
	CalendarCheck,
	ChartPieSlice,
	Files,
	List,
	MagnifyingGlass,
	User,
	X
} from 'phosphor-react'
import Logo from '../assets/vite.svg'
import Logo2 from '../assets/LogoRISCv2.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function SideBar() {
	const navigate = useNavigate()
	const [open, setOpen] = useState(true)
	return (
		<div
			className={`${
				open ? 'w-60 ' : 'w-14'
			} flex flex-col justify-between rounded-tr-md duration-300 flex-1 pr-2  bg-emerald-800 shadow-md shadow-black dark:shadow-black/0  relative`}
		>
			<div className='w-full'>
				<div
					className={` flex items-center  ${
						open ? 'justify-end' : 'justify-center'
					}`}
				>
					<IconButton onClick={() => setOpen(!open)} className='duration-300 '>
						{open ? (
							<X
								size={30}
								weight='regular'
								className='transition text-white hover:text-red-600'
							/>
						) : (
							<List size={30} weight='bold' className='text-white' />
						)}
					</IconButton>
				</div>
				<div
					onClick={() => navigate('/')}
					className='flex items-center justify-center mt-3'
				>
					<IconButton>
						<img
							className={`${
								open ? 'w-10' : 'w-10 duration-300 rotate-[360deg]'
							}  `}
							src={Logo}
							alt='logo'
						/>
					</IconButton>
					{/* <p className='text-white font-Anton scale-0'>Transporte</p> */}
				</div>
				<div className='w-full flex flex-col gap-3 mt-5'>
					<button
						onClick={() => navigate('/register')}
						className='group flex items-center w-full transition ease-in-out rounded-r-md bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-700 hover:text-white shadow-md hover:shadow-black/10 active:shadow-black/40'
					>
						<IconButton>
							<CalendarCheck
								size={30}
								weight='regular'
								className='text-white transition ease-in-out group-hover:scale-110'
							/>
						</IconButton>
						<h1
							className={`text-base pr-2 font-Roboto font-semibold text-white transition ease-in-out ${
								!open && 'scale-0'
							}`}
						>
							Registrar
						</h1>
					</button>
					<button
						onClick={() => navigate('/driver')}
						className='group flex items-center w-full transition ease-in-out rounded-r-md bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-700 hover:text-white shadow-md hover:shadow-black/10 active:shadow-black/40'
					>
						<IconButton>
							<User
								size={30}
								weight='regular'
								className='text-white transition ease-in-out group-hover:scale-110'
							/>
						</IconButton>
						<h1
							className={`text-base pr-2 font-Roboto font-semibold text-white transition ease-in-out ${
								!open && 'scale-0'
							}`}
						>
							Motoristas
						</h1>
					</button>
					<button className='group flex items-center w-full transition ease-in-out rounded-r-md bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-700 hover:text-white shadow-md hover:shadow-black/10 active:shadow-black/40'>
						<IconButton>
							<MagnifyingGlass
								size={30}
								weight='regular'
								className='text-white transition ease-in-out group-hover:scale-110'
							/>
						</IconButton>
						<h1
							className={`text-base pr-2 font-Roboto font-semibold text-white transition ease-in-out    ${
								!open && 'scale-0'
							}`}
						>
							Consultas
						</h1>
					</button>
					<button className='group flex items-center w-full transition ease-in-out rounded-r-md bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-700 hover:text-white shadow-md hover:shadow-black/10 active:shadow-black/40'>
						<IconButton>
							<Files
								size={30}
								weight='regular'
								className='text-white transition ease-in-out group-hover:scale-110'
							/>
						</IconButton>
						<h1
							className={`text-base pr-2 font-Roboto font-semibold text-white transition ease-in-out    ${
								!open && 'scale-0'
							}`}
						>
							Relatórios
						</h1>
					</button>
					<button className='group flex items-center w-full transition ease-in-out rounded-r-md bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-700 hover:text-white shadow-md hover:shadow-black/10 active:shadow-black/40'>
						<IconButton>
							<ChartPieSlice
								size={30}
								weight='regular'
								className='text-white transition ease-in-out group-hover:scale-110'
							/>
						</IconButton>
						<h1
							className={`text-base pr-2 font-Roboto font-semibold text-white transition ease-in-out    ${
								!open && 'scale-0'
							}`}
						>
							Gráficos
						</h1>
					</button>
				</div>
			</div>
			<div className='flex items-center justify-center mb-10'>
				<IconButton>
					<img
						className={`${open ? 'w-20' : 'w-10'} duration-300`}
						src={Logo2}
						alt='logo2'
					/>
				</IconButton>
			</div>
		</div>
	)
}
