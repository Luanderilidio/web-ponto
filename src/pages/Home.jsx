import { Base } from '../components/base'
import logo from '../assets/transporte.png'

export default function Home() {
	return (
		<Base>
			<div className='w-full h-full flex flex-col items-center justify-center'>
				<img src={logo} className='w-2/4 opacity-20' />
			</div>
		</Base>
	)
}
