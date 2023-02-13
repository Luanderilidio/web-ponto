import { Header } from './Header'
import { SideBar } from './Sidebar'

export function Base(props) {
	return (
		<div className='fixed flex w-full h-full dark:bg-blue-gray-900 bg-blue-gray-100 gap-2'>
			<SideBar />
			<div className='overflow-scroll scrol w-full flex flex-col px-4 py-2 gap-16 scrollbar-hide'>
				<Header title={props.title} />

				{props.children}
			</div>
		</div>
	)
}
