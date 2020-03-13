import React, { Component } from 'react'

export default class DisplayComponent extends Component {
  render() {
    return (
      <div>
                <div className="topLevelDisplayContainer">
          <div className="money">
          <i className="fas fa-hand-holding-usd fa-4x"></i>
          <h2 className="costH2">
            {this.props.text.cost}
            <strong className='result'>{this.props.totalCost.toFixed(2)}</strong>
          </h2>
          </div>
          <div className="displayContainer">
            <div className="clock">
            <i className="far fa-clock fa-4x"></i>
          <h2 className="daysH2">
            {this.props.text.days} <strong className='result'>{this.props.daysDifference}</strong> days
          </h2>
          </div>
          <div className="hashtag">
          <i className="fas fa-hashtag fa-4x"></i>
          <h2 className="notSmokedH2">
            {this.props.text.notSmoked} <strong className='result'>{this.props.cigsNotSmoked.toFixed(0)}</strong>
          </h2>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
