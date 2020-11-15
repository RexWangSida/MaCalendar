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

class TabPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, checked: true, T2020: false, T2021: false, Class4HC3: false, Class4G06A: false, career: false, service: false };
    }

    render() {

        const handleTab = (event, newValue) => {
            this.setState({ value: newValue });
        };

        const handleT2020 = (event) => {
            this.setState({ checked: event.target.checked });
            this.setState({ T2020: !this.state.T2020 });
        };

        const handleT2021 = (event) => {
            this.setState({ checked: event.target.checked });
            this.setState({ T2021: !this.state.T2021 });
        };

        const handleClass4HC3 = (event) => {
            this.setState({ checked: event.target.checked });
            this.setState({ Class4HC3: !this.state.Class4HC3 });
        };

        const handleClass4G06A = (event) => {
            this.setState({ checked: event.target.checked });
            this.setState({ Class4G06A: !this.state.Class4G06A });
        };

        const handleCareer = (event) => {
            this.setState({ checked: event.target.checked });
            this.setState({ career: !this.state.career });
        };

        const handleService = (event) => {
            this.setState({ checked: event.target.checked });
            this.setState({ service: !this.state.service });
        };

        var selectedClasses = <FormGroup row><span>Please select a term.</span></FormGroup>;

        if (this.state.T2020 && !this.state.T2021) {
            selectedClasses = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.Lec4E03Checked} name="4E03" color="primary" />} label="4E03" />
                <FormControlLabel control={<Checkbox onChange={this.props.Lec4G06Checked} name="4G06A" color="primary" />} label="4G06A" />
            </FormGroup>;
        }
        if (this.state.T2021 && !this.state.T2020) {
            selectedClasses = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.Lec4X03Checked} name="4X03" color="primary" />} label="4X03" />
            </FormGroup>;
        }
        if (this.state.T2021 && this.state.T2020) {
            selectedClasses = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.Lec4E03Checked} name="4E03" color="primary" />} label="4E03" />
                <FormControlLabel control={<Checkbox onChange={this.props.Lec4G06Checked} name="4G06A" color="primary" />} label="4G06A" />
                <FormControlLabel control={<Checkbox onChange={this.props.Lec4X03Checked} name="4X03" color="primary" />} label="4X03" />
            </FormGroup>;
        }

        var selectedTasks = <FormGroup row><span>Please select a course.</span></FormGroup>;

        if (this.state.Class4HC3 && !this.state.Class4G06A) {
            selectedTasks = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.Ass1Checked} name="Assignment 1" color="primary" />} label="Assignment 1" />
                <FormControlLabel control={<Checkbox onChange={this.props.Ass2Checked} name="Assignment 2" color="primary" />} label="Assignment 2" />
            </FormGroup>
        }
        if (this.state.Class4G06A && !this.state.Class4HC3) {
            selectedTasks = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.Ms1Checked} name="Milestone 1" color="primary" />} label="Milestone 1" />
                <FormControlLabel control={<Checkbox onChange={this.props.Ms2Checked} name="Milestone 2" color="primary" />} label="Milestone 2" />
            </FormGroup>;
        }
        if (this.state.Class4HC3 && this.state.Class4G06A) {
            selectedTasks = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.Ass1Checked} name="Assignment 1" color="primary" />} label="Assignment 1" />
                <FormControlLabel control={<Checkbox onChange={this.props.Ass2Checked} name="Assignment 2" color="primary" />} label="Assignment 2" />
                <FormControlLabel control={<Checkbox onChange={this.props.Ms1Checked} name="Milestone 1" color="primary" />} label="Milestone 1" />
                <FormControlLabel control={<Checkbox onChange={this.props.Ms2Checked} name="Milestone 2" color="primary" />} label="Milestone 2" />
            </FormGroup>;
        }

        var selectedEvents = <FormGroup row><span>Please select a category.</span></FormGroup>;

        if (this.state.career && !this.state.service) {
            selectedEvents = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.CoopChecked} name="Co-op Interview" color="primary" />} label="Co-op Interview" />
                <FormControlLabel control={<Checkbox onChange={this.props.ResumeChecked} name="Resume and Cover Letter Writing" color="primary" />} label="Resume Cover Letter Writing" />
            </FormGroup>
        }
        if (this.state.service && !this.state.career) {
            selectedEvents = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.HelpChecked} name="COVID-19 Help" color="primary" />} label="COVID-19 Help" />
            </FormGroup>;
        }
        if (this.state.career && this.state.service) {
            selectedEvents = <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={this.props.CoopChecked} name="Co-op Interview" color="primary" />} label="Co-op Interview" />
                <FormControlLabel control={<Checkbox onChange={this.props.ResumeChecked} name="Resume and Cover Letter Writing" color="primary" />} label="Resume Cover Letter Writing" />
                <FormControlLabel control={<Checkbox onChange={this.props.HelpChecked} name="COVID-19 Help" color="primary" />} label="COVID-19 Help" />
            </FormGroup>;
        }

        return (
            <div>
                <Tabs value={this.state.value} onChange={handleTab} aria-label="simple tabs example">
                    <Tab icon={<img src={MosaicLogo}></img>} {...a11yProps(0)} />
                    <Tab icon={<img src={AvenueLogo}></img>} {...a11yProps(1)} />
                    <Tab icon={<img src={OscarLogo}></img>} {...a11yProps(2)} />
                </Tabs>
                <Panel value={this.state.value} index={0}>
                    <Accordion  >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography >Select Terms</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup row>
                                <FormControlLabel control={<Checkbox onChange={handleT2020} name="2020 Fall" color="primary" />} label="2020 Fall" />
                                <FormControlLabel control={<Checkbox onChange={handleT2021} name="2021 Winter" color="primary" />} label="2021 Winter" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                            <Typography >Select Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {selectedClasses}
                        </AccordionDetails>
                    </Accordion>
                </Panel>
                <Panel value={this.state.value} index={1}>
                    <Accordion  >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography >Select Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup row>
                                <FormControlLabel control={<Checkbox onChange={handleClass4HC3} name="4HC3" color="primary" />} label="4HC3" />
                                <FormControlLabel control={<Checkbox onChange={handleClass4G06A} name="4G06A" color="primary" />} label="4G06A" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                            <Typography >Select Tasks</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {selectedTasks}
                        </AccordionDetails>
                    </Accordion>
                </Panel>
                <Panel value={this.state.value} index={2}>
                    <Accordion >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography >Select Categories</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup row>
                                <FormControlLabel control={<Checkbox onChange={handleCareer} name="Careers" color="primary" />} label="Careers" />
                                <FormControlLabel control={<Checkbox onChange={handleService} name="Student Services" color="primary" />} label="Student Services" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                            <Typography >Select Events</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {selectedEvents}
                        </AccordionDetails>
                    </Accordion>
                </Panel>
            </div>
        );
    }
}

function Panel(props) {

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
                    {children}
                </Box>
            )}
        </div>
    );
}

Panel.propTypes = {
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

export default TabPanel;
