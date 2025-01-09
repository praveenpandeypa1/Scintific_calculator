// src/App.js
import React, { useState } from 'react';
import './App.css';
import ConfettiExplosion from 'react-confetti-explosion';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isExploding, setIsExploding] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [isRadians, setIsRadians] = useState(true);

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEquals = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input);
      setResult(res.toString());
      setInput(res.toString());

      if (input.includes('5') && input.includes('6')) {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 2000);
      }
    } catch (error) {
      setResult('Error');
    }
  };
  
  const handlePower = (power) => {
    try {
      const res = Math.pow(parseFloat(input), power);
      setResult(res.toString());
      setInput(res.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleRoot = (root) => {
    try {
      const res = Math.pow(parseFloat(input), 1 / root);
      setResult(res.toString());
      setInput(res.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleXY = () => {
    try {
      const [base, exponent] = input.split('^');
      const res = Math.pow(parseFloat(base), parseFloat(exponent));
      setResult(res.toString());
      setInput(res.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleYRootX = () => {
    try {
      const [base, root] = input.split('√');
      const res = Math.pow(parseFloat(base), 1 / parseFloat(root));
      setResult(res.toString());
      setInput(res.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleFactorial = () => {
    const factorial = (n) => {
      if (n < 0) return 'Error';
      if (n === 0) return 1;
      return n * factorial(n - 1);
    };
    handleScientific(factorial);
  };

  const toggleRadians = () => {
    setIsRadians(!isRadians);
  };

  const handleTrigonometry = (func) => {
    return (angle) => {
      const angleInRadians = isRadians ? angle : (angle * Math.PI) / 180;
      return func(angleInRadians);
    };
  };

  const handleConstantE = () => {
    setInput((prev) => prev + Math.E.toString());
  };

  const handleEE = () => {
    setInput((prev) => prev + 'e');
  };

  const handleScientific = (func) => {
    try {
      const res = func(parseFloat(input));
      setResult(res.toString());
      setInput(res.toString());

      if (input.includes('5') && input.includes('6')) {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 2000);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const toggleSecond = () => {
    setIsSecond(!isSecond);
  };

  return (
    <div className="App">
      {isExploding && <ConfettiExplosion />}
      <div className="calculator">
        <div className="top-bar">
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
        </div>
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button className="button-gray" >(</button>
          <button className="button-gray" >)</button>
          <button className="button-gray" >mc</button>
          <button className="button-gray" >m+</button>
          <button className="button-gray" >m-</button>
          <button className="button-gray" >mr</button>
          <button className="button-gray" onClick={handleClear}>C</button>
          <button className="button-gray" >+/-</button>
          <button className="button-gray" >%</button>
          <button className="button-orange" onClick={() => handleButtonClick('/')}>÷</button>
          <button className="button-gray" onClick={toggleSecond}>2<sup>nd</sup></button>
          <button className="button-gray" onClick={() => handlePower(2)}>x<sup>2</sup></button>
          <button className="button-gray" onClick={() => handlePower(3)}>x<sup>3</sup></button>
          <button className="button-gray" onClick={() => handleScientific((x) => Math.pow(10, x))}>10<sup>x</sup></button>
          <button className="button-gray" onClick={() => handleButtonClick('^')}>x<sup>y</sup></button>
          <button className="button-gray " onClick={() => handleScientific(Math.exp)}>e<sup>x</sup></button>
          <button className="button-lgray" onClick={() => handleButtonClick('7')}>7</button>
          <button className="button-lgray" onClick={() => handleButtonClick('8')}>8</button>
          <button className="button-lgray" onClick={() => handleButtonClick('9')}>9</button>
          <button className="button-orange" onClick={() => handleButtonClick('*')}>×</button>
          <button className="button-gray" onClick={() => handleScientific((x) => 1 / x)}>1/x</button>
          <button className="button-gray" onClick={() => handleRoot(2)}><sup>2</sup>√x</button>
          <button className="button-gray" onClick={() => handleRoot(3)}><sup>3</sup>√x</button>
          <button className="button-gray" onClick={() => handleButtonClick('√')}>y<sup>√x</sup></button>
          <button className="button-gray" onClick={() => handleScientific(Math.log)}>ln</button>
          <button className="button-gray" onClick={() => handleScientific(Math.log10)}>log<sub>10</sub></button>
          <button className="button-lgray" onClick={() => handleButtonClick('4')}>4</button>
          <button className="button-lgray" onClick={() => handleButtonClick('5')}>5</button>
          <button className="button-lgray" onClick={() => handleButtonClick('6')}>6</button>
          <button className="button-orange" onClick={() => handleButtonClick('-')}>−</button>
          <button className="button-gray" onClick={handleFactorial}>x!</button>   
          <button className="button-gray" onClick={() => handleScientific(isSecond ? Math.asin : Math.sin)}>{isSecond ? 'asin' : 'sin'}</button>
          <button className="button-gray" onClick={() => handleScientific(isSecond ? Math.acos : Math.cos)}>{isSecond ? 'acos' : 'cos'}</button>
          <button className="button-gray" onClick={() => handleScientific(isSecond ? Math.atan : Math.tan)}>{isSecond ? 'atan' : 'tan'}</button>
          <button className="button-gray" onClick={handleConstantE}>e</button>
          <button className="button-gray" onClick={handleEE}>EE</button>
          <button className="button-lgray" onClick={() => handleButtonClick('1')}>1</button>
          <button className="button-lgray" onClick={() => handleButtonClick('2')}>2</button>
          <button className="button-lgray" onClick={() => handleButtonClick('3')}>3</button>
          <button className="button-orange" onClick={() => handleButtonClick('+')}>+</button>       
          <button className="button-gray" onClick={toggleRadians}>{isRadians ? 'Rad' : 'Deg'}</button>
          <button className="button-gray" onClick={() => handleScientific(Math.sinh)}>sinh</button>
          <button className="button-gray" onClick={() => handleScientific(Math.cosh)}>cosh</button>
          <button className="button-gray" onClick={() => handleScientific(Math.tanh)}>tanh</button>
          <button className="button-gray" onClick={() => handleButtonClick('Math.PI')}>π</button>
          <button className="button-gray" onClick={() => handleScientific(() => Math.random())}>rand</button>          
          <button className="button-lgray zero" onClick={() => handleButtonClick('0')}>0</button>
          <button className="button-lgray" onClick={() => handleButtonClick('.')}>.</button>
          <button className="button-orange" onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;