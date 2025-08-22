# ToolNest - Professional Calculator Tools

A comprehensive suite of calculator tools built with Next.js, React, and Tailwind CSS, featuring Firebase integration and Google AdSense monetization.

## Features

- **BMI Calculator** - Calculate Body Mass Index with health category recommendations
- **Age Calculator** - Find exact age in years, months, and days
- **Currency Converter** - Real-time currency conversion with live exchange rates
- **Responsive Design** - Mobile-friendly interface with clean, professional styling
- **Firebase Integration** - Ready for user authentication and data storage
- **AdSense Integration** - Monetization-ready with ad placement components

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Backend**: Firebase (Firestore, Authentication)
- **Deployment**: Vercel/Firebase Hosting
- **APIs**: ExchangeRate-API for currency conversion

## Getting Started

### Prerequisites

- Node.js 18+ 
- Firebase project (optional)
- Google AdSense account (optional)

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env.local`:
   \`\`\`
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   \`\`\`
4. Run the development server: `npm run dev`

### Firebase Setup (Optional)

1. Create a Firebase project
2. Enable Firestore and Authentication
3. Update Firebase configuration in `lib/firebase.js`
4. Deploy Firestore rules from `firestore.rules`

### AdSense Setup (Optional)

1. Get approved for Google AdSense
2. Update the AdSense client ID in `components/adsense-banner.tsx`
3. Replace placeholder ad slots with your actual ad unit IDs

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── (calculators)/     # Calculator pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── calculator-layout.tsx
│   ├── adsense-banner.tsx
│   └── ...
├── lib/                  # Utilities and configurations
│   └── firebase.js       # Firebase configuration
└── public/              # Static assets
\`\`\`

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Build the project: `npm run build`
3. Deploy: `firebase deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.
