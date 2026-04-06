# 🚀 FOSSEE Workshop Booking - Modern Redesign

A high-performance, visually stunning redesign of the FOSSEE (IIT Bombay) Workshop Booking portal. Built to provide a premium user experience while maintaining the core functionality of coordinating educational workshops.

> [!IMPORTANT]
> This project was developed as a screening task for the FOSSEE Internship, focusing on modernizing the UI/UX with state-of-the-art web technologies.

---

## ✨ Project Overview

The original portal was functional but lacked modern design patterns. This redesign transforms the experience into a responsive, interactive, and accessible platform using **React 19**, **Vite**, and **Tailwind CSS v4**.

### 🛠️ Tech Stack
- **Frontend**: React 19 (Functional components, Hooks)
- **Styling**: Tailwind CSS v4 (Modern, utility-first)
- **Animations**: Framer Motion (Smooth layout transitions)
- **Icons**: Lucide React
- **Build Tool**: Vite (Lightning-fast development)

---

## 🧠 Design & Engineering Decisions

### 1. What design principles guided your improvements?
The redesign was guided by **Visual Hierarchy**, **Affordance**, and **Modernity**.
- **Visual Hierarchy**: I replaced the original flat list with a dynamic, card-based layout. Using distinct typography (`Outfit` font) and badges for levels (Beginner, Intermediate, Advanced) allows users to scan content effortlessly.
- **Affordance**: Interactive elements use "Glassmorphism" and subtle hover shadows to clearly indicate clickability.
- **Micro-interactions**: I implemented "Dark Mode" as a first-class citizen, ensuring the interface remains comfortable for all-day usage.

### 2. How did you ensure responsiveness across devices?
I adopted a **Mobile-First Approach** using Tailwind's responsive modifiers (`sm`, `md`, `lg`).
- **Flexible Grids**: Workshop cards automatically transition from a single column on mobile to a 3-column grid on desktops.
- **Adaptive Navigation**: The Navbar collapses into a touch-friendly slide-down menu for mobile users.
- **Touch Targets**: All interactive elements (Filter buttons, 'Book Now' CTAs) are sized to meet accessibility standards for touch accuracy.
- **Fluid Typography**: Font sizes are clamped using responsive units to ensure readability from 320px to 4K displays.

### 3. What trade-offs did you make between the design and performance?
- **Animation vs. FPS**: While Framer Motion adds a premium feel, I limited complex animations to localized interactions (Modals, Filters) to ensure 60+ FPS even on mid-range Android devices.
- **Utility vs. Bundle Size**: I chose **Tailwind CSS v4** specifically for its smaller runtime footprint compared to traditional CSS frameworks.
- **Vite over CRA**: Swapping Create React App for Vite was a deliberate trade-off to ensure near-instant Hot Module Replacement (HMR) during production development.

### 4. What was the most challenging part of the task and how did you approach it?
The most challenging aspect was **balancing visual richness with technical performance**. Specifically, implementing a "Glassmorphic" UI that performs well on older browsers.
- **The Approach**: I used CSS variables within Tailwind layers to define translucent backgrounds and blurs. This reduced the need for heavy image assets.
- **State Management**: Syncing the real-time search, category filters, and the multi-step booking modal required careful state lifting in `App.jsx`. I used React's `useEffect` to optimize re-renders during filtering operations.

---

## 🚀 Key Features

- 🌓 **Full Dark Mode**: Automatic theme detection and manual toggle.
- 🔍 **Real-time Discovery**: High-performance search and category filtering.
- 📦 **Modern Booking Flow**: Multi-step modal with instant validation and success feedback.
- 🎨 **FOSSEE Themed**: Specialized workshop categories like **Python**, **LaTeX**, **Scilab**, and **Linux Administration**.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/harshit1arora/fossee-workshop-booking-redesign.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fossee-workshop-booking-redesign
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improving the UI or adding features like Map-based statistics, please open an issue or pull request.

Made with ❤️ for **FOSSEE, IIT Bombay**.
