# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static landing page for the "Class of '26" Engineering Batch — a college alumni/batch website. No build tools, no package manager, no framework — just vanilla HTML, CSS, and JavaScript served as static files.

## Development

This project must use only vanilla HTML, CSS, and JavaScript — no frameworks, libraries, or build tools.

Open `index.html` directly in a browser, or use any static file server (e.g., `python3 -m http.server`). There is no build step, no tests, and no linter configured.

The project has been used with Firebase Hosting (see `firebase-debug.log`), deployed via `firebase deploy`.

## Architecture

- **index.html** — Single-page site with sections: navbar, hero, about (stats), memories gallery, alumni network, contact form, footer. Uses the Outfit font from Google Fonts.
- **style.css** — All styling including CSS custom properties (`:root` variables), glassmorphism effects, responsive breakpoints at 576px, toast notification animations, and form validation visual states. Note: `index.html` uses the Outfit font but `style.css` declares Inter as the base font-family.
- **script.js** — Contact form logic only: client-side validation (name, email, mobile, message, terms checkbox) with real-time `input`/`change` event listeners and a toast notification on successful submission. Form does not submit to a backend — it just shows a success toast and resets.
- **terms.html** — Standalone terms & conditions page, links back to `index.html`. Has its own inline `<style>` block for terms-specific layout.

## Key Patterns

- Validation error display: toggle `.error` class on the parent `.input-group` or `.checkbox-group` to show/hide `.error-message` spans.
- Mobile number validation strips whitespace, `+`, and `-` before checking for 10–15 digits.
- Toast auto-dismisses after 4 seconds with a CSS progress bar animation synced to the JS timeout.
