import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Resources,
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

class Calendar extends React.PureComponent{
  render(){
    return(
      <Paper>
        <Scheduler
          data={this.props.data}>
          <EditingState onCommitChanges={this.props.commitChanges}/>
          <IntegratedEditing />
          <ViewState currentDate={this.props.date} currentViewName={this.props.view}/>
          <DayView startDayHour={9} endDayHour={18}/>
          <WeekView startDayHour={7} endDayHour={19}/>
          <MonthView startDayHour={10} endDayHour={19}/>
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm />
          <Resources
          data={this.props.resources}
        />
        </Scheduler>
      </Paper>
    );
  }
}
export default Calendar;
