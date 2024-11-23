# Simple Image Gallery

## Objective:

Create a simple image gallery that displays a collection of images with titles. Use React components and props to dynamically display a list of images.

## Instructions:

1. **Create an ImageGallery component:**
   - This component should accept a prop named images, which will be an array of objects.
   - Each object in the array should contain url (the image URL) and title (the image title).
   - Use `.map()` to loop through the array and display each image along with its title.

2. **Create an App component:**
   - In the App component, create an array of objects. Each object should represent an image, containing the url and title of the image.
   - Pass this array as a prop to the ImageGallery component.

3. **Display the Images:**
   - Inside the ImageGallery component, use the `map()` function to iterate over the array of images.
   - For each image object, render an `<img>` tag with the url as the src and a `<h3>` tag with the title of the image.

4. **Style the Gallery:**
   - You can display the images in a grid layout by using CSS. For example, use display: flex or display: grid to arrange the images in rows.
   - Optionally, add margins or padding to make the gallery look neat.

5. **Outcome:**
   - Your app should render a gallery of images, each with a title, by dynamically using data passed via props.

## You can find example assets in [assets](./assets/)