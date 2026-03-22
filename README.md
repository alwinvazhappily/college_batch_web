# CSE A '29 — Batch Website

The official website for **CSE A Batch 2025–2029** at **Thejus Engineering College**.

This is a simple, static website built with only **HTML**, **CSS**, and **JavaScript** — no frameworks, no libraries, no build tools. You can open the files directly in a browser and everything works.

---

## How to View the Website

You have two options:

### Option 1: Just open the file

Find the `index.html` file on your computer and double-click it. It will open in your default browser. That's it.

### Option 2: Use a local server (optional)

If you have Python installed, open a terminal in this folder and run:

```
python3 -m http.server
```

Then go to `http://localhost:8000` in your browser. This method is closer to how the site behaves when deployed online, but for most cases Option 1 is enough.

### Deploying online

The site is hosted on **GitHub Pages**. Push your changes to the repository and GitHub Pages will automatically serve the site. No build step needed — GitHub Pages serves the static files as-is.

---

## Project Structure

```
form/
├── index.html       ← Landing page (Home)
├── memories.html    ← Photo gallery page
├── contact.html     ← Contact form page
├── terms.html       ← Terms and conditions page
├── style.css        ← All the styling for every page
├── script.js        ← All the JavaScript for every page
└── README.md        ← You are here
```

There are **4 HTML pages**, **1 CSS file**, and **1 JS file**. Every page links to the same `style.css` and `script.js`.

---

## File-by-File Breakdown

---

### `index.html` — The Landing Page

This is the main page visitors see first. It has 5 sections stacked vertically:

#### 1. Navbar (Navigation Bar)

```html
<nav class="navbar" id="navbar">
```

- The logo says **"CSE A'29"** and links back to this page.
- Three links: **Home**, **Memories**, **Contact**.
- On desktop, the links appear as a horizontal row.
- On mobile (below 640px), the links are hidden and a **hamburger menu** (three horizontal lines) appears instead. Clicking it opens a full-screen menu.

#### 2. Hero Section

```html
<section class="hero">
```

- The big, eye-catching section at the top.
- Left side: A tag that says "Thejus Engineering College - CSE A", a large heading "CSE A Batch 2025–2029", a short description, and two buttons — "Get in Touch" (goes to contact page) and "View Memories" (goes to gallery page).
- Right side: A photo from Unsplash (an online free image library).
- On mobile, the image moves above the text.

#### 3. Stats Section ("Our Journey So Far")

```html
<section id="about">
```

- Four cards in a row showing batch stats: **60+ Students**, **2025 Year Started**, **8 Semesters Ahead**, **1 Legendary Batch**.
- Each card has a hover effect — it moves up slightly when you hover over it.
- On mobile, the 4 columns become 2 columns.

#### 4. Gallery Preview ("Recent Memories")

```html
<div class="gallery-preview">
```

- Shows 3 photo cards as a teaser for the full gallery.
- Each card is clickable and takes you to `memories.html`.
- When you hover over a card, the image zooms slightly and a dark overlay appears with the title (like "Orientation Day").
- On mobile, the 3 columns become 1 column.

#### 5. CTA Section ("Stay Connected")

```html
<div class="cta-section">
```

- CTA stands for "Call to Action" — it's a dark banner that encourages visitors to send a message.
- Has a single button linking to the contact page.

#### 6. Footer

```html
<footer class="footer">
```

- Shows the logo, copyright text with a link to the college website, and links to all pages.
- Appears on every page.

---

### `memories.html` — The Photo Gallery

This page shows a collection of 9 photos arranged in a grid.

#### Page Header

```html
<div class="page-header">
```

- A centered heading "Our Memories" with a subtitle.
- Has extra top padding (140px) so it sits below the fixed navbar.

#### Gallery Grid

```html
<div class="gallery-grid">
```

- 9 photo cards arranged in a 3-column grid.
- The **1st** and **4th** cards are wider — they span 2 columns (this is set in CSS using `grid-column: span 2`). This creates a more interesting, magazine-like layout.
- Every card has an overlay showing the photo title and a short caption. Unlike the landing page (where overlays appear on hover), these overlays are **always visible**.
- All images come from Unsplash.
- On tablets (below 900px), the grid becomes 2 columns and the wide cards become normal size.
- On mobile (below 640px), everything stacks into 1 column.

