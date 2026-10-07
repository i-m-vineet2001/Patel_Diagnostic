# Patel Diagnostic (Patel_Diagnostic)

A modern, responsive, frontend-only web application built for healthcare diagnostics, patient bookings, and medical health packages.

---

## 🚀 Key Features

* **Modern UI & Components**: Built using Radix UI primitives and Tailwind CSS styled with a clean custom theme configuration[cite: 1, 8].
* **Interactive Dashboard & Admin Panel**: Client-side routing layout equipped with dedicated admin views and user management[cite: 3].
* **Dynamic Health Packages**: Fully reactive service catalogs and diagnostic health checkup cards[cite: 3].
* **Smooth Animations**: Integrated with `framer-motion` for fluid micro-interactions and transitions.
* **Robust Authentication Flow**: Complete client-side auth architecture including Login, Register, Forgot/Reset Password, and Protected Route wrappers[cite: 3].
* **Form Validation & State Management**: Powered by React Router (v7), TanStack React Query, and custom component hooks[cite: 3, 5, 6].

---

## 📁 Project Structure

```text
Patel_Diagnostic/
├── public/                 # Static assets (favicons, icons)[cite: 3]
├── src/
│   ├── api/                # Mock API client / base clients[cite: 3]
│   ├── assets/             # Images and graphic assets[cite: 3]
│   ├── components/         # Reusable UI components & site sections[cite: 3]
│   │   ├── site/           # Landing page elements (Hero, Packages, About, etc.)[cite: 3]
│   │   └── ui/             # Radix UI design system wrappers[cite: 3]
│   ├── hooks/              # Custom React hooks[cite: 3]
│   ├── lib/                # Core context providers, query clients, and utils[cite: 3]
│   ├── pages/              # Top-level route views (Home, Admin, Login, Register)[cite: 3]
│   ├── App.jsx             # Root component & route declarations[cite: 3]
│   ├── main.jsx            # Application entry point[cite: 3]
│   └── index.css           # Global Tailwind and CSS variable definitions[cite: 3]
├── tailwind.config.js      # Tailwind CSS theme configurations[cite: 8]
├── vite.config.js          # Vite build and path alias settings[cite: 9]
└── package.json            # Project dependencies and script configurations
🛠️ Tech StackCore Framework: React 18   Build Tool: Vite (with Oxc plugin)   Styling: Tailwind CSS & Tailwindcss Animate   UI Primitives: Radix UI components[cite: 5]Routing: React Router DOM v7   State & Data Fetching: TanStack React Query   Animations: Framer Motion   Linting: ESLint (Flat config setup)   ⚙️ Getting StartedPrerequisitesNode.js (>= 18.0.0 recommended)npm or yarnInstallationClone the repository:Bashgit clone [https://github.com/i-m-vineet2001/Patel_Diagnostic.git](https://github.com/i-m-vineet2001/Patel_Diagnostic.git)
cd Patel_Diagnostic
Install dependencies:Bashnpm install
Configure environment variables (if needed):Create a .env file in the root directory:Code snippetVITE_PUBLIC_URL=http://localhost:5173
Run the development server:Bashnpm run dev
Open http://localhost:5173 to view it in your browser.🧪 Scripts & Quality Checksnpm run dev — Starts the local Vite development server.   npm run build — Bundles the app for production static output.   npm run lint — Runs ESLint checks across codebase files.   npm run review-check — Executes both linter rules and TypeScript type checking (tsc --noEmit).   npm run preview — Locally preview the production build[cite: 6].🚀 Production Roadmap & PlaceholdersTo further scale and mature this frontend application, the following production-level enhancements are planned:[ ] API Integration Layer: Connect the frontend UI components to a live production REST/GraphQL backend or serverless functions.[ ] Automated CI/CD: Implement GitHub Actions workflows for continuous integration, automated lint checks, and static deployment (e.g., Vercel / Netlify).[ ] Testing Suite: Setup component and unit testing using Vitest and React Testing Library.[ ] Performance Optimization: Implement code-splitting, lazy-loading for heavy routes, and image optimization to maximize Core Web Vitals.[ ] State Persistence: Integrate advanced client-side caching strategies and persistent user preference stores.📄 LicenseThis project is open-source and available under the MIT License.