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

### Invoice Management

- `InvoicesRoute` integrated into the app
- `InvoiceList` component displaying invoices
- `InvoiceCard` component with styling and `StatusBadge`
- Mock invoice data for testing
- `New Invoice` button in the header
- Status filter functionality
- TypeScript type definitions for invoices

## Installation

```bash
npm install
npm run dev
```
