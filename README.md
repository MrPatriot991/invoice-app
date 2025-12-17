# Invoice App

## Status

⚠️ The first working page is ready. Additional pages and functionality will be added gradually.

## Features Implemented

### Layout & UI

- Sidebar with:
  - Logo
  - Theme toggle (light/dark) with localStorage support and FOUC prevention
  - Avatar
- MainLayout component wrapping content
- Reusable `Button` component with variants
- Tailwind configured with custom colors and base styles

### Routing

- React Router setup
- Invoice list route
- Invoice details route
- Scroll to top on route change

### Invoice Management

- `InvoicesRoute` integrated into the app
- `InvoiceList` component displaying invoices
- `InvoiceCard` component with styling and `StatusBadge`
- Mock invoice data for testing
- `New Invoice` button in the header
- Status filter functionality
- TypeScript type definitions for invoices

### Invoice Details

- Invoice details page
- Go back navigation button
- Header with invoice status and action buttons
- Client and sender information section
- Items information section
- Mobile footer with action buttons
- Performant footer visibility handling on scroll

### Modals

- Global modal system using React Context
- `ModalProvider` and `useModal` hook
- `ModalRoot` rendered via React Portal
- Support for different modal positions (center / left)
- Sidebar offset support
- Invoice deletion confirmation modal

## Installation

```bash
npm install
npm run dev
```
