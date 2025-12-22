# React Vite Demo

A React application demo showcasing best practices and popular technologies, built with Vite and following the Feature-Sliced Design (FSD) architecture.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🔐 **Auth0** - Authentication and authorization
- 🌍 **i18n** - Internationalization with English and French support
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **DaisyUI** - Component library built on Tailwind CSS
- 📐 **Feature-Sliced Design (FSD)** - Scalable architecture methodology
- 🔍 **Steiger** - FSD architecture linter and validator
- 🛡️ **TypeScript** - Type-safe development
- 🧭 **React Router** - Client-side routing with route guards
- 🎭 **Theme Support** - Light/Dark theme switching

## 📋 Prerequisites

- **Node.js** (version specified in `.node-version`)
- **pnpm** 10.25.0 (package manager)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-demo
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Copy `.env example` to `.env.local`
   - Fill in your Auth0 credentials:
```env
VITE_AUTH0_DOMAIN=your-domain.eu.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
```

## 🏃 Running the Application

### Development Server
```bash
pnpm dev
```
Starts the development server, typically at `http://localhost:5173`

### Build for Production
```bash
pnpm build
```
Compiles TypeScript and builds the application for production.

### Preview Production Build
```bash
pnpm preview
```
Preview the production build locally.

### Linting
```bash
pnpm lint
```
Runs ESLint to check and fix code quality issues.

### FSD Architecture Validation
```bash
pnpm steiger
```
Validates the project structure against Feature-Sliced Design principles.

## 📁 Project Structure

This project follows the **Feature-Sliced Design (FSD)** architecture:

```
src/
├── app/              # Application initialization, providers, routing
│   ├── providers/    # Context providers (Auth0, Theme)
│   ├── router/       # Route configuration and guards
│   └── styles/       # Global styles
├── features/         # Business features (Auth)
├── pages/            # Page components (Dashboard, Login, Settings)
├── shared/           # Shared utilities, configs, UI components
│   ├── config/       # Configuration (i18n, routing)
│   ├── model/        # Business logic models
│   └── ui/           # Reusable UI components
└── widgets/          # Complex UI blocks (Header, InfoBanner, etc.)
```

### FSD Layers Explained

- **app/** - Application setup, providers, and routing
- **features/** - Business features with their own logic
- **pages/** - Full page components that compose widgets and features
- **shared/** - Reusable code across the application
- **widgets/** - Complex UI blocks that combine features

## 🧩 Technologies

### Core
- **React 19.2.3** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite** (rolldown-vite) - Build tool

### Routing & Navigation
- **React Router DOM 7.10.1** - Client-side routing
- Route guards for authentication

### Authentication
- **@auth0/auth0-react 2.11.0** - Auth0 React SDK

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS
- **DaisyUI 5.5.14** - Component library

### Internationalization
- **i18next 25.7.3** - i18n framework
- **react-i18next 16.5.0** - React bindings
- **i18next-browser-languagedetector 8.2.0** - Language detection

### Architecture & Quality
- **Steiger 0.5.11** - FSD architecture linter
- **@feature-sliced/steiger-plugin 0.5.7** - FSD plugin for Steiger
- **ESLint** - Code linting with React-specific rules

## 🔐 Authentication

The application uses Auth0 for authentication. Protected routes are wrapped with `AuthGuard`, while public routes use `GuestGuard` to redirect authenticated users.

### Available Routes
- `/login` - Login page (guest only)
- `/dashboard` - Dashboard (authenticated only)
- `/settings` - Settings page (authenticated only)

## 🌍 Internationalization

The application supports multiple languages:
- English (en) - Default
- French (fr)

Language preference is detected from browser settings and stored in localStorage. Users can switch languages via the language switcher component.

## 🎨 Theming

The application supports light and dark themes. Theme preference is persisted and can be switched via the theme switcher component.

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm steiger` | Validate FSD architecture |
