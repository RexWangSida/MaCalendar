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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MosaicLogo from './img/mosaic_logo.jpg';
import AvenueLogo from './img/avenue_logo.jpg';
import OscarLogo from './img/oscar_logo.png';

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

    const CourseChecked = (event) => {
        setChecked(event.target.checked);
        //setState here
    }

    const TaskChecked = (event) => {
        setChecked(event.target.checked);
        //setState here
    }

    const EventChecked = (event) => {
        setChecked(event.target.checked);
        //setState here
    }


return (
    <div className={classes.root}>
        <Tabs value={value} onChange={handleTab} aria-label="simple tabs example">
            <Tab icon={<img src={MosaicLogo}></img>} {...a11yProps(0)} />
            <Tab icon={<img src={AvenueLogo}></img>} {...a11yProps(1)} />
            <Tab icon={<img src={OscarLogo}></img>} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            <Accordion  >
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
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                    <Typography >Select Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox onChange={CourseChecked} name="4HC3" color="primary" />} label="4HC3" />
                        <FormControlLabel control={<Checkbox onChange={handleCheck} name="4A03" color="primary" />} label="4A03" />
                        <FormControlLabel control={<Checkbox onChange={handleCheck} name="4G06" color="primary" />} label="4G06" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Accordion  >
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
                        <FormControlLabel control={<Checkbox onChange={handleCheck} name="Assignment 2" color="primary" />} label="Assignment 2" />
                        <FormControlLabel control={<Checkbox onChange={TaskChecked} name="Quizz 5" color="primary" />} label="Quizz 5" />
                        <FormControlLabel control={<Checkbox onChange={TaskChecked} name="Final Exam" color="primary" />} label="Final Exam" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography >Select Categories</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox onChange={handleCheck} name="Careers" color="primary" />} label="Careers" />
                        <FormControlLabel control={<Checkbox onChange={handleCheck} name="Student Services" color="primary" />} label="Student Services" />
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
                        <FormControlLabel control={<Checkbox onChange={EventChecked} name="Co-op Interview" color="primary" />} label="Co-op Interview" />
                        <FormControlLabel control={<Checkbox onChange={handleCheck} name="Experience Building" color="primary" />} label="Experience Building" />
                        <FormControlLabel control={<Checkbox onChange={handleCheck} name="Resume and Cover Letter Writing" color="primary" />} label="Resume Cover Letter Writing" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </TabPanel>
    </div>
);
}