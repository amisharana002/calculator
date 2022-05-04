import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleclick = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setResult(result.concat(e.target.name));
  };

  const c = () => {
    setResult(result.slice(0, -1));
  };

  const Clear = () => {
    setResult(" ");
  };
  let previousOpr;
  const calculate = () => {
    previousOpr = result;
    document.querySelector(".field1").textContent = previousOpr;
    setResult(eval(result).toString());
  };
  return (
    <>
      <div className="Calculator-Base">
        <div className="Cal-display">
          <div className="field1" id="field1"></div>
          <div className="field2" id="field2">
            {result}
          </div>
        </div>
        <div className="Cal-buttons">
          <div className="design"></div>
          <div className="Cal-keys">
            <div>
              <button onClick={Clear} className="btns">
                Clr
              </button>
              <button onClick={c} className="btns">
                C
              </button>

              <button name="%" onClick={handleclick} className="btns">
                %
              </button>
              <button name="/" onClick={handleclick} className="btns">
                /
              </button>
            </div>
            <div>
              <button name="7" onClick={handleclick} className="btns">
                7
              </button>
              <button name="8" onClick={handleclick} className="btns">
                8
              </button>
              <button name="9" onClick={handleclick} className="btns">
                9
              </button>
              <button name="*" onClick={handleclick} className="btns">
                *
              </button>
            </div>
            <div>
              <button name="4" onClick={handleclick} className="btns">
                4
              </button>
              <button name="5" onClick={handleclick} className="btns">
                5
              </button>
              <button name="6" onClick={handleclick} className="btns">
                6
              </button>
              <button name="-" onClick={handleclick} className="btns">
                -
              </button>
            </div>
            <div>
              <button name="1" onClick={handleclick} className="btns">
                1
              </button>
              <button name="2" onClick={handleclick} className="btns">
                2
              </button>
              <button name="3" onClick={handleclick} className="btns">
                3
              </button>
              <button name="+" onClick={handleclick} className="btns">
                +
              </button>
            </div>
            <div>
              <button name="0" onClick={handleclick} className="btns zero">
                0
              </button>
              <button name="." onClick={handleclick} className="btns">
                .
              </button>
              <button onClick={calculate} className="btns equal-btn">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
