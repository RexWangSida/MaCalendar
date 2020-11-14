'use strict'
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
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';
import MoreIcon from '@material-ui/icons/MoreVert';
import BrushIcon from '@material-ui/icons/Brush';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import reactCSS from 'reactcss'
import { SketchPicker, TwitterPicker} from 'react-color'
import ColorPicker from './ColorPicker'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



function Share() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    
  });
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };


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
            <ListItemIcon><BrushIcon/></ListItemIcon>
            <ListItemText primary = {"Theme"}/>
          </ListItem>

      </List>
      <Divider />
      <List>
          <ListItem >
          <ColorPicker/>
          </ListItem>
      </List>
      <List>
          <ListItem >
          <ColorPicker/>
          </ListItem>
      </List>
      <List>
          <ListItem >
          <FormControlLabel
        control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
        label="Small"/>
          </ListItem>
      </List>

      <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label="Normal"
      />
    </div>
  );
  return (

    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
        <Tooltip title="Theme"><IconButton onClick={toggleDrawer(anchor, true)} aria-label="display more actions" edge="end" color="inherit"><MoreIcon /></IconButton></Tooltip>
          <Drawer anchor={'top'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}





export default Share;
