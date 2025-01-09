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
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/react-scientific-calculator.git
Navigate to the Project Directory:

bash
Copy code
cd react-scientific-calculator
Install the Dependencies:

bash
Copy code
npm install
Usage
Start the Development Server:

bash
Copy code
npm start
View the Calculator:

Open your browser and navigate to http://localhost:3000 to view the calculator.
Components
App.js
The main component that includes the calculator logic and UI.
Key Functions in App.js
handleButtonClick: Updates the input field with the clicked button value.
handleClear: Clears the input and result fields.
handleEquals: Evaluates the expression in the input field and updates the result.
handlePower: Calculates powers of a number.
handleRoot: Calculates roots of a number.
handleXY: Calculates 
𝑥
𝑦
x 
y
 .
handleYRootX: Calculates the yth root of x.
handleScientific: Performs scientific calculations (e.g., trigonometric functions).
handleConstantE: Inserts Euler's number (e).
handleEE: Enters a number in scientific notation.
toggleSecond: Toggles between primary and secondary functions.
Styling
The calculator is styled to mimic the appearance of a physical scientific calculator with a modern twist. Key style elements include:

Dark Background: For the calculator body.
Light Text: For better contrast and readability.
Orange Buttons: For operations, to stand out.
Gray Buttons: For numbers and functions.
Rounded Corners & Shadows: To give the calculator a modern and clean look.
Key Styles in App.css
.calculator: Styles the main calculator container, ensuring it fits the grid layout of buttons.
.top-bar: Styles the top bar containing the three colorful circles.
.circle: Styles for the red, yellow, and green circles.
.display: Styles the input and result display areas.
.buttons: Styles for the grid layout of buttons.
.button-gray, .button-orange: Specific styles for different button colors.
Contributing
Contributions are welcome! If you have a feature idea or a bug fix, please feel free to submit a pull request or open an issue.

Fork the repository.

Create a new branch:

bash
Copy code
git checkout -b feature-branch
Commit your changes:

bash
Copy code
git commit -m 'Add some feature'
Push to the branch:

bash
Copy code
git push origin feature-branch
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Enjoy building and using your React Scientific Calculator! 🚀

