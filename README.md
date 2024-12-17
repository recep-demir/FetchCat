# Random Cat Images

A simple web application that displays random cat images fetched from **The Cat API**. Users can refresh the images and view the current date and time, updated in real time.

## Project Overview

- Displays **10 random cat images** fetched from The Cat API.
- Includes a loading animation before the content appears.
- Users can click the **"Get New Images"** button to fetch a new set of random cat images.
- The current date and time are displayed and updated every second.

## Features

1. **Loading Animation**: Displays a loading screen before images are shown.
2. **API Integration**: Uses The Cat API to fetch cat images dynamically.
3. **Button Interaction**: Users can reload the images by clicking a button.
4. **Real-Time Clock**: Continuously updates and displays the date and time.

## Technologies Used

- **HTML**: For the structure of the page.
- **CSS**: Custom styles for layout and alignment.
- **Bootstrap**: For responsive design and styling.
- **JavaScript**: For fetching data from the API and updating the DOM.
- **The Cat API**: Provides random cat images.

## File Structure

```plaintext
- index.html      (Main HTML file)
- img/loading.gif (Loading animation image)
- img/error.gif   (Error image in case of API failure)
