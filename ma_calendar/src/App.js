import './App.css';
import React from 'react'
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import {fade,withStyles} from '@material-ui/core/styles';
import { DatePicker,MuiPickersUtilsProvider} from "@material-ui/pickers";
//components
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import { ColorPicker } from 'material-ui-color';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//Icon
import MoreIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
//dependency
import Calendar from './component/Calendar'
import DayPicker from './component/DayPicker'

const drawerWidth = 310;
const styles = (theme) => ({
  root: {
    display: 'flex',
    flexGrow:1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },
  appBarShift: {
    width: `100%`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:"64px",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    float:"right",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin:"auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 200,
  },
  listRoot:{
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open:true, //whether the drawer is open
        view:"day", //the view of the datepicker and the Calendar
        eventList:[["exercises","2020-09-10 19:50", "60","description",true]],
        classList:{
          "4HC3":[["lecture",]]
        },
        checked:[0,1],//checkbox
        date:new Date(),//currentDate
        themeColor:"blue"
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }
  //add new events
  addEvent(startDate,endDate,title,type){

  }
  // Handle the states of checkbox
  handleToggle(value){
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(newChecked)
    this.setState({checked:newChecked})
  };
  // change the date for display
  changeDate(date) {
    this.setState({
      date: date
    })
  }
  render(){
    const { classes, theme} = this.props;
    const handleDrawerOpen = () => { this.setState({ open: true })};
    const handleDrawerClose = () => {this.setState({ open: false })};

    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* The appBar(Nav)*/}
        <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: this.state.open,})}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, this.state.open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>MaCalendar</Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search…" classes={{root: classes.inputRoot,input: classes.inputInput,}}inputProps={{ 'aria-label': 'search' }}/>
            </div>
            <IconButton aria-label="display more actions" edge="end" color="inherit"><ShareIcon /></IconButton>
            <IconButton aria-label="display more actions" edge="end" color="inherit"><MoreIcon /></IconButton>
            <IconButton aria-label="display more actions" edge="end" color="inherit"><AccountCircleIcon /></IconButton>
          </Toolbar>
        </AppBar>
        {/* The dawer*/}
        <Drawer className={classes.drawer} variant="persistent" anchor="left" open={this.state.open}classes={{paper: classes.drawerPaper,}}>
          <div className={classes.drawerHeader} style={{minHeight:"55px"}}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DayPicker date={this.state.date} changeDate={this.changeDate}/>
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
                    <Checkbox edge="end" onChange={()=>this.handleToggle(value)} checked={this.state.checked.indexOf(value) !== -1} inputProps={{ 'aria-labelledby': labelId }}/>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        {/* The main content block*/}
        <main className={clsx(classes.content, {[classes.contentShift]: this.state.open,})}>
          <div className={classes.drawerHeader} />
          <Calendar />
        </main>
      </div>
    )};
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App)
