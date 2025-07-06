# EduShare Frontend

A modern React-based frontend for the EduShare platform, built with Tailwind CSS for a beautiful and responsive user interface.

## 🚀 Features

- **Modern UI/UX**: Clean and intuitive design with smooth animations
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **React Router**: Client-side routing for seamless navigation
- **Component-Based Architecture**: Modular and maintainable code structure

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#6299ff to #47669e)
- **Secondary**: Yellow gradient (#ded37e to #987a27)
- **Background**: Dark theme (#162138, #0D172A)
- **Text**: White and gray variations for optimal contrast

### Typography
- **Font Family**: Jost (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Gradient Text Effects**: Applied to brand elements

### Components
- **Navigation Bar**: Fixed header with logo and auth buttons
- **Hero Section**: Landing page with course showcase
- **Auth Forms**: Login and registration with gradient cards
- **Course Grid**: Responsive card layout for course browsing
- **Footer**: Social media links and branding

## 🛠️ Tech Stack

- **React 19.1.0**: Latest React with hooks and modern features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Framer Motion**: Animation library (available for future enhancements)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── NavigationBar.jsx      # Main navigation component
│   ├── HeroSection.jsx        # Landing page hero section
│   ├── login.jsx              # Login form component
│   ├── Register.jsx           # Registration form component
│   ├── SearchCourses.jsx      # Course browsing component
│   └── footer.jsx             # Footer component
├── assets/                    # Images and static assets
├── routes/                    # Route definitions
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles and Tailwind imports
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach with breakpoints at `md:` (768px) and `lg:` (1024px)
- Flexible grid layouts that adapt to screen size
- Optimized typography scaling
- Touch-friendly interactive elements

### Performance Optimizations
- Tailwind CSS purging for minimal bundle size
- Optimized images with proper aspect ratios
- Smooth transitions and hover effects
- Efficient component re-rendering

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast color schemes

## 🎨 Customization

### Tailwind Configuration
The project uses a custom Tailwind configuration (`tailwind.config.js`) with:
- Custom color palette matching the design system
- Extended spacing utilities
- Custom gradient definitions
- Jost font family integration

### Adding New Components
1. Create a new component file in `src/components/`
2. Use Tailwind utility classes for styling
3. Follow the existing component patterns
4. Add responsive design considerations

### Styling Guidelines
- Use Tailwind utility classes for all styling
- Maintain consistent spacing using the design system
- Follow the established color palette
- Ensure responsive behavior on all screen sizes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the established patterns
4. Test on multiple screen sizes
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern educational platforms
- Tailwind CSS for the excellent utility-first framework
- React community for the robust ecosystem
- Jost font family for beautiful typography
