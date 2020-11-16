import React from 'react';
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
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
import { SketchPicker,CirclePicker} from 'react-color';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { DatePicker,MuiPickersUtilsProvider} from "@material-ui/pickers";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DayPicker from './DayPicker';
import ColorPicker from './ColorPicker';
import { createMuiTheme } from '@material-ui/core';
import customTheme from "../App"

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
          <Drawer className={classes.drawer} variant="persistent" anchor="left" open={props.open} classes={{paper: classes.drawerPaper,}}>
            <div className={classes.drawerHeader} style={{minHeight:"55px"}}>
              <Button style={{marginRight:"180px",color:props.color}} onClick={()=>props.changeDate(new Date())}>Today</Button>
              <IconButton onClick={props.handleClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <MuiThemeProvider theme={customTheme}>
            <MuiPickersUtilsProvider style={{fontColor:'white'}} utils={DateFnsUtils}>
              <DayPicker date={props.date} changeDate={props.changeDate}/>
            </MuiPickersUtilsProvider>
            </MuiThemeProvider>
            <Divider />
            <List dense className={classes.listRoot}>
              {props.groups.map((group) => {
                const labelId = `checkbox-list-secondary-label-${group.id}`;
                return (
                  <ListItem key={group.id} button>
                    <ColorPicker color={group.color} changeGroupColor={(color)=>props.changeGroupColor(group.id,group.text,color)}/>
                    <ListItemText id={labelId} primary={group.text} />
                    <ListItemSecondaryAction>
                      <Checkbox edge="end" onChange={()=>props.handleToggle(group.id)} checked={props.checked.indexOf(group.id) !== -1} inputProps={{ 'aria-labelledby': labelId }}/>
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
