export type SettlementTaskLink = {
  label: string
  url: string
  source: string
}

export type TaskRegion =
  | 'england'
  | 'scotland'
  | 'wales'
  | 'northern-ireland'

export const allUkRegions: TaskRegion[] = [
  'england',
  'scotland',
  'wales',
  'northern-ireland',
]

export type ContentLanguage = 'en'

export type TaskUrgency = 'critical' | 'important' | 'optional'

export type TaskCategory =
  | 'Preparation'
  | 'Housing'
  | 'Communication'
  | 'Healthcare'
  | 'Employment'
  | 'Banking'
  | 'Education'
  | 'Local Services'

export type SettlementTask = {
  id: string
  label: string
  labelColourClass: string
  title: string
  description: string
  phaseId: string
  language: ContentLanguage
  category: TaskCategory
  urgency: TaskUrgency
  estimatedTime: string
  whyItMatters: string
  steps: string[]
  officialLinks?: SettlementTaskLink[]
  youtubeVideoUrl?: string
  ukRegions: TaskRegion[]
  visaTypes: string[]
}

export const dashboardTasks: SettlementTask[] = [
  {
    id: 'prepare-important-documents',
    label: 'Pre-arrival',
    labelColourClass: 'text-sky-600',
    title: 'Prepare important documents',
    description:
      'Gather key documents you may need for travel, work, study, banking, healthcare, and identity checks in the UK.',
    phaseId: 'pre-arrival',
    language: 'en',
    category: 'Preparation',
    urgency: 'critical',
    estimatedTime: '30–60 minutes',
    whyItMatters:
      'Having your documents ready before arrival makes it easier to complete registrations, open accounts, attend appointments, and respond quickly to official requests.',
    steps: [
      'Check that your passport and visa details are correct.',
      'Save digital copies of your passport, visa, offer letter, employment letter, or university documents.',
      'Prepare proof of accommodation if available.',
      'Keep travel insurance, medical, or vaccination records if relevant.',
      'Store copies safely in cloud storage and on your phone.',
    ],
    officialLinks: [
      {
        label: 'Check documents before entering the UK',
        url: 'https://www.gov.uk/uk-border-control/before-you-leave-for-the-uk',
        source: 'GOV.UK',
      },
      {
        label: 'UK border control overview',
        url: 'https://www.gov.uk/uk-border-control',
        source: 'GOV.UK',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
  },
  {
    id: 'plan-temporary-accommodation',
    label: 'Pre-arrival',
    labelColourClass: 'text-sky-600',
    title: 'Plan temporary accommodation',
    description:
      'Confirm where you will stay when you first arrive and make sure you can access the address and booking details.',
    phaseId: 'pre-arrival',
    language: 'en',
    category: 'Housing',
    urgency: 'critical',
    estimatedTime: '20–45 minutes',
    whyItMatters:
      'A confirmed place to stay reduces arrival stress and gives you an address to use for early planning, transport, and local registrations.',
    steps: [
      'Confirm your first accommodation booking or host details.',
      'Save the full address including postcode.',
      'Check check-in time and access instructions.',
      'Plan transport from the airport or station to the accommodation.',
      'Keep the booking confirmation available offline.',
    ],
    officialLinks: [
      {
        label: 'View and prove your immigration status',
        url: 'https://www.gov.uk/evisa/view-evisa-get-share-code-prove-immigration-status',
        source: 'GOV.UK',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
  },
  {
    id: 'research-local-area',
    label: 'Pre-arrival',
    labelColourClass: 'text-sky-600',
    title: 'Research your local area',
    description:
      'Look up nearby transport, supermarkets, pharmacies, GP surgeries, banks, and key services before you arrive.',
    phaseId: 'pre-arrival',
    language: 'en',
    category: 'Local Services',
    urgency: 'optional',
    estimatedTime: '20–40 minutes',
    whyItMatters:
      'Understanding your local area before arrival helps you settle faster and reduces uncertainty during your first few days in the UK.',
    steps: [
      'Search your accommodation postcode on a map.',
      'Check nearby supermarkets, pharmacies, and transport links.',
      'Look for nearby GP surgeries and banks.',
      'Save important locations to your phone map app.',
      'Note any local travel cards or transport apps you may need.',
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
  },
  {
    id: 'get-uk-sim',
    label: 'Arrival',
    labelColourClass: 'text-emerald-600',
    title: 'Get a UK SIM or mobile plan',
    description:
      'Set up a UK mobile number so you can access calls, messages, banking, appointments, and verification codes.',
    phaseId: 'arrival-day',
    language: 'en',
    category: 'Communication',
    urgency: 'important',
    estimatedTime: '15–30 minutes',
    whyItMatters:
      'A UK mobile number helps you receive appointment updates, bank verification codes, employer messages, delivery updates, and important settlement communications.',
    steps: [
      'Compare mobile providers or pay-as-you-go SIM options.',
      'Choose a SIM or mobile plan that fits your budget.',
      'Activate the SIM card using the provider instructions.',
      'Save your new UK number somewhere safe.',
      'Update important services with your UK number when needed.',
    ],
    officialLinks: [
      {
        label: 'Pay-as-you-go mobile guidance',
        url: 'https://www.ofcom.org.uk/phones-and-broadband/saving-money/pay-as-you-go-mobile-use-it-or-lose-it',
        source: 'Ofcom',
      },
      {
        label: 'Switching mobile phone provider',
        url: 'https://www.ofcom.org.uk/phones-and-broadband/switching-provider/switching-mobile-phone-provider',
        source: 'Ofcom',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
  },
  {
    id: 'confirm-accommodation-address',
    label: 'Arrival',
    labelColourClass: 'text-emerald-600',
    title: 'Confirm your accommodation and address',
    description:
      'Confirm where you are staying and keep your UK address ready for registrations, banking, healthcare, and official forms.',
    phaseId: 'arrival-day',
    language: 'en',
    category: 'Housing',
    urgency: 'critical',
    estimatedTime: '10–20 minutes',
    whyItMatters:
      'Your UK address is often needed when registering with services such as GP surgeries, banks, universities, employers, councils, and delivery providers.',
    steps: [
      'Confirm your full UK address including postcode.',
      'Save the address on your phone or notes app.',
      'Check whether you have proof of address or booking confirmation.',
      'Share the address only with trusted services that need it.',
      'Update your address if your accommodation changes.',
    ],
    officialLinks: [
      {
        label: 'View and prove your immigration status',
        url: 'https://www.gov.uk/evisa/view-evisa-get-share-code-prove-immigration-status',
        source: 'GOV.UK',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
  },
  {
    id: 'register-gp',
    label: 'Critical',
    labelColourClass: 'text-red-600',
    title: 'Register with a GP before you need care',
    description:
      'Register early so you can access NHS care, prescriptions, referrals, and routine support when you need it.',
    phaseId: 'first-week',
    language: 'en',
    category: 'Healthcare',
    urgency: 'critical',
    estimatedTime: '20–40 minutes',
    whyItMatters:
      'Many people only think about registering with a GP when they become unwell, but registration can take time. Setting this up early helps you access NHS support faster when you need care, prescriptions, medical advice, or referrals.',
    steps: [
      'Find GP surgeries near your UK address.',
      'Check whether the GP surgery is accepting new patients.',
      'Register online if the surgery offers online registration.',
      'Complete the GP registration form with your personal details.',
      'Provide proof of identity or address if requested.',
      'Wait for confirmation from the GP surgery before assuming registration is complete.',
    ],
    officialLinks: [
      {
        label: 'Find a GP',
        url: 'https://www.nhs.uk/service-search/find-a-gp/',
        source: 'NHS',
      },
      {
        label: 'Register with a GP surgery',
        url: 'https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/',
        source: 'NHS',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
  },
  {
    id: 'apply-ni-number',
    label: 'Important',
    labelColourClass: 'text-amber-600',
    title: 'Apply for National Insurance number',
    description: 'Complete this if you are eligible to work in the UK.',
    phaseId: 'first-week',
    language: 'en',
    category: 'Employment',
    urgency: 'important',
    estimatedTime: '15–30 minutes',
    whyItMatters:
      'A National Insurance number helps HMRC and employers record your tax, employment, and contribution details correctly.',
    steps: [
      'Check whether you already have a National Insurance number.',
      'Confirm you are eligible to apply.',
      'Prepare your identity documents.',
      'Complete the application process.',
      'Keep the confirmation or reference safely.',
    ],
    officialLinks: [
      {
        label: 'Apply for a National Insurance number',
        url: 'https://www.gov.uk/apply-national-insurance-number',
        source: 'GOV.UK',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
  },
  {
    id: 'setup-bank-account',
    label: 'Important',
    labelColourClass: 'text-amber-600',
    title: 'Set up UK banking or digital payments',
    description:
      'Choose a UK bank, digital bank, or payment wallet so you can receive money, pay bills, and manage everyday spending.',
    phaseId: 'first-month',
    language: 'en',
    category: 'Banking',
    urgency: 'important',
    estimatedTime: '30–60 minutes',
    whyItMatters:
      'Newcomers do not always need to visit a bank branch to get started. Many banking and payment options can be opened or managed online. Having a reliable way to receive money, pay for services, and manage bills makes everyday settlement easier.',
    steps: [
      'Compare high-street banks, digital banks, and wallet options.',
      'Check what identity documents or address proof each option requires.',
      'Apply online where possible, or book an appointment if the provider requires one.',
      'Activate your card, app, or wallet once approved.',
      'Share your account details with your employer, university, or trusted services if needed.',
    ],
    officialLinks: [
      {
        label: 'How to open a bank account',
        url: 'https://www.moneyhelper.org.uk/en/everyday-money/banking/how-to-open-switch-or-close-your-bank-account',
        source: 'MoneyHelper',
      },
      {
        label: 'How to choose the right bank account',
        url: 'https://www.moneyhelper.org.uk/en/everyday-money/banking/how-to-choose-the-right-bank-account',
        source: 'MoneyHelper',
      },
      {
        label: 'Basic bank accounts',
        url: 'https://www.moneyhelper.org.uk/en/everyday-money/banking/basic-bank-accounts',
        source: 'MoneyHelper',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
  },
  {
    id: 'confirm-employer-payroll',
    label: 'Work',
    labelColourClass: 'text-blue-600',
    title: 'Confirm employer payroll setup',
    description:
      'Check that your employer has the right details to set you up for UK payroll.',
    phaseId: 'first-week',
    language: 'en',
    category: 'Employment',
    urgency: 'important',
    estimatedTime: '10–20 minutes',
    whyItMatters:
      'Skilled Worker visa holders usually need their employer to process payroll correctly so salary, tax, pension, and employment records are set up properly.',
    steps: [
      'Confirm your start date with your employer.',
      'Provide your right-to-work details if requested.',
      'Share your bank account details once available.',
      'Confirm your tax or payroll documents with HR.',
      'Keep copies of any employment onboarding confirmation.',
    ],
    officialLinks: [
      {
        label: 'Prove your right to work to an employer',
        url: 'https://www.gov.uk/prove-right-to-work',
        source: 'GOV.UK',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['skilled-worker'],
  },
  {
    id: 'complete-university-registration',
    label: 'Student',
    labelColourClass: 'text-purple-600',
    title: 'Complete university registration',
    description:
      'Complete your university enrolment and check any student visa compliance steps.',
    phaseId: 'arrival-day',
    language: 'en',
    category: 'Education',
    urgency: 'critical',
    estimatedTime: '20–45 minutes',
    whyItMatters:
      'Student visa holders usually need to complete university registration so their enrolment, attendance, and visa compliance records are correctly maintained.',
    steps: [
      'Check your university registration instructions.',
      'Upload or present the required identity documents.',
      'Confirm your term-time address if requested.',
      'Complete any visa or right-to-study checks.',
      'Save your registration confirmation.',
    ],
    officialLinks: [
      {
        label: 'Study in the UK on a Student visa',
        url: 'https://www.gov.uk/study-uk-student-visa',
        source: 'GOV.UK',
      },
    ],
    ukRegions: allUkRegions,
    visaTypes: ['student'],
  },
]