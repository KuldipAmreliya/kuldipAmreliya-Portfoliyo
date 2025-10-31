# Java Developer Portfolio

A modern, responsive portfolio website for a Java developer featuring a 3D animated laptop model and a dark blue theme.

## Features

- Responsive design that works on all devices
- Modern dark blue theme with accent colors
- Interactive 3D laptop model using Three.js
- Smooth scrolling and animations
- Sections for About, Skills, Projects, and Contact
- Contact form for potential employers
- Animated skill bars
- Project showcase section

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Three.js for 3D graphics
- GSAP for animations

## Setup Instructions

1. Clone this repository to your local machine
2. Open `index.html` in your web browser
3. Customize the content in `index.html` with your personal information
4. Modify the skills and projects sections to showcase your work
5. Update the contact form to handle form submissions (requires backend implementation)

## Customization

### Changing Colors
The color scheme can be modified in the `styles.css` file by updating the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #0a192f;
    --secondary-color: #112240;
    --accent-color: #64ffda;
    --text-color: #ccd6f6;
    --text-secondary: #8892b0;
}
```

### Modifying the 3D Laptop
The 3D laptop model can be customized in the `script.js` file by modifying the `createLaptop()` function. You can adjust:
- Dimensions
- Colors
- Animation speed
- Rotation angles

## Browser Support

The website is compatible with all modern browsers that support:
- CSS Grid
- CSS Variables
- ES6 JavaScript
- WebGL (for Three.js)

## License

This project is open source and available under the MIT License. 