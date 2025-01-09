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
Basic Arithmetic Operations:
Addition
Subtraction
Multiplication
Division
Scientific Functions:
Power
Root
Logarithmic
Trigonometric Functions
Constants:
Euler's Number (e)
Scientific Notation Entry:
Enter numbers in scientific notation (EE).
Interactive UI:
"2nd" button to toggle between primary and secondary functions.
Confetti Effect:
A confetti explosion effect when the result contains the digits '5' and '6'.
Installation
Follow the steps below to set up the project on your local machine.

1. Clone the Repository
Open your terminal/command prompt and run the following command to clone the repository:

bash
Copy code
git clone https://github.com/yourusername/react-scientific-calculator.git
2. Navigate to the Project Directory
Once the repository is cloned, navigate to the project directory:

bash
Copy code
cd react-scientific-calculator
3. Install Dependencies
Install all the required dependencies for the project using npm (Node Package Manager):

bash
Copy code
npm install
This will download and install all necessary packages listed in package.json.

Usage
1. Start the Development Server
Once the dependencies are installed, you can start the development server using:

bash
Copy code
npm start
2. Open the Project in the Browser
Open your web browser and navigate to http://localhost:3000. You should see the scientific calculator in action.

Components
App.js
The main component that contains the logic for the calculator and UI. It handles user input, performs calculations, and updates the display.

Key Functions in App.js
handleButtonClick: Updates the input field with the clicked button value.
handleClear: Clears the input and result fields.
handleEquals: Evaluates the expression in the input field and updates the result.
handlePower: Calculates powers of a number.
handleRoot: Calculates roots of a number.
handleXY: Calculates x raised to the power of y.
handleYRootX: Calculates yth root of x.
handleScientific: Performs scientific calculations (e.g., trigonometric functions).
handleConstantE: Inserts Euler's number (e).
handleEE: Enters a number in scientific notation.
toggleSecond: Toggles between primary and secondary functions.
Styling
The calculator is styled to mimic the appearance of a physical scientific calculator, with modern design features such as rounded corners and shadows.

Key Styles in App.css
.calculator: Styles the main calculator container.
.top-bar: Styles the top bar with colored circles.
.circle: Styles the colored (red, yellow, green) circles.
.display: Styles the input and result display areas.
.buttons: Defines the grid layout for the calculator buttons.
.button-gray, .button-orange: Specific styles for buttons.
Contributing
We welcome contributions! Here’s how you can contribute:

Fork the repository to your own GitHub account.

Clone the forked repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/react-scientific-calculator.git
Create a new branch for your feature:

bash
Copy code
git checkout -b feature-branch
Make your changes, commit them, and push them to your branch:

bash
Copy code
git add .
git commit -m 'Added new feature'
git push origin feature-branch
Open a pull request to merge your changes with the main branch.

License
This project is licensed under the MIT License. See the LICENSE file for more information.

Additional Notes:
Node.js: Ensure you have Node.js installed on your computer. You can download it from here.
npm: npm is a package manager for Node.js. It comes bundled with Node.js.
By following these steps, you will be able to clone, set up, and run the React Scientific Calculator on your local machine. If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
