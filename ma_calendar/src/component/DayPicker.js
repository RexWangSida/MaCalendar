import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

class DayPicker extends React.Component {
  render() {
    return (
        <DatePicker
          autoOk
          orientation="portrait"
          variant="static"
          openTo="date"
          value={this.props.date}
          onChange={(e)=>this.props.changeDate(e)}
        />
    );
  }
}

export default DayPicker;
