import React, { useState, useReducer } from "react";
import DisplayComponent2 from "./DisplayComponent2";

export default function InputHooks(props) {
  const [daysDifference, setDaysDifference] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cigsNotSmoked, setCigsNotSmoked] = useState(0);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      cost: "",
      cigPerDay: "",
      date: ""
    }
  );

  function handleChange(e) {
    const { name, value, type } = e.target;
    type === "number"
      ? setUserInput({ [name]: parseInt(value) })
      : setUserInput({ [name]: value });
  }

  function calculateCosts() {
    // validate that all 3 inputs have been entered
    const { cost, cigPerDay, date } = userInput;
    if (cost === "" || cigPerDay === "" || date === "") {
      return false;
    } else {
      // get todays date & selected date and calc difference between them
      const selectedDate = userInput.date;
      const selectedDateConvert = new Date(selectedDate);
      const selectedDateMilliseconds = selectedDateConvert.getTime();

      const today = new Date();
      const todayMilliseconds = today.getTime();
      const totalDays =
        (todayMilliseconds - selectedDateMilliseconds) / 86400000;

      // calculate costs
      const prices = userInput.cost / 25;
      const moneySaved = prices * userInput.cigPerDay * totalDays;
      const noCigSmoked = userInput.cigPerDay * totalDays;

      setCigsNotSmoked(noCigSmoked);
      setTotalCost(moneySaved);
      setDaysDifference(totalDays);
    }
  }

  function reset() {
    setUserInput({ cost: "" });
    setUserInput({ cigPerDay: "" });
    setUserInput({ date: "" });
    setDaysDifference(0);
    setTotalCost(0);
    setCigsNotSmoked(0);
  }
  return (
    <div className="inputComponentContainer">
      <h1 className="title">{props.text.title}</h1>
      <div className="inputContainer">
        <div className="inputChildContainer">
          <div className="costContainer">
            <label>Cost per pack</label>
            <input
              type="number"
              name="cost"
              value={userInput.cost}
              onChange={handleChange}
            />
          </div>
          <div className="daysContainer">
            <label>Quit Day</label>
            <input
              type="date"
              name="date"
              value={userInput.date}
              onChange={handleChange}
            />
          </div>
          <div className="numbersContainer">
            <label>Cigarettes per day</label>
            <input
              type="number"
              name="cigPerDay"
              value={userInput.cigPerDay}
              onChange={handleChange}
            />
          </div>
          <div className="btnContainer">
            <button className="btn" onClick={calculateCosts}>
              Calculate
            </button>
            <button className="btn" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
        <div className="iconCont">
          <i className="fas fa-smoking-ban fa-10x"></i>
        </div>
      </div>
      <DisplayComponent2
        text={{
          cost: "Total cost: $",
          days: "Days quit: ",
          notSmoked: "Cigarettes not smoked:"
        }}
        totalCost={totalCost}
        daysDifference={daysDifference}
        cigsNotSmoked={cigsNotSmoked}
      />
    </div>
  );
}
