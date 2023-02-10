import { faker } from '@faker-js/faker'
import {
	Avatar,
	Card,
	IconButton,
	Tooltip,
	Typography
} from '@material-tailwind/react'
import { Grid, Stack } from '@mui/material'
import { DownloadSimple } from 'phosphor-react'
import { Base } from '../components/base'
import { FormRegister } from '../components/FormRegister'
import { RegisterPdf } from '../components/RegisterPdf'

export default function Register() {
	const randomPeple = faker.image.people()
	const randomName = faker.name.fullName()

	return (
		<Base title='Registrar Frequência'>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Stack spacing={4}>
						<FormRegister />
					</Stack>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={6}>
					<RegisterPdf />
				</Grid>
			</Grid>
		</Base>
	)
}
