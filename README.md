# RCUCOE Website

A modern, responsive single-page application built for RCUCOE (Rajarshi Chhatrapati Shahu Maharaj College of Engineering) featuring a clean and professional design with smooth animations and interactive components.
## Features

- **Modern UI/UX**: Built with React and shadcn/ui components for a polished, professional look
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Fast Performance**: Powered by Vite for lightning-fast development and build times
- **Type-Safe**: Written in TypeScript for better code quality and developer experience
- **Rich Components**: Includes multiple sections:
  - Landing page with hero section
  - President's message
  - Team showcase
  - Team photo gallery
  - Events listing
  - Services overview
  - About section
  - Contact form
  - Footer with links

## Tech Stack

- **Frontend Framework**: [React 18.3.1](https://react.dev/)
- **Build Tool**: [Vite 6.3.6](https://vitejs.dev/)
- **Language**: TypeScript
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
  - [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- **Styling**: Tailwind CSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Additional Libraries**:
  - `react-hook-form` - Form handling
  - `recharts` - Data visualization
  - `embla-carousel-react` - Carousel functionality
  - `next-themes` - Dark mode support
  - `sonner` - Toast notifications

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- npm (comes with Node.js) or yarn

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shreyu05/Rcucoe.git
   cd Rcucoe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will open automatically at [http://localhost:3000](http://localhost:3000)

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `build/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Rcucoe/
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Events.tsx       # Events listing
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Landing.tsx      # Landing page
│   │   ├── President.tsx    # President's message
│   │   ├── Services.tsx     # Services section
│   │   ├── Team.tsx         # Team showcase
│   │   └── TeamPhoto.tsx    # Team photo gallery
│   ├── styles/              # Global styles
│   ├── guidelines/          # Development guidelines
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global CSS with Tailwind
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── package.json             # Dependencies and scripts
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation

```

## Available Components

The project includes a comprehensive set of UI components from shadcn/ui:

- Accordion, Alert Dialog, Avatar
- Buttons, Cards, Checkboxes
- Dialogs, Dropdowns, Forms
- Menus, Modals, Navigation
- Progress bars, Sliders, Switches
- Tabs, Tooltips, and more

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Configuration

### Vite Configuration

The project uses custom Vite configuration (`vite.config.ts`) with:
- React SWC plugin for faster builds
- Path aliases for cleaner imports
- Custom build output directory (`build/`)
- Development server on port 3000

### Path Aliases

Use the `@` alias for cleaner imports:

```typescript
import { Button } from '@/components/ui/button'
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Authors

- **Shreyu05** - [GitHub Profile](https://github.com/Shreyu05)

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for the icon set
- [Vite](https://vitejs.dev/) for the blazing fast build tool

## Contact

For questions or support, please refer to the Contact section on the website.

---

**Built with ❤️ for RCUCOE**
