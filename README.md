# Simple Image Gallery

## Difficulty: Medium

## Project Description:
In this project, you will build a **Simple Image Gallery** using React. The gallery will dynamically display a collection of images along with their titles, using data passed as props. This project is a great way to practice creating React components, managing props, and styling layouts with CSS.

## Learning Objectives:
- Understand how to use **React functional components** to build UI elements.
- Learn to pass and render dynamic data using **props**.
- Practice using the **`.map()` function** to iterate over arrays and generate components.
- Gain experience with **CSS** for grid or flexbox-based layout design.

## Technologies Used:
- **React**: JavaScript library for building user interfaces.
- **HTML/CSS**: For structuring and styling the Image Gallery.

## Instructions:
For detailed steps, refer to the [instructions.md](instructions.md) file.

## How to Complete the Project:
1. Create an `ImageGallery` component that:
   - Accepts an `images` prop, which is an array of objects.
   - Uses `.map()` to dynamically render each image and its title from the array.

2. Create an `App` component that:
   - Defines an array of objects representing images. Each object contains:
     - `url`: The image's URL.
     - `title`: The title for the image.
   - Passes this array as a prop to the `ImageGallery` component.

3. Render the images inside the `ImageGallery` component:
   - For each object in the `images` array, create:
     - An `<img>` tag with the `url` as the `src` attribute.
     - An `<h3>` tag displaying the `title`.

4. Style the gallery:
   - Use CSS to arrange the images in a grid layout or with flexbox.
   - Optionally, add margins or padding to make the gallery look neat.

## Expected Outcome:
Your app should display a responsive gallery of images, each with a title. The images and titles should be dynamically rendered using the data passed via props.

## Solution (Reference Only):
The solution for this project is available in the [Solution](Solution) folder. Use it only after you've attempted the project independently or if you get stuck. This will help you compare your approach and learn how to address issues.

## Additional Notes:
- Experiment with different layouts (e.g., grids or flexbox) to make the gallery visually appealing.
- Feel free to add hover effects or other styles to enhance the user experience.
- If you have questions or encounter challenges, reach out or submit a pull request with improvements.

## License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.