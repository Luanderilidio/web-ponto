import {
	Avatar,
	Card,
	IconButton,
	Tooltip,
	Typography
} from '@material-tailwind/react'
import { Grid } from '@mui/material'
import 'dayjs/locale/pt-br'
import { Base } from '../components/base'
import { faker } from '@faker-js/faker'
import { DownloadSimple } from 'phosphor-react'
import { FormDriver } from '../components/FormDriver'

export default function Driver() {
	const randomPeple = faker.image.people()
	const randomName = faker.name.fullName()

	return (
		<Base title='Cadastrar Motorista'>
			<Grid container spacing={3}>
				<Grid item sm={12} md={6}>
					<FormDriver />
				</Grid>
				<Grid item sm={12} md={6}>
					<Card className='p-10 relative animate__animated animate__fadeInUpBig animate__faster'>
						<div className='absolute right-7 top-5'>
							<Tooltip
								content='Download'
								animate={{
									mount: { scale: 1, y: 0 },
									unmount: { scale: 0, y: 40 }
								}}
							>
								<IconButton color='gray' variant='text'>
									<DownloadSimple
										size={30}
										weight='bold'
										className='transition-all ease-in-out text-gray-300 dark:text-red-500 hover:scale-105 hover:text-gray-400'
									/>
								</IconButton>
							</Tooltip>
						</div>
						<div className='mt-1 flex flex-col items-center justify-center gap-2'>
							<Avatar src={randomPeple} size='xxl' />
							<div className='flex flex-col ga-0 justify-center items-center'>
								<Typography variant='h4'>{randomName} </Typography>
								<Typography variant='h6' className='font-normal'>
									Motorista
								</Typography>
							</div>
						</div>
						<div className='flex items-center justify-start gap-3'>
							<Typography className='font-bold mt-3 mb-2' variant='h5'>
								Dados Pessoais
							</Typography>
							<div className='h-1 rounded-lg bg-gray-100 flex-1' />
						</div>
						<div className=' grid grid-cols-3 gap-3 '>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>CPF: </Typography>
									<Typography className=''>054.012.451-65</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>RG: </Typography>
									<Typography className=''>36.180.306-0</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Matricula: </Typography>
									<Typography className=''>1233123</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Nascimento: </Typography>
									<Typography className=''>09/01/1978</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Genêro: </Typography>
									<Typography className=''>Masculino</Typography>
								</div>
							</div>
							<div className='col-span-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Categoria: </Typography>
									<Typography className=''>AB</Typography>
								</div>
							</div>
							<div className='col-span-2'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Email: </Typography>
									<Typography className=''>
										vera-cardoso91@vilarreal.com.br
									</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Telefone: </Typography>
									<Typography className=''>(65) 99663-5843</Typography>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-start gap-3'>
							<Typography className='font-bold mt-3 mb-2' variant='h5'>
								Endereço
							</Typography>
							<div className='h-1 rounded-lg bg-gray-100 flex-1' />
						</div>
						<div className=' grid grid-cols-3 gap-3 '>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>CEP: </Typography>
									<Typography className=''>23937-160</Typography>
								</div>
							</div>
							<div className='col-span-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>País: </Typography>
									<Typography className=''>Brasil</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>UF: </Typography>
									<Typography className=''>RJ</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Cidade: </Typography>
									<Typography className=''>Angra dos Reis</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Bairro: </Typography>
									<Typography className=''>Praia da Ribeira</Typography>
								</div>
							</div>
							<div className='span-col-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Rua: </Typography>
									<Typography className=''>Rua Ilha de Paquetá</Typography>
								</div>
							</div>
							<div className='col-span-1'>
								<div className='flex gap-3'>
									<Typography className='font-bold'>Número: </Typography>
									<Typography className=''>240</Typography>
								</div>
							</div>
						</div>
					</Card>
				</Grid>
			</Grid>
		</Base>
	)
}
