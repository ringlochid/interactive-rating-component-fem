# Interactive Rating Component

![Design preview for the Interactive rating component](./preview.jpg)

A sleek, accessible interactive rating component built with vanilla HTML, CSS, and JavaScript. Users can select a rating from 1-5 and receive a personalized thank you message.

## ✨ Features

- **Interactive Rating Selection** — Click to select a rating from 1 to 5
- **Animated Feedback** — Smooth transitions and hover states for all interactive elements
- **Two-State UI** — Rating card transitions to a thank you card upon submission
- **Responsive Design** — Optimized for mobile (375px) and desktop (1440px) viewports
- **Accessibility First** — Semantic HTML, proper ARIA labels, keyboard navigation, and focus states
- **Form Validation** — Error messaging if no rating is selected before submission
- **Reset Functionality** — Star icon button clears the current selection with a spin animation

## 🛠️ Built With

- **HTML5** — Semantic markup with proper form structure
- **CSS3** — Custom properties, Flexbox, radial gradients, CSS animations
- **Vanilla JavaScript** — DOM manipulation, event handling, form validation
- **Google Fonts** — [Overpass](https://fonts.google.com/specimen/Overpass) (400, 700)

## 📁 Project Structure

```
interactive-rating-component-main/
├── index.html          # Main HTML with embedded styles
├── script.js           # JavaScript for interactivity
├── style-guide.md      # Design specifications
├── preview.jpg         # Design preview image
├── design/             # Original design files
└── images/
    ├── favicon-32x32.png
    ├── icon-star.svg
    └── illustration-thank-you.svg
```

## 🎨 Design Specifications

### Colors

| Color       | HSL Value                |
|-------------|--------------------------|
| Orange 500  | `hsl(25, 97%, 53%)`      |
| White       | `hsl(0, 100%, 100%)`     |
| Grey 500    | `hsl(217, 12%, 63%)`     |
| Grey 900    | `hsl(213, 19%, 18%)`     |
| Grey 950    | `hsl(216, 12%, 8%)`      |

### Typography

- **Font Family:** Overpass
- **Body Font Size:** 15px
- **Font Weights:** 400 (Regular), 700 (Bold)

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in your browser
3. Select a rating and click **SUBMIT**

No build tools or dependencies required — just pure HTML, CSS, and JavaScript!

## 🎯 How It Works

1. **Rating Page** — User sees the rating card with 5 selectable options
2. **Selection** — Clicking a number highlights it in orange
3. **Submission** — Click SUBMIT to validate and proceed
4. **Thank You Page** — Displays the selected rating with a thank you message
5. **Reset** — Click the star icon to clear your selection and start over

## ♿ Accessibility

- Screen reader friendly with ARIA labels and roles
- Keyboard navigable with visible focus indicators
- Error messages announced via `role="alert"`
- Proper heading hierarchy and semantic structure

## 📝 License

This project is from [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

---

**Have fun building!** 🚀
