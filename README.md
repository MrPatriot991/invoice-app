# Invoice App

## Status

⚠️ In progress

- Invoice list and details pages are fully functional.
- **New Feature**: Invoice creation and form validation are implemented.
  Additional features are in development.

## Features Implemented

### Layout & UI

- Sidebar with:
  - Logo
  - Theme toggle (light/dark) with localStorage support and FOUC prevention
  - Avatar
- MainLayout component wrapping content
- Reusable UI components:
  - Button with explicit TypeScript types
  - Input with correct forwardRef usage
- Tailwind configured with custom colors and base styles

### Routing

- React Router setup
- Invoice list route
- Invoice details route
- Local selectors used inside routes instead of prop drilling
- Scroll to top on route change

### Invoice Management

- Full invoice CRUD flow:
  - Fetch invoices
  - Create new invoice
  - Update existing invoice
  - Update invoice status (Mark as Paid)
- Dynamic invoice count displayed in the Header
- Status filter functionality
- Strong TypeScript typings for invoices

### Invoice Details

- Invoice details page
- Go back navigation button
- Header with invoice status and action buttons
- Client and sender information section
- Items information section
- Mobile footer with action buttons
- Performant footer visibility handling on scroll

### Error Handling

- Global ErrorBoundary for invoice routes
- Reusable ErrorDisplay component
- Graceful UI fallback for runtime errors

### Modals

- Global modal system using React Context
- `ModalProvider` and `useModal` hook
- `ModalRoot` rendered via React Portal
- Support for different modal positions (center / left)
- Sidebar offset support
- Invoice deletion confirmation modal
- Create/Edit invoice side-drawer modal
- Body scroll locking (iOS-safe) when modals are active.

### State Management & Data Fetching

- **Redux Toolkit Integration**: Full store setup for invoice management.
- **Async Logic**: Implemented Async Thunks for fetching, creating, and updating invoice status (Mark as Paid).
- **Advanced Selectors**:
  - Memoized sorting (newest first) to ensure stable references and performance.
  - Efficient filtering by status using `reselect`.
- **API Layer**: Integration with `json-server` for persistent data storage.

### Form Handling (Create/Edit Invoice)

- **React Hook Form + Zod**: Complete form management with strict schema validation.
- **Complex Form Architecture**:
  - Refactored `ItemsSection` using **composition** and `useFieldArray` for dynamic item lists.
  - Custom form components: `Input`, `Select`, `SelectDatePicker` (using `react-datepicker`).
  - Specialized sections: `BillToSection`, `BillFromSection`, `PaymentTermsSection`.
- **Real-time Calculations**: Automatic price and total calculation for items with fallback values.
- **UX Improvements**:
  - Prevented layout shift on DatePicker toggle using stable scrollbar gutters.
  - Safe body freezing for modals on iOS.
  - Focus management and performance optimization in dynamic lists.
  - Fixed duplicate keys during invoice form initialization
  - Improved draft saving logic

## Quick Start

1. `npm install` — install dependencies.
2. Create `.env` file with `VITE_API_URL=http://localhost:3000`.
3. `npm run api` — start mock database (Terminal 1).
4. `npm run dev` — start frontend (Terminal 2).
