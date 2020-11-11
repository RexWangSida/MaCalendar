import React from 'react';
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { ColorPicker } from 'material-ui-color';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { DatePicker,MuiPickersUtilsProvider} from "@material-ui/pickers";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DayPicker from './DayPicker'

const drawerWidth = 310;
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width:"52px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:"72px",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  listRoot:{
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MenuDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
        <React.Fragment key={"left"}>
          <IconButton color="inherit" aria-label="open drawer" onClick={props.handleOpen} edge="start" className={clsx(classes.menuButton, props.open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          {/* The dawer*/}
          <Drawer className={classes.drawer} variant="persistent" anchor="left" open={props.open}classes={{paper: classes.drawerPaper,}}>
            <div className={classes.drawerHeader} style={{minHeight:"55px"}}>
              <IconButton onClick={props.handleClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DayPicker date={props.date} changeDate={props.changeDate}/>
            </MuiPickersUtilsProvider>
            <Divider />
            <List dense className={classes.listRoot}>
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem key={value} button>
                    <ColorPicker defaultValue="red" hideTextfield/>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    <ListItemSecondaryAction>
                      <Checkbox edge="end" onChange={()=>this.handleToggle(value)} checked={props.checked.indexOf(value) !== -1} inputProps={{ 'aria-labelledby': labelId }}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </React.Fragment>
    </div>
  );
}
