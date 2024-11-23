import React from "react";
import ImageGallery from "./ImageGallery";
import clockTowerVenice from "./assets/clockTowerVenice.jpg";
import buranoView from "./assets/buranoView.jpg";
import abstractBackground from "./assets/abstractBackground.jpg";
import pizzaFries from "./assets/pizzaFries.jpg";

// Array of images with their source and title
const images = [
  {
    src: clockTowerVenice,
    title: "Clock Tower in Venice"
  },
  {
    src: buranoView,
    title: "Burano island view"
  },
  {
    src: abstractBackground,
    title: "Abstract background"
  },
  {
    src: pizzaFries,
    title: "Pizza fries"
  }
];

// Main App component rendering the ImageGallery with the images passed as props
function App() {
  return (
    <div className="container">
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
