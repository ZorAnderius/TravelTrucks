# Travel Trucks

**Travel Trucks** is a web application built with React that allows users to browse and rent travel trucks (campers). The platform offers a user-friendly experience with features such as advanced filtering, dynamic loading of camper listings, detailed camper information, and a booking system.

## Key Features

- **Advanced Filtering:** Users can filter campers based on various criteria, including location, equipment, and vehicle type.
- **Dynamic Pagination:** Additional campers are loaded dynamically as users click the "Load More" button, with smooth scrolling to ensure a seamless experience.
- **Detailed Camper Information:** Each camper listing includes comprehensive details, including location, form, transmission, and available facilities.
- **Booking System:** Users can book a camper by selecting a date and providing contact details.
- **Form Reset:** Users can clear all selected filters and reset the form to its default state with a single button click.
- **Toast Notifications:** The application provides real-time feedback through toast notifications for actions and errors.
- **Error Handling:** Users are redirected to a dedicated error page if something goes wrong with their requests, displaying an appropriate error message.

## Tech Stack

- **React:** For building the user interface components.
- **React Router:** To handle navigation between different pages.
- **Redux Toolkit:** For global state management, including camper data and filters.
- **Redux Persist:** To maintain the global state, such as favorite campers, across sessions.
- **Formik & Yup:** For form management and validation, particularly in the booking section.
- **React DatePicker:** For selecting dates with a customizable date picker.
- **React Hot Toast:** For displaying toast notifications with various styles.
- **CSS Modules:** For scoped styling of components, ensuring modular and maintainable CSS.

## Installation Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ZorAnderius/TravelTrucks.git

2. **Navigate to the Project Directory:**
   ```bash
   cd TravelTrucks


3. **Install Dependencies:**
   ```bash
   npm install


4. **Start the Development Server:**
   ```bash
   npm run dev


5. **Access the Application**
   ```bash
   Open your browser and navigate to the URL provided by the development server.


## How to Use

1. **Filter Campers:**
   - Use the filtering options to refine your search by location, equipment, and vehicle type. This helps you find campers that best match your preferences.

2. **Load More Campers:**
   - Click the "Load More" button to fetch additional campers. The application will dynamically load more results and smoothly scroll to the top of the newly loaded items.

3. **View Camper Details:**
   - Click on a camper to access detailed information about its features, specifications, and availability. This section provides comprehensive details to help you make an informed decision.

4. **Book a Camper:**
   - Select your preferred camper, choose a booking date, and enter your contact details to reserve it. The booking process is streamlined for a hassle-free experience.

5. **Reset Filters:**
   - Click the "Reset" button to remove all applied filters and revert to the default view. This allows you to start a new search with the original settings.

6. **Favorite Campers:**
   - Add campers to your favorites list for quick access in the future. You can also remove campers from this list as needed.


## License

This project is licensed under the MIT License.