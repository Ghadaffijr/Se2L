import {
  allUkRegions,
  type ContentLanguage,
  type TaskRegion,
} from './settlementTasks'

export type SettlementResource = {
  id: string
  title: string
  description: string
  category: string
  language: ContentLanguage
  source: string
  url: string
  isOfficial: boolean
  visaTypes: string[]
  ukRegions: TaskRegion[]
}

export const settlementResources: SettlementResource[] = [
  {
    id: 'gp-registration',
    title: 'Register with a GP before you need care',
    description:
      'Official NHS guidance to help newcomers register with a GP early and understand how GP registration works.',
    category: 'Healthcare',
    language: 'en',
    source: 'NHS',
    url: 'https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/',
    isOfficial: true,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
    ukRegions: allUkRegions,
  },
  {
    id: 'national-insurance-number',
    title: 'National Insurance number',
    description:
      'Information about applying for a National Insurance number for work and tax records.',
    category: 'Work and Tax',
    language: 'en',
    source: 'GOV.UK',
    url: 'https://www.gov.uk/apply-national-insurance-number',
    isOfficial: true,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
    ukRegions: allUkRegions,
  },
  {
    id: 'uk-banking',
    title: 'UK banking or digital payments',
    description:
      'Trusted guidance on choosing a UK bank account, digital banking option, or payment setup for everyday spending.',
    category: 'Money',
    language: 'en',
    source: 'MoneyHelper',
    url: 'https://www.moneyhelper.org.uk/en/everyday-money/banking/how-to-open-switch-or-close-your-bank-account',
    isOfficial: true,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
    ukRegions: allUkRegions,
  },
  {
    id: 'school-admissions',
    title: 'School admissions for children',
    description:
      'Information for families who need to understand school placement and local council admissions.',
    category: 'Family',
    language: 'en',
    source: 'GOV.UK',
    url: 'https://www.gov.uk/schools-admissions',
    isOfficial: true,
    visaTypes: ['skilled-worker', 'student', 'spouse-family', 'graduate'],
    ukRegions: allUkRegions,
  },
]