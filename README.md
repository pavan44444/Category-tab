# Category-tab
Project Structure
HTML File (index.html):

Contains the structure of the product page.
Organized into two main sections: image-container for product images and thumbniles, and contents for product details and actions.
CSS File (style.css):

Contains styling information for the HTML elements.
Uses Flexbox for layout management.
Defines styles for product image, thumbnile images, product details, color selector, size selection, and add-to-cart functionality.
JavaScript File (script.js):

Handles dynamic calculation and display of the discount percentage.
Extracts current and compare-at prices from HTML using regular expressions.
Calculates the discount percentage and updates the UI with the result.
HTML Structure
image-container:

Contains product images and thumbnile images.
Images are sourced from specified URLs.
contents:

Holds product details and actions.
Subdivided into title, price, color-selector, size-selection, and add-to-cart-container.
title:

Displays product vendor and title.
price:

Displays current price, compare-at price, and discount percentage.
Percentage is dynamically calculated using JavaScript.
color-selector:

Allows users to choose a color.
Displays color options with corresponding styles.
size-selection:

Provides size options for the product.
Displays radio buttons for size selection.
add-to-cart-container:

Manages the addition of the product to the cart.
Includes buttons for increasing, decreasing quantity and adding to the cart.
numbers:

Displays quantity controls (plus, minus, and count).
add-to-cart:

Contains a button to add the product to the cart.
item-added-layout:

Shows a message indicating the successful addition of the product to the cart.
details-layout:

Displays additional details about the product.
CSS Styles
Responsive Design:

Ensures responsiveness for various screen sizes.
Font:

Utilizes the 'Inter' font from Google Fonts.
Colors:

Defines color schemes for various elements, providing a visually appealing UI.
Layout:

Employs Flexbox for layout management.
Element Styles:

Specifies styles for product image, thumbnile images, title, price, color selector, size selection, and add-to-cart functionality.
JavaScript Logic
Discount Percentage Calculation:
Retrieves current and compare-at prices from the HTML using regular expressions.
Calculates the discount percentage and dynamically updates the UI.
Instructions for Use
Open index.html in a web browser.
Explore product images, details, and options.
Choose a color and size.
Adjust the quantity using the plus and minus buttons.
Click "Add to Cart" to add the product to the cart.
View the success message and additional product details.
