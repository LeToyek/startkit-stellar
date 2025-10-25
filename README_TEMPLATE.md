# StartKit - Production-Ready SAAS Template

A modern, scalable SAAS frontend template built with React, TypeScript, Tailwind CSS, and Zustand.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS & shadcn/ui
- 🔐 **Authentication Ready** - Login, Register, Password Reset pages
- 🛡️ **RBAC Structure** - Role-based access control architecture
- 📱 **PWA Support** - Installable, offline-capable progressive web app
- 🎯 **SEO Optimized** - Meta tags, sitemap, and robots.txt included
- 🔧 **TypeScript** - Fully typed for better DX
- 🗂️ **Modular Architecture** - Scalable folder structure
- 📊 **State Management** - Zustand for global state
- 🎭 **Animations** - Smooth transitions and micro-interactions

## 📦 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** Zustand
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **HTTP Client:** Fetch API (abstracted)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Sidebar, Footer)
│   ├── ui/              # shadcn/ui components
│   └── ProtectedRoute.tsx
├── pages/
│   ├── auth/            # Authentication pages
│   ├── Dashboard.tsx
│   ├── Index.tsx
│   └── NotFound.tsx
├── store/               # Zustand stores
│   ├── authStore.ts
│   └── uiStore.ts
├── lib/
│   ├── hooks/           # Custom hooks (RBAC)
│   ├── api.ts           # API utilities
│   └── utils.ts         # Helper functions
└── App.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:8080](http://localhost:8080)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## 🎨 Design System

The design system is defined in `src/index.css` and `tailwind.config.ts`. All colors use HSL format and semantic tokens for consistency.

### Key Features:
- Glassmorphism utility classes
- Gradient text utilities
- Custom animations
- Dark mode support

## 🔐 Authentication

The template includes a complete authentication structure with:

- Login page (`/auth/login`)
- Registration page (`/auth/register`)
- Forgot password page (`/auth/forgot-password`)
- Protected routes
- Persistent auth state with Zustand

**Note:** Auth currently uses mock data. Replace with your backend API.

## 🛡️ RBAC (Role-Based Access Control)

RBAC structure is ready with three default roles:

- `admin` - Full access
- `moderator` - Moderate access
- `user` - Basic access

Use the `useRBAC` hook to check permissions:

```typescript
import { useRBAC } from '@/lib/hooks/useRBAC';

function MyComponent() {
  const { isAdmin, hasPermission } = useRBAC();
  
  if (!hasPermission('write')) {
    return <AccessDenied />;
  }
  // ...
}
```

## 📱 PWA Configuration

PWA is pre-configured with:

- Service worker for offline caching
- App manifest with icons
- Install prompts
- Offline fallback

Icons are located in `public/` directory.

## 🔌 API Integration

API utilities are in `src/lib/api.ts`. Configure your backend URL in `.env`:

```
VITE_API_URL=https://api.yoursite.com
```

Example usage:

```typescript
import { api } from '@/lib/api';

const data = await api.get('/users');
const user = await api.post('/users', { name: 'John' });
```

## 🎯 SEO

SEO meta tags are configured in `index.html`. Update:

- Title
- Description
- OG tags
- Twitter cards
- Canonical URLs

Sitemap is available at `/sitemap.xml`.

## 📊 Analytics & Monitoring

Placeholders for analytics integration:

- Google Analytics
- Sentry error tracking
- Custom event tracking

Configure in `.env` and uncomment relevant code.

## 🚢 Deployment

Build the production bundle:

```bash
npm run build
```

Deploy the `dist/` folder to your hosting provider (Vercel, Netlify, etc.).

## 📝 Customization

### Update Branding

1. Change "StartKit" in components
2. Update colors in `src/index.css`
3. Replace PWA icons
4. Update meta tags in `index.html`

### Add New Pages

1. Create page in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `Sidebar.tsx`

## 🤝 Contributing

This is a template. Fork it and make it your own!

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

---

**Happy Building! 🚀**
