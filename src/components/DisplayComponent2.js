import React from "react";

export default function DisplayComponent2(props) {
  return (
    <div>
      <div className="topLevelDisplayContainer">
        <div className="money">
          <i className="fas fa-hand-holding-usd fa-4x"></i>
          <h2 className="costH2">
            {props.text.cost}
            <strong className="result">{props.totalCost.toFixed(2)}</strong>
          </h2>
        </div>
        <div className="displayContainer">
          <div className="clock">
            <i className="far fa-clock fa-4x"></i>
            <h2 className="daysH2">
              {props.text.days}{" "}
              <strong className="result">
                {props.daysDifference.toFixed(0)}
              </strong>{" "}
              days
            </h2>
          </div>
          <div className="hashtag">
            <i className="fas fa-hashtag fa-4x"></i>
            <h2 className="notSmokedH2">
              {props.text.notSmoked}{" "}
              <strong className="result">
                {props.cigsNotSmoked.toFixed(0)}
              </strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
