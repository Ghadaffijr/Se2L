export type JourneyPhase = {
  id: string
  title: string
  description: string
  status: 'complete' | 'current' | 'upcoming'
}

export const journeyPhases: JourneyPhase[] = [
  {
    id: 'pre-arrival',
    title: 'Pre-arrival',
    description:
      'Prepare documents, accommodation, and local knowledge before arrival.',
    status: 'complete',
  },
  {
    id: 'arrival-day',
    title: 'Arrival Day',
    description:
      'Handle urgent arrival tasks such as SIM, accommodation, and essentials.',
    status: 'complete',
  },
  {
    id: 'first-week',
    title: 'First Week',
    description:
      'Register with a GP, apply for NI number, and start core setup tasks.',
    status: 'current',
  },
  {
    id: 'first-month',
    title: 'First Month',
    description:
      'Set up banking, local services, family tasks, and everyday routines.',
    status: 'upcoming',
  },
  {
    id: 'three-to-six-months',
    title: '3–6 Months',
    description:
      'Build stability around work, transport, community, and longer-term planning.',
    status: 'upcoming',
  },
  {
    id: 'six-to-eighteen-months',
    title: '6–18 Months',
    description:
      'Review longer-term settlement needs such as language, family, and future eligibility.',
    status: 'upcoming',
  },
  {
    id: 'year-two-plus',
    title: 'Year 2+',
    description:
      'Plan longer-term integration, future applications, and continued family support.',
    status: 'upcoming',
  },
]