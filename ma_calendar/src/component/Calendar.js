
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {Scheduler,DayView,Appointments,} from '@devexpress/dx-react-scheduler-material-ui';

class Calendar extends React.Component{
  constructor(props){
    super(props);
    this.currentDate = '2018-11-01';
    this.schedulerData = [
      { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
      { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
    ];
  }
  render(){
    return(
      <Paper>
        <Scheduler
          data={this.schedulerData}
        >
          <ViewState
            currentDate={this.currentDate}
          />
          <DayView
            startDayHour={9}
            endDayHour={14}
          />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}

export default Calendar;
