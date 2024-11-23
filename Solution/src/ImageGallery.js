import React from 'react';

// Component to display a grid of images with titles
function ImageGallery({images}) {
  return (
    <div className="gallery">
      {/* Mapping through the images array to display each image with a title */}
      {images.map((image) => (
        <div key={image.src} className="image-container">
          <img src={image.src} alt={image.title} />
          {/* Title will be shown when hovering over the image */}
          <div className="title">{image.title}</div>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