**Photo list:**
| Photo | Title | Caption |
|-------|-------|---------|
| 1 (wide) | Orientation Day '25 | The day we became CSE A |
| 2 | First Semester | Settling in at Thejus |
| 3 | Lab Sessions | Where the real learning happens |
| 4 (wide) | College Fest | Talent beyond the textbooks |
| 5 | Campus Hangouts | Between classes at Thejus |
| 6 | Study Groups | Exam season survival mode |
| 7 | Project Presentations | Showing what we built |
| 8 | Industrial Visit | Learning beyond the classroom |
| 9 | Batch Trips | Making memories outside campus |

---

### `contact.html` — The Contact Form

This page lets visitors send a message to the batch admins.

#### Layout

```html
<div class="contact-layout">
```

- Split into two halves side by side (on desktop).
- **Left side**: Heading, description, and 3 contact info items (Email, Location, Response Time) — each with an SVG icon.
- **Right side**: The actual form inside a white card.
- On mobile, the two halves stack vertically.

#### The Form

```html
<form id="contactForm" novalidate>
```

The `novalidate` attribute tells the browser: "Don't use your built-in validation — we handle it ourselves in JavaScript."

The form has 5 fields:

| Field | Type | Validation Rules |
|-------|------|-----------------|
| Full Name | Text input | Required, at least 2 characters |
| Mobile Number | Phone input | Required, must be 10–15 digits (after removing spaces, `+`, `-`) |
| Email Address | Email input | Required, must match email format (something@something.something) |
| Your Message | Textarea | Required, at least 10 characters |
| Terms checkbox | Checkbox | Must be checked |

**How validation works:**
1. When you type in a field, it validates **in real-time** (on every keystroke).
2. When you click "Send Message", it validates **all fields at once**.
3. If a field is invalid, its parent container gets a CSS class called `error`, which makes the border red and shows a red error message below the field.
4. If a field becomes valid, the `error` class is removed and the error message disappears.
5. If the form is invalid when submitted, the submit button shakes (a CSS animation).

**What happens on successful submission:**
- The form resets (all fields go blank).
- A **toast notification** slides in from the right side of the screen saying "Success — Form submitted successfully!"
- The toast has a green progress bar that shrinks over 4 seconds, then the toast slides away.
- **Important:** The form does NOT actually send data anywhere. There is no backend. It just shows the success message and resets.

#### Toast Notification

```html
<div id="toast" class="toast">
```

- Hidden off-screen by default (pushed to the right using CSS `transform`).
- When triggered, it slides in with a bouncy animation.
- Auto-dismisses after 4 seconds.
- The progress bar is a CSS `::before` pseudo-element that animates from right to left.

---

### `terms.html` — Terms and Conditions

A simple text page with:
- A "Back to Home" link with an arrow icon.
- 5 sections: Introduction, Data Privacy, User Conduct, Limitation of Liability, Changes to Terms.
- Has its own `<style>` block inside the `<head>` for terms-specific styling (like paragraph spacing and heading sizes). This keeps the styles contained since they're only used on this one page.

---

### `style.css` — All the Styling

This single file controls how every page looks. Here's how it's organized:

#### CSS Variables (Custom Properties)

```css
:root {
    --accent: #4f46e5;
    --text: #1a1a1a;
    --bg: #fafafa;
    /* ... more variables */
}
```

These are like "settings" for the whole site. Instead of writing `#4f46e5` (a shade of indigo) everywhere, we write `var(--accent)`. If you want to change the accent color for the entire site, you only need to change it in one place.

**Key variables:**
| Variable | What it controls | Current value |
|----------|-----------------|---------------|
| `--accent` | Primary brand color (buttons, links, highlights) | `#4f46e5` (indigo) |
| `--text` | Main text color | `#1a1a1a` (near black) |
| `--text-secondary` | Lighter text for subtitles and labels | `#6b7280` (gray) |
| `--bg` | Page background color | `#fafafa` (off-white) |
| `--border` | Border color for cards and inputs | `#e5e7eb` (light gray) |
| `--error` | Error/validation color | `#ef4444` (red) |
| `--success` | Success/toast color | `#10b981` (green) |
| `--radius` | Border radius for small elements (inputs, buttons) | `12px` |
| `--radius-lg` | Border radius for large elements (cards, images) | `20px` |

