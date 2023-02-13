export function getWeekDay(day) {
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
