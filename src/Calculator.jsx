import React from "react";
import "./Calculator.css";
export default function Calculator() {
  return (
    <>
      <div className="Calculator-Base">
        <div className="Cal-display">
          <div className="field1">120 x 10.5</div>
          <div className="field2">1260</div>
        </div>
        <div className="Cal-buttons">
          <div className="design"></div>
          <div className="Cal-keys">
            <div>
              <button className="btns">C</button>
              <button className="btns">+/-</button>
              <button className="btns">%</button>
              <button className="btns">/</button>
            </div>
            <div>
              <button className="btns">7</button>
              <button className="btns">8</button>
              <button className="btns">9</button>
              <button className="btns">X</button>
            </div>
            <div>
              <button className="btns">4</button>
              <button className="btns">5</button>
              <button className="btns">6</button>
              <button className="btns">-</button>
            </div>
            <div>
              <button className="btns">1</button>
              <button className="btns">2</button>
              <button className="btns">3</button>
              <button className="btns">+</button>
            </div>
            <div>
              <button className="btns zero">0</button>
              <button className="btns">.</button>
              <button className="btns equal-btn">=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
