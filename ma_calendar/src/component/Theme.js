import React, {useContext} from 'react';
import clsx from 'clsx';
import { makeStyles,createMuiTheme,withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TabPanel from './TabPanel'
import BrushIcon from '@material-ui/icons/Brush';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThemeColor from './ThemeColor';
import {CustomThemeContext} from "./CustomThemeProvider"
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';


function Theme(props,{classes}) {
  const [open, setOpen] = React.useState(false);
  const [checkedDay, setCheckedDay] = React.useState(false);
  const {currentTheme, setTheme } = useContext(CustomThemeContext)

  const toggleCheckedDay = () => {
    setCheckedDay((prev) => !prev);
    if(checkedDay){
      setTheme("normal")
    }
    else{
      setTheme("dark")
    }
  };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} edge="end" color="inherit"><BrushIcon /></IconButton>
            <Dialog contentStyle={{width: "200%", maxWidth: "none"}} open={open} onClose={handleClose}>
                <DialogTitle><BrushIcon />  Theme Setting(Click to modify)</DialogTitle>
                <DialogContent>
              <List>

      </List>
      <List>
          <ListItem >
          <ThemeColor color = {props.color} changeThemeColor ={(color)=>props.changeThemeColor(color)}/>
          </ListItem>
      </List>
      <List>
          <ListItem >
          <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          labelPlacement="Start"
          label={checkedDay ? "Night" : "Day"}
          onChange = {toggleCheckedDay}
        />
          </ListItem>    
      </List>
                </DialogContent>
            </Dialog>
        </div>
    );
}


export default Theme;