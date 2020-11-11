import './App.css';
import React from 'react'
import clsx from 'clsx';
import {fade,withStyles} from '@material-ui/core/styles';
//components
import Autocomplete from '@material-ui/lab/Autocomplete';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//Icon
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
//dependency
import Calendar from './component/Calendar'
import Share from './component/Share'
import Settings from './component/Settings';


import MenuDrawer from './component/MenuDrawer'
//global const
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
  content: {
    paddingTop: "22px",
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop:"60px"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open:false, //whether the drawer is open
        view:"Week", //the view of the datepicker and the Calendar
        checked:["private","work"],//checkbox
        date:new Date(),//currentDate
        themeColor:"#3f51b5",
        events:[],
        event:[
            {
              title: 'Website Re-Design Plan',
              startDate: new Date(2020, 10, 11, 9, 35),//month is zero-indexed
              endDate: new Date(2020, 10, 11, 10, 35),
              id: 0,
              location: 'Room 1',
              group:"work",
              notes:"lalalalalal",
              rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=30"
            }, {
              title: 'Book Flights to San Fran for Sales Trip',
              startDate: new Date(2020, 10, 12, 9, 35),//month is zero-indexed
              endDate: new Date(2020, 10, 12, 10, 35),
              id: 1,
              location: 'Room 1',
              group:"private",
              notes:"lalalalalal"
            }, {
              title: 'Install New Router in Dev Room',
              startDate: new Date(2020, 10, 11, 12, 35),//month is zero-indexed
              endDate: new Date(2020, 10, 11, 15, 35),
              id: 2,
              location: 'Room 2',
              group:"private",
              notes:"lalalalalal"
            },
          ],
          resources:[{
            fieldName: 'group',
            instances: [
              { id: 'private', text: 'Private', color: '#EC407A' },
              { id: 'work', text: 'Work', color: '#7E57C2' },
            ],
          }],
    };
    this.searchOption = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Dark Knight', year: 2008 },
    ];
    this.handleToggle = this.handleToggle.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.commitChanges = this.commitChanges.bind(this);
    this.changeGroupColor = this.changeGroupColor.bind(this);
  }
  changeGroupColor(id,text,color){
    const instances = this.state.resources[0].instances
    for(var i=0;i<instances.length;i++){
      if(instances[i].id === id)instances[i].color=color;
    }
    this.setState({
      resources:[{
        fieldName: 'group',
        instances: instances
      }]
    })
  }
  //handle delet/edit/modify of events
  commitChanges({ added, changed, deleted }) {
    console.log(changed)
    this.setState((state) => {
      let { event } = state;
      if (added) {
        const startingAddedId = event.length > 0 ? event[event.length - 1].id + 1 : 0;
        event = [...event, { id: startingAddedId, ...added }];
      }
      if (changed) {
        event = event.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        event = event.filter(appointment => appointment.id !== deleted);
      }
      return { event };
    });
  }
  //add new events
  addEvent(title,startDate,endDate,description,alarm,group="default",period="none"){

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

    const handleChange = (event) => {this.setState({view:event.target.value});};
    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* The appBar(Nav)*/}
        <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: this.state.open,})}>
          <Toolbar>
            <MenuDrawer changeGroupColor={this.changeGroupColor} handleToggle={this.handleToggle} groups={this.state.resources[0].instances} open={this.state.open} handleOpen={handleDrawerOpen.bind(this)} handleClose={handleDrawerClose.bind(this)} date={this.state.date} changeDate={this.changeDate} checked={this.state.checked}/>
            <Typography className={classes.title} variant="h6" noWrap>MaCalendar</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="select-view">View</InputLabel>
              <Select labelId="select-view" value={this.state.view} onChange={handleChange} label="View">
                <MenuItem value={"Day"}>DAY</MenuItem>
                <MenuItem value={"Week"}>WEEK</MenuItem>
                <MenuItem value={"Month"}>MONTH</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Autocomplete
                  id="searchBar"
                  freeSolo
                  options={this.searchOption.map((option) => option.title)}
                  renderInput={(params) => (
                      <InputBase
                        inputProps={{ 'aria-label': 'search' }}
                        placeholder="Search…"
                        ref={params.InputProps.ref}
                        inputProps={params.inputProps}
                        autoFocus
                        className={classes.inputBase}
                        classes={{root: classes.inputRoot,input: classes.inputInput,}}
                      />)}
                />
            </div>
            <Share/>
            <IconButton aria-label="display more actions" edge="end" color="inherit"><MoreIcon /></IconButton>
            <Settings/>
            <IconButton aria-label="display more actions" edge="end" color="inherit"><AccountCircleIcon /></IconButton>

          </Toolbar>
        </AppBar>
        {/* The main content block*/}
        <main className={clsx(classes.content, {[classes.contentShift]: this.state.open,})}>
          <div className={classes.drawerHeader} />
          <Calendar checked={this.state.checked} style={{padding:"30px"}} data={this.state.event} commitChanges={this.commitChanges} date={this.state.date} view={this.state.view} resources={this.state.resources}/>
        </main>
      </div>
    )};
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App)