#### Font

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:...');
```

The site uses **Outfit** — a clean, modern Google Font. It's loaded from Google's CDN (Content Delivery Network), so you don't need to download any font files.

#### How the CSS is Organized

The file is split into clearly labeled sections:

| Section | What it styles |
|---------|---------------|
| Navbar | Fixed top navigation, scroll effect, mobile menu |
| Hero | Landing page hero layout and image frame |
| Buttons | `.btn-primary` and `.btn-outline` styles |
| Sections | General section padding and headers |
| Stats | The 4 stat cards on the landing page |
| Gallery Preview | The 3-card teaser grid on the landing page |
| CTA Section | The dark "Stay Connected" banner |
| Footer | Bottom of every page |
| Memories Page | Page header and full gallery grid |
| Contact Page | Two-column layout and contact info cards |
| Form | Input fields, textarea, checkbox, submit button |
| Toast | Success notification popup |
| Animations | `@keyframes` for progress bar, fade-in, shake |
| Responsive | Media queries for tablets (900px) and mobile (640px) |

#### How Responsive Design Works

The site uses **CSS media queries** to adapt to different screen sizes:

```css
@media (max-width: 900px) {
    /* Tablet styles */
}

@media (max-width: 640px) {
    /* Mobile styles */
}
```

- **Above 900px (desktop):** Full layout — multi-column grids, side-by-side content.
- **Below 900px (tablet):** Grids shrink to fewer columns, hero image stacks above text.
- **Below 640px (mobile):** Everything becomes single column, hamburger menu appears, font sizes adjust.

#### How the Navbar Scroll Effect Works

When you scroll down more than 50px, JavaScript adds a class called `scrolled` to the navbar:

```css
.navbar.scrolled {
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(20px);
    padding: 14px 0;
    box-shadow: var(--shadow-sm);
}
```

This makes the navbar go from transparent to a blurred white background. The `backdrop-filter: blur(20px)` creates a frosted glass effect.

#### How Error Styling Works

When JavaScript adds the class `error` to an `.input-group`:

```css
.input-group.error input {
    border-color: var(--error);    /* red border */
    background: #fef2f2;          /* light red background */
}

.input-group.error .error-message {
    display: block;               /* show the error text */
}
```

The error message is always in the HTML but hidden with `display: none` by default. Adding the `error` class to the parent makes it visible.

---

### `script.js` — All the JavaScript

This file handles all interactive behavior. It runs after the page loads (`DOMContentLoaded` event). Here's what each section does:

#### 1. Navbar Scroll Effect (all pages)

```javascript
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});
```

- Listens for scroll events.
- If the user has scrolled more than 50px, adds the `scrolled` class to the navbar.
- If they scroll back to the top, removes it.

#### 2. Mobile Menu Toggle (all pages)

```javascript
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
```

- When the hamburger button is clicked, it toggles the `open` class on the mobile menu.
- The `open` class makes the full-screen menu visible (using CSS).
- Clicking any link inside the menu closes it.

#### 3. Fade-In on Scroll (all pages)

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
```

- Uses the **Intersection Observer API** — a browser feature that detects when an element scrolls into view.
- Any element with the class `fade-in` starts invisible (opacity: 0, shifted down 20px).
- When it enters the viewport (at least 10% visible), it gets the `visible` class, which triggers a smooth fade-in + slide-up animation.
- `unobserve` means it only animates once — scrolling back up won't re-trigger it.

#### 4. Contact Form Validation (contact.html only)

```javascript
const form = document.getElementById('contactForm');
if (!form) return;
```

This line is important — it checks if the contact form exists on the current page. If you're on `index.html` or `memories.html`, there's no form, so the script stops here. This is how one JS file safely works across all pages.

**Validation functions:**

Each field has its own validation function:

