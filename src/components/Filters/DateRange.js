import React, { Component } from "react";

import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

class DateRange extends Component {
  state = {
    from: null,
    to: null
  };

  render() {
    const { from, to } = this.state;
    const selectedRange = from && to && `${to.toDateString()}`;

    return (
      <div className="date-range">
        <DayPicker
          ref="daypicker"
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    );
  }

  handleDayClick = day => {
    this.setState(DateUtils.addDayToRanfe(day, this.state));
  };
}

export default DateRange;