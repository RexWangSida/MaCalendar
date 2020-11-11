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
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'clsx';

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  },
  commandButton: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
});

const Content = withStyles(style, { name: 'Content' })(({
  children, appointmentData, classes, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    <Grid container alignItems="center">
      <Grid item xs={2} className={classes.textCenter}>
        <Room className={classes.icon} />
      </Grid>
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
      <Grid item xs={2} className={classes.textCenter}>
        <Room className={classes.icon} />
      </Grid>
      <Grid item xs={10}>
        <span>{appointmentData.notes}</span>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
));

const CommandButton = withStyles(style, { name: 'CommandButton' })(({
  classes, ...restProps
}) => (
  <AppointmentTooltip.CommandButton {...restProps} className={classes.commandButton} />
));

class Calendar extends React.PureComponent{

  render(){
    return(
      <Paper>
        <Scheduler data={this.props.data} >
          <ViewState currentDate={this.props.date} currentViewName={this.props.view}/>
          <EditingState onCommitChanges={this.props.commitChanges}/>
          <IntegratedEditing />
          <DayView startDayHour={9} endDayHour={18}/>
          <WeekView startDayHour={7} endDayHour={19}/>
          <MonthView startDayHour={10} endDayHour={19}/>
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            contentComponent={Content}
            commandButtonComponent={CommandButton}
            showCloseButton
          />
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