- `validateName()` — checks if empty or less than 2 characters.
- `validateEmail()` — checks if empty or doesn't match the email pattern `something@something.something`.
- `validateMobile()` — strips spaces, `+`, and `-`, then checks for 10–15 digits.
- `validateMessage()` — checks if empty or less than 10 characters.
- `validateTerms()` — checks if the checkbox is checked.

**Real-time validation:**

```javascript
nameInput.addEventListener('input', validateName);
```

Every time you type a character, the field is validated immediately. You don't have to wait until you click submit to see if something is wrong.

**Form submission:**

```javascript
const isValid = validateName() & validateEmail() & validateMobile() & validateMessage() & validateTerms();
```

Note the single `&` (bitwise AND) instead of `&&` (logical AND). This is intentional — `&&` would stop checking after the first failure (short-circuit), but `&` runs ALL validations so every invalid field shows its error at the same time.

**Toast notification:**

```javascript
const showToast = () => {
    toast.classList.add('active');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('active');
    }, 4000);
};
```

- Adds the `active` class to slide the toast in.
- Sets a 4-second timer to slide it back out.
- `clearTimeout` prevents issues if the form is submitted multiple times quickly.

---

## How to Make Common Changes

### Change the accent color

Open `style.css`, find `:root`, and change `--accent`:

```css
--accent: #4f46e5;  /* Change this to any color you want */
```

Every button, link, highlight, and active state will update automatically.

### Replace placeholder images with real photos

Find the `<img>` tags in the HTML files. Replace the Unsplash URLs with your own image paths:

```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-..." alt="Description">

<!-- After (using a local image) -->
<img src="photos/orientation-day.jpg" alt="Orientation Day">
```

Create a `photos/` folder in this directory and put your images there.

### Add a new gallery photo

Open `memories.html` and add a new card inside the `gallery-grid` div:

```html
<div class="gallery-card fade-in">
    <img src="your-image.jpg" alt="Description of the photo">
    <div class="overlay">
        <h3>Event Name</h3>
        <p>Short caption</p>
    </div>
</div>
```

### Update batch information

Search for these across all HTML files and replace them:
- **"CSE A'29"** — the logo text
- **"CSE A Batch 2025–2029"** — the full batch name
- **"Thejus Engineering College"** — the college name
- **"csea29.thejus@gmail.com"** — the contact email
- **"60+"** — the student count

### Change the font

Open `style.css` and update two things:

1. The `@import` URL at the top (get a new one from [Google Fonts](https://fonts.google.com))
2. The `font-family` in the `body` and `.btn` / `.submit-btn` rules

---

## Technologies Used

| Technology | What it is | How it's used here |
|-----------|-----------|-------------------|
| HTML | The structure of web pages | All `.html` files define what content appears |
| CSS | The visual styling | `style.css` controls colors, layout, animations |
| JavaScript | Makes pages interactive | `script.js` handles menu, scroll effects, form validation |
| Google Fonts | Free web fonts | Loads the "Outfit" font family |
| Unsplash | Free stock photos | Placeholder images in the gallery |
| GitHub Pages | Free web hosting by GitHub | Used to deploy the site online |

---

## Quick Glossary

If you're new to web development, here are some terms used in this project:

- **Static site** — A website made of plain files (HTML/CSS/JS) with no server-side code. What you write is exactly what the browser gets.
- **Viewport** — The visible area of a web page in the browser window.
- **Media query** — A CSS rule that applies styles only at certain screen sizes (e.g., mobile vs desktop).
- **CSS variable** — A reusable value defined once and used everywhere (like a variable in math).
- **Flexbox / Grid** — CSS layout systems. Flexbox is for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns).
- **Pseudo-element** (`::before`, `::after`) — Invisible HTML elements created by CSS for decorative purposes (like the toast progress bar).
- **Intersection Observer** — A JavaScript API that efficiently detects when elements scroll into view.
- **Toast** — A small notification popup that appears briefly and disappears on its own.
- **SVG** — Scalable Vector Graphics. Used for icons in this project because they stay sharp at any size.
- **CDN** — Content Delivery Network. Google Fonts is served from a CDN so fonts load fast worldwide.
- **`novalidate`** — An HTML attribute that disables the browser's built-in form validation so we can use our own custom validation in JavaScript.
