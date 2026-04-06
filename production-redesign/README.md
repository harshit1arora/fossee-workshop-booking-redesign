# FOSSEE Workshop Booking Platform Redesign

A high-performance, modern React-based redesign of the FOSSEE workshop booking portal. Built with **React 19**, **Vite**, and **Tailwind CSS v4** for maximum performance and visual excellence.

## ✨ Key Features
- **Modern UI**: Polished glassmorphic aesthetics with a dark/light mode toggle.
- **Premium Animations**: Smooth transitions and layout changes powered by **Framer Motion**.
- **Responsive Design**: Mobile-first architecture optimized for small screens.
- **Full Filtering**: Real-time search and category filtering for intuitive discovery.
- **Secure Booking**: Multi-step booking flow with instant success feedback.

## 🛠️ Setup Instructions
1. **Clone the repository.**
2. **Navigate to the redesigned app directory:**
   ```bash
   cd production-redesign
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open in your browser:** `http://localhost:5173`

---

## 🧠 Reasoning & Design Decisions

### 1. What design principles guided your improvements?
The redesign was guided by **Visual Hierarchy** and **Affordance**. I replaced a flat list with interactive, card-based layouts that clearly distinguish between different workshop levels (Beginner, Intermediate, Advanced) using distinct badges. I utilized **Glassmorphism** for the Navbar to create a premium feel that doesn't distract from the core content. Typography (using the 'Outfit' font) was chosen for its modern, bold look which improves readability significantly over browser defaults.

### 2. How did you ensure responsiveness across devices?
I followed a **Mobile-First Approach**. Every component was designed to look stunning on small screens first. 
- The **Navbar** collapses into a functional slide-down menu with large touch targets.
- The **Hero Section** stacks vertically on mobile with adjusted font sizes to prevent overflow.
- **Workshop Cards** adjust from a single column on mobile to a 3-column grid on desktops.
- **Filter Bar** uses a horizontal scroll mechanism on mobile for quick access to all categories without taking up vertical space.

### 3. What trade-offs did you make between design and performance?
- **Asset Optimization**: I used high-quality Unsplash images but loaded them with modern formatting.
- **Library Selection**: I chose **Vite** over Create React App for near-instant hot-reloading and better build optimization.
- **CSS Strategy**: I used **Tailwind CSS v4** which offers a smaller runtime footprint while providing advanced styling capabilities.
- **Animations**: While I used Framer Motion for a "premium" feel, I limited its usage to critical interaction points (Modal, Filter changes, Hover) to ensure high FPS on lower-end mobile devices.

### 4. What was the most challenging part of the task and how did you approach it?
The most challenging part was balancing the **visual richness** expected in a modern "Redesign" with the **technical constraints** of a fast-loading portal. I approached this by creating a **custom design system** in `index.css` using CSS variables and Tailwind layers. This allowed me to implement "Glassmorphism" and "Dark Mode" consistently across the app without bloating the HTML with excessive utility classes.

---

## 📸 Visual Showcase

### Before (Original Site)
The original site was a minimal Django-based functional portal.
![Original Desktop](https://raw.githubusercontent.com/FOSSEE/workshop_booking/master/docs/screenshots/desktop_home.png)

### After (Redesigned Portfolio)
The new UI features modern gradients, interactive cards, and a sleek dark mode.

*(Generate your own screenshot here or refer to the local dev environment)*

---

Made with ❤️ by Antigravity for the FOSSEE Screening Task.
