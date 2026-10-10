# ⚡ Load Shedding & Power Outage Management System — Frontend

A modern, responsive web application designed to help users monitor load-shedding schedules, report power outages, manage electricity distribution, and improve communication between power authorities and consumers in Bangladesh.

The frontend provides role-based dashboards for administrators, power authorities, distributor managers, power operators, technicians, and customers.

## 🚀 Features

- **Authentication & Authorization** — Secure login, Google authentication, user profile management, and role-based access control.
- **Role-Based Dashboards** — Dedicated dashboards and management interfaces for different user roles.
- **Load Shedding Schedules** — View scheduled outages and their expected start and end times.
- **Emergency Outage Reports** — Report unexpected power outages and monitor their status.
- **Power Infrastructure Management** — Manage distribution zones, substations, feeders, and service areas.
- **Subscription Management** — Access premium services and submit eligible complaints through subscription features.
- **Payment Integration** — User-friendly payment flow with success and failure pages.
- **Notifications** — Receive relevant outage and schedule updates via email notifications.
- **Responsive UI** — Optimized for desktop, tablet, and mobile devices.
- **Form Validation** — Type-safe form handling and validation.
- **API Integration** — Communicate with the backend REST API.

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Server State Management:** TanStack Query
- **API Client:** ofetch
- **Form Management:** TanStack Form
- **Validation:** Zod
- **Authentication:** Cookie-based authentication and Google OAuth
- **Notifications:** Email notifications
- **Package Manager:** npm

## 👥 User Roles

| Role                  | Responsibilities                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `ADMIN`               | Manage users, roles, and overall system operations                                                                 |
| `POWER_AUTHORITY`     | Monitor and create national power status, distribute power into the distributor companies, and ensure power supply |
| `DISTRIBUTOR_MANAGER` | Manage substations, feeders, accept or reject load shedding schedules and distribute power to the substations      |
| `POWER_OPERATOR`      | Handle operational tasks and load-shedding schedules                                                               |
| `TECHNICIAN`          | Handle assigned maintenance and outage-resolution tasks                                                            |
| `CUSTOMER`            | View schedules, report outages, and access available services                                                      |

_Access to features and dashboards depends on the permissions configured in the backend._

## 📋 Prerequisites

Make sure you have the following installed:

- Node.js (>= 18.0.0)
- npm
- Git
- A running instance of the backend API

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

### 2. Navigate to the frontend directory

```bash
cd loadshedding_power_management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the frontend root directory.

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

Replace the URL with your deployed backend API URL when running the production application.

**Important:** Use `NEXT_PUBLIC_API_BASE_URL` only for the API base URL intended to be exposed to the browser. Never place secrets, private API keys, or sensitive credentials in `NEXT_PUBLIC_` variables.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for production

```bash
npm run build
```

### 7. Run the production server locally

```bash
npm run start
```

## 🔐 Authentication & Access Control

The application uses authentication and role-based authorization to control access to protected pages.

- Users can sign in using the available authentication methods.
- User profile information is retrieved from the backend.
- Protected routes verify authentication before displaying restricted content.
- Role-based guards restrict access to role-specific pages.
- Authentication cookies are handled according to the backend authentication strategy.

**Security note:** Frontend route guards improve the user experience but are not a substitute for backend authorization. Every protected API endpoint must enforce authentication and permissions on the server.

## 🔌 API Integration

The frontend communicates with the backend through REST API endpoints.

The API client is configured to centralize requests and handle common settings such as the base URL and credentials.

Typical API operations include:

- Authentication and user profiles
- User and role management
- Distribution companies, substations, and feeders
- Load-shedding schedules
- Emergency outage reports
- Notifications
- Subscriptions and payments

Actual endpoints and request formats are defined by the backend API.

## 🎨 UI & User Experience

The interface is built with reusable components and responsive layouts.

- Consistent UI using shadcn/ui
- Responsive dashboard layouts
- Reusable tables, forms, dialogs, and drawers
- Loading, error, empty, and success states
- Form validation with meaningful error messages
- Accessible interactive components

## 🚀 Deployment

The frontend can be deployed to platforms that support Next.js, such as Vercel.

### Deployment checklist

1. Push the frontend code to GitHub.
2. Import the repository into your deployment platform.
3. Configure the production environment variables.
4. Set `NEXT_PUBLIC_API_BASE_URL` to the deployed backend API URL.
5. Configure backend CORS to allow the deployed frontend origin.
6. Verify authentication cookies, HTTPS, and cross-origin credential settings.
7. Build and deploy the application.
8. Test authentication, protected routes, API requests, and payment redirects.

## 🔒 Environment Variables

| Variable                   | Description                 |
| -------------------------- | --------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the backend API |

Do not commit `.env.local` or any file containing secrets to Git.

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Test the affected functionality.
5. Submit a pull request with a clear description.

## 📄 License

Add the appropriate license information here if the project is distributed under an open-source license.

---

**Built to improve power outage awareness, electricity distribution management, and communication between power authorities and consumers in Bangladesh.**
