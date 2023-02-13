import dayjs from "dayjs"

export function DaysOfMonth(date) {
	const daysOfMonth = []
	let startDay = dayjs(date).startOf('month')
	const endDay = dayjs(date).endOf('month')

	daysOfMonth.push(startDay)
	while (startDay.isBefore(endDay)) {
		let teste1 = startDay.add(1, 'day')
		daysOfMonth.push(teste1)
		startDay = startDay.add(1, 'day')
	}

	daysOfMonth.pop()
	console.log(daysOfMonth)
	return daysOfMonth
}
