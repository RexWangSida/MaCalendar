import SettingsIcon from '@material-ui/icons/Settings';
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


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Settings() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >

      <List>
          <ListItem>
            <ListItemIcon><ShareIcon/></ListItemIcon>
            <ListItemText primary = {"Share with your frineds"}/>
          </ListItem>

      </List>
      <Divider />
      <List>
          <ListItem >
            <ListItemIcon><EmailIcon/></ListItemIcon>
            <TextField id="filled-basic" label="Share via email" variant="filled" />
          </ListItem>
      </List>
      <List>
          <ListItem >
            <ListItemText>Courses <Divider/></ListItemText>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem className = "">
              <IconButton><FacebookIcon/></IconButton>
              <IconButton><LinkedInIcon/></IconButton>
              <IconButton><InstagramIcon/></IconButton>
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} aria-label="display more actions" edge="end" color="inherit"><SettingsIcon /></IconButton>
          <Drawer anchor={'right'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}





export default Settings;
