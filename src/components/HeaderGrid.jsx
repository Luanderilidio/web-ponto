import { Grid } from "@mui/material";

export function HeaderGrid() {
	return (
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
					<p className='text-center'>
						Horas <br /> Extras
					</p>
				</div>
				<div className='col-span-1 flex items-center justify-center border-2 rounded-md border-gray-500 '>
					<p className='text-center'>
						Horas <br /> Negativas
					</p>
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
	)
}
