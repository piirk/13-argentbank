# Argent Bank

Argent Bank is a web application for managing bank accounts. It allows users to view their account details, update their profile, and perform various banking operations.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- User authentication (login/logout)
- View account details
- Update user profile
- Responsive design

## Technologies

- React
- Redux Toolkit
- Ant Design
- Axios
- Vite
- TypeScript
- SCSS

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/argent-bank.git
cd argent-bank
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add the following environment variable:

```plaintext
VITE_API_URL=http://localhost:3001/api/v1
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:3000`.

### Scripts

- `npm run dev` or `yarn dev`: Start the development server
- `npm run build` or `yarn build`: Build the project for production
- `npm run preview` or `yarn preview`: Preview the production build
- `npm run lint` or `yarn lint`: Run ESLint to check for linting errors

### Project Structure

```plaintext
src/
├── app/
│   ├── redux/
│   │   ├── actions/
│   │   │   └── authActions.ts
│   │   ├── slices/
│   │   │   └── authSlice.ts
│   │   └── store.ts
│   ├── routes/
│   │   ├── Error404.tsx
│   │   ├── index.tsx
│   │   └── PrivateRoute.tsx
│   └── App.tsx
├── assets/
│   └── img/
│       ├── argentBankLogo.png
│       ├── bank-tree.jpeg
│       ├── icon-chat.png
│       ├── icon-money.png
│       └── icon-security.png
├── common/
│   ├── components/
│   │   ├── AppFooter.tsx
│   │   ├── AppHeader/
│   │   │   ├── AppHeader.module.scss
│   │   │   └── AppHeader.tsx
│   │   └── AppLayout.tsx
│   └── models/
│       └── User.ts
├── features/
│   ├── home/
│   │   ├── HomePage.tsx
│   │   └── components/
│   │       ├── Features/
│   │       │   ├── Features.module.scss
│   │       │   └── Features.tsx
│   │       └── Hero/
│   │           ├── Hero.module.scss
│   │           └── Hero.tsx
│   ├── login/
│   │   ├── LoginPage.module.scss
│   │   ├── LoginPage.tsx
│   │   └── components/
│   │       └── LoginForm.tsx
│   └── profile/
│       ├── ProfilePage.module.scss
│       ├── ProfilePage.tsx
│       └── components/
│           └── AccountSection/
│               ├── AccountSection.module.scss
│               └── AccountSection.tsx
├── services/
│   └── axiosConfig.ts
├── types/
│   └── declarations.d.ts
├── index.scss
├── main.tsx
└── vite-env.d.ts
```

### Environment Variables

The project requires the following environment variables:

- `VITE_API_URL`: The base URL for the API

### License

This project is licensed under the MIT License.
