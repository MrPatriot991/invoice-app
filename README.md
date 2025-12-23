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
- Support for "Create Invoice" side-drawer modal.
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

## Installation

```bash
npm install
npm run dev
```
