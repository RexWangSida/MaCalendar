import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup'
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
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function InportClassses(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} edge="end" color="inherit"><SaveAltIcon /></IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Import events from other sources</DialogTitle>
                <DialogContent>
                    <DialogContentText>You can import all your courses, tasks, and events from McMaster's websites</DialogContentText>
                    <List>
                        <ListItem >
                            <ListItemText primary="You are signed in as" />
                            <ListItemIcon> <AccountCircleIcon /> </ListItemIcon>
                            <ListItemText primary="caoh8@mcmaster.ca" />
                        </ListItem>
                        <Divider />
                    </List>
                    <TabPanel />
                </DialogContent>
                <DialogActions>
                    <Button color="primary">Import</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleTab = (event, newValue) => {
        setValue(newValue);
    };

    const [checked, setChecked] = React.useState(true);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    const [expanded1, expanded2, setExpanded] = React.useState([true, false, true]);

    const handleAccordin = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleTab} aria-label="simple tabs example">
                <Tab label={<><ExpandMoreIcon fontSize="inherit" /> Mosaic</>} {...a11yProps(0)} />
                <Tab label={<><ExpandMoreIcon fontSize="inherit" /> Avenue</>} {...a11yProps(1)} />
                <Tab label={<><ExpandMoreIcon fontSize="inherit" /> OscarPlus</>} {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Accordion expanded={expanded1} onChange={handleAccordin('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography >Select Terms</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="2020 Fall" color="primary" />} label="2020 Fall" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="2021 Winter" color="primary" />} label="2021 Winter" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded2} onChange={handleAccordin('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                        <Typography >Select Courses</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="4HC3" color="primary" />} label="4HC3" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="4A03" color="primary" />} label="4A03" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="4G06" color="primary" />} label="4G06" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Accordion expanded={expanded1} onChange={handleAccordin('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography >Select Courses</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="4HC3" color="primary" />} label="4HC3" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="4A03" color="primary" />} label="4A03" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="4G06" color="primary" />} label="4G06" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                        <Typography >Select Tasks</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="Assignment 3" color="primary" />} label="Assignment 3" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="Quizz 5" color="primary" />} label="Quizz 5" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="Final Exam" color="primary" />} label="Final Exam" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Accordion expanded={expanded2} onChange={handleAccordin('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography >Select Categories</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="Careers" color="primary" />} label="Careers" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="International Student Services" color="primary" />} label="International Student Services" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="Academic Skills" color="primary" />} label="Academic Skills" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                        <Typography >Select Events</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="Career Planning Group" color="primary" />} label="Career Planning Group" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="Experience Building" color="primary" />} label="Experience Building" />
                            <FormControlLabel control={<Checkbox onChange={handleCheck} name="Resume and Cover Letter Writing" color="primary" />} label="Resume Cover Letter Writing" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            </TabPanel>
        </div>
    );
}

export default InportClassses;