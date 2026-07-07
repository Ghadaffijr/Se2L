export type CalculatedPhase = {
  id: string
  title: string
}

function getTodayDateOnly() {
  const today = new Date()

  return new Date(today.getFullYear(), today.getMonth(), today.getDate())
}

function parseArrivalDate(arrivalDateValue: string) {
  const dateParts = arrivalDateValue.split('-')

  if (dateParts.length !== 3) {
    return null
  }

  const year = Number(dateParts[0])
  const month = Number(dateParts[1])
  const day = Number(dateParts[2])

  if (!year || !month || !day) {
    return null
  }

  return new Date(year, month - 1, day)
}

export function calculateCurrentPhase(arrivalDateValue: string): CalculatedPhase {
  if (!arrivalDateValue) {
    return {
      id: 'unknown',
      title: 'Journey not started',
    }
  }

  const today = getTodayDateOnly()
  const arrivalDate = parseArrivalDate(arrivalDateValue)

  if (!arrivalDate) {
    return {
      id: 'unknown',
      title: 'Journey date unavailable',
    }
  }

  const millisecondsPerDay = 1000 * 60 * 60 * 24
  const daysSinceArrival = Math.floor(
    (today.getTime() - arrivalDate.getTime()) / millisecondsPerDay,
  )

  if (daysSinceArrival < 0) {
    return {
      id: 'pre-arrival',
      title: 'Pre-arrival',
    }
  }

  if (daysSinceArrival <= 1) {
    return {
      id: 'arrival-day',
      title: 'Arrival Day',
    }
  }

  if (daysSinceArrival <= 7) {
    return {
      id: 'first-week',
      title: 'First Week in the UK',
    }
  }

  if (daysSinceArrival <= 30) {
    return {
      id: 'first-month',
      title: 'First Month in the UK',
    }
  }

  if (daysSinceArrival <= 180) {
    return {
      id: 'three-to-six-months',
      title: '3–6 Months',
    }
  }

  if (daysSinceArrival <= 540) {
    return {
      id: 'six-to-eighteen-months',
      title: '6–18 Months',
    }
  }

  return {
    id: 'year-two-plus',
    title: 'Year 2+',
  }
}