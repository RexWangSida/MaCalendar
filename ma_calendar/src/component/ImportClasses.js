import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

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

import SaveAltIcon from '@material-ui/icons/SaveAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TabPanel from './TabPanel'

function InportClassses() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleImport = (event) => {
        // setState here
    }
    return (
        <div>
            <IconButton onClick={handleClickOpen} edge="end" color="inherit"><SaveAltIcon /></IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Import events from other sources</DialogTitle>
                <DialogContent>
                    <DialogContentText>You can import all your courses, tasks, and/or events from McMaster's websites</DialogContentText>
                    <List>
                        <ListItem >
                            <ListItemText primary="You are signed in as:" />
                            <ListItemIcon> <AccountCircleIcon /> </ListItemIcon>
                            <ListItemText primary="caoh8@mcmaster.ca" />
                        </ListItem>
                    </List>
                    <TabPanel />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleImport}>Import</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default InportClassses;