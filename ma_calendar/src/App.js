import './App.css';
import React from 'react'
import clsx from 'clsx';
import {fade,withStyles, createMuiTheme, ThemeProvider, MuiThemeProvider} from '@material-ui/core/styles';
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
import TextField from '@material-ui/core/TextField';
//Icon
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
//dependency
import Calendar from './component/Calendar'
import ImportClasses from './component/ImportClasses'
import Share from './component/Share';
import Theme from './component/Theme';
import Settings from './component/Settings';
import MenuDrawer from './component/MenuDrawer'
import TableCalendar from './component/TableCalendar'
//global const
const drawerWidth = 310;


const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

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
        search:false,
        open:true, //whether the drawer is open
        view:"Week", //the view of the datepicker and the Calendar
        checked:["4hc3","work","private","4te3"],//checkbox
        date:new Date(),//currentDate
        themeColor:'#fb7060',
        event:[
            {
              title: '4HC3 Lecture',
              startDate: new Date(2020, 8, 8, 11, 30),//month is zero-indexed
              endDate: new Date(2020, 8, 8, 12, 20),
              id: 0,
              location: 'Virtual',
              group:"4hc3",
              notes:"About UI",
              rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=16"
            }, {
              title: '4HC3 Lecture',
              startDate: new Date(2020, 8, 10, 11, 30),//month is zero-indexed
              endDate: new Date(2020, 8, 10, 12, 20),
              id: 1,
              location: 'Virtual',
              group:"4hc3",
              notes:"About UI",
              rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=16"
            }, {
              title: '4HC3 Lecture',
              startDate: new Date(2020, 8, 11, 11, 30),//month is zero-indexed
              endDate: new Date(2020, 8, 11, 12, 20),
              id: 2,
              location: 'Virtual',
              group:"4hc3",
              notes:"About UI",
              rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=16"
            },
            {
              title: '4TE3 Lecture',
              startDate: new Date(2020, 8 ,11, 8, 30),//month is zero-indexed
              endDate: new Date(2020, 8, 11, 11, 30),
              id: 3,
              location: 'Virtual',
              group:"4te3",
              notes:"About Optimization",
              rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=16"
            },
            {
              title: 'Do exercise',
              startDate: new Date(2020, 8, 11, 12, 35),//month is zero-indexed
              endDate: new Date(2020, 8, 11, 15, 35),
              id: 4,
              location: 'Gym',
              group:"private",
              notes:"Be better!!!"
            },
          ],
          resources:[{
            fieldName: 'group',
            instances: [
              { id: '4hc3', text: '4HC3', color: '#d00000' },
              { id: '4te3', text: '4TE3', color: '#7E57C2' },
              { id: 'private', text: 'PRIVATE', color: '#a8dadc' },
              { id: 'work', text: 'WORK', color: '#2a9d8f' },
            ],
          }],
          searchResult:[]
    };
    this.searchOption = [
      { title: '4hc3', type:"group"},
      { title: 'private', type:"group"},
      { title: '4te3', type:"group" },
      { title: 'work', type:"group" },
      { title: '4HC3 Lecture', type:"event" },
      { title: '4TE3 lecture', type: "event"},
      { title: 'Do exercise', type: "event"},
    ];
    this.handleToggle = this.handleToggle.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.commitChanges = this.commitChanges.bind(this);
    this.changeGroupColor = this.changeGroupColor.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.changeThemeColor = this.changeThemeColor.bind(this);
  }
  //handle search value changed
  handleSearch(event,value,reason){
    if(reason === "reset"){
      var tmp = []
      const events = this.state.event;
      for(var i = 0; i < events.length;i++){
        if(events[i].title === value || events[i].group === value){
          tmp = [...tmp,events[i]]
        }
      }
      console.log("tmp",tmp)
      this.setState({search:true,searchResult:tmp})
    }else if(reason === "clear"){
      this.setState({search:false})
    }
  }
  //handle the change to groups' color
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

  changeThemeColor(color){
    this.setState({
      themeColor: color
    })
  }
  //handle delet/edit/modify of events
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { event } = state;
      if (added) {
        if(this.state.resources[0].instances.filter((e)=>e.id===added.group).length === 0){
          console.log("Cannot find exist group matched new added event. Going to add a new group named: ",added.group)
          this.state.resources[0].instances = [...this.state.resources[0].instances,{id:added.group,text:added.group.toUpperCase(),color:this.state.themeColor}]
        }
        if(this.searchOption.filter((e)=>e.title===added.group).length === 0){
          console.log("Add the group of the new added event to the searchOption",added.group)
          this.searchOption = [...this.searchOption,{title:added.group,type:"group"}]
        }
        if(this.searchOption.filter((e)=>e.title===added.title).length === 0){
          console.log("Add the new added event to the searchOption",added.title)
          this.searchOption = [...this.searchOption,{title:added.title,type:"event"}]
        }
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
    var mainDisplay = <Calendar checked={this.state.checked} style={{padding:"30px"}} data={this.state.event} commitChanges={this.commitChanges} date={this.state.date} view={this.state.view} resources={this.state.resources}/>
    if(this.state.view === "Table"){
      mainDisplay = <TableCalendar checked={this.state.checked} events={this.state.event} themeColor={'#e9ecef'} headFontColor={"black"}/>
    }
    if(this.state.search === true){
      console.log("search sth")
      mainDisplay = <TableCalendar checked={this.state.checked} events={this.state.searchResult} themeColor={this.state.themeColor} headFontColor={"white"}/>
    }
    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* The appBar(Nav)*/}
        <AppBar position="fixed" style = {{backgroundColor: this.state.themeColor}} className={clsx(classes.appBar, {[classes.appBarShift]: this.state.open,})}>
          <Toolbar>
            <MenuDrawer changeGroupColor={this.changeGroupColor} handleToggle={this.handleToggle} groups={this.state.resources[0].instances} open={this.state.open} handleOpen={handleDrawerOpen.bind(this)} handleClose={handleDrawerClose.bind(this)} date={this.state.date} changeDate={this.changeDate} checked={this.state.checked}/>
            <Typography className={classes.title} variant="h6" noWrap>MaCalendar</Typography>
            {/* Selection of View*/}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="select-view">View</InputLabel>

              <Select labelId="select-view" value={this.state.view} onChange={handleChange} label="View">
                <MenuItem value={"Day"}>DAY</MenuItem>
                <MenuItem value={"Week"}>WEEK</MenuItem>
                <MenuItem value={"Month"}>MONTH</MenuItem>
                <MenuItem value={"Table"}>TABLE</MenuItem>
              </Select>
            </FormControl>
            {/* The searchBar with Autocomplete*/}
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Autocomplete
                  id="searchBar"
                  onInputChange={(event,value,reason)=>this.handleSearch(event,value,reason)}
                  selectOnFocus
                  clearOnEscape
                  options={this.searchOption.map((option) => option.title)}
                  renderInput={(params) => (<TextField {...params} style={{width:"200px",height:"35px",padding:"10px",margin:"0px 0px 5px 40px"}} margin="normal" />)}
                />
            </div>
            <ImportClasses commitChanges={this.commitChanges}/>
            <Share event= {this.state.event}/>
            <Theme color={this.state.themeColor} changeThemeColor={this.changeThemeColor}/>
            <Settings/>
            <IconButton aria-label="display more actions" edge="end" color="inherit"><AccountCircleIcon /></IconButton>

          </Toolbar>
        </AppBar>
        {/* The main content block*/}
        <main className={clsx(classes.content, {[classes.contentShift]: this.state.open,})}>
          <div className={classes.drawerHeader} />
            {mainDisplay}
        </main>
      </div>
    )};
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App)
