# Se2L

A digital settlement companion for newcomers moving to the UK.

Se2L helps users understand what they need to do before and after arrival, what is urgent, what is coming next, and where to find trusted guidance.

## Overview

Se2L provides a personalised settlement journey based on a newcomer’s visa type, UK arrival date, UK region, preferred language, and dependant status.

The platform gives users a clear settlement dashboard with their current phase, relevant tasks, task progress, trusted guidance links, and settlement resources.

It also includes a read-only App Manager preview for reviewing settlement tasks, resources, content readiness, official links, language coverage, visa type coverage, and UK region applicability.

## Features

* Newcomer onboarding
* Visa type selection
* UK arrival date selection
* UK region selection
* Preferred language capture
* Dependant selection
* Dynamic settlement phase calculation
* Settlement roadmap
* Personalised settlement dashboard
* Due now, coming soon, past phase, and completed task grouping
* Task completion tracking
* Task category and urgency tagging
* Task detail pages with step-by-step guidance
* Trusted official links for key tasks
* Optional video support field
* Resource library with search and category filter
* Clickable trusted guidance links
* App Manager preview
* Content readiness review
* Task and resource language field for future translations
* UK region applicability for tasks and resources
* Super Admin preview

## Settlement Phases

Se2L currently supports the following settlement phases:

* Pre-arrival
* Arrival Day
* First Week
* First Month
* 3–6 Months
* 6–18 Months
* Year 2+

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* LocalStorage

## Project Structure

```text
se2l-platform/
├── public/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── DashboardTaskCard.tsx
│   │   │   └── JourneyPhaseTimeline.tsx
│   │   ├── landing/
│   │   │   ├── HeroSection.tsx
│   │   │   └── PreviewTaskCard.tsx
│   │   └── layout/
│   │       ├── AppHeader.tsx
│   │       └── AppLayout.tsx
│   ├── data/
│   │   ├── journeyPhases.ts
│   │   ├── resources.ts
│   │   └── settlementTasks.ts
│   ├── pages/
│   │   ├── AppManagerPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── LandingPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── OnboardingPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── SuperAdminPage.tsx
│   │   └── TaskDetailPage.tsx
│   ├── utils/
│   │   ├── journeyStorage.ts
│   │   ├── phaseCalculator.ts
│   │   └── taskProgressStorage.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── README.md

