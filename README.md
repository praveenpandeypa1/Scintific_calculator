React Scientific Calculator
A feature-rich scientific calculator built using React. This project includes standard and scientific calculator functionalities with an interactive user interface.

Table of Contents
Features
Installation
Usage
Components
Styling
Contributing
License
Features
Basic arithmetic operations: addition, subtraction, multiplication, division.
Scientific functions: power, root, logarithmic, trigonometric functions.
Constants: Euler's number (e).
Scientific notation entry (EE).
Interactive UI with a "2nd" button to toggle between primary and secondary functions.
Confetti explosion effect when the result includes the digits '5' and '6'.
Installation
Clone the repository:

git clone https://github.com/yourusername/react-scientific-calculator.git
Navigate to the project directory:

cd react-scientific-calculator
Install the dependencies:

npm install
Usage
Start the development server:

npm start
Open your browser and navigate to http://localhost:3000 to view the calculator.

Components
App.js
The main component that includes the calculator logic and UI.

Key Functions
handleButtonClick: Updates the input field with the clicked button value.
handleClear: Clears the input and result fields.
handleEquals: Evaluates the expression in the input field and updates the result.
handlePower: Calculates powers of a number.
handleRoot: Calculates roots of a number.
handleXY: Calculates x raised to the power of y.
handleYRootX: Calculates yth root of x.
handleScientific: Performs scientific calculations (e.g., trigonometric functions).
handleConstantE: Inserts Euler's number.
handleEE: Enters a number in scientific notation.
toggleSecond: Toggles between primary and secondary functions.
App.css
CSS file for styling the calculator.

Key Styles
.calculator: Styles the calculator container, ensuring it fits the width of a row of buttons.
.top-bar: Styles the top bar containing the three circles.
.circle: Styles for the red, yellow, and green circles.
.display: Styles for the input and result display.
.buttons: Styles for the grid layout of buttons.
.button-gray, .button-orange: Styles for the buttons.
Styling
The calculator is styled to mimic the appearance of a physical scientific calculator. Key style elements include:

Dark background for the calculator body.
Light text for contrast.
Orange buttons for operations.
Gray buttons for numbers and functions.
Rounded corners and shadows for a modern look.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
