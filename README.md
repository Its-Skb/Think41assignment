# Recurring Event Instance Generator

A simple React application to define recurring event rules (daily or weekly) and generate event instances within a specified date range. Users can specify the start date, event time, recurrence pattern, number of occurrences, and a view window to filter and display generated event instances. Instances outside the view window are highlighted visually.

## Features

- *Daily or Weekly recurrence* support
- Specify event start date and time
- Select the day of the week (for weekly recurrence)
- Input number of occurrences to generate
- Define a view window (start & end dates) to filter visible event instances
- Highlights instances outside the view window instead of hiding them
- User input validation with friendly error messages
- Reset form to clear inputs quickly
- Export generated instances to CSV for easy sharing or import to other tools
- Clean, responsive UI with basic styling for clarity

## Demo

(Optional: add a screenshot or link to a live demo if hosted)

## Getting Started

### Prerequisites

- Node.js (>=14.x recommended)
- npm (comes with Node.js) or yarn

### Running the App

npm start

This will launch the app in your default browser at http://localhost:3000.

## Usage

1. Enter the event start date and time.
2. Choose recurrence: Daily or Weekly.
3. If Weekly is selected, pick the day of the week.
4. Specify the number of occurrences you want to generate.
5. Set the view window start and end dates.
6. Click *Generate Instances* to see the recurring events.
7. Events outside the view window will be shown in gray with a label.
8. Use the *Reset* button to clear all inputs.
9. Click *Download CSV* to export the generated events.

## Project Structure

- src/App.js - Main app container handling state and logic.
- src/components/EventForm.js - Form component to collect user inputs.
- src/components/InstanceList.js - Displays the list of event instances.
- src/App.css - Basic styling for UI clarity.

## Notes

- The app uses the date-fns library for date operations.
- Authentication and backend features are not included; this is a frontend-focused tool.

## Contributing

Contributions, suggestions, and improvements are welcome! Feel free to open issues or submit pull requests.

## License

This project is open-source under the MIT License.

---

*Developed by Saurabh Kumar*  
