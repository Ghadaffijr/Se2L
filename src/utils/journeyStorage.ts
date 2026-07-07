export type JourneyDetails = {
  visaType: string
  arrivalDate: string
  region: string
  language: string
  dependants: string
}

const JOURNEY_DETAILS_STORAGE_KEY = 'se2lJourneyDetails'

export function saveJourneyDetails(journeyDetails: JourneyDetails) {
  localStorage.setItem(
    JOURNEY_DETAILS_STORAGE_KEY,
    JSON.stringify(journeyDetails),
  )
}

export function getSavedJourneyDetails() {
  const savedJourneyDetails = localStorage.getItem(JOURNEY_DETAILS_STORAGE_KEY)

  if (!savedJourneyDetails) {
    return null
  }

  try {
    return JSON.parse(savedJourneyDetails) as JourneyDetails
  } catch {
    return null
  }
}

export function clearSavedJourneyDetails() {
  localStorage.removeItem(JOURNEY_DETAILS_STORAGE_KEY)
}