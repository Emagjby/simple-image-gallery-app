# Enhanced Image Gallery

## [Click here to view the original instructions.](../instructions.md)

## Overview

This project implements an **Image Gallery** with enhanced interactivity and modern design improvements. The app displays a collection of images with titles, allowing users to interact with them via hover effects and smooth transitions. The gallery is fully responsive and visually appealing, with a focus on scalability and clean design.

## Features

### Core Features (Project Requirements):
1. **React Components and Props**:
   - A `ImageGallery` component accepts an array of images as props and renders them in a styled grid layout.
   - An `App` component defines the image data and passes it to `ImageGallery` as props.

2. **Basic Styling**:
   - The gallery includes styled sections for each image and its title, designed with responsive and clean CSS.

### Additional Enhancements:
1. **Hover Effects**:
   - Each image enlarges slightly with a smooth zoom effect when hovered over, making the user experience more engaging.
   - Titles fade in and become visible when hovering over the images, providing contextual information without cluttering the interface.

2. **Image Zoom and Title Visibility**:
   - Added a hover effect where images zoom in and their respective titles appear, adding interactivity and visual interest.

3. **Gallery Container Zoom**:
   - The entire gallery container subtly enlarges when hovered over, creating a polished UI effect.

4. **External Fonts**:
   - Integrated Google Fonts (`Roboto`) to enhance the design with a modern look and feel.

5. **Scalable Component Structure**:
   - Organized the app into modular components (`App.js`, `ImageGallery.js`, `index.js`) for better scalability and easier maintenance.

6. **Responsive Design**:
   - The layout adapts to different screen sizes, ensuring a seamless experience on mobile, tablet, and desktop devices.

7. **CSS Transition Effects**:
   - Buttons, images, and titles have smooth transition effects, enhancing the overall user experience.

## Live Demo
You can view the live demo of this project [**here**](https://Emagjby.github.com/simple-image-gallery-app).

## Instructions

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/image-gallery-app.git

2. Navigate to the project folder:
   ```bash
   cd image-gallery-app

3. Install dependencies:
   ```bash
   npm install

### Usage
1. Start the development server:
   ```bash
   npm start

2. Open your browser and navigate to [https://localhost:3000] to view the app.

## Key Notes
- **Beyond the requirements:** This implementation includes additional interactivity (image zoom, title visibility) and modern design features (hover effects, zoomed gallery container). These are not required by the project objectives but significantly improve user engagement and the overall aesthetic.
- **Scalable and Maintainable**: The use of modular components allows for easier code maintenance and extension. The project can be easily enhanced with more features like pagination or dynamic image loading.

## License
This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file in the parent directory for details.