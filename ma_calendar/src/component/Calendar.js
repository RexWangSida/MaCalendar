import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {Scheduler,DayView,WeekView,MonthView,Appointments,Toolbar,ViewSwitcher,Resources,} from '@devexpress/dx-react-scheduler-material-ui';

class Calendar extends React.Component{
  constructor(props){
    super(props);
    this.currentDate = '2018-11-01';
    this.schedulerData = [{
  startDate: '2018-10-31T10:00',
  endDate: '2018-10-31T10:01',
  title: 'Meeting',
  group: 'private',
  description:"lalalala"
}, {
  startDate: '2018-10-31T07:30',
  endDate: '2018-10-31T09:00',
  title: 'Go to a gym',
  group: 'work',
}]
  this.resources = [{
  fieldName: 'group',
  instances: [
    { id: 'private', text: 'Private', color: '#EC407A' },
    { id: 'work', text: 'Work', color: '#7E57C2' },
  ],
}];
  }
  render(){
    return(
      <Paper>
        <Scheduler
          data={this.schedulerData}>
          <ViewState currentDate={this.currentDate} defaultCurrentViewName="Week"/>
          <DayView startDayHour={9} endDayHour={18}/>
          <WeekView startDayHour={7} endDayHour={19}/>
          <MonthView startDayHour={10} endDayHour={19}/>
          <Toolbar />
          <ViewSwitcher />
          <Appointments />
          <Resources
          data={this.resources}
        />
        </Scheduler>
      </Paper>
    );
  }
}

export default Calendar;
