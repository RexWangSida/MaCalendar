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
  DragDropProvider,
  CurrentTimeIndicator,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import NotesIcon from '@material-ui/icons/Notes';
import { withStyles} from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import classNames from 'clsx';



const style = (theme) => ({
  icon: {
    color: theme.palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  },
  commandButton: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
  todayCell: {
    backgroundColor: fade('#FB7060', 0.1),
    '&:hover': {
      backgroundColor: fade('#FB7060', 0.14),
    },
    '&:focus': {
      backgroundColor: fade('#FB7060', 0.16),
    },
  },
  weekendCell: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
    },
  },
  today: {
    backgroundColor: fade('#FB7060', 0.16),
  },
  weekend: {
    backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
  },
});

const TimeTableCellBase = ({ classes, ...restProps }) => {
  const { startDate } = restProps;
  const date = new Date(startDate);
  if (date.getDate() === new Date().getDate()) {
    return <WeekView.TimeTableCell {...restProps} className={classes.todayCell} />;
  } if (date.getDay() === 0 || date.getDay() === 6) {
    return <WeekView.TimeTableCell {...restProps} className={classes.weekendCell} />;
  } return <WeekView.TimeTableCell {...restProps} />;
};

const TimeTableCell = withStyles(style, { name: 'TimeTableCell' })(TimeTableCellBase);

const DayScaleCellBase = ({ classes, ...restProps }) => {
  const { startDate, today } = restProps;
  if (today) {
    return <WeekView.DayScaleCell {...restProps} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...restProps} className={classes.weekend} />;
  } return <WeekView.DayScaleCell {...restProps} />;
};

const DayScaleCell = withStyles(style, { name: 'DayScaleCell' })(DayScaleCellBase);

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
        <NotesIcon className={classes.icon} />
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
  <AppointmentTooltip.CommandButton {...restProps} style={{backgroundColor: '#FB7060'}} className={classes.commandButton} />
));

class Calendar extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      shadePreviousCells: true,
      shadePreviousAppointments: true,
      updateInterval: 10000
    };
    this.handleUpdateIntervalChange = (nextValue) => {
      this.setState({
        updateInterval: nextValue * 1000
      });
    };
  }
  render(){
    const shownEvents = this.props.data.filter(appointment => this.props.checked.indexOf(appointment.group) !== -1);
    const {shadePreviousCells,updateInterval,shadePreviousAppointments} = this.state;
    return(
      <Paper>
        <Scheduler data={shownEvents} height={900}>
          <ViewState currentDate={this.props.date} currentViewName={this.props.view}/>
          <EditingState onCommitChanges={this.props.commitChanges}/
          <IntegratedEditing />
          <DayView startDayHour={7} endDayHour={20}/>
          <WeekView startDayHour={7} endDayHour={20} timeTableCellComponent={TimeTableCell} dayScaleCellComponent={DayScaleCell}/>
          <MonthView startDayHour={7} endDayHour={20}/>
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showDeleteButton
            showOpenButton
            contentComponent={Content}
            commandButtonComponent={CommandButton}
            showCloseButton
          />
          <AppointmentForm />
          <DragDropProvider />
          <CurrentTimeIndicator
              shadePreviousCells={shadePreviousCells}
              shadePreviousAppointments={shadePreviousAppointments}
              updateInterval={updateInterval}
            />
          <Resources
          data={this.props.resources}
        />
        </Scheduler>
      </Paper>
    );
  }
}
export default Calendar;
