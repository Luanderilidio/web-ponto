import { faker } from '@faker-js/faker'
import { Avatar, Card, IconButton, Tooltip } from '@material-tailwind/react'
import { DownloadSimple } from 'phosphor-react'
import dayjs from 'dayjs'

import Logo1 from '../assets/LogoUnemat1.png'
import Logo2 from '../assets/LogoUnemat2.png'
import Logo3 from '../assets/LogoUnemat3.png'
import LogoRisc from '../assets/LogoRISCv2.svg'
import 'animate.css'

export function RegisterPdf() {
	var isoWeek = require('dayjs/plugin/isoWeek')
	const randomName = faker.name.fullName()
	const randomDates = faker.date.betweens(
		'2023-01-01T00:00:00.000Z',
		'2023-01-30T00:00:00.000Z',
		20
	)

	dayjs.extend(isoWeek)

	function getWeekDay(day) {
		switch (day) {
			case 0:
				return 'DOM'
			case 1:
				return 'SEG'
			case 2:
				return 'TER'
			case 3:
				return 'QUA'
			case 4:
				return 'QUI'
			case 5:
				return 'SEX'
			case 6:
				return 'SAB'
			default:
				break
		}
	}

	return (
		<Card className='p-10 relative flex flex-col gap-6 animate__animated animate__fadeInUpBig animate__faster '>
			<div className='absolute right-7 bottom-7'>
				<Tooltip
					content='Download'
					animate={{
						mount: { scale: 1, y: 0 },
						unmount: { scale: 0, y: 40 }
					}}
				>
					<IconButton color='blue-gray' variant='text'>
						<DownloadSimple
							size={30}
							weight='bold'
							className='transition-all ease-in-out text-gray-500 hover:scale-105 hover:text-gray-700'
						/>
					</IconButton>
				</Tooltip>
			</div>
			<div className='flex items-center justify-between'>
				<Avatar src={Logo2} size='lg' />
				<div className='flex flex-col items-center'>
					<p className='font-Roboto font-semibold text-sm '>
						GOVERNO DO ESTADO DE MATO GROSSO
					</p>
					<p className='font-Roboto font-semibold text-sm '>
						SECRETARIA DE ESTADO DE CIÊNCIA E TECNOLOGIA
					</p>
					<p className='font-Roboto font-semibold text-sm '>
						UNIVERSIDADE DO ESTADO DE MATO GROSSO
					</p>
				</div>
				<Avatar src={Logo1} size='lg' />
			</div>
			<div className='grid grid-cols-12 gap-[2px]'>
				<div className='col-span-12'>
					<p className='font-Roboto font-semibold text-sm text-center '>
						CONTROLE DE JORNADA DE TRABALHO
					</p>
				</div>
				<div className='col-span-8 border-2 border-gray-500 rounded-sm'>
					<p className='font-Roboto font-semibold text-sm text-left'>
						EMPREGADOR: UNIVERSIDADE DO MATO GROSSO
					</p>
				</div>
				<div className='col-span-4  border-2 border-b-2 border-gray-500 rounded-sm'>
					<p className='font-Roboto font-semibold text-sm text-left'>
						CPF/CNPJ: 054.012.451-65
					</p>
				</div>
				<div className='col-span-8 border-2 border-gray-500 rounded-sm'>
					<p className='font-Roboto font-semibold text-sm text-left uppercase'>
						SERVIDOR(A): {randomName}
					</p>
				</div>
				<div className='col-span-4 border-2 border-gray-500 rounded-sm'>
					<p className='font-Roboto font-semibold text-sm text-left'>
						MATRICULA: 258134
					</p>
				</div>
				<div className='col-span-5 border-2 border-gray-500 rounded-sm'>
					<p className='font-Roboto font-semibold text-sm text-left uppercase'>
						FUNCÃO: MOTORISTA
					</p>
				</div>
				<div className='col-span-3 border-2 border-gray-500 rounded-sm'>
					<p className='font-Roboto font-semibold text-sm text-left uppercase'>
						MÊS: JANEIRO
					</p>
				</div>
				<div className='col-span-4 border-2 border-gray-500 rounded-sm'>
					<p className='font-Roboto font-semibold text-sm text-left'>
						ANO: 2023
					</p>
				</div>
			</div>
			<div>
				<div className='grid grid-cols-12 gap-[2px]'>
					<div className='col-span-12'>
						<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
							FRÊQUENCIA
						</p>
					</div>
					<div className='col-span-4'>
						<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
							DATA
						</p>
					</div>
					<div className='col-span-2'>
						<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
							ENTRADA
						</p>
					</div>
					<div className='col-span-2'>
						<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
							SAÍDA
						</p>
					</div>
					<div className='col-span-2'>
						<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
							ENTRADA
						</p>
					</div>
					<div className='col-span-2'>
						<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
							SAÍDA
						</p>
					</div>
				</div>

				{randomDates.map((date, index) => {
					return (
						<div key={index} className='grid grid-cols-12 gap-[2px] mt-[2px]'>
							<div className='col-span-3'>
								<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
									{dayjs(date).format('DD/MM/YYYY')}
								</p>
							</div>
							<div className='col-span-1'>
								<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
									{getWeekDay(dayjs(date).day())}
								</p>
							</div>
							<div className='col-span-2'>
								<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
									{dayjs(date).format('HH:mm')}
								</p>
							</div>
							<div className='col-span-2'>
								<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
									{dayjs(date).format('HH:mm')}
								</p>
							</div>
							<div className='col-span-2'>
								<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
									{dayjs(date).format('HH:mm')}
								</p>
							</div>
							<div className='col-span-2'>
								<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500'>
									{dayjs(date).format('HH:mm')}
								</p>
							</div>
						</div>
					)
				})}
			</div>
			<div className='grid grid-cols-12 gap-[2px]'>
				<div className='col-span-6 '>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						HORAS EXTRAS ACUMULADAS NO MÊS
					</p>
				</div>
				<div className='col-span-6'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						SALDO DE HORAS EXTRAORDINÁRIAS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						DIAS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						HORAS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						MINUTOS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						DIAS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						HORAS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						MINUTOS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						3
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						30
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						10
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						4
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						4
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						50
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto h-full font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						HORAS NORMAIS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto h-full font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						HORAS EXTRAS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='h-full font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						SABADO
					</p>
				</div>
				<div className='col-span-2'>
					<p className='h-full font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						DOMINGO
					</p>
				</div>
				<div className='col-span-2'>
					<p className='h-full font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						FERIADO
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						HORAS NEGATIVAS
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						50:58:00
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						19:18:00
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						28:00:00
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						12:00:00
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						00:00:00
					</p>
				</div>
				<div className='col-span-2'>
					<p className='font-Roboto font-semibold text-sm text-center border-2 rounded-sm border-gray-500 uppercase'>
						0:02:00
					</p>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-5 mt-10'>
				<div className='col-span-6'>
					<div className='h-[2px] bg-gray-500 rounded-full' />
					<p className='font-Roboto font-semibold text-sm text-center '>
						Assinatura
					</p>
				</div>
				<div className='col-span-6'>
					<div className='h-[2px] bg-gray-500 rounded-full' />
					<p className='font-Roboto font-semibold text-sm text-center '>
						Chefe Imediato
					</p>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-5'>
				<div className='col-span-7 border-r-2 border-opacity-50 border-gray-500'>
					<p className='font-Roboto font-semibold text-xs text-left '>
						UNIVERSIDADE DO ESTADO DE MATO GROSSO
					</p>
					<p className='font-Roboto font-normal text-xs text-left '>
						Av. Tancredo Neves, 1095, 78.200-000, Cáceres, MT
					</p>
					<p className='font-Roboto font-normal text-xs text-left '>
						Tel/PABX: (65) 3221 0000 www.unemat.br
					</p>
				</div>
				<div className='col-span-5'>
					<div className='flex items-center justify-end'>
						<img src={Logo3} className='w-40' />
					</div>
				</div>
				<div className='col-span-12'>
					<div className='flex items-center justify-center gap-2'>
						<img src={LogoRisc} className='w-8' />
						<p className='font-Roboto font-semibold text-xs text-left '>
							Risc - Centro de Inovação
						</p>
					</div>
				</div>
			</div>
		</Card>
	)
}
