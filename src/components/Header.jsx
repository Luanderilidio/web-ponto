import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Tooltip,
	IconButton,
	Avatar,
	Typography
} from '@material-tailwind/react'
import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import { MoonStars, SignOut, Sun } from 'phosphor-react'

export function Header(props) {
	const [theme, setTheme] = useState('')
	const [toggle, setToggle] = useState(false)

	const element = document.documentElement

	const randomPeple = faker.image.people()

	useEffect(() => {
		switch (theme) {
			case 'dark':
				element.classList.add('dark')
				setToggle(!toggle)
				break
			case 'light':
				element.classList.remove('dark')
				setToggle(!toggle)
				break
			default:
				break
		}
	}, [theme])
	return (
		<>
			<div className='flex w-full h-14 items-center justify-between '>
				<p className='text-3xl font-bold font-Inter text-emerald-800 dark:text-white'>
					{props.title ? (
						<Typography variant='h2'>{props.title}</Typography>
					) : (
						`Bem vindo ao Dashboard ${faker.name.firstName()}!`
					)}
				</p>
				<div className='flex items-center justify-center gap-5'>
					{toggle ? (
						<Tooltip content='Light Mode' placement='bottom'>
							<IconButton color='amber' onClick={() => setTheme('light')}>
								<Sun size={25} weight='fill' className='text-white' />
							</IconButton>
						</Tooltip>
					) : (
						<Tooltip placement='bottom' content='Dark mode'>
							<IconButton color='blue-gray' onClick={() => setTheme('dark')}>
								<MoonStars size={25} weight='fill' className='text-white' />
							</IconButton>
						</Tooltip>
					)}

					<Menu>
						<MenuHandler>
							<Avatar
								alt='Remy Sharp'
								src={randomPeple}
								className='transition ease-in-out w-10 h-10 rounded-full hover:scale-105 active:scale-100 shadow-md hover:shadow-black/30 active:shadow-black/40'
							/>
						</MenuHandler>
						<MenuList>
							<MenuItem>Menu Item 1</MenuItem>
							<MenuItem>Menu Item 2</MenuItem>
							<MenuItem>Menu Item 3</MenuItem>
						</MenuList>
					</Menu>

					<Tooltip
						content='Exit'
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0, y: 25 }
						}}
					>
						<IconButton color='red' variant='text'>
							<SignOut
								size={30}
								weight='bold'
								className='transition-all ease-in-out text-emerald-800 dark:text-red-500 hover:scale-105 hover:text-red-500'
							/>
						</IconButton>
					</Tooltip>
				</div>
			</div>
		</>
	)
}
