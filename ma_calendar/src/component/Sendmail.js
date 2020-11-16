import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Icon } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';

class Sendmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              email: "",
            };
          }
    handleChange = (e) => {
      this.setState({ email: e.target.value })
    };
render(){
  var format1="{title} {group} {startDate}-{endDate} {note}\n";
  const week = ["Sun ","Mon ","Tue ","Wed ","Thu ","Fri ","Sat "]
  var body = ""
  this.props.events.map((row)=>{
    const startDate = week[row.startDate.getDay()]+row.startDate.toTimeString().substring(0,5)
    const endDate = week[row.endDate.getDay()]+row.endDate.toTimeString().substring(0,5)
    body = body + `${row.title} ${row.group} ${startDate}-${endDate} ${row.note}%0D`
  })
  return (
    <div>
    <TextField
    autoFocus
    name = "email"
    type="email"
    id="filled-basic"
    label="Share via email"
    variant="filled"
    value = {this.state.email}
    onChange = {this.handleChange}
    />
    <Button value = "Send" variant="contained"
    href={`mailto:${this.state.email}?cc=&subject=From:MaCalendar&body=${body}`}
    color="primary" > Share </Button>

    </div>
  );
}
}




export default Sendmail;
