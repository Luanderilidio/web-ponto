import Logo2 from '../assets/LogoRISCv2.svg'

export function Footer() {
	return (
		<div className='absolute bottom-0 w-full h-12 bg-emerald-700 rounded-tr-lg flex items-center justify-center '>
			<img src={Logo2} className='w-12' alt='logo2' />
		</div>
	)
}
