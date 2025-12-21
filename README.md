# 🚀 React Learning Roadmap (4 Weeks)

A structured 4-week roadmap to **learn React from core concepts to advanced level**
by combining **theory + real project implementation**.

---

## 📅 Week 1: Components & Rendering Basics
**Goal:** Learn React’s core building blocks and UI rendering.

### 🔹 Day 1: CLI Tools & Setup
- **Topics:** CLI Tools & Setup  
- **Subtopics:** Vite installation, folder structure, npm setup  
- **Task:** Create a new Vite project and render your name on the screen.

### 🔹 Day 2: JSX & Component Basics
- **Topics:** JSX & Component Basics  
- **Subtopics:** JSX syntax rules, self-closing tags, functional components  
- **Task:** Create `Header` and `Footer` components and import/export them in `App.jsx`.

### 🔹 Day 3: Props vs State (Intro)
- **Topics:** Props vs State  
- **Subtopics:** Data passing, destructuring, unidirectional data flow  
- **Task:** Create a `UserCard` component and pass `username` and `age` from parent.

### 🔹 Day 4: Conditional Rendering
- **Topics:** Conditional Rendering  
- **Subtopics:** Ternary operator, logical `&&`  
- **Task:** Show a message only when `isLoggedIn` prop is `true`.

### 🔹 Day 5: Lists & Keys
- **Topics:** Lists & Keys  
- **Subtopics:** `.map()` function, unique `key` prop  
- **Task:** Render a list of 5 fruits from an array.

### 🔹 Day 6: Composition & Components
- **Topics:** Component Composition  
- **Subtopics:** `props.children`, reusable components  
- **Task:** Create a `Container` component that adds a border to its children.

### 🔹 Day 7: Events & Review
- **Topics:** Events  
- **Subtopics:** `onClick`, `onChange`  
- **Task:** Create a button that logs **"Button Clicked"** on click.

### 🏆 Weekly Project
**Static Portfolio Website**
- Sections: Header, About, Projects

---

## 📅 Week 2: State Management & Hooks Basics
**Goal:** Make apps interactive using Hooks.

### 🔹 Day 8: `useState` Hook
- **Task:** Build a Counter app with Increment & Decrement buttons.

### 🔹 Day 9: Forms & Inputs
- **Task:** Create a form that shows live input on screen.

### 🔹 Day 10: `useEffect` Hook
- **Task:** Log **"Welcome"** once when the page loads.

### 🔹 Day 11: Component Lifecycle
- **Task:** Create a timer that updates every second using `useEffect`.

### 🔹 Day 12: Writing CSS
- **Task:** Style the Counter app using CSS Modules.

### 🔹 Day 13: Refs & DOM
- **Task:** Button that focuses input using `useRef`.

### 🔹 Day 14: Hooks Best Practices
- **Task:** Review code to ensure hooks are not inside loops or conditions.

### 🏆 Weekly Project
**To-Do List App**
- Add & delete tasks

---

## 📅 Week 3: Navigation, APIs & Global State
**Goal:** Work with APIs and multi-page apps.

### 🔹 Day 16: API Calls (REST)
- **Task:** Fetch and render users from a public API.

### 🔹 Day 17: Loading & Error States
- **Task:** Show **Loading...** while fetching data.

### 🔹 Day 18: React Router
- **Task:** Navigate between Home and About pages.

### 🔹 Day 19: Dynamic Routing
- **Task:** `/user/:id` page using `useParams`.

### 🔹 Day 20: Context API
- **Task:** Global Light/Dark Theme Switcher.

### 🔹 Day 21: Custom Hooks
- **Task:** Create a reusable `useFetch` hook.

### 🔹 Day 22: Zustand State Management
- **Task:** Create a global counter store using Zustand.

### 🏆 Weekly Project
**Movie Search App**
- Search movies
- View details on a separate page

---

## 📅 Week 4: Advanced Logic & Performance
**Goal:** Professional-level React optimization.

### 🔹 Day 24: `useReducer`
- **Task:** Rebuild To-Do app using `useReducer`.

### 🔹 Day 25: Performance Optimization
- **Task:** Use `useMemo` for filtered lists.

### 🔹 Day 26: Portals & Suspense
- **Task:** Create a Modal using `createPortal`.

### 🔹 Day 27: Advanced Forms
- **Task:** Registration form with email validation using React Hook Form.

### 🔹 Day 28: Testing Basics
- **Task:** Write a test to check if text is rendered.

---

## 🚀 Final Capstone Project: GitHub User Finder
**Requirements:**
- Search GitHub users
- View user profiles & repositories
- Use Hooks, Router, API fetching, and Context API

---

## ✅ Tech Stack
- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS / CSS Modules
- React Router
- Zustand
- Vitest

---

### 💡 Tip
Always use **Markdown headings (`#`, `##`) and lists (`-`)**  
Otherwise GitHub will show everything as a single paragraph.
