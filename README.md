## React Splyt Driver App

Here’s a screenshot of the application:

![Application Screenshot](screenshots/screenshot-react-splyt-driver-app.png)

## Prerequisites

Before you start running or developing the React application, ensure you have the following installed:

1. **Node.js and npm**
    - **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
    - **npm**: Node.js package manager for managing dependencies.
    - **Installation**: Download and install from [nodejs.org](https://nodejs.org/). The installation of Node.js includes npm.

   To check if Node.js and npm are installed, run:
   ```bash
   node -v
   npm -v
   
## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/hafizuddinhashim/react-splyt-driver
    ```

2. Navigate to the project directory:
    ```bash
    cd react-splyt-driver
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the application:
    ```bash
    npm start
    ```

The app will be available at `http://localhost:3000`.

## Thinking Process

This section outlines the thought process and decisions made during the development of this application.

### What I Have Done

1. **Custom Hook - `useGetDriver`**
    - Created a custom hook using `useQuery` from the React Query library for data fetching.
    - In the `queryFn`, used `axios` for HTTP GET requests to handle API calls and responses.
    - Implemented conditional rendering to manage UI updates and handle cases where data is still loading, ensuring a smooth user experience.

2. **Material UI Slider**
    - Utilized the Slider component from Material UI, an open-source React component library.
    - Customized the slider for a better user experience, providing clear feedback as users adjust the slider.

3. **React-Leaflet Library for Map Display**
    - Added the `react-leaflet` library to display the map.
    - Followed the documentation provided by `react-leaflet`, and supplemented with additional resources to cover missing information.

### Why I Did It This Way

1. **Project Maintainability**
    - Ensured modularization and separation of concerns for ease of maintenance and scalability.

2. **User Experience**
    - Leveraged Material UI for its clean design and usability to enhance the user experience.

3. **Implementation Guidance**
    - Chose libraries with comprehensive documentation to streamline development, especially considering my background primarily in backend tasks. This was my first time implementing a map feature in a web application.

### Considerations for the UI Slider

1. **User Experience**
    - Designed the slider to provide dynamic feedback, displaying the current value as users adjust it.

2. **Styling**
    - Customized the appearance of the slider for a more versatile and polished look.

### Problems Faced and Solutions

1. **Issue with React-Leaflet Integration**
    - **Problem:** The map was not displaying correctly despite following the documentation.
    - **Solution:** Researched additional resources, including YouTube tutorials. Discovered that the documentation was missing a step for importing Leaflet CSS, which resolved the issue.

### Potential Improvements

1. **Enhanced Features**
    - Currently, the location (latitude and longitude) is static. Future enhancements could include adding a `TextField` to allow dynamic location input.

2. **Testing**
    - Plan to add unit tests for the features developed to ensure reliability and functionality.
