# Invoice App

[Live Demo on Vercel](https://invoice-app-mcw5.vercel.app/)

## Status

✅ **Stable / MVP (Minimum Viable Product)**

- Frontend and Backend are fully integrated.
- Core CRUD operations are stable and tested.
- UI/UX refinements are ongoing.

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

### Quick Start

1. **Install dependencies:**

   ```bash
   npm install

   ```

2. **Configure Environment Variables:**
   Create a .env file in the root directory and add the production API URL:
   env
   VITE_API_URL=https://my-invoice-api.onrender.com

3. **Run the Development Server:**
   npm run dev

4. **Local API (Optional):**
   If you wish to run the mock database on your own machine:
   - 1. Run npm run api in a separate terminal.
   - 2. Ensure your .env is set to localhost:3000.

### Deployment

The application is deployed using a modern CI/CD pipeline:

- **Frontend:** Hosted on **Vercel**, providing fast global delivery and automatic deployments from the GitHub main branch.
- **Backend:** The REST API is hosted on **Render**.
  - _Note:_ The API uses a free instance that "spins down" after 15 minutes of inactivity. When you first access the app, please allow 30–50 seconds for the server to "wake up" and fetch the data.
