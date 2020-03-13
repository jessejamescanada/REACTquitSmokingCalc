import React, { Component } from "react";
import DisplayComponent from "./DisplayComponent";

export default class InputComponent extends Component {
  state = {
    cost: "",
    cigPerDay: "",
    date: "",
    daysDifference: 0,
    totalCost: 0,
    cigsNotSmoked: 0
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    type === "number"
      ? this.setState({ [name]: parseInt(value) })
      : this.setState({ [name]: value });
  };

  convertTime = () => {
    // form validation for all 3 to have values & destructured
    const { cost, cigPerDay, date } = this.state;
    if (cost === "" || cigPerDay === "" || date === "") {
      return false;
    } else {
      // get todays date and selected date and difference b/w them
      let selectedDate = this.state.date;
      const selectedDateConvert = new Date(selectedDate);
      const selectedDateMilliseconds = selectedDateConvert.getTime();

      const today = new Date();
      const todayMilliseconds = today.getTime();
      const totalDays = (
        (todayMilliseconds - selectedDateMilliseconds) /
        86400000
      ).toFixed(2);

      // calculate costs
      let eachCigaretteCost = this.state.cost / 25;
      let pricePerDay = eachCigaretteCost * this.state.cigPerDay;
      let totalMoney = pricePerDay * totalDays;
      let amountOfCigs = this.state.cigPerDay * totalDays;
      this.setState({
        totalCost: totalMoney,
        daysDifference: totalDays,
        cigsNotSmoked: amountOfCigs
      });
    }
  };

  reset = () => {
    this.setState({
      cost: "",
      cigPerDay: "",
      date: "",
      daysDifference: 0,
      totalCost: 0,
      cigsNotSmoked: 0
    });
  };

  render() {
    return (
      <div className="inputComponentContainer">
        <h1 className="title">{this.props.text.title}</h1>
        <div className="inputContainer">
          <div className="inputChildContainer">
            <div className="costContainer">
              <label>Cost per pack</label>
              <input
                type="number"
                name="cost"
                value={this.state.cost}
                onChange={this.handleChange}
                placeholder="$"
              />
            </div>
            <div className="daysContainer">
              <label>Quit Day</label>
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
            <div className="numbersContainer">
              <label>Cigarettes per day</label>
              <input
                type="select"
                name="cigPerDay"
                value={this.state.cigPerDay}
                onChange={this.handleChange}
                placeholder="#"
              />
            </div>
            <div className="btnContainer">
              <button className="btn" onClick={this.convertTime}>
                Calculate
              </button>
              <button className="btn" onClick={this.reset}>
                Reset
              </button>
            </div>
          </div>
          <div className="iconCont">
            <i className="fas fa-smoking-ban fa-10x"></i>
          </div>
        </div>

        <DisplayComponent
          text={{
            cost: "Total cost: $",
            days: "Days quit: ",
            notSmoked: "Cigarettes not smoked:"
          }}
          totalCost={this.state.totalCost}
          daysDifference={this.state.daysDifference}
          cigsNotSmoked={this.state.cigsNotSmoked}
        />
      </div>
    );
  }
}
