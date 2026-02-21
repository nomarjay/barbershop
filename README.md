# ✂️ Style Cutz Barbershop — Website Redesign

A modern, responsive React website built for **Style Cutz Barbershop** in Orange Park, FL. This project was a full redesign of the shop's outdated static site — rebuilt from the ground up with a clean aesthetic, mobile-first layout, and a structure that's easy for the new owner to customize.

---

## 🧭 Project Overview

The original Style Cutz website was static, visually outdated, and not optimized for modern browsers or mobile devices. Under new ownership, the shop needed a fresh digital presence that matched the quality of their in-person experience.

This redesign delivers:
- A modern, dark-themed aesthetic consistent with premium barbershop branding
- Full mobile responsiveness across all major browsers
- A component-driven architecture that makes future edits simple — no deep React knowledge required
- Placeholder content and imagery ready for the owner to swap in their own photos and details

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React** | Component-based UI |
| **React Router DOM** | Client-side page routing |
| **Bootstrap 5** | Responsive grid & utility classes |
| **Font Awesome** | Icons (scissors, phone, location, etc.) |

---

## 📁 Project Structure

```
src/
├── assets/              # Images used throughout the site
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Sticky top nav with mobile hamburger menu
│   ├── Footer.jsx       # Links, contact info, social media
│   ├── Hero.jsx         # Full-width hero with background image + CTA buttons
│   ├── ServicesSection.jsx   # Card grid for services
│   ├── PricingSection.jsx    # Price list with side image
│   ├── GallerySection.jsx    # Responsive image grid
│   ├── ContentSection.jsx    # Flexible text + image layout block
│   └── ContactSection.jsx    # Contact info + embedded Google Map
├── pages/
│   ├── Home.jsx         # Landing page with all key sections
│   ├── Services.jsx     # Full services breakdown
│   ├── About.jsx        # Shop story, founder bio, culture section
│   ├── Gallery.jsx      # Photo portfolio grid
│   └── BookNow.jsx      # Appointment booking form
└── App.js               # Router setup and page layout
```

---

## 📄 Pages

### 🏠 Home
The main landing page featuring a hero banner, services overview, pricing list, gallery preview, and a brand identity content block.

### ✂️ Services
A detailed breakdown of all barbering services (fades, beard grooming, razor shaves, combo cuts) with feature lists and imagery.

### 👤 About
The shop's origin story, founder profile for Marcus "Clipper King" Howard, a shop interior section, and a culture block highlighting the barbershop's values.

### 🖼️ Gallery
A full-width photo portfolio showcasing cuts, fades, beard work, and razor finishes.

### 📅 Book Now
A booking form collecting name, phone, service selection, preferred date/time, and optional notes. Currently front-end only — ready to connect to a backend or third-party booking service.

---

## ⚙️ Key Components

**`Hero.jsx`** — Reusable hero section accepting a background image, title, subtitle, and up to two CTA buttons with custom link routing.

**`ContentSection.jsx`** — Flexible layout block that supports left/right image alignment or a stacked vertical layout. Accepts any number of subtitle paragraphs.

**`ServicesSection.jsx`** — Renders a responsive card grid from a services data array. Each card supports an image, description, and feature list.

**`PricingSection.jsx`** — Displays a clean price list alongside a feature image. Prices are passed as props for easy updates.

**`GallerySection.jsx`** — Renders a responsive image grid from an array of image objects.

**`ContactSection.jsx`** — Displays location, phone, hours, email, and walk-in policy alongside an embedded Google Maps iframe.

---

## 🎨 Design Decisions

- **Dark color scheme** (`#0a0c10`, `#111318`) chosen to match the premium, modern feel of a high-end barbershop
- **Bootstrap grid** keeps layout consistent and responsive without heavy custom CSS
- **Component-driven design** means each section of every page can be updated independently by swapping props — no restructuring needed
- **Sticky navbar** with mobile hamburger menu ensures navigation is accessible on all screen sizes
- **Font Awesome icons** used throughout for a polished, professional look

---

## 🔧 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## 📝 Owner Customization Guide

The site is designed as a ready-to-hand-off template. Here's what the new owner will likely want to update:

| What to change | Where to find it |
|---------------|-----------------|
| Phone number | `ContactSection.jsx`, `Footer.jsx` |
| Email address | `ContactSection.jsx`, `Footer.jsx` |
| Address / map | `ContactSection.jsx` (update Google Maps embed URL) |
| Business hours | `ContactSection.jsx` |
| Service prices | `Home.jsx` → `PricingSection` items array |
| Gallery photos | Replace image imports in `Gallery.jsx` and `Home.jsx` |
| Hero images | Replace `heroImage` imports in each page file |
| Social media links | `Footer.jsx` |
| Booking form backend | `BookNow.jsx` → connect `handleSubmit` to your preferred service |

---

## 🚀 Future Enhancements

- Connect booking form to a backend (e.g., EmailJS, Calendly embed, or custom API)
- Add barber profile cards to the About page
- Integrate Instagram feed for live gallery updates
- Add testimonials / review section
- Implement SEO metadata and Open Graph tags

---

## 📸 Image Credits

Placeholder images sourced from [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com). Replace with original shop photography before launch.

---

*Built with React • Designed for Style Cutz Barbershop, Orange Park, FL*
